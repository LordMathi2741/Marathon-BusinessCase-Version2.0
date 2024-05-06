import { Routes } from '@angular/router';
import {TheHomePageComponent} from "./public/pages/the-home-page/the-home-page.component";
import {TheNotfoundPageComponent} from "./public/pages/the-notfound-page/the-notfound-page.component";
import {TheWinnersPageComponent} from "./marathon/pages/the-winners-page/the-winners-page.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',component:TheHomePageComponent },
  {path:'marathon/records',component:TheWinnersPageComponent},
  { path: '**', component:TheNotfoundPageComponent}

];
