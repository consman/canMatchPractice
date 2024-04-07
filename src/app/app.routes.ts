import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import {LoginService} from "./login.service";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {AdminDetailsComponent} from "./admin-details/admin-details.component";

export const routes: Routes = [    
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
