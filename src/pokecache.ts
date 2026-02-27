export type CacheEntry<T> = {
  createdAt: number;
  val: T;
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(num: number) {
    this.#interval = num;
    this.#startReapLoop();
  }

  add<T>(key: string, val: T) {
    const newEntry: CacheEntry<T> = {
      createdAt: Date.now(),
      val
    }

    this.#cache.set(key, newEntry);
  }

  get<T>(key: string) {
    const entry = this.#cache.get(key);

    if (!entry) return undefined;
    if (entry.createdAt < Date.now() - this.#interval) {
      this.#cache.delete(key);
      return undefined;
    }

    return entry.val as T;
  }

  #reap() {
    for (const [key, value] of this.#cache){
      if (value.createdAt < Date.now() - this.#interval) {
        this.#cache.delete(key); //Clean all items in cache that are older than the interval
      }
    }
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => {
      this.#reap();
    }, this.#interval);
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }
}