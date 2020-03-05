import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { Requisite } from 'src/app/models/ALOJAMIENTO/Requisite';

@Injectable({
   providedIn: 'root'
})
export class ExporterService {

   url = environment.api_exporter;
   options = new RequestOptions();

   constructor(private http: Http, private router: Router) {
      this.options.headers = new Headers();
      this.options.headers.append('api_token', sessionStorage.getItem('api_token'));
   }

   template(template_id: number, qr?: Boolean, qr_content?: string, params?: any[]): Promise<any> {
      let data = null;
      if(typeof qr != 'undefined') {
         if(typeof params != 'undefined') {
            data = {template_id: template_id, params: params, qr: qr, qr_content: qr_content};
         } else {
            data = {template_id: template_id, qr: qr, qr_content: qr_content};
         }
      } else {
         if(typeof params != 'undefined') {
            data = {template_id: template_id, params: params};
         } else {
            data = {template_id: template_id};   
         }
         
      }
      return this.http.post(this.url + 'download/template', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   getPDFDeclaration(declaration: any, pay: any, qr?: Boolean, qr_content?: string, params?: any[]) {
      let data = null;
      if(typeof qr != 'undefined') {
         if(typeof params != 'undefined') {
            data = {declaration: declaration, pay: pay, params: params, qr: qr, qr_content: qr_content};
         } else {
            data = {declaration: declaration, pay: pay, qr: qr, qr_content: qr_content};
         }
      } else {
         if(typeof params != 'undefined') {
            data = {declaration: declaration, pay: pay, params: params};
         } else {
            data = {declaration: declaration, pay: pay};   
         }
      }
      return this.http.post(this.url + 'download/pdf_declaration', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   getPDFTarifarioRack(tariffs: any[], qr?: Boolean, qr_content?: string, params?: any[]): Promise<any> {
      let data = null;
      if(typeof qr != 'undefined') {
         if(typeof params != 'undefined') {
            data = {tariffs: tariffs, params: params, qr: qr, qr_content: qr_content};
         } else {
            data = {tariffs: tariffs, qr: qr, qr_content: qr_content};
         }
      } else {
         if(typeof params != 'undefined') {
            data = {tariffs: tariffs, params: params};
         } else {
            data = {tariffs: tariffs};   
         }
      }
      return this.http.post(this.url + 'download/pdf_tarifario_rack', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   getPDFNormativa(activity: string, requisites: any[], capacities: any[], tariffs: any[], complementary_services: any[], personal: any[], latitud: number, longitud: number, qr?: Boolean, qr_content?: string, params?: any[]): Promise<any> {
      let data = null;
      if(typeof qr != 'undefined') {
         if(typeof params != 'undefined') {
            data = {activity: activity, requisites: requisites, capacities: capacities, tariffs: tariffs, complementary_services: complementary_services, personal: personal, latitud: latitud, longitud: longitud, params: params, qr: qr, qr_content: qr_content};
         } else {
            data = {activity: activity, requisites: requisites, capacities: capacities, tariffs: tariffs, complementary_services: complementary_services, personal: personal, latitud: latitud, longitud: longitud, qr: qr, qr_content: qr_content};
         }
      } else {
         if(typeof params != 'undefined') {
            data = {activity: activity, requisites: requisites, capacities: capacities, tariffs: tariffs, complementary_services: complementary_services, personal: personal, latitud: latitud, longitud: longitud,  params: params};
         } else {
            data = {activity: activity, requisites: requisites, capacities: capacities, tariffs: tariffs, complementary_services: complementary_services, personal: personal, latitud: latitud, longitud: longitud};   
         }
      }
      return this.http.post(this.url + 'download/pdf_checklist', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   pdf_file(html: string, title: string, orientation: string, qr?: Boolean, qr_content?: string, params?: any[]): Promise<any> {
      let data = null;
      if(typeof qr != 'undefined') {
         if(typeof params != 'undefined') {
            data = {html: html, orientation: orientation, title: title, params: params, qr: qr, qr_content: qr_content};
         } else {
            data = {html: html, orientation: orientation, title: title, qr: qr, qr_content: qr_content};
         }
      } else {
         if(typeof params != 'undefined') {
            data = {html: html, orientation: orientation, title: title, params: params};
         } else {
            data = {html: html, orientation: orientation, title: title};   
         }
         
      }
      return this.http.post(this.url + 'download/pdf', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   excel_file(header: any[], body: any[]): Promise<any> {
      const data = {header: header, body: body};
      return this.http.post(this.url + 'download/excel_file', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   getPDFQRdata(params: any[]): string {
      let data = '';
      params.forEach(element => {
         let strelement = JSON.stringify(element).toUpperCase();
         data += strelement.split('{')[1].split('}')[0] + '\n';
      });
      data = data.substr(0, data.length - 1);
      data = data.split('"').join('');
      data = data.split('_').join(' ');
      data = data.split(':').join(': ');
      return data;
   }

   handledError(error: any) {
      console.log(error);
   }
}