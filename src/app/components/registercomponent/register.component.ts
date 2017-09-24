import { Router } from '@angular/router';
import { router } from './../../app.router';
import { UserService } from './../../services/user.service';
import { SecurityService } from './../../services/security.service';
import { UserModel } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import 'rxjs/add/operator/map';
@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
    user: UserModel;
    errorMessage: string;
    constructor(private securitySevice:SecurityService,
        private userService:UserService,
        private router: Router,private snackBar: MdSnackBar){}

    ngOnInit(){
        this.user = new UserModel();
    }

    register(){
        if(this.user.isValid()){
            this.userService.register(this.user)
            .subscribe(data=>{
                let decryptedUser = this.securitySevice.decrypt(data.text());
                console.log(decryptedUser);

                let user = JSON.parse(decryptedUser) as UserModel;
                if(data.status==201){
                    const config = new MdSnackBarConfig();
                    config.duration = 5000;
                    config.extraClasses = ['snack-bar-custom'];
                    this.snackBar.open("Successfully registered. Use "+user.email+" to log in.", null, config);
                    this.router.navigate(["login"]);
                }
            },error=>{
                let decryptedError = this.securitySevice.decrypt(error._body);
                this.errorMessage = decryptedError;
            });
        }else{
            this.errorMessage = "Please insert all fields";
        }
       
    }
    
    isEmpty(property:string){
        return property==undefined||property.trim().length==0;
    }

    onPropertyChange(){
        this.errorMessage="";
    }
}
