import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,NgForm,Validators, NgModelGroup} from '@angular/forms'
import { Comments } from '../comments';
// import { RegisterService } from '../register.service';
import { UserService } from '../services/data-access.service' ;
import {Router} from '@angular/router';





@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  [x: string]: any;
  registrationForm: FormGroup;
  isSubmitted: boolean = false;



  admin_id:string="";
  password:string="";
  loginservice: any;
  responce: any;
  listcomments1:Comments[];



  constructor(private formBuilder:FormBuilder , private UserService : UserService , private router :Router) {
    this.registrationForm = this.formBuilder.group({


          admin_id: new FormControl(''),


          password: new FormControl ('')
       }
    )}



    ngOnInit() {

    }
resp ;

    get registerFormControl() {
      return this.registrationForm.controls;
    }

    onSubmit() {

    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      this.UserService.adminlogin(this.registrationForm.value).subscribe( res => {
        if(res.error == "no"){
          console.log(res);
          this.router.navigate(["/adminprofile"], { queryParams: { id:res.value._id } });
        }else{
          console.log(res.error);
          this.resp = res.error ;
        }
      }, err => {
        console.log(err) ;
      });
    }
    }
}
