import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable()
export class SecurityService{
    baseUrl = "https://awakeningserver.herokuapp.com";
    key = CryptoJS.enc.Utf8.parse('C510FA90B14ACB28');
    iv = CryptoJS.enc.Utf8.parse('C2BF524EC88BD208');
    options = {
        keySize: 16,
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    };
    encrypt(model:any){
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(model)), this.key, this.options);
        return encrypted.toString();
    }
//
    decrypt(data:string){
        let bytes = CryptoJS.AES.decrypt(data, this.key,this.options);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}