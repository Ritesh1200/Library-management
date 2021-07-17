import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {UserService} from "../services/data-access.service"
import {Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-change',
  templateUrl: './student-change.component.html',
  styleUrls: ['./student-change.component.css']
})
export class StudentChangeComponent implements OnInit {


  registrationForm: FormGroup;
 isSubmitted: boolean = false;

 topics=['Admin','Student'];
 ngOnInit() {
  this.route.queryParams.subscribe(params =>{
    this.UserService.studentprofile(params.id).subscribe(res => {
      console.log(res);
      if(res.error == "no"){
        this.id = params.id ;
        this.name = res.value.name ;
        this.gender = res.value.gender ;
        this.phone = res.value.phone_no ;
        this.email = res.value.email ;
        this.student_id = res.value.student_id ;
        this.password = res.value.password;
      }else{
        this.router.navigate(["/student_login"]);
      }
    } , err => {
      console.log(err);
    })
  } , err => {
    console.log(err);
  })
}


name ;
email ;
phone ;
student_id ;
password ;
gender ;
 terms:any;
 constructor(private route: ActivatedRoute ,private formBuilder: FormBuilder, private UserService : UserService , private router : Router) {
  this.registrationForm = this.formBuilder.group({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(`^[a-zA-Z\s]{2,20}$`)
    ]),
      student_id: new FormControl('', [

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
id ;




get registerFormControl() {
  return this.registrationForm.controls;
}

onSubmit() {


  // this.isSubmitted = true;
  this.UserService.studentchange(this.registrationForm.value , this.id).subscribe(res => {
    if(res.error == "no"){
      this.router.navigate(["/user_profile"], { queryParams: { id:this.id} });
    }else{
      this.responce = res.error;
    }
  } , err =>{
    console.log(err);
  });

  if (this.registrationForm.valid) {
    // this.UserService.studentregister(this.registrationForm.value).subscribe(res => {
    //   if(res.error == "no"){
    //     // this.router.navigateByUrl('/student_login');
    //   }else{
    //     this.responce = res.error;
    //   }
    // } , err =>{
    //   console.log(err);
    // });
  }

  }
}
