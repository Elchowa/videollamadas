import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {

  authService = inject(AuthService);
  router = inject(Router);

  logOut(){
    this.authService.logLogout()
    .then(()=>{
      this.router.navigate(['/login'])
    })
    .catch(error => console.log(error))
  }

  ngOnInit() {}

}
