import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { log, error } from "util";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());
        if (localStorage.getItem('token') != null) {
            
            const request = req.clone({
                headers: req.headers.set("Authorization", localStorage.getItem('token'))
            });
            return next.handle(request).pipe(catchError((error, caught) => {
                //intercept the respons error and displace it to the console
                //console.log(error);
                this.handleAuthError(error);
                return of(error);
            }) as any);
        }
        else {
            this.router.navigate['login'];
        }
    }

    /**
   * manage errors
   * @param err
   * @returns {any}
   */
    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        //handle your auth error or rethrow
        console.log(err);
        if (err.status === 401) {
            //navigate /delete cookies or whatever
            //console.log('handled error ' + err.status);
            this.router.navigate([`/login`]);
            // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
            return of(err.message);
        }
        throw error;
    }

}
