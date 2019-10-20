import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  flag: boolean;
  constructor(private httpClient: HttpClient) { 

  }
  setUserLoggedIn(){
    this.flag = true;
  }
  getUserLogged(): boolean {
    return this.flag;
  }
  setUserLoggedOut(){
    this.flag = false;
  }
  registerEmp(register: any) {
    console.log('Inside service...', ' ', register);
    return this.httpClient.post("RestAPI/webapi/myresource/registerJ", register);

  }
  getEmpByUserPass(userId: string, password: string): any {
    console.log('Inside service:' , userId, password);
    return this.httpClient.get('RestAPI/webapi/myresource/getEmpByUserPass/' + userId + '/' + password).toPromise();
    }
}
