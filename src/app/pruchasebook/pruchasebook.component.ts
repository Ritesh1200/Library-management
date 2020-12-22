import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {UserService} from "../services/data-access.service"
import {Router} from '@angular/router';

@Component({
  selector: 'app-pruchasebook',
  templateUrl: './pruchasebook.component.html',
  styleUrls: ['./pruchasebook.component.css']
})
export class PruchasebookComponent implements OnInit {

  [x: string]: any;

  registrationForm: FormGroup;
 isSubmitted: boolean = false;




 name:string="";
 category:string="";
 author:string="";

 constructor(private formBuilder: FormBuilder ,private router :Router , private UserService : UserService) {
  this.registrationForm = this.formBuilder.group({


    name: new FormControl('', [

      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(5), ]),

      category: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),



    author: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(3), ]),

  });
}



ngOnInit() {

}


get registerFormControl() {
  return this.registrationForm.controls;
}

responce ;

onSubmit() {

  if (this.registrationForm.valid) {
    this.UserService.newbook(this.registrationForm.value).subscribe(res =>{
      if(res.error == "no"){
        this.responce = "book is inserted" ;
      } else{
        this.router.navigate(["/admin_login"]);
      }
    } , err =>{
      console.log(err);
    })
  }
  }
  }
