import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

declare var toastr:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:any;
  message:string;


  constructor(private router: Router, private service:EmpService) {
    this.register = {
     firstName:'',
     lastName:'',
	   userId:'',
	   password:'',
    };
   }

  ngOnInit() {
  }
  regEmp(){
    console.log(this.register.userId);
    this.service.registerEmp(this.register).subscribe((res)=> {console.log('Reg','Registration Success');},
    (err) =>{this.message = err.error.text;
      console.log('Reg','Registarion Failure');
    });
    this.router.navigate(['login']);
  } 
  }


