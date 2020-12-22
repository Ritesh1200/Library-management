
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegistrationComponent } from './registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { from } from 'rxjs';
import { RegisterService } from './register.service';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { StudentChangeComponent } from './student-change/student-change.component';
import { AdminChangeComponent } from './admin-change/admin-change.component';
import { PruchasebookComponent } from './pruchasebook/pruchasebook.component';
import { CookieService } from 'ngx-cookie-service';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    StudentLoginComponent,
    AdminLoginComponent,
    UserProfileComponent,
    RegistrationComponent,
    AdminprofileComponent,
    FeedbackComponent,

    AdminRegistrationComponent,
    StudentChangeComponent,
    AdminChangeComponent,
    PruchasebookComponent,
    BookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegisterService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
