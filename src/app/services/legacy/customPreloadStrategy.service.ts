import { Injectable } from '@angular/core';
import { PreloadingStrategy, type Route } from '@angular/router';
import { type Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadStrategyService extends PreloadingStrategy {
  constructor() {
    super();
  }
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    return route.data?.['preload'] === true ? load() : of(null);
  }
}
