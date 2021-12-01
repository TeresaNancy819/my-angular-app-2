import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UsersListComponent } from './users-list/users-list.component';




@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    UsersListComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    SignInComponent,
    UsersListComponent,
  ] 
})
export class UsersModule { }
