import { Ruc } from './../models/BASE/Ruc';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from './../../environments/environment';
import { User } from '../models/profile/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  login(email: String, password: String): Promise<any> {
    const data = {email: email, password: password};
    return this.http.post(environment.api_auth + 'login', JSON.stringify(data)).toPromise()
    .then( r =>
      r.json()
    ).catch( error => {
      error.json();
    });
  }

  recover_credentials(user: User): Promise<any> {
    const data = {user: user};
    return this.http.post(environment.api_auth + 'recover_credentials', JSON.stringify(data)).toPromise()
    .then( r =>
      r.json()
    ).catch( error => {
      error.json();
    });
  }

  register(user: User): Promise<any> {
    const data = {user: user};
    return this.http.post(environment.api_auth + 'register', JSON.stringify(data)).toPromise()
    .then( r =>
      r.json()
    ).catch( error => {
      error.json();
    });
  }

  password_recovery_request(email: String): Promise<any> {
    const data = {email: email};
    return this.http.post(environment.api_auth + 'password_recovery_request', JSON.stringify(data)).toPromise()
    .then( r =>
      r.json()
    ).catch( error => {
      error.json();
    });
  }

  password_change(new_password: String): Promise<any> {
    const data = {new_password: new_password};
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('api_token', sessionStorage.getItem('api_token'));
    return this.http.post(environment.api_auth + 'user/password_change', JSON.stringify(data), options).toPromise()
    .then( r =>
      r.json()
    ).catch( error => {
      error.json();
    });
  }
}
