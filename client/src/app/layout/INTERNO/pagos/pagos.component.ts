import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { PayService } from 'src/app/services/CRUD/FINANCIERO/pay.service';
import { Pay } from 'src/app/models/FINANCIERO/Pay';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {
  desde: Date = new Date();
  hasta: Date = new Date();
  archivo = {tipo: '', nombre: '', contenido: ''};
  pagos_reportados = [];
  pagos_actualizados = [];
  mostrar_reporte = false;
  constructor(private toastr: ToastrManager, private payDataService: PayService) {}

  ngOnInit() {}

  CodificarArchivoPagos(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
     const file = event.target.files[0];
     reader.readAsDataURL(file);
     reader.onload = () => {
        this.archivo.contenido = reader.result.toString().split(',')[1];
        this.archivo.tipo = file.type;
        this.archivo.nombre = file.name;
     };
    }
  }

  borrarArchivo() {
    this.archivo = {tipo: '', nombre: '', contenido: ''};
    this.toastr.errorToastr('Archivo borrado satisfactoriamente.', 'Procesar Pagos');
  }

  procesarArchivo() {
    this.mostrar_reporte = false;
    this.pagos_reportados = [];
    this.pagos_actualizados = [];
    const newData = decodeURIComponent(escape(atob(this.archivo.contenido)));
    const filas = newData.split('\n');
    filas.forEach(element => {
      if (element.substring(0, 10) == '1OCPZG0000') {
        this.mostrar_reporte = true;
        const valor = parseFloat(element.substring(16, 29) + '.' + element.substring(29, 31));
        const codigo_del_tercero = element.substring(31, 46).trim();
        const referencia_transaccion = element.substring(46, 66).trim();
        this.pagos_reportados.push({referencia_transaccion: referencia_transaccion, codigo_del_tercero: codigo_del_tercero, valor: valor});
      }
    });
    this.payDataService.process_pays(this.pagos_reportados).then(r => {
      r.forEach(element => {
        this.pagos_actualizados.push({referencia_transaccion: element.referencia_transaccion, codigo_del_tercero: element.codigo_del_tercero, valor: element.valor, payed: element.payed});
      });
      this.archivo = {tipo: '', nombre: '', contenido: ''};
      this.toastr.successToastr('Datos procesados satisfactoriamente.', 'Procesar Pagos');
    }).catch( e => { console.log(e); });
  }

  descargarReporte() {
    this.payDataService.get_report(this.desde, this.hasta).then( r => {
      const reportData = r as any[];
      let output = '';
      reportData.forEach(element => {
        if (element.pay.amount_to_pay > 0 && !element.pay.payed) {
          const localidad = '5'; // Guayaquil 1  -   Quito 5
          const transaccion = 'OCP'; // SIEMPRE OCP
          const codigo_servicio = 'ZG'; // OC= Orden de Cobro (Débito a Cuenta), ZG= Recaudación con Información (Recaudación a través de Canales con ingreso de información), SC= Recaudación de Colegios (Recaudación a través de Canales con o sin información).
          const tipo_cuenta = '00'; // 00= Cuenta Corriente, 10= Cuenta Ahorros
          const numero_cuenta = '        '; // SE DEJA EN BLANCO
          let valor = ''; // 13 ENTEROS 2 DECIMALES SIN PUNTO DECIMAL
          let codigo_del_tercero = ''; // 15 CARACTERES
          const referencia_transaccion = 'VALOR 1 POR 1000    '; // 20 CARACTERES
          const forma_de_pago = 'RE' // CU= Debito de cuenta, RE= Recaudaciones por canal electronico
          const moneda = 'USD' // SIEMPRE USD
          let nombre_del_tercero = ''; // 30 CARACTERES
          const localidad_retiro = '  '; // 2 CARACTERES NO APLICA DEJAR EN BLANCO
          const agencia_retiro = '  '; // 2 CARACTERES NO APLICA DEJAR EN BLANCO
          const tipo_nuc_tercero = 'R'; // C= Cedula, R= RUC, P= Pasaporte
          let numero_unico_tercero = ''; // 14 CARACTERES Identificacion del tercero
          const telefono_tercero = '0000000000'; // 10 CARACTERES Telefono del Tercero
           const pay = element.pay;
           const user = element.user;
           const ruc = element.RUC.Ruc;
           valor = pay.amount_to_pay.toString();
           valor = parseFloat(valor).toFixed(2).toString().replace('.', '');
           for (let i = 0; 0 < (15 - valor.length); i ++) {
             valor = '0' + valor;
           }
           codigo_del_tercero = pay.code;
           for (let i = 0; 0 < (15 - codigo_del_tercero.length); i ++) {
             codigo_del_tercero = ' ' + codigo_del_tercero;
           }
           for (let i = 0; i < 30; i ++) {
             if (i < user.name.length) {
              nombre_del_tercero += user.name[i];
             } else {
              nombre_del_tercero += ' ';
             }
           }
           for (let i = 0; i < 14; i ++) {
             if (i < ruc.number.length) {
              numero_unico_tercero += ruc.number[i];
             } else {
              numero_unico_tercero += ' ';
             }
           }
           output += localidad +
           transaccion +
           codigo_servicio +
           tipo_cuenta +
           numero_cuenta +
           valor +
           codigo_del_tercero +
           referencia_transaccion +
           forma_de_pago + moneda +
           nombre_del_tercero +
           localidad_retiro +
           agencia_retiro +
           tipo_nuc_tercero +
           numero_unico_tercero +
           telefono_tercero + '\n';
        }
      });
      const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
      const nombreArchivo = 'reporte_pagos.txt';
      saveAs(blob, nombreArchivo);
    }).catch( e => console.log(e) );
  }

  downloadFile(file: any, type: any, name: any) {
     const byteCharacters = atob(file);
     const byteNumbers = new Array(byteCharacters.length);
     for (let i = 0; i < byteCharacters.length; i++) {
       byteNumbers[i] = byteCharacters.charCodeAt(i);
     }
     const byteArray = new Uint8Array(byteNumbers);
     const blob = new Blob([byteArray], { type: type });
     saveAs(blob, name);
  }
}
