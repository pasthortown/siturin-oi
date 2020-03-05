import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';

@Injectable({
   providedIn: 'root'
})
export class MailerService {

   url = environment.api_mailer;
   options = new RequestOptions();

   constructor(private http: Http, private router: Router) {
      this.options.headers = new Headers();
      this.options.headers.append('api_token', sessionStorage.getItem('api_token'));
   }

   sendMail(tipoMail: string, email: string, subject: string, information: any): Promise<any> {
      const data = {'tipoMail': tipoMail, 'email': email, 'subject': subject, 'information': information};
      return this.http.post(this.url + 'enviar', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   inactivar_email(email: string, subject: string, information: any): Promise<any> {
      const data = {
         'email': email,
         'subject': subject,
         'information': information};
      return this.http.post(this.url + 'inactivar_email', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   entregar_documentos(email: string, subject: string, information: any): Promise<any> {
      const data = {
      'email': email,
      'subject': subject,
      'information': information};
      return this.http.post(this.url + 'entregar_documentos', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   handledError(error: any) {
      console.log(error);
   }
}