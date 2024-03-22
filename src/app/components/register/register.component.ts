import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  message : string =''
constructor(private AuthService:AuthService,
  private _Router:Router){}
registerForm:FormGroup = new FormGroup({
  first_name : new FormControl ('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  last_name : new FormControl ('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  email : new FormControl ('',[Validators.required,Validators.email]),
  age : new FormControl ('',[Validators.required,Validators.pattern(/^(?:[8-9]|[1-7][0-9]|80)$/)]),
  password : new FormControl ('',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/)]),
})
handelRegisterForm(){
  if(this.registerForm.valid){
   this.AuthService.registerForm(this.registerForm.value).subscribe({
    next :(res)=>{
      console.log(res);
      if(res.message == "success"){
        this._Router.navigate(['/login'])
      }
      else{
        this.message=`Email Already Exists`
      }
    },
    error:(err)=>{
     //no errors
    }
   })
  }
  
}
}
