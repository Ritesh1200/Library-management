import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { BookComponent } from './book/book.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component'
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { FeedbackComponent } from './feedback/feedback.component' ;
import { AdminRegistrationComponent} from './admin-registration/admin-registration.component';
import { StudentChangeComponent } from './student-change/student-change.component';
import { AdminChangeComponent } from './admin-change/admin-change.component';
import { PruchasebookComponent } from './pruchasebook/pruchasebook.component';
import { BookComponent } from './book/book.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path : 'admin_registration', component : AdminRegistrationComponent},
  {path:'home', component:HomeComponent},
  {path:'book',component:BookComponent },

  {path:'new_book',component:PruchasebookComponent },
  {path:'student_login',component:StudentLoginComponent },
  {path:'student_change',component:StudentChangeComponent },
  {path:'admin_change',component:AdminChangeComponent },
  {path:'admin_login',component:AdminLoginComponent },
  {path:'registration',component:RegistrationComponent},
  {path:'feedback',component:FeedbackComponent },
  {path:'user_profile',component:UserProfileComponent },
  {path:'adminprofile',component:AdminprofileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
