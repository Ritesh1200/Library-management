import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http : HttpClient) {
  }

  private root_url_student_register = 'http://localhost:3000/student_register' ;
  studentregister(post ):Observable<any> {
    console.log("this is post" , post);
    return this.http.post<any>(this.root_url_student_register , post) ;
  }

  private root_url_admin_login = 'http://localhost:3000/admin_login' ;
  adminlogin(form) {
    return this.http.post<any>(this.root_url_admin_login , form,{
      observe:'body',
      withCredentials:true
    }) ;
  }

  root_url_student_login = 'http://localhost:3000/student_login' ;
  studentlogin(form):Observable<any> {
    return this.http.post<any>(this.root_url_student_login,form,{
      observe:'body',
      withCredentials:true
    }) ;
  }

  root_url_student_profile = 'http://localhost:3000/student_profile' ;
  studentprofile(id):Observable<any> {
    return this.http.get<any>(this.root_url_student_profile +"/"+id,{
      observe:'body',
      withCredentials:true
    }) ;
  }

  root_url_admint_profile = 'http://localhost:3000/admin_profile' ;
  admintprofile(id):Observable<any> {
    return this.http.get<any>(this.root_url_admint_profile +"/"+id) ;
  }

  root_url_logout = 'http://localhost:3000/logout' ;
  logout():Observable<any> {
    return this.http.get<any>(this.root_url_logout ,{
      observe:'body',
      withCredentials:true
    }) ;
  }

  root_url_admin_registration = 'http://localhost:3000/admin_register' ;
  adminregistration(body):Observable<any> {
    console.log("this is adminreg");
    return this.http.post<any>(this.root_url_admin_registration , body) ;
  }

  root_url_student_change = 'http://localhost:3000/student_register' ;
  studentchange(body , id):Observable<any> {
    return this.http.put<any>(this.root_url_student_change + "/"+id , body) ;
  }

  root_url_admin_change = 'http://localhost:3000/admin_register' ;
  adminchange(body , id):Observable<any> {
    return this.http.put<any>(this.root_url_admin_change + "/"+id , body) ;
  }

  root_url_admin_search = 'http://localhost:3000/borrow' ;
  borrowsearch(id):Observable<any> {
    return this.http.get<any>(this.root_url_admin_search + "/"+id) ;
  }

  root_url_returned = 'http://localhost:3000/return' ;
  returned(id , book):Observable<any> {
    return this.http.put<any>(this.root_url_returned + "/"+id , {book:book}) ;
  }

  root_url_book = 'http://localhost:3000/book' ;
  book():Observable<any> {
    return this.http.get<any>(this.root_url_book ) ;
  }
  root_url_new_book = 'http://localhost:3000/book' ;
  newbook(body):Observable<any> {
    return this.http.post<any>(this.root_url_book , body) ;
  }

  root_url_borrow = 'http://localhost:3000/borrow' ;
  borrow(id ,body):Observable<any> {
    return this.http.post<any>(this.root_url_borrow +"/"+id , body ) ;
  }
}
