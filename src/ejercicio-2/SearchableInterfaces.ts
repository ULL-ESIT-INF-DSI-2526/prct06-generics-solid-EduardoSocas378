export interface SearchableByName<T> { searchByName(name: string): T[];}
export interface SearchableByTags<T> { searchByTags(tags: string[]): T[];}
export interface SearchableByYearRange<T> { searchByYearRange(start: number, end?: number): T[];}
export interface SearchableByFollowers<T> { searchByFollowers(min: number): T[];}
export interface SearchableByOptional<T> { searchByOptional(opcional: boolean): T[];}
