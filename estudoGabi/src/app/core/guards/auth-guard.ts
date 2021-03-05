import { Injectable,EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  goHome = new EventEmitter<boolean>();

  constructor(
    private tokenService: TokenService,
    private router: Router,


  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if(!sessionStorage.getItem('user')){
      this.router.navigate(['/login']);
      this.goHome.emit(false);
      return false;
    }

      this.goHome.emit(true);
      return true;

}

}
