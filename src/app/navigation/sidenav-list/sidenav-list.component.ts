import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth$: Observable<boolean>;

  constructor(private authService: AuthService, private store: Store) {}

  ngOnInit(): void {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onClose();
    this.authService.logout();
  }
}
