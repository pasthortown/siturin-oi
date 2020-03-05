import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './../../../../environments/environment';
import { Register } from './../../../models/CATASTRO/Register';

@Injectable({
   providedIn: 'root'
})
export class RegisterService {

   url = environment.api_catastro + 'register/';
   options = new RequestOptions();

   constructor(private http: Http, private router: Router) {
      this.options.headers = new Headers();
      this.options.headers.append('api_token', sessionStorage.getItem('api_token'));
   }

   get(id?: number): Promise<any> {
      if (typeof id === 'undefined') {
         return this.http.get(this.url, this.options).toPromise()
         .then( r => {
            return r.json();
         }).catch( error => { this.handledError(error.json());  });
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
      }).catch( error => { this.handledError(error.json());  });
   }

   inactivate_register(code: String): Promise<any> {
      return this.http.get(this.url + 'inactivate_register?register_code=' + code, this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   update_ruc_code_id(id: number, establishment_ruc_code: String, establishment_state: String): Promise<any> {
      return this.http.get(this.url + 'update_ruc_code_id?id=' + id.toString() + '&establishment_ruc_code=' + establishment_ruc_code + '&establishment_state=' + establishment_state, this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   check_pendientes(id_user: number): Promise<any> {
      return this.http.post(this.url + 'pendientes', JSON.stringify({id_user:id_user}), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   get_by_register_code(code: String): Promise<any> {
      return this.http.get(this.url + 'get_by_register_code?code=' + code.toString(), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   delete(id: number): Promise<any> {
      return this.http.delete(this.url + '?id=' + id.toString(), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   getBackUp(): Promise<any> {
      return this.http.get(this.url + 'backup', this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   searchFiltered(activity: string): Promise<any> {
      return this.http.get(this.url + 'search_filtered?activity=' + activity, this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   getActivities(): Promise<any> {
      return this.http.get(this.url + 'getActivities', this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   searchByRuc(ruc: string): Promise<any> {
      return this.http.get(this.url + 'search_by_ruc?ruc=' + ruc, this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   post(register: Register): Promise<any> {
      return this.http.post(this.url, JSON.stringify(register), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { console.log(error.json()); });
   }

   put(register: Register): Promise<any> {
      return this.http.put(this.url, JSON.stringify(register), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   masiveLoad(data: any[]): Promise<any> {
      return this.http.post(this.url + 'masive_load', JSON.stringify({data: data}), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   handledError(error: any) {
      console.log(error);
      sessionStorage.clear();
      this.router.navigate(['/login']);
   }
}