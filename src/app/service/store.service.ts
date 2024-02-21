import { Injectable, WritableSignal, signal, computed, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  bool = signal(false);

  constructor() { }

  store() {
    // return this.bool.update(b => !b)
    // return computed(() => !this.bool());
    this.bool.update(b => !b)
  }
}
