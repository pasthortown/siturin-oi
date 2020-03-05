import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './../../../../environments/environment';
import { Register } from './../../../models/ALIMENTOSBEBIDAS/Register';

@Injectable({
   providedIn: 'root'
})
export class RegisterService {

   url = environment.api_alimentosbebidas + 'register/';
   options = new RequestOptions();

   constructor(private http: Http, private router: Router) {
      this.options.headers = new Headers();
      this.options.headers.append('api_token', sessionStorage.getItem('api_token'));
   }

   last_tramit_state(ruc_number: String): Promise<any> {
      return this.http.get(this.url + 'last_tramit_state?ruc=' + ruc_number, this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }   
   
   register_register_data(register: Register): Promise<any> {
      return this.http.post(this.url + 'register_register_data', JSON.stringify(register), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   get_requisites_set_by_user(register_id: number): Promise<any> {
      return this.http.get(this.url + 'get_requisites_set_by_user?register_id=' + register_id.toString(), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   set_register_code(code: String, register_id: number): Promise<any> {
      const data = {code: code, id: register_id};
      return this.http.put(this.url + 'set_register_code', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   get_register_data(id: number): Promise<any>{
      return this.http.get(this.url + 'get_register_data?id=' + id.toString(), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   isNotTuristic(id: number): Promise<any>{
      return this.http.get(this.url + 'is_not_turistic?id=' + id.toString(), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   bitacora_states(ruc_number: String): Promise<any> {
      return this.http.get(this.url + 'bitacora_states?ruc=' + ruc_number, this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }   

   get_registers_by_ruc(ruc_number: String): Promise<any> {
      return this.http.get(this.url + 'get_registers_by_ruc?ruc_number=' + ruc_number, this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
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

   post(register: Register): Promise<any> {
      return this.http.post(this.url, JSON.stringify(register), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
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