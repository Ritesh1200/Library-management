import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {UserService} from "../services/data-access.service"
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {
  [x: string]: any;

  registrationForm: FormGroup;
 isSubmitted: boolean = false;

 topics=['Admin','Student'];



 name:string="";
 admin_id:number;
 password:any;
 email:string="";
 Gender:string="";
 phone_no:number;

 constructor(private formBuilder: FormBuilder, private UserService : UserService , private router : Router) {
  this.registrationForm = this.formBuilder.group({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(`^[a-zA-Z\s]{2,20}$`)
    ]),

    admin_id: new FormControl('', [

        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12),

        Validators.pattern(`^[0-9]{5,}$`)
      ]),



      phone_no: new FormControl('', [
      Validators.required,
      Validators.pattern(`^[7-9][0-9]{9}$$`)
    ]),



    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
      Validators.pattern(`^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]{2,4})$`)
    ]),


    gender: new FormControl('', [
      Validators.required

    ]),


    password: new FormControl ('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern(`(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}`)
    ]),

  });
}


responce  ;


ngOnInit() {

}


get registerFormControl() {
  return this.registrationForm.controls;
}


onSubmit() {


  // this.isSubmitted = true;

console.log("this is bhar" , this.registrationForm.value);
  // if (this.registrationForm.valid) {
    console.log("this is ander");
    this.UserService.adminregistration(this.registrationForm.value).subscribe(res => {
      console.log("this is res : " , res);
      if(res.error == "no"){
        this.router.navigateByUrl('/admin_login');
      }else{
        this.responce = res.error;
      }
    } , err =>{
      console.log(err);
    });
  // }

  }
}
