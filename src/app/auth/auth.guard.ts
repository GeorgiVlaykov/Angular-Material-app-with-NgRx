import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private store: Store<fromRoot.State>) {}

  canMatch() {
    return this.store.select(fromRoot.getIsAuth);
  }
}
