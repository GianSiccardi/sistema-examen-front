import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
loginData={
"username":"",
"password":""

}

constructor(private snack:MatSnackBar,private loginServices:LoginService,private router:Router){}
  ngOnInit(): void {}  

  formSubmit(){
  if(this.loginData.username.trim()==""|| this.loginData.username.trim()==null){
    this.snack.open("El nombre de usuario es requerido","Aceptar",{
      duration:3000
    })
    return;
  }
  if(this.loginData.password.trim()==""|| this.loginData.password.trim()==null){
    this.snack.open("La contraseña es requerido","Aceptar",{
      duration:3000
    })
  }
this.loginServices.generateToken(this.loginData).subscribe(
  (data:any)=>{
    console.log(data);

    this.loginServices.loginUser(data.token);
    this.loginServices.getActualUser().subscribe((user:any)=>{
      this.loginServices.setUser(user);
      console.log(user)
      if(this.loginServices.getUserRole()=="ADMIN"){
        // window.location.href="/admin"
        this.router.navigate(['admin']);
        this.loginServices.loginStatusSubject .next(true);
      
      }else if(this.loginServices.getUserRole()=="NORMAL"){
       // window.location.href="/user-dashboard"
       this.router.navigate(['user-dashboard/0']);
       this.loginServices.loginStatusSubject .next(true);
      
      }else(
        this.loginServices.isClose()
      )

      
    })
  },(error)=>{
    console.log(error)
    this.snack.open("DETALLES INVALIDOS ,VUELVA INTENTAR","Aceptar",{duration:3000
    })

  }
)
  }
}
