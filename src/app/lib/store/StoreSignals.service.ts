import {
  type Signal,
  type WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { AbstractStoreService } from './AbstractStore.service';

export class SignalsStoreService<T> extends AbstractStoreService<
  T,
  Signal<T[keyof T]>
> {
  public state: WritableSignal<T>;

  constructor(initialValue: T) {
    super();
    this.state = signal(initialValue);
  }

  /**
   * Devuelve un valor reactivo para una propiedad en el estado.
   * Esto se utiliza cuando el consumidor necesita la señal para
   * parte específica del estado.
   *
   * @param key - la clave de la propiedad a recuperar
   */
  public select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => this.state()[key]);
  }

  /**
     * Esto se utiliza para establecer un nuevo valor para una solo propiedad del estado.

     *
     * @param key  - la clave de la propiedad que se va a establecer
     * @param data - los nuevos datos a guardar
     */
  public set<K extends keyof T>(key: K, data: T[K]): void {
    this.state.update((currentValue) => ({ ...currentValue, [key]: data }));
  }

  /**
   * Esto se utiliza para actualizar multiples propiedades del estado
   *
   * @param partialState - el estado parcial que incluye el nuevo valor a guardar
   */
  public setState(partialState: Partial<T>): void {
    this.state.update((currentValue) => ({ ...currentValue, ...partialState }));
  }
}
