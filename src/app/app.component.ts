import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App14';


  userForm!: FormGroup;

  constructor(private $rout:Router, 
    public fb: FormBuilder){
     
     
  }

  ngOnInit(): void {
   // this.$rout.navigate(['/student']);
  
  }

 

}
