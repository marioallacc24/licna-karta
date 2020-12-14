import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import {HomeComponent} from './components/home/home.component'
import {ReadIdsComponent} from './components/read-ids/read-ids.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'readIds', component: ReadIdsComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
