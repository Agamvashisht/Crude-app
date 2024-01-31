import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudeModule } from './crude/crude.module';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
