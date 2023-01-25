import {inject, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginService} from "./login.service";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {AdminDetailsComponent} from "./admin-details/admin-details.component";

const routes: Routes = [
  {
    path: 'user',
    canMatch: [() => inject(LoginService).isAdmin()],
    component: AdminDetailsComponent
  },
  {
    path: 'user',
    canMatch: [() => inject(LoginService).isLoggedIn()],
    component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
