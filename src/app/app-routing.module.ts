import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Asegúrate de importar RouterModule aquí
import { HomeComponent } from './page/home/home.component';
import { SingupComponent } from './page/singup/singup.component';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './page/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './page/profile/profile.component';
import { WelcomeComponent } from './page/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './page/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './page/admin/add-categoria/add-categoria.component';
import { ViewExamenesComponent } from './page/admin/view-examenes/view-examenes.component';
import { AddExamenComponent } from './page/admin/add-examen/add-examen.component';
import { ActualizarExamenComponent } from './page/admin/actualizar-examen/actualizar-examen.component';
import { ViewExamenPreguntasComponent } from './page/admin/view-examen-preguntas/view-examen-preguntas.component';
import { AddPreguntaComponent } from './page/admin/add-pregunta/add-pregunta.component';
import { ActualizarPreguntaComponent } from './page/admin/actualizar-pregunta/actualizar-pregunta.component';
import { LoadExamenComponent } from './page/user/load-examen/load-examen.component';
import { InstruccionesComponent } from './page/user/instrucciones/instrucciones.component';
import { StartComponent } from './page/user/start/start.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'singup',
    component: SingupComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },{
    path: 'admin',
    component:DashboardComponent,
    
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {path:"",
      component:WelcomeComponent
      },
      {
        path:'categorias',
        component:ViewCategoriasComponent
      },
      
      {
        path:'add-categoria',
        component:AddCategoriaComponent
      },{
        path:'examenes',
        component:ViewExamenesComponent
      },{
        path:'add-examen',
        component:AddExamenComponent
      },{
        path:'examen/:examenId',
        component:ActualizarExamenComponent
      },{
        path:'ver-preguntas/:examenId/:titulo',
        component:ViewExamenPreguntasComponent
      }
      ,{
        path:'add-pregunta/:examenId/:titulo',
        component:AddPreguntaComponent
      },
      {
        path:'pregunta/:preguntaId',
        component:ActualizarPreguntaComponent,
      }
    ]
  },{
    path: 'user-dashboard',
    component:UserDashboardComponent,
     canActivate:[NormalGuard],
     children:[
      {
        path:":catId",
        component:LoadExamenComponent
      },
      {
        path:"instrucciones/:examenId",
        component:InstruccionesComponent
      },
      
     ]
  },
  {
    path:"start/:examenId",
    component:StartComponent,
    canActivate:[NormalGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // Agrega RouterModule aquí
  ]
})
export class AppRoutingModule { }
 