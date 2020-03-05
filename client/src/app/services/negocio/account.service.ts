import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';

@Injectable({
   providedIn: 'root'
})
export class AccountService {

   url = environment.api_auth;
   options = new RequestOptions();

   constructor(private http: Http, private router: Router) {
      this.options.headers = new Headers();
      this.options.headers.append('api_token', sessionStorage.getItem('api_token'));
   }

   mass_upload(data): Promise<any> {
      const uploadData = {data: data};
      return this.http.post(this.url + 'mass_upload', JSON.stringify(uploadData), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   get_accounts(): Promise<any> {
      return this.http.get(this.url + 'get_accounts', this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   block_account(account) {
      return this.http.post(this.url + 'block_account', JSON.stringify(account), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   save_account(account) {
      return this.http.post(this.url + 'save_account', JSON.stringify(account), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }
   
   password_reset_account(account) {
      return this.http.post(this.url + 'password_reset_account', JSON.stringify(account), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   handledError(error: any) {
      console.log(error);
   }
}