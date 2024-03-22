import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any = new BehaviorSubject(null)

  constructor(private _HttpClient:HttpClient , private _Router:Router)
  {
    if (localStorage.getItem('userToken') != null)
    {
      this.decode()
    }
  }


  decode()
  {
    let incoded = JSON.stringify(localStorage.getItem('userToken'))
    let decoded = jwtDecode(incoded)
    this.userData.next(decoded)
  }

  

  logout()
  {
    localStorage.removeItem('userToken')
    this.userData.next(null)
    this._Router.navigate(['/login'])
  }

  baseUrl: string =`https://movies-api.routemisr.com/`
  registerForm(userData : object) : Observable<any>{
    return this._HttpClient.post(this.baseUrl + `signup` , userData );
  }

  loginForm(userdata : object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `signin` , userdata);
  }


}
