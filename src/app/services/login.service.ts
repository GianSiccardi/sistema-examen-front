import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  public  loginStatusSubject = new Subject<boolean>();
  constructor(private http:HttpClient) { }

  //generamos un token

  public generateToken(loginData:any){
return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  //iniciamos sesion y establecemos el token en localstorage


  public loginUser(token:any){
    localStorage.setItem("token",token);
  }

  public isLogged (){
    let tokenStorage=localStorage.getItem("token");
    if(tokenStorage==undefined ||tokenStorage==""||tokenStorage==null){
     console.log("no esta conectado")
      return false;
    }else{
      return true;
    }
  
  }

  //cerramos sesion y elimanos el token del localStorage

  public isClose (){
    localStorage.removeItem("token");
    localStorage.removeItem("user")
   return true;

  }

  //obtenemos el token

  public getToken(){
    return localStorage.getItem("token")
  }


  //establecemos un usuario
public setUser (user:any){
localStorage.setItem("user",JSON.stringify(user));
}
//obtenemos usuario

public getUser(){
  let userStorage=localStorage.getItem("user");
  if(userStorage != null){
    return JSON.parse(userStorage)
  }else{
    this.isClose();
    return null;
  }

}
public getUserRole(){
  let user=this.getUser();
  return user.authorities[0].authority;
}
public getActualUser(){
  return this.http.get(`${baseUrl}/actual-usuario`);
}
}
