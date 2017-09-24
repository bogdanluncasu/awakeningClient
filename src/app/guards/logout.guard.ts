import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
@Injectable()
export class LogoutGuard implements CanActivate {
    constructor(private router:Router) { }

    canActivate() {
        localStorage.clear();

        this.router.navigate(['/login']);

        return false;
    }
}