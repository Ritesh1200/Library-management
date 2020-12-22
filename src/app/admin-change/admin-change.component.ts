import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {UserService} from "../services/data-access.service"
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-change',
  templateUrl: './admin-change.component.html',
  styleUrls: ['./admin-change.component.css']
})
export class AdminChangeComponent implements OnInit {


  registrationForm: FormGroup;
 isSubmitted: boolean = false;

 topics=['Admin','Student'];




 constructor(private route: ActivatedRoute , private formBuilder: FormBuilder, private UserService : UserService , private router : Router ) {
  this.registrationForm = this.formBuilder.group({
  name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(`^[A-Za-z ]+$`)]),

      admin_id: new FormControl('', [

        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(5),

        Validators.pattern(`^[0-9]{5,}$`) ]),



        phone_no: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.pattern(`^[789]\d{9}$`)]),



    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
      Validators.pattern(`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`)
    ]),


    gender: new FormControl('', [
      Validators.required

    ]),




    password: new FormControl ('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}`)
    ]),



  });
}


responce  ;
name ;
email ;
phone ;
admin_id ;
password ;
gender ;
id ;

ngOnInit() {
  this.route.queryParams.subscribe(params =>{
    this.UserService.admintprofile(params.id).subscribe(res => {
      if(res.error == "no"){
        this.id = params.id ;
        this.name = res.value.name ;
        this.gender = res.value.gender ;
        this.phone = res.value.phone_no ;
        this.email = res.value.email ;
        this.admin_id = res.value.admin_id ;
        this.password = res.value.password;
      }else{
        this.router.navigate(["/admin_login"]);
      }
    } , err => {
      console.log(err);
    })
  } , err => {
    console.log(err);
  })
}


get registerFormControl() {
  return this.registrationForm.controls;
}

onSubmit() {

  // this.isSubmitted = true;
  this.UserService.adminchange(this.registrationForm.value , this.id).subscribe(res => {
    if(res.error == "no"){
      this.router.navigate(["/adminprofile"], { queryParams: { id:this.id} });
    }else{
      this.responce = res.error;
    }
  } , err =>{
    console.log(err);
  });

  if (this.registrationForm.valid) {

  }

  }
}

