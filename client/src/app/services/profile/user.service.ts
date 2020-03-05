import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from './../../../environments/environment';
import { User } from './../../models/profile/User';

@Injectable({
   providedIn: 'root'
})
export class UserService {

   url = environment.api_auth + 'user/';
   options = new RequestOptions();

   constructor(private http: Http) {
      this.options.headers = new Headers();
      this.options.headers.append('api_token', sessionStorage.getItem('api_token'));
   }

   get(id?: number): Promise<any> {
      if (typeof id === 'undefined') {
         return this.http.get(this.url, this.options).toPromise()
         .then( r => {
            return r.json();
         }).catch( error => { this.handledError(error.json()); });
      }
      return this.http.get(this.url + '?id=' + id.toString(), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   get_paginate(size: number, page: number): Promise<any> {
      return this.http.get(this.url + 'paginate?size=' + size.toString() + '&page=' + page.toString(), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   delete(id: number): Promise<any> {
      return this.http.delete(this.url + '?id=' + id.toString(), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   post(user: User): Promise<any> {
      return this.http.post(this.url, JSON.stringify(user), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   register_user_by_inactivation(user: User): Promise<any> {
      return this.http.post(this.url + 'register_user_by_inactivation', JSON.stringify(user), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   put(user: User): Promise<any> {
      return this.http.put(this.url, JSON.stringify(user), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   get_filtered_by_rol(size: number, page: number, filter: String, ruc: String): Promise<any> {
      return this.http.get(this.url + 'filtered_by_rol?size=' + size.toString() + '&page=' + page.toString() + '&filter=' + filter + '&ruc=' + ruc, this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   get_by_rol(filter: String) {
      return this.http.get(this.url + 'get_by_rol?filter=' + filter, this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   create_account_by_rol(user: User, account_rol_id: number): Promise<any> {
      const data = {user: user, account_rol_id: account_rol_id}; 
      return this.http.post(this.url + 'create_account_by_rol', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   update_account_by_rol(user: User, account_rol_id: number): Promise<any> {
      const data = {user: user, account_rol_id: account_rol_id};
      return this.http.put(this.url + 'update_account_by_rol', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   delete_account_by_rol(user_id: number, account_rol_id: number): Promise<any> {
      return this.http.delete(this.url + 'delete_account_by_rol?user_id=' + user_id.toString() + '&account_rol_id=' + account_rol_id.toString(), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   
   handledError(error: any) {
      console.log(error);
   }
}