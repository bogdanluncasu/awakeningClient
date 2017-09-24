export class UserModel{
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    private emailRegex = new RegExp('^[a-zA-Z1-9_.]+@[a-zA-Z]+\\.[a-zA-Z]{1,5}$');
    private nameRegex = new RegExp('^([a-zA-Z]{3,}\\ ?)+$');

    isPasswordValid(){
        return this.password!=undefined && this.password.match("^.*[0-9].*$")//at least one number
                && this.password.match("^.*[A-Z].*$")//at least one Capital character
                && this.password.match("^.{6,}$");//at least 6 characters
    }
    isEmailValid():boolean{
        if(this.emailRegex.test(this.email)){
            return true;
        }
        return false;
    }

    isNameValid(name:string){
        if(this.nameRegex.test(name)){
            return true;
        }
        return false;
    }
    isValid():boolean{
        if(this.isEmailValid() && this.isNameValid(this.firstName) && this.isNameValid(this.lastName) && this.isPasswordValid()){
                return true;
            }
        return false;
    }
}