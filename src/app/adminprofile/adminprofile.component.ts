import { Component, OnInit } from '@angular/core';
import { timer, interval, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../services/data-access.service';
import {CookieService} from 'ngx-cookie-service' ;
import {FormControl,FormBuilder,FormGroup,NgForm,Validators, NgModelGroup} from '@angular/forms'


@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {
  registrationForm : FormGroup ;
  name ;
  email ;
  phone ;
  admin_id ;
  gender ;
  borrow ;
  id ;
  change_text(id , book){
    console.log(id,book)
    this.Userservice.returned(id , book).subscribe(res =>{
      this.Userservice.borrowsearch(this.registrationForm.value.student_id).subscribe(res => {
        if(res.error == "no"){
          this.books = res.value ;
        } else{
          this.router.navigate(["/admin_login"]);
        }
      } , err => {
        console.log(err);
      })
    } , err => {
      console.log(err);
    })
  }

  spinner1:Subscription
    constructor( private CookieService : CookieService ,private formBuilder:FormBuilder , private route: ActivatedRoute , private Userservice : UserService , private router : Router) {

    this.registrationForm = this.formBuilder.group({
      student_id: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(5),
        Validators.pattern(`^[0-9]{5,}$`) ]),
    }
)}

    ngOnInit(): void {
      this.route.queryParams.subscribe(params =>{
        this.Userservice.admintprofile(params.id).subscribe(res => {
          if(res != ''){
            this.id = params.id ;
            this.name = res.value.name ;
            this.gender = res.value.gender ;
            this.phone = res.value.phone_no ;
            this.email = res.value.email ;
            this.admin_id = res.value.admin_id ;
          }else{
            this.router.navigate(["/admin_login"]);
          }
        } , err => {
          console.log(err);
        })
      } , err => {
        console.log(err);
      }) ;
    }


  change(){
    this.router.navigate(["/admin_change"] , { queryParams: { id:this.id} })
  }
  book(){
    this.router.navigate(["/new_book"])
  }

  books ;
  onSubmit(){
    this.Userservice.borrowsearch(this.registrationForm.value.student_id).subscribe(res => {
      if(res.error == "no"){
        this.books = res.value ;
      } else{
        this.router.navigate(["/admin_login"]);
      }
    } , err => {
      console.log(err);
    })
  }

  logout(){
    this.Userservice.logout().subscribe(res =>{
      this.CookieService.delete('ritesh');
      console.log(res);
      this.router.navigate(["/student_login"] );
    } , err => {
      console.log(err);
    })
  }
}
