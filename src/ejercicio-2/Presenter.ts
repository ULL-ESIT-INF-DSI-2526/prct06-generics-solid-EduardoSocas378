export interface Presenter <T> {
  show(data: T[]): void;
}

export class ConsoleTablePresenter<T> implements Presenter<T> {
  show(data: T[]): void{
    console.table(data);
  }
}