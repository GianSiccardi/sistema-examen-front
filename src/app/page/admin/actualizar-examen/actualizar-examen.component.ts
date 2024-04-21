import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-examen',
  templateUrl: './actualizar-examen.component.html',
  styleUrls: ['./actualizar-examen.component.css']
})
export class ActualizarExamenComponent implements OnInit{
examenId=0
examen:any
categorias:any;

  constructor(private route:ActivatedRoute,
    private examenService:ExamenService,
    private categoriaServices:CategoriaService,
    private router:Router ){

}
ngOnInit():void{
  this.examenId=this.route.snapshot.params["examenId"];
this.examenService.obtenerExamen(this.examenId).subscribe(
  (data)=>{
    this.examen=data;
    console.log(this.examen)
  },(error)=>{
    console.log(error)
  }
)
this.categoriaServices.listarCategorias().subscribe(
  (data:any)=>{
    this.categorias=data;
  },(error)=>{
    alert("error al cargar las categorias")
  }
)
}

public actualizarDatos(){
this.examenService.actualizarExamen(this.examen).subscribe(
  (data)=>{
    Swal.fire("Examen acutalizado","Se actualizo con exito el examen","success").then(
    (e)=>{
this.router.navigate(["/admin/examenes"])
    })

  },(error)=>{
    Swal.fire("ERROR","NO actualizo  el examen","error")
    console.log(error);

  }
)
}
}
