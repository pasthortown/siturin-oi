import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';

@Injectable({
   providedIn: 'root'
})
export class ChatService {

   url = environment.api_chat;
   options = new RequestOptions();

   constructor(private http: Http, private router: Router) {
      this.options.headers = new Headers();
      this.options.headers.append('api_token', sessionStorage.getItem('api_token'));
   }

   enviar(decir: string): Promise<any> {
    const data ={decir: decir};
    return this.http.post(this.url, JSON.stringify(data)).toPromise().then( r => {
      return r.json();
    }).catch( e=> {console.log(e)});
   }

   handledError(error: any) {
      console.log(error);
   }
}