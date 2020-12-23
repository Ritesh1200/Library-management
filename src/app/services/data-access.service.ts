import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http : HttpClient) {
  }

  private root_url_student_register = '/student_register' ;
  studentregister(post ):Observable<any> {
    console.log("this is post" , post);
    return this.http.post<any>(this.root_url_student_register , post) ;
  }

  private root_url_admin_login = '/admin_login' ;
  adminlogin(form) {
    return this.http.post<any>(this.root_url_admin_login , form,{
      observe:'body',
      withCredentials:true
    }) ;
  }

  root_url_student_login = '/student_login' ;
  studentlogin(form):Observable<any> {
    console.log("omgggggggggg hello bhai")
    return this.http.post<any>(this.root_url_student_login,form,{
      observe:'body',
      withCredentials:true
    }) ;
  }

  root_url_student_profile = '/student_profile' ;
  studentprofile(id):Observable<any> {
    return this.http.get<any>(this.root_url_student_profile +"/"+id,{
      observe:'body',
      withCredentials:true
    }) ;
  }

  root_url_admint_profile = '/admin_profile' ;
  admintprofile(id):Observable<any> {
    return this.http.get<any>(this.root_url_admint_profile +"/"+id) ;
  }

  root_url_logout = '/logout' ;
  logout():Observable<any> {
    return this.http.get<any>(this.root_url_logout ,{
      observe:'body',
      withCredentials:true
    }) ;
  }

  root_url_admin_registration = '/admin_register' ;
  adminregistration(body):Observable<any> {
    console.log("this is adminreg");
    return this.http.post<any>(this.root_url_admin_registration , body) ;
  }

  root_url_student_change = '/student_register' ;
  studentchange(body , id):Observable<any> {
    return this.http.put<any>(this.root_url_student_change + "/"+id , body) ;
  }

  root_url_admin_change = '/admin_register' ;
  adminchange(body , id):Observable<any> {
    return this.http.put<any>(this.root_url_admin_change + "/"+id , body) ;
  }

  root_url_admin_search = '/borrow' ;
  borrowsearch(id):Observable<any> {
    return this.http.get<any>(this.root_url_admin_search + "/"+id) ;
  }

  root_url_returned = '/return' ;
  returned(id , book):Observable<any> {
    return this.http.put<any>(this.root_url_returned + "/"+id , {book:book}) ;
  }

  root_url_book = '/book' ;
  book():Observable<any> {
    return this.http.get<any>(this.root_url_book ) ;
  }
  root_url_new_book = '/book' ;
  newbook(body):Observable<any> {
    return this.http.post<any>(this.root_url_book , body) ;
  }

  root_url_borrow = '/borrow' ;
  borrow(id ,body):Observable<any> {
    return this.http.post<any>(this.root_url_borrow +"/"+id , body ) ;
  }
}
