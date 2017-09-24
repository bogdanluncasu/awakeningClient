import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { SecurityService } from './../../services/security.service';
import { UserModel } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    user: UserModel;
    errorMessage: string;
    constructor(private securitySevice:SecurityService,
        private userService:UserService,
        private router: Router,private snackBar: MdSnackBar){
            this.user = new UserModel();
        }

    ngOnInit(){

    }

    login(){
       this.userService.login(this.user).subscribe(response=>{
           if(response.status==200){
               localStorage.setItem("Authorization", 
               this.securitySevice.encrypt(
                   "Bearer "+this.securitySevice.decrypt(response.headers.get("Authorization")))
                );

                const config = new MdSnackBarConfig();
                config.duration = 5000;
                config.extraClasses = ['snack-bar-custom'];
                this.snackBar.open("Successfully logged in", null, config);
                this.router.navigate(["home"]);
           }
       },error => {
           console.log(error);
           this.errorMessage = error._body;
       })
    }

    isValidEmail(email:string){
        var regexp = new RegExp('^[a-z]+.[a-z]+@endava.com$');
        return regexp.test(email);
    }


  
}
