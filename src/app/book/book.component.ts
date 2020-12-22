import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/data-access.service' ;
import { Comments } from '../comments';

import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import {FormControl,FormBuilder,FormGroup,NgForm,Validators, NgModelGroup} from '@angular/forms'


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


constructor(private route: ActivatedRoute , private UserService : UserService , private router :Router) {}

id ;
d = new Date();
date = this.d.toLocaleDateString();
sdate = new Date();
submitdate ;

books ;
  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      this.id = params.id;
      this.UserService.book().subscribe(res => {
        if(res.error == "no"){
          this.books = res.value ;
        } else{
          this.router.navigate(["/student_login"]);
        }
      } , err => {
        console.log(err);
      })
    } , err => {
      console.log(err);
    })
  }


  borrow ;
  onSubmit(name , category){
    this.sdate.setDate(this.d.getDate() + 15);
    this.submitdate = this.sdate.toLocaleDateString();
    this.borrow = {
      name : name ,
      category : category ,
      date : this.date ,
      sdate : this.submitdate
    }
    this.UserService.borrow(this.id , this.borrow).subscribe(res => {
    } , err => {
      console.log(err);
    })
  }

}
