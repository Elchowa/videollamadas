import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    
  ]
})
export class LoginComponent  implements OnInit {

  authService = inject(AuthService)
  router = inject(Router)


  form = new  FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  onSubmit(){
    if(this.form.valid)
      this.authService.logIn(this.form.value as User)
    .then(resp =>{
      this.router.navigate(['/dashboard'])
    })
    .catch(error => console.log(error));
    
  }

  onClickGoogle(){
    this.authService.logInGoogle()
    .then(resp =>{
      this.router.navigate(['/dashboard'])
    })
  }

  ngOnInit() {}

}
