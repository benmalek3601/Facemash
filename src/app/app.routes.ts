import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/list-cats/list-cats.component')
    .then(mod => mod.ListCatsComponent) },
  { path: 'vote', loadComponent: () => import('./components/vote-cats/vote-cats.component')
    .then(mod => mod.VoteCatsComponent) },
];
