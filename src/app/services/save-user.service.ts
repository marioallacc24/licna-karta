import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SaveUserService {

  private API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createUser(user:User){
    return this.http.post(this.API_URL+'/user/save',user);
 }

}
