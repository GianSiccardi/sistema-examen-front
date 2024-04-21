import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { SingupComponent } from './page/singup/singup.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './page/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authoIntercerptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './page/user/user-dashboard/user-dashboard.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './page/admin/sidebar/sidebar.component';
import { ProfileComponent } from './page/profile/profile.component';
import { WelcomeComponent } from './page/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './page/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './page/admin/add-categoria/add-categoria.component';
import { ViewExamenesComponent } from './page/admin/view-examenes/view-examenes.component';
import { AddExamenComponent } from './page/admin/add-examen/add-examen.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { ActualizarExamenComponent } from './page/admin/actualizar-examen/actualizar-examen.component';
import { ViewExamenPreguntasComponent } from './page/admin/view-examen-preguntas/view-examen-preguntas.component';
import { AddPreguntaComponent } from './page/admin/add-pregunta/add-pregunta.component';
import { ActualizarPreguntaComponent } from './page/admin/actualizar-pregunta/actualizar-pregunta.component';
import { SidebarComponent  as UserSidebar} from './page/user/sidebar/sidebar.component';
import { LoadExamenComponent } from './page/user/load-examen/load-examen.component';
import { InstruccionesComponent } from './page/user/instrucciones/instrucciones.component';
import { StartComponent } from './page/user/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SingupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    SidebarComponent,
    ProfileComponent,
    WelcomeComponent,
    ViewCategoriasComponent,
    AddCategoriaComponent,
    ViewExamenesComponent,
    AddExamenComponent,
    ActualizarExamenComponent,
  ViewExamenPreguntasComponent,
  AddPreguntaComponent,
  ActualizarPreguntaComponent,
  UserSidebar,
  LoadExamenComponent,
  InstruccionesComponent,
  StartComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    AppRoutingModule ,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
  
  ],
  providers: [authoIntercerptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
