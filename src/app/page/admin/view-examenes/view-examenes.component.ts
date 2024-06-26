import { Component } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-examenes',
  templateUrl: './view-examenes.component.html',
  styleUrls: ['./view-examenes.component.css']
})
export class ViewExamenesComponent {
examenes:any=[

]
constructor(private examenService:ExamenService){

}

ngOnInit():void{
  this.examenService.listarCuestionario().subscribe(
    (dato:any)=>{
      this.examenes=dato;
      console.log(this.examenes)
    },(error)=>{
      console.log(error);
      Swal.fire("Error","Error al cargar los examenes","error");
    }
  )
}
eliminarExamen(examenId:any){
  Swal.fire({
    title:"Eliminar examen",
    text:"Estas seguro que quieres eliminar el examen?",
    icon:"warning",
    showCancelButton:true,
    confirmButtonColor:"#3085d6",
    cancelButtonColor:"#d33",
    confirmButtonText:"Eliminar",
    cancelButtonText:"Cancelar"

  }).then((result)=>{
    if(result.isConfirmed){
      this.examenService.eliminarExamen(examenId).subscribe(
       //devolvemos el listado sin el examen eliminado
        (data)=>{
          this.examenes=this.examenes.filter((examen:any)=>examen.examenId!=examenId)
          Swal.fire("Examen eliminado","El examen se elimino con exito","success")

        },(error)=>{
          Swal.fire("Error","Error al eliminar el examen","error")
        }
      )
    }
  })
}
}
