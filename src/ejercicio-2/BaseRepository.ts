import { Repository } from "./Repository";

export abstract class BaseRepository<T extends { id: K }, K> implements Repository<T, K> {
  protected items: T[] = [];
  
  add(item: T): void {
    this.items.push(item);
  }

  remove(id: K): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  getById(id: K): T | undefined {
    return this.items.find(item => item.id === id);
  }

  getAll(): T[] {
    return this.items;
  }
}