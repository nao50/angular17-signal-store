import { Routes } from '@angular/router';
import { AaaComponent } from './aaa/aaa.component';
import { BbbComponent } from './bbb/bbb.component';

export const routes: Routes = [
  {
    path: 'aaa',
    component: AaaComponent
  },
  {
    path: 'bbb',
    component: BbbComponent
  },
  {
    path: '**',
    redirectTo: 'aaa',
  },
];
