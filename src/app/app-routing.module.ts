import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from './pictures/pictures.component';

const routes: Routes = [
  {
    path: '',
    component: PicturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
