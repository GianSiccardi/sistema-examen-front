import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
//un interceptor modifica las peticiones
@Injectable()
export class AuthoIntercerptor implements HttpInterceptor {

    constructor(private loginServices: LoginService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest = request;
        const token = this.loginServices.getToken();
        if (token != null) {
            authRequest = authRequest.clone({
               
                setHeaders: { Authorization: `Bearer ${token}` }
            })

        }
        return next.handle(authRequest)

    }
}

export const authoIntercerptorProviders=[
    {

        provide :HTTP_INTERCEPTORS,
        useClass:AuthoIntercerptor,
        multi:true //permite agrega la cantidad de interceptores que queramos        

    }
       
    
]