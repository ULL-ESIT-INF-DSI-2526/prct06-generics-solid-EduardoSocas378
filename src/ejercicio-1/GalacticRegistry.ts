export interface GalacticRegistry<T> {
    add(item: T): void;
    remove(item: T): void;
    getAll(): T[];
}