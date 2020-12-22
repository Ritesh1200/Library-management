import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {UserService} from "../services/data-access.service"
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  [x: string]: any;

  registrationForm: FormGroup;
 isSubmitted: boolean = false;

 topics=['Admin','Student'];



 name:string="";
 id:number;
 password:any;
 email:string="";
 phone:number;
//  terms:any;
 student_id:any
 constructor(private formBuilder: FormBuilder, private UserService : UserService , private router : Router) {
  this.registrationForm = this.formBuilder.group({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(`^[a-zA-Z\s]{2,20}$`)
    ]),

      student_id: new FormControl('', [

        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12),

        Validators.pattern(`^[0-9]{5,8}$`)
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

  console.log("RItes");
  console.log(this.registrationForm.value);
  if (this.registrationForm.valid) {
    // this.registrationForm.reset();
    console.log("RItesh");
    this.UserService.studentregister(this.registrationForm.value).subscribe(res => {
      console.log("RIteshh" , res);
      if(res.error == "no"){
        this.router.navigateByUrl('/student_login');

      }else{
        this.responce = res.error;
      }
    } , err =>{
      console.log(err);
    });

  }

  }
}
