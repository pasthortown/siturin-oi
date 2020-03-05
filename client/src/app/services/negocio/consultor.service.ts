import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';

@Injectable({
   providedIn: 'root'
})
export class ConsultorService {

   url = environment.api_consultor;
   url_base = environment.api_base;
   options = new RequestOptions();

   constructor(private http: Http, private router: Router) {
      this.options.headers = new Headers();
      this.options.headers.append('api_token', sessionStorage.getItem('api_token'));
   }

   get_registers(filterIdLocation: number): Promise<any> {
      const data = {'filterIdLocation': filterIdLocation};
      return this.http.post(this.url + 'registers', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   get_register_by_code(code: String): Promise<any> {
      return this.http.get(this.url + 'register_by_code?code=' + code, this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   get_zonales(id?: number) {
      if (typeof id == 'undefined'){
         return this.http.get(this.url_base + 'zonal/', this.options).toPromise()
         .then( r => {
            return r.json();
         }).catch( error => { this.handledError(error.json()); });
      } else {
         return this.http.get(this.url_base + 'zonal/?id=' + id.toString(), this.options).toPromise()
         .then( r => {
            return r.json();
         }).catch( error => { this.handledError(error.json()); });
      }
   }

   get_registers_assigned_inspector_id(id: number) {
      return this.http.get(this.url + 'get_registers_assigned_inspector_id?id=' + id.toString(), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   get_registers_assigned_financial_id(id: number) {
      return this.http.get(this.url + 'get_registers_assigned_financial_id?id=' + id.toString(), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   handledError(error: any) {
      console.log(error);
   }
}