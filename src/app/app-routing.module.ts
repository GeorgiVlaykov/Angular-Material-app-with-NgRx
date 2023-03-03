import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route, UrlSegment } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';

import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';

const canMatchTraining: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return inject(AuthGuard).canMatch();
};

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'training',
    canMatch: [canMatchTraining],
    loadChildren: () =>
      import('./training/training.module').then((m) => m.TrainingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
