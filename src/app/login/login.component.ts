import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any;


  constructor(private router: Router, private service:EmpService) { 
    this.user = {userId:'',password:''};
  }

  ngOnInit() {
  }
  /*showUser(){
   if(this.user.loginId === 'admin'){
    console.log('Jello');
     this.service.setUserLoggedIn();
     this.router.navigate(['home']);
   }*/
  
  async validateUser(loginForm: any) {
    console.log('Inside validateUser', loginForm.userId, loginForm.password);
    if (loginForm.userId === 'admin'  && loginForm.password === 'admin') {
      this.service.setUserLoggedIn();
      this.router.navigate(['home']);
    } else {
    await this.service.getEmpByUserPass(loginForm.userId, loginForm.password).then((data: any) => {
      if (data != null) {
      this.service.setUserLoggedIn();
      this.router.navigate(['home']);
      console.log('Login', 'Login Success');
    } else {
      console.log('Login', 'Login Failure');
    }
       },
       (error) => {
        console.log('Login', 'Login Failure');
        // this.router.navigate(['products']);
         });
     }
}
}


