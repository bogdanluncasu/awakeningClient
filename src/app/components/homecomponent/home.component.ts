import { Router } from '@angular/router';
import { router } from './../../app.router';
import { UserService } from './../../services/user.service';
import { SecurityService } from './../../services/security.service';
import { UserModel } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import 'rxjs/add/operator/map';
@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private securitySevice:SecurityService,
        private userService:UserService,
        private router: Router,private snackBar: MdSnackBar){}

    ngOnInit(){
    }
}
