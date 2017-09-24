import { LogoutGuard } from './guards/logout.guard';
import { HomeComponent } from './components/homecomponent/home.component';
import { IsLoggedInGuard } from './guards/isloggedIn.guard';
import { RegisterComponent } from './components/registercomponent/register.component';
import { ModuleWithProviders } from '@angular/core';
import { IsNotLoggedInGuard } from './guards/isnotloggedin.guard';
import { LoginComponent } from './components/logincomponent/login.component';
import { Routes, RouterModule } from '@angular/router';


export const router: Routes = [
  {path: 'login',component: LoginComponent, canActivate: [IsNotLoggedInGuard]},
  {path: 'register',component: RegisterComponent, canActivate: [IsNotLoggedInGuard]},
  {path: 'home',component: HomeComponent, canActivate: [IsLoggedInGuard]},
  {path: 'logout',component: LoginComponent, canActivate: [LogoutGuard]},

  // {path: 'admin/employees', component: AdminViewComponent, canActivate: [AdminGuard]},
  // {path: 'admin/employees/add', component:EmployeeComponent, canActivate: [AdminGuard]},

  {path: '**', redirectTo: 'login'}


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
