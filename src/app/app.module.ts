import { LogoutGuard } from './guards/logout.guard';
import { HomeComponent } from './components/homecomponent/home.component';
import { IsLoggedInGuard } from './guards/isloggedIn.guard';
import { UserService } from './services/user.service';
import { SecurityService } from './services/security.service';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/registercomponent/register.component';
import { IsNotLoggedInGuard } from './guards/isnotloggedin.guard';
import { LoginComponent } from './components/logincomponent/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MdSnackBarModule} from '@angular/material';
import {routes} from './app.router';
import { HttpModule } from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpModule,
    MdSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [IsNotLoggedInGuard,SecurityService,UserService,IsLoggedInGuard,LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
