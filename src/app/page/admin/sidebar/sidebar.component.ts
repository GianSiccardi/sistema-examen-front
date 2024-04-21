import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {



  constructor(public login:LoginService) { }

  ngOnInit(): void {
 
  
  }

public logout(){
this.login.isClose();
window.location.reload();

}
}
