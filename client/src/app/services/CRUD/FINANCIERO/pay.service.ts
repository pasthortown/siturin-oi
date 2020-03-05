import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './../../../../environments/environment';
import { Pay } from './../../../models/FINANCIERO/Pay';

@Injectable({
   providedIn: 'root'
})
export class PayService {

   url = environment.api_financiero + 'pay/';
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

   process_pays(pays: any[]): Promise<any> {
      return this.http.post(this.url + 'process_pays', JSON.stringify({pays: pays}), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   get_report(desde: Date, hasta: Date): Promise<any> {
      const data = {desde: desde, hasta: hasta};
      return this.http.post(this.url + 'get_report', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   get_paginate(size: number, page: number): Promise<any> {
      return this.http.get(this.url + 'paginate?size=' + size.toString() + '&page=' + page.toString(), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   get_by_ruc_id(ruc_id: number): Promise<any> {
      return this.http.get(this.url + 'get_by_ruc_id?id=' + ruc_id.toString(), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   get_by_ruc_number(ruc_number: String): Promise<any> {
      return this.http.get(this.url + 'get_by_ruc_number?number=' + ruc_number, this.options).toPromise()
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

   post(pay: Pay): Promise<any> {
      return this.http.post(this.url, JSON.stringify(pay), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   put(pay: Pay): Promise<any> {
      return this.http.put(this.url, JSON.stringify(pay), this.options).toPromise()
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