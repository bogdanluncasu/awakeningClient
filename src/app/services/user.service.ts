import { SecurityService } from './security.service';
import { UserModel } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class UserService{
    constructor(private securityService:SecurityService,
        private http:Http){}
    register(userModel:UserModel){
        let encryptedString:string = this.securityService.encrypt(userModel);
        return this.http.post(this.securityService.baseUrl+"/register",encryptedString);
    }

    login(userModel:UserModel){
        let encryptedString:string = this.securityService.encrypt(userModel);
        return this.http.post(this.securityService.baseUrl+"/login",encryptedString);
    }
}