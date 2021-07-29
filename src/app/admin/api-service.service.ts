import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }
  saveUser(p){
    let apiUrl = this.baseUrl + '/save_users';
    return this.http.get(apiUrl);
  }

  getUser(){
    let apiUrl = this.baseUrl + '/users';
    return this.http.get(apiUrl);
  }

  deleteUsers(){
    let apiUrl=this.baseUrl +'/users';
  }
}
