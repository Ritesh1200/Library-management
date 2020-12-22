import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmitted: boolean=false;

  constructor(private Router : Router) {

  }


  ngOnInit(): void {
  }

  post(){
    this.Router.navigate(['/home']);
  }

  del(){
    this.Router.navigate(['/home']);
  }

    }



