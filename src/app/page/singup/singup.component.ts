import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  
  public user={
    username:"",
    password:"",
    nombre:"",
    apellido:"",
    email:"",
    telefono:""

  }
  constructor(private userServices:UserService,private snack:MatSnackBar){}
  
  ngOnInit(): void {
   
  }
  formSubmit(){
    console.log(this.user)
    if(this.user.username==""||this.user.username==null ||this.user.password==""||this.user.password==null
   || this.user.email==""||this.user.email==null||this.user.apellido==""||this.user.apellido==null||
   this.user.nombre==""||this.user.nombre==null ){
      this.snack.open("falta compeltar campos requeridos","Aceptar",{
       duration:3000,
       verticalPosition:"top",
       horizontalPosition:"right"
      });
     
      return;
    
  }

  this.userServices.añadirUsuario(this.user).subscribe(
  (data)=>{
    console.log(data)
    Swal.fire("usuario guardado","Usuario registrado con exito en el sistema","success")
  },(error)=>{
    console.log(error)
    if(this.user.username==""||this.user.username==null){
      this.snack.open("ocurrio un error en el sistema","Aceptar",{
       duration:3000,
  
      });
    }
    }
)

  }
  }



