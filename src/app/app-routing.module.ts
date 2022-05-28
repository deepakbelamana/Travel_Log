import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';

const routes: Routes = [
  {
    path:'CreatePost',
    component:ExperienceComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:UserSignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
