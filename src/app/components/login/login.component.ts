import {  Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  resMsg :string = ''
  constructor( private _AuthService:AuthService,
    private _Router:Router
    ){}

 loginForm : FormGroup = new FormGroup ({
  email : new FormControl ('',[Validators.required,Validators.email]),
  password : new FormControl ('',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/)]),
 })
 handelLogin(){
  if(this.loginForm.valid){
    console.log(this.loginForm.value);
    this._AuthService.loginForm(this.loginForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        this.resMsg =res.message  
        if(res.message=="success"){
          this._Router.navigate(['/home'])
          localStorage.setItem('userToken',res.token);
          this._AuthService.userData.next(res.token)
        }

      }
    })
    
  }
 }
}
