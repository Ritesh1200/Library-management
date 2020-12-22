import { Component, OnInit } from '@angular/core';
import { timer, interval, Subscription } from 'rxjs';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import {UserService} from '../services/data-access.service';
import {CookieService} from 'ngx-cookie-service' ;



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
name ;
email ;
phone ;
student_id ;
gender ;
borrow ;
id ;


  constructor(private CookieService : CookieService ,private route: ActivatedRoute , private Userservice : UserService , private router : Router) { }

  sdate = new Array();
  book = new Array() ;
  i ;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.Userservice.studentprofile(params.id).subscribe(res => {
        console.log(res)
        if(res.error == 'no'){
          this.id = params.id ;
          this.name = res.value.name ;
          this.gender = res.value.gender ;
          this.phone = res.value.phone_no ;
          this.email = res.value.email ;
          this.student_id = res.value.student_id ;
          this.borrow = res.book ;
        }else{
          this.router.navigate(["/student_login"]);
        }
      } , err => {
        console.log(err);
      })
    } , err => {
      console.log(err);
    }) ;

  }

change(){
  this.router.navigate(["/student_change"] , { queryParams: { id:this.id} })
}
books(){
  this.router.navigate(["/book"] , { queryParams: { id:this.id} });
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
