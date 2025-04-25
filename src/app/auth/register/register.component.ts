import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports:[
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

  ],

  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

  authService = inject(AuthService);
  router = inject(Router);

  form = new  FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  onSubmit(){
    if(this.form.valid){
      this.authService.register(this.form.value as User)
      .then(resp =>{
        this.router.navigate(['/login'])
      })
    }
  }


  ngOnInit() {}

}
