import { Injectable } from '@angular/core';
import type { ToastModel, ToastProps } from '@app/models/toast.model';
import { ToastType, ToastPosition } from '@app/models/toast.model';
import { SignalsStoreService } from '../store/StoreSignals.service';
import { delay, of, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToastService extends SignalsStoreService<ToastProps> {
  constructor() {
    super({} as ToastProps);
  }

  public remove(ID: string | number): void {
    this.state.update((currentValue) => {
      currentValue.toasts = currentValue.toasts.filter(
        (val: ToastModel) => val.ID !== ID,
      );
      return currentValue;
    });
  }

  private removeFirst(): void {
    this.state.update((currentValue) => {
      currentValue.toasts.shift();
      return currentValue;
    });
  }

  private show(
    title: string,
    message: string,
    seconds: number,
    type: ToastType,
    position: ToastPosition,
  ): void {
    if (!seconds || seconds <= 0) seconds = 5;

    const toastModel: ToastModel = {
      ID: crypto.randomUUID(),
      title: title,
      message: message,
      visible: true,
      type: type,
      seconds: seconds,
    };
    let toasts = this.select('toasts')();
    if (!toasts) toasts = [];
    if (toasts.length >= 6) this.removeFirst();

    toasts.push(toastModel);
    this.set('position', position);
    this.set('toasts', toasts);

    const autoClose = seconds * 1000;

    of(null)
      .pipe(take(1), delay(autoClose))
      .subscribe(() => {
        this.remove(toastModel.ID);
      });
  }

  public info(
    title: string,
    message: string,
    seconds = 100,
    position: ToastPosition = ToastPosition.TOP_RIGHT,
  ): void {
    this.show(title, message, seconds, ToastType.INFO, position);
  }

  public success(
    title: string,
    message: string,
    seconds = 100,
    position: ToastPosition = ToastPosition.TOP_RIGHT,
  ): void {
    this.show(title, message, seconds, ToastType.SUCCESS, position);
  }

  public waring(
    title: string,
    message: string,
    seconds = 100,
    position: ToastPosition = ToastPosition.TOP_RIGHT,
  ): void {
    this.show(title, message, seconds, ToastType.WARNING, position);
  }

  public error(
    title: string,
    message: string,
    seconds = 100,
    position: ToastPosition = ToastPosition.TOP_RIGHT,
  ): void {
    this.show(title, message, seconds, ToastType.ERROR, position);
  }
}
