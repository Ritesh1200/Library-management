import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,NgForm,Validators, NgModelGroup} from '@angular/forms'
import { Comments } from '../comments';
// import { RegisterService } from '../register.service';
import { UserService } from '../services/data-access.service' ;
import {Router} from '@angular/router';


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmitted: boolean = false;



  adminid:string="";
  adminpassword:string="";
  loginservice: any;
  responce: any;
  listcomments1:Comments[];



  constructor(private formBuilder:FormBuilder , private UserService : UserService , private router :Router) {
    this.registrationForm = this.formBuilder.group({
          student_id: new FormControl(''),


          password: new FormControl ('')
    }
    )}


    ngOnInit() {
    }


    get registerFormControl() {
      return this.registrationForm.controls;
    }

    resp ;
    onSubmit() {

      this.UserService.studentlogin(this.registrationForm.value).subscribe( res => {
        if(res.error == "no"){
          this.router.navigate(["/user_profile"], { queryParams: { id:res.value._id } });
        }else{
          this.resp = res.error ;
          console.log("this is log")
        }
      }, err => {
        console.log(err) ;
      });
      this.isSubmitted = true;
      if (this.registrationForm.valid) {

      }
    }
}
