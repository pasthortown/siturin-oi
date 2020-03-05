import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './../../../../environments/environment';
import { Language } from './../../../models/BASE/Language';

@Injectable({
   providedIn: 'root'
})
export class LanguageService {

   url = environment.api_base + 'language/';
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

   save_languajes(establishment_id: number, languages_on_establishment: Language[]): Promise<any> {
      return this.http.post(this.url + 'save_languajes',JSON.stringify({establishment_id: establishment_id, languages_on_establishment: languages_on_establishment}), this.options).toPromise()
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

   post(language: Language): Promise<any> {
      return this.http.post(this.url, JSON.stringify(language), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   put(language: Language): Promise<any> {
      return this.http.put(this.url, JSON.stringify(language), this.options).toPromise()
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