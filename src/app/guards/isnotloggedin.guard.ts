import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
@Injectable()
export class IsNotLoggedInGuard implements CanActivate {
    constructor(private router:Router) { }

    canActivate() {
        if (!localStorage.getItem('Authorization')) {
            return true;
        }

        this.router.navigate(['/home']);

        return false;
    }
}