import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  examenId:any;
  preguntas:any;
  puntosConseguidos=0;
  respuestasCorrectas=0;
  intentos=0;
  esEnviado=false
  timer:any
constructor(
  private locationSt:LocationStrategy,
  private route:ActivatedRoute,
  private preguntaService:PreguntaService
){}
ngOnInit():void{
this.prevenirElBotonDeRetroceso();
this.examenId=this.route.snapshot.params["examenId"]
console.log(this.examenId)
this.cargarPregunta();
}
cargarPregunta(){
  this.preguntaService.listarPreguntasDelExamenParaEvaluar(this.examenId).subscribe(
    (data:any)=>{
      console.log(data)
      this.preguntas=data;
     
      
      this.timer = this.preguntas.length *2 * 60;
      this.preguntas.forEach((p:any)=>{
        p['respuestaDada']="";//accedo a la respuesta que di , y la inicializo en vacio
      })
      console.log(this.preguntas)
      this.iniciarTemporizador();
    },(error)=>{
Swal.fire("Error","error al cargar las preguntas","error")
    }
  )
}
iniciarTemporizador(){
  let tiempo=window.setInterval(()=>{
    if(this.timer<=0){
      this.evaluarExamen();
      clearInterval(tiempo);
    }else{
      this.timer--;
    }
  },1000)
}
prevenirElBotonDeRetroceso(){
  history.pushState(null,null!,location.href)//hacemos esto para cuando queramos retroceder no se pueda
  this.locationSt.onPopState(()=>{
    history.pushState(null,null!,location.href)
  }) 
}

enviarCuestionario(){
  Swal.fire({
    title: '¿Quieres enviar el examen?',
    showCancelButton: true,
    cancelButtonText:'Cancelar',
    confirmButtonText: 'Enviar',
    icon:'info'
  }).then((e) => {
    if(e.isConfirmed){
      this.evaluarExamen();
    }
  })
}

evaluarExamen(){
  this.preguntaService.evaluarExamen(this.preguntas).subscribe(
    (data:any) => {
      console.log(data);
      this.puntosConseguidos = data.puntosMaximos;
      this.respuestasCorrectas = data.respuestasCorrectas;
      this.intentos = data.intentos;
      this.esEnviado = true;
    },(error) => {
      console.log(error);
    }
  )
  

}

obtenerHoraFormateada(){
  let mm=Math.floor(this.timer/60);
  let ss=this.timer-mm*60;
  return `${mm} : min : ${ss} seg`;
}
imprimirPagina(){
  window.print();
}
}
