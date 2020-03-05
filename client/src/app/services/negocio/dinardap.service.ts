import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';

@Injectable({
   providedIn: 'root'
})
export class DinardapService {

   url = environment.api_dinardap;
   options = new RequestOptions();

   constructor(private http: Http, private router: Router) {
      this.options.headers = new Headers();
      this.options.headers.append('api_token', sessionStorage.getItem('api_token'));
   }

   get_cedula(identificacion: String): Promise<any> {
      const data = {'identificacion': identificacion};
      return this.http.post(this.url + 'cedula', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   get_RUC(numero: String): Promise<any> {
      const data = {'RUC': numero};
      return this.http.post(this.url + 'ruc', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   get_super_cias(numero: String): Promise<any> {
      const data = {'identificacion': numero};
      return this.http.post(this.url + 'supercias', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   handledError(error: any) {
      console.log(error);
   }
}