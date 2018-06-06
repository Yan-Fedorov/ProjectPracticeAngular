import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../user.service';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {LocalStorageService} from '../local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private localStorage: LocalStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.get('Auth') === 'False') {
      return next.handle(req.clone());
    }

    if (this.localStorage.getKey() != null) {
      const clonedreq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + this.localStorage.getKey())
      });
      return next.handle(clonedreq)
        .do(
          succ => { },
          err => {
            if (err.status === 401) {
              this.router.navigateByUrl('/login');
            }
          }
        );
    } else { this.router.navigateByUrl('/login');
    }
  }
}
