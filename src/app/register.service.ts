import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";
import {map,tap} from 'rxjs/operators'


export type User = {
  email: string,
  password: string,
  Id: number
}

@Injectable()
export class RegisterService {
URL="http://localhost:3000/registration"

  constructor(private http: HttpClient) {}
 
  onRegistrationFormSubmit(data){
  return this.http.post(this.URL,data);
}}