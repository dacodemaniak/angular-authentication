export interface IStorageStrategy<T> {
    store(data: any): void;
    remove(): void;
    get(): T | null;
}
