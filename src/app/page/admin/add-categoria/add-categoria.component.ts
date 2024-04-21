import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent {

  categoria={
    titulo:"",
    descripcion:""
  }
  constructor(private categoriaSercices:CategoriaService,private snack:MatSnackBar,private router:Router){}

ngOnInit():void{

}
formSubmit(){
if(this.categoria.titulo.trim()==""||this.categoria.titulo==null){
  this.snack.open("El titulo es requerido!!","",{
    duration:3000
  })
  return ;

}

this.categoriaSercices.agregarCategoria(this.categoria).subscribe(
  (dato:any)=>{
   //cuando se guarde los datos,los campo quedan vacios
    this.categoria.titulo="";
    this.categoria.descripcion=""
    Swal.fire("La categoria fue agregada","Todo salio bien","success")
    this.router.navigate(["/admin/categorias"])
  },
  (error)=>{
console.log(error);
Swal.fire("Error!!","Error al guardar la categoria","error")
  }
)
}
}
