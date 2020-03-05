import { RucService } from 'src/app/services/CRUD/BASE/ruc.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from './../models/profile/User';
import { DinardapService } from '../services/negocio/dinardap.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Ruc } from '../models/BASE/Ruc';
import { Establishment } from 'src/app/models/BASE/Establishment';
import { saveAs } from 'file-saver/FileSaver';
import { StateService } from 'src/app/services/CRUD/ALOJAMIENTO/state.service';
import { State } from 'src/app/models/ALOJAMIENTO/State';
import { Register } from 'src/app/models/ALOJAMIENTO/Register';
import { RegisterService as CatastroRegisterService } from 'src/app/services/CRUD/CATASTRO/register.service';
import { RegisterType } from 'src/app/models/ALOJAMIENTO/RegisterType';
import { RegisterTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/registertype.service';
import { UbicationService } from 'src/app/services/CRUD/BASE/ubication.service';
import { Ubication } from 'src/app/models/BASE/Ubication';
import { ProcedureJustificationService } from 'src/app/services/CRUD/ALOJAMIENTO/procedurejustification.service';
import { ProcedureJustification } from 'src/app/models/ALOJAMIENTO/ProcedureJustification';
import { Pay } from 'src/app/models/FINANCIERO/Pay';
import { Declaration } from 'src/app/models/FINANCIERO/Declaration';
import { DeclarationItemValue } from 'src/app/models/FINANCIERO/DeclarationItemValue';
import { DeclarationService } from 'src/app/services/CRUD/FINANCIERO/declaration.service';
import { DeclarationItemService } from 'src/app/services/CRUD/FINANCIERO/declarationitem.service';
import { DeclarationItemCategoryService } from 'src/app/services/CRUD/FINANCIERO/declarationitemcategory.service';
import { DeclarationItem } from 'src/app/models/FINANCIERO/DeclarationItem';
import { DeclarationItemCategory } from 'src/app/models/FINANCIERO/DeclarationItemCategory';
import { DeclarationAttachment } from 'src/app/models/FINANCIERO/DeclarationAttachment';
import { DeclarationAttachmentService } from 'src/app/services/CRUD/FINANCIERO/declarationattachment.service';
import { PayService } from 'src/app/services/CRUD/FINANCIERO/pay.service';
import { EstablishmentService } from 'src/app/services/CRUD/BASE/establishment.service';
import { RegisterState } from 'src/app/models/ALOJAMIENTO/RegisterState';
import { RegisterStateService } from 'src/app/services/CRUD/ALOJAMIENTO/registerstate.service';
import { RegisterService as RegisterABService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/register.service';
import { ExporterService } from 'src/app/services/negocio/exporter.service';
import { RegisterProcedure } from 'src/app/models/ALOJAMIENTO/RegisterProcedure';
import { RegisterProcedureService } from 'src/app/services/CRUD/ALOJAMIENTO/registerprocedure.service';
import { MailerService } from 'src/app/services/negocio/mailer.service';
import { RegisterService } from 'src/app/services/CRUD/ALOJAMIENTO/register.service';
import { UserService } from 'src/app/services/profile/user.service';
import { RegisterProcedureService as RegisterProcedureABService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/registerprocedure.service';
import { AgreementService } from 'src/app/services/CRUD/BASE/agreement.service';
import { Agreement } from 'src/app/models/BASE/Agreement';

@Component({
    selector: 'inactivacion-login',
    templateUrl: './inactivacion.component.html',
    styleUrls: ['./inactivacion.component.scss']
})
export class InactivacionComponent implements OnInit {

  busy: Promise<any>;
  user: User;
  ruc: Ruc = new Ruc();
  procedureJustification = new ProcedureJustification();
  isRepresentantLegal = false;
  isRucOwner = false;
  canAddNewDeclaration = true;
  identificationValidated = false;
  mostrarDataEstablishment = false;
  maxYear: number = 2019;
  my_tramits = [];
  estados_tramites: State[];
  rucEstablishmentRegisterSelected: Register = new Register();
  declaration_selected: Declaration = new Declaration();
  mostrarDataDeclaration = false;
  consumoCedula = false;
  fechaExpedicion = 'porValidar';
  conectandoSRIUbicacion = false;
  fechaExpiracion = 'porValidar';
  fechaNacimiento = 'porValidar';
  recordsByPagePays = 5;
  rowsPays = [];
  columnsPays = [];
  mostrarUbicationEstablishment = false;
  fechaIngresada = '';
  razon_social = '';
  REGCIVILOK = false;
  idCausal = 0;
  mostrarCausales = false;
  selected_register_data: any = null;
  fechaNombramientoOK = false;
  declarationItemsCategories: DeclarationItemCategory[] = [];
  declarationItems: DeclarationItem[] = [];
  representanteCedulaData = 'CONECTÁNDOSE AL REGISTRO CIVIL...';
  identidadConfirmada = false;
  establishment_selected: Establishment = new Establishment();
  CedulaData = '';
  aleatorio = 0;
  totalunoxmil = 0;
  guardando = false;
  continuarTramite = false;
  cedulaNombre = '';
  rucValidated = false;
  consumoRuc = false;
  establishment_ruc_code = 'NULL';
  identificationRepresentativePersonValidated = false;
  rucData = '';
  rucInactive = true;
  SRIOK = false;
  esperando = false;
  emailContactValidated = false;
  cuentaInterno = false;
  thisYear = 1000;
  currentPagePays = 1;
  pays: Pay[] = [];
  terminosCondicionesAgreement: Agreement = new Agreement();
  declarationItemsToShow: any[] = [];
  mainPhoneValidated: Boolean = false;
  secondaryPhoneValidated: Boolean = false;
  idTramiteEstadoFilter = 0;
  tramite = '-';
  continuar_proceso = false;
  mostrarMasData = false;
  guardandoRucNuevo = false;
  estados = [];
  config: any = {
   paging: true,
   filtering: {filterString: ''},
   className: ['table-striped', 'table-hover', 'table-bordered']
  };
  rows = [];
  columns = [];
  data = [];
  currentPageMinturRegisters = 1;
  lastPageMinturRegisters = 1;
  recordsByPageRegisterMintur = 5;
  mostrarListadoEstablecimientos = false;
  establecimientos_pendiente = false;
  dataPays = [];
  registers_mintur = [];
  registerMinturSelected: any = null;
  register_types: any[] = [];
  states: State[] = [];
  specific_states: State[];
  estado_tramite_selected_code: String = '1';
  currentPageEstablishment = 1;
  lastPageEstablishment = 1;
  rowsEstablishment = [];
  columnsEstablishment = [];
  dataEstablishment = [];
  recordsByPageEstablishment = 5;
  zonalEstablishmentSelectedCode = '-';
  provinciaEstablishmentSelectedCode = '-';
  cantonEstablishmentSelectedCode = '-';
  ubications: Ubication[] = [];
  terminosCondiciones = false;
  zonalesEstablishment: Ubication[] = []; 
  provinciasEstablishment: Ubication[] = [];
  cantonesEstablishment: Ubication[];
  parroquiasEstablishment: Ubication[];
  addressEstablishmentValidated = false;
  procedureJustifications: ProcedureJustification[] = [];
  procedureJustificationsToShow: ProcedureJustification[] = [];
  register_catastro_selected_id = 0;
  declarations: Declaration[] = [];
  balance: DeclarationAttachment = new DeclarationAttachment();
   mensajeMostrado = false;

  constructor(private router: Router, 
    private modalService: NgbModal,
    private toastr: ToastrManager,
    private exporterDataService: ExporterService,
    private userDataService: UserService,
    private stateDataService: StateService,
    private catastroRegisterDataService: CatastroRegisterService,
    private register_typeDataService: RegisterTypeService,
    private mailerDataService: MailerService,
    private ubicationDataService: UbicationService,
    private declarationDataService: DeclarationService,
    private establishmentDataService: EstablishmentService,
    private declarationAttachmentDataService: DeclarationAttachmentService,
    private procedureJustificationDataService: ProcedureJustificationService,
    private declarationItemCategoryDataService: DeclarationItemCategoryService,
    private declarationItemDataService: DeclarationItemService,
    private registerABDataService: RegisterABService,
    private registerDataService: RegisterService,
    private agreementDataService: AgreementService,
    private registerProcedureDataService: RegisterProcedureService,
    private registerProcedureABDataService: RegisterProcedureABService,
    private registerStateDataService: RegisterStateService,
    private rucDataService: RucService,
    private payDataService: PayService,
    private dinardapDataService: DinardapService) {}
  
  ngOnInit() {
    const today = new Date();
    this.thisYear = today.getFullYear();
    this.user = new User();
    this.getTramiteStates();
    this.getZonalesEstablishment();
    this.getProcedureJustifications();
    this.getDeclarationCategories();
    this.getDeclarationItems();
    this.getUbications();
    this.getTerminosCondicionesAgreement();
  }

  getTerminosCondicionesAgreement() {
   this.agreementDataService.get(1).then( r => {
      this.terminosCondicionesAgreement = r.Agreement as Agreement;
      this.terminosCondicionesAgreement.content = this.terminosCondicionesAgreement.content.replace('##USER##', '<strong>' + this.user.name.toUpperCase() + '</strong>');
      this.terminosCondicionesAgreement.content = this.terminosCondicionesAgreement.content.replace('##RUC##', '<strong>' + this.user.ruc + '</strong>');
   }).catch( e => { console.log(e); });
  }

  getUbications() {
   this.ubications = [];
   this.ubicationDataService.get().then( r => {
      this.ubications = r as Ubication[];
   }).catch( e => { console.log(e); });
  }

  getDeclarationCategories() {
   this.declarationItemCategoryDataService.get().then( r => {
     this.declarationItemsCategories = r as DeclarationItemCategory[];
   }).catch( e => { console.log(e); });
  }

  getDeclarationItems() {
   this.declarationItemDataService.get().then( r => {
     this.declarationItems = r as DeclarationItem[];
   }).catch( e => { console.log(e); });
  }

  getProcedureJustifications() { 
   this.procedureJustificationsToShow = [];
   this.procedureJustifications = [];
   this.procedureJustificationDataService.get().then( r => {
      this.procedureJustifications = r as ProcedureJustification[];
      this.procedureJustifications.forEach(element => {
         if (element.procedure_id == 5) {
            this.procedureJustificationsToShow.push(element);
         }
      });
   }).catch( e => { console.log(e); });
  }

  getStates() {
   this.states = [];
   this.stateDataService.get().then( r => {
      this.states = r as State[];
      this.getRegisterTypes();
      this.getSpecificStates();
   }).catch( e => { console.log(e); });
  }

  getSpecificStates() {
   this.specific_states = [];
   this.states.forEach(element => {
      if (element.father_code == this.estado_tramite_selected_code) {
         this.specific_states.push(element);
      }
   });
  }

  getZonalesEstablishment() {
   this.zonalesEstablishment = [];
   this.provinciasEstablishment = [];
   this.cantonesEstablishment = [];
   this.parroquiasEstablishment = [];
   this.zonalEstablishmentSelectedCode = '-';
   this.provinciaEstablishmentSelectedCode = '-';
   this.cantonEstablishmentSelectedCode = '-';
   this.establishment_selected.ubication_id = 0;
   this.ubicationDataService.get_filtered('-').then( zonales => {
      this.zonalesEstablishment = zonales as Ubication[];
      zonales.forEach(zonal => {
         this.ubicationDataService.get_filtered(zonal.code).then( r => {
            const provincias = r as Ubication[];
            provincias.forEach(provincia => {
               this.provinciasEstablishment.push(provincia);
            });
            this.provinciasEstablishment.sort(function(a, b) {
               const nameA = a.name.toLowerCase().trim();
               const nameB = b.name.toLowerCase().trim();
               if (nameA < nameB) {
                  return -1;
               }
               if (nameA > nameB) {
                  return 1;
               }
               return 0;
            });
         }).catch( e => { console.log(e) });
      });
   }).catch( e => { console.log(e) });
  }

  getCantonesEstablishment() {
   if (this.provinciaEstablishmentSelectedCode == '-') {
      return;
   }
   this.provinciasEstablishment.forEach(provincia => {
      if(provincia.code == this.provinciaEstablishmentSelectedCode){
         this.zonalEstablishmentSelectedCode = provincia.father_code.toString();
         this.establishment_selected.address_map_latitude = provincia.gmap_reference_latitude;
         this.establishment_selected.address_map_longitude = provincia.gmap_reference_longitude;
      }
   });
   this.cantonesEstablishment = [];
   this.parroquiasEstablishment = [];
   this.cantonEstablishmentSelectedCode = '-';
   this.establishment_selected.ubication_id = 0;
   this.ubicationDataService.get_filtered(this.provinciaEstablishmentSelectedCode).then( r => {
      this.cantonesEstablishment = r as Ubication[];
   }).catch( e => { console.log(e) });
  }

  getPays() {
   this.payDataService.get_by_ruc_number(this.ruc.number).then( r => {
      this.pays = r as Pay[];
      this.buildDataTablePays();
   }).catch( e => { console.log(e); } );
  }

  getParroquiasEstablishment() {
   this.parroquiasEstablishment = [];
   this.establishment_selected.ubication_id = 0;
   this.cantonesEstablishment.forEach(canton => {
      if(canton.code == this.cantonEstablishmentSelectedCode){
         this.establishment_selected.address_map_latitude = canton.gmap_reference_latitude;
         this.establishment_selected.address_map_longitude = canton.gmap_reference_longitude;
      }
   });
   this.ubicationDataService.get_filtered(this.cantonEstablishmentSelectedCode).then( r => {
      this.parroquiasEstablishment = r as Ubication[];
   }).catch( e => { console.log(e) });
  }

  updateGmap() {
   this.parroquiasEstablishment.forEach(parroquia => {
      if (parroquia.id == this.establishment_selected.ubication_id) {
         this.establishment_selected.address_map_latitude = parroquia.gmap_reference_latitude;
        this.establishment_selected.address_map_longitude = parroquia.gmap_reference_longitude;
      }
   });
  }

  address_mapEventEstablishment(event) {
   this.establishment_selected.address_map_latitude = event.coords.lat;
   this.establishment_selected.address_map_longitude = event.coords.lng;
  }

  checkEstablishmentAddress(): Boolean {
   if(this.establishment_selected.address_main_street === '' || this.establishment_selected.address_number === '' || this.establishment_selected.address_secondary_street === '') {
      this.addressEstablishmentValidated = false;
      return false;
   }
   this.addressEstablishmentValidated = true;
   return true;
  }

  getRegisterTypes() {
   this.register_typeDataService.get().then( r => {
      this.register_types = r as RegisterType[];
      this.getRegistersMintur();
   }).catch( e => { console.log(e); });
  }

  getRegistersMintur() {
   this.registers_mintur = [];
   this.registerMinturSelected = new Register();
   this.catastroRegisterDataService.searchByRuc(this.ruc.number.toString()).then( r => {
      this.registers_mintur = r;
      this.buildDataTable();
   }).catch( e => console.log(e) );
  }

  getTramiteStates() {
   this.estados_tramites = [];
   this.stateDataService.get().then( r => {
      r.forEach(element => {
         if (element.father_code == '-') {
            this.estados_tramites.push(element);
         }
      });
   }).catch( e => { console.log(e); });
  }

  filterByTramiteState(tramite?: String) {
   let filtroTexto: String = '';
   this.estados_tramites.forEach(estado => {
      if (estado.id == this.idTramiteEstadoFilter) {
       filtroTexto = estado.name;
      }
   });
   if(typeof tramite !== 'undefined') {
      if (tramite == '-') {
       this.config.filtering = {filterString: filtroTexto};
      } else {
       this.config.filtering = {filterString: filtroTexto + ' - ' + tramite};
      }
   } else {
    this.config.filtering = {filterString: filtroTexto};
   }
   this.onChangeTable(this.config);
  }

  borrarDeclaration(declaration) {
   this.declarationDataService.delete(declaration.id).then( r => {
      this.refreshDeclaracion();
   }).catch( e => { console.log(e); });
  }

  refreshDeclaracion() {

  }

  openDialog(content) {
    this.modalService.open(content, { centered: true, size: 'lg' }).result.then(( response => {
       
    }), ( r => {}));
  }

  checkEmail(): Boolean {
    const isOk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email.toString());
    this.emailContactValidated = isOk;
    if (this.user.email.split('@')[1] == 'turismo.gob.ec') {
       this.cuentaInterno = true;
       this.emailContactValidated = false;
    } else {
      this.cuentaInterno = false;
    }
    return this.emailContactValidated;
  }

  fechasNombramiento() {
    const today = new Date();
    const min = new Date(today.getFullYear() - 5, today.getMonth(), today.getDate());
    if(typeof this.ruc.person_representative_attachment.assignment_date === 'undefined') {
       return;
    }
    if (new Date(this.ruc.person_representative_attachment.assignment_date.toString()) > today || new Date(this.ruc.person_representative_attachment.assignment_date.toString()) < min) {
       this.fechaNombramientoOK = false;
    }else {
       this.fechaNombramientoOK = true;
    }
    return {max: today, min: min};
   }
  
   requestReady(): Boolean {
      let toReturn = false;
      let dataInformativa = this.identidadConfirmada 
      && ((this.isRepresentantLegal && this.ruc.tax_payer_type_id == 2) || (this.isRucOwner && this.ruc.tax_payer_type_id == 1))
      && this.secondaryPhoneValidated
      && this.mainPhoneValidated
      && this.emailContactValidated 
      && (this.establishment_selected.ubication_id != 0)
      && this.addressEstablishmentValidated
      && (this.establishment_selected.address_main_street != '')
      && (this.establishment_selected.address_number != '')
      && (this.establishment_selected.address_secondary_street != '')
      && (this.establishment_selected.address_reference != '');
      return dataInformativa;
   }

   validateDeclaration(): Boolean {
    let toReturn = true;
    this.declaration_selected.declaration_item_values_on_declaration.forEach( element => {
       if(element.value<0) {
          toReturn = false;
       }
    });
    return toReturn;
   }

   getDeclarationsByEstablishment(id: number) {
      this.declarations = [];
       this.declarationDataService.get_by_establishment(id).then( r => {
          let my_declaration_response = r as Declaration[];
          my_declaration_response.forEach(element => {
             element.bloqued = false;
          });
          this.declarations = my_declaration_response;
          this.my_tramits = [];
          this.registerABDataService.last_tramit_state(this.ruc.number).then(response_last_tramit_state => {
            const myTramits = response_last_tramit_state as any[];
            myTramits.forEach(element => {
               element.forEach(e1 => {
                  this.my_tramits.push(e1);
               });
            })
            this.declarations.forEach(declaration => {
               this.my_tramits.forEach(tramit => {
                  const tramit_date = new Date(tramit.created_at.toString());
                  const tramit_year = tramit_date.getFullYear();
                  if (declaration.year == tramit_year) {
                     declaration.bloqued = true;
                     declaration.editable = false;
                  }
               });
             });
          }).catch( e => { console.log(e); });
          this.registerDataService.last_tramit_state(this.ruc.number).then(response_last_tramit_state => {
            const myTramits = response_last_tramit_state as any[];
            myTramits.forEach(element => {
               element.forEach(e1 => {
                  this.my_tramits.push(e1);
               });
            })
            const today = new Date();
            this.my_tramits.forEach(tramit => {
               const tramit_date = new Date(tramit.created_at.toString());
               const tramit_year = tramit_date.getFullYear();
               if (tramit_year == today.getFullYear()) {
                  this.canAddNewDeclaration = false;
               }   
            });
            this.declarations.forEach(declaration => {
               this.my_tramits.forEach(tramit => {
                  const tramit_date = new Date(tramit.created_at.toString());
                  const tramit_year = tramit_date.getFullYear();
                  if (declaration.year == tramit_year) {
                     declaration.bloqued = true;
                     declaration.editable = false;
                  }
               });
             });
          }).catch( e => { console.log(e); });
       }).catch( e => { console.log(e); });
   }

   guardarDeclaracion() {
      if (this.balance.declaration_attachment_file_name.length > 40) {
         this.toastr.errorToastr('El nombre del archivo adjunto es demasiado largo.', 'Declaración');
         return;
      }
      if(!this.validateDeclaration) {
         this.toastr.errorToastr('La información ingresada es incorrecta.', 'Declaración');
         return;
      }
      if (this.balance.declaration_attachment_file == ''){
         if (this.ruc.tax_payer_type_id == 2) {
            this.toastr.errorToastr('Adjunte el balance individual del establecimiento, suscrito por el representante legal.', 'Declaración');
         } else {
            this.toastr.errorToastr('Adjunte el inventario valorado del establecimiento, suscrito por el propietario.', 'Declaración');
         }
         return;
      }
      let previamente_declarado = false;
      this.declarations.forEach(declaration => {
         if (declaration.year == this.declaration_selected.year) {
            previamente_declarado = true;
         }
      });
      if (previamente_declarado) {
         this.toastr.errorToastr('Usted ya ha declarado previamente el año seleccionado.', 'Declaración');
         return;
      }
      this.declaration_selected.declaration_item_values_on_declaration = [];
      this.declarationItemsToShow.forEach(element => {
         element.items.forEach(item => {
            this.declaration_selected.declaration_item_values_on_declaration.push(item.valueItem);
         });
      });
      this.guardando = true;
      if (this.establishment_selected.id == 0) {
         this.establishmentDataService.register_min_establishment(this.establishment_selected).then(resp_est => {
            const newEstablishmentRegistered = resp_est as Establishment;
            this.establishment_selected = newEstablishmentRegistered;
            this.declaration_selected.establishment_id = this.establishment_selected.id;
            this.catastroRegisterDataService.update_ruc_code_id(this.selected_register_data.id, this.establishment_selected.ruc_code_id, this.establishment_selected.sri_state).then( resp_cat => {
               this.declarationDataService.register_data(this.declaration_selected).then( r => {
                  if ( r === '0' ) {
                     this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Declaración');
                     return;
                  }
                  this.getDeclarationsByEstablishment(this.establishment_selected.id);
                  const declarationSaved = r as Declaration;
                  this.balance.declaration_id = declarationSaved.id;
                  if (this.balance.id == 0) {
                     this.declarationAttachmentDataService.post(this.balance).then( r1 => {
                        this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Declaración');
                        this.refreshDeclaracion();
                        this.mostrarDataDeclaration = false;
                        this.guardando = false;
                     }).catch( e => {
                        console.log(e);
                        this.guardando = false;
                     });
                  } else {
                     this.declarationAttachmentDataService.put(this.balance).then( r1 => {
                        this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Declaración');
                        this.refreshDeclaracion();
                        this.mostrarDataDeclaration = false;
                        this.guardando = false;
                     }).catch( e => { 
                        console.log(e);
                        this.guardando = false;
                     });
                  }
               }).catch( e => {
                  this.guardando = false;
                  this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Declaración');
                  return;
               });
            }).catch( e => { console.log(e); });
         }).catch( e => { console.log(e); });
      } else {
         this.declaration_selected.establishment_id = this.establishment_selected.id;
         this.declarationDataService.register_data(this.declaration_selected).then( r => {
            if ( r === '0' ) {
               this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Declaración');
               return;
            }
            this.getDeclarationsByEstablishment(this.establishment_selected.id);
            const declarationSaved = r as Declaration;
            this.balance.declaration_id = declarationSaved.id;
            if (this.balance.id == 0) {
               this.declarationAttachmentDataService.post(this.balance).then( r1 => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Declaración');
                  this.refreshDeclaracion();
                  this.mostrarDataDeclaration = false;
                  this.guardando = false;
               }).catch( e => {
                  console.log(e);
                  this.guardando = false;
               });
            } else {
               this.declarationAttachmentDataService.put(this.balance).then( r1 => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Declaración');
                  this.refreshDeclaracion();
                  this.mostrarDataDeclaration = false;
                  this.guardando = false;
               }).catch( e => { 
                  console.log(e);
                  this.guardando = false;
               });
            }
         }).catch( e => {
            this.guardando = false;
            this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Declaración');
            return;
         });
      }
   }

   guardarRegistro() {
      if (this.user.email.split('@')[1] == 'turismo.gob.ec'){
         Swal.fire({
            title: 'Correo eletrónico no válido.',
            text: 'Los correos del dominio turismo.gob.ec no pueden solicitar inactivación de registros.',
            type: 'error',
          })
          .then( response => {
          });
         return;
      }
      if (this.idCausal == 0) {
         this.toastr.errorToastr('Seleccione el motivo del trámite de inactivación.', 'Declaración');
         return;
      }
      if (this.cantonEstablishmentSelectedCode == '021701') {
         this.toastr.errorToastr('Estimado Usuario, para solicitar la inactivación de su Certificado de Registro de Turismo de establecimientos ubicados en el Cantón Quito, por favor acercarse a las oficinas de "Quito Turismo"', 'Inactivación');
         return;
      }
      this.saveRegister();
   }


   saveRegister() {
      this.guardando = true;
      this.user.address = this.establishment_selected.address_main_street.toUpperCase() + ' ' + this.establishment_selected.address_number.toUpperCase() + ' ' + this.establishment_selected.address_secondary_street.toUpperCase();
      this.user.ruc = this.ruc.number;
      this.registrar_usuario();
   }

   registrar_usuario() {
      this.establishmentDataService.register_min_establishment(this.establishment_selected).then(resp_est => {
         const newEstablishmentRegistered = resp_est as Establishment;
         this.establishment_selected = newEstablishmentRegistered;
         this.catastroRegisterDataService.update_ruc_code_id(this.selected_register_data.id, this.establishment_selected.ruc_code_id, this.establishment_selected.sri_state).then( resp_cat => {            
         }).catch(e=>{ console.log(e); }); 
      }).catch(e=>{ console.log(e); });
      this.userDataService.register_user_by_inactivation(this.user).then( r => {
         if (r.repsonse == 'Usuario No RUC') {
            Swal.fire({
               title: 'Correo Electrónico no Válido',
               text: 'El correo electrónico se encuentra utilizado para gestionar los registros de un RUC diferente al ingresado.',
               type: 'error',
            });
            this.guardando = false;
            return;
         }
         let tipo_tramite = 'Inactivación';
         this.rucEstablishmentRegisterSelected.status = 51;
         this.procedureJustification.procedure_id = 5;
         let clasificacion = '';
         let categoria = '';
         this.registers_mintur.forEach(element => {
            if(element.id == this.selected_register_data.id) {
               clasificacion = element.classification;
               categoria = element.category;
               this.establishment_selected.commercially_known_name = element.comercial_name;
            }
         });
         this.procedureJustificationsToShow.forEach(element => {
            if (element.id == this.idCausal) {
               this.procedureJustification.justification = element.justification;
            }
         });
         tipo_tramite = tipo_tramite.toUpperCase();
         const today = new Date();
         const actividad = this.selected_register_data.activity;
         let provincia = new Ubication();
         let canton = new Ubication();
         let parroquia = new Ubication();
         let zonal = new Ubication();
         let iniciales_cordinacion_zonal = '';
         this.ubications.forEach(element => {
            if (element.id == this.establishment_selected.ubication_id) {
            parroquia = element;
            }
         });
         this.ubications.forEach(element => {
            if (element.code == parroquia.father_code) {
            canton = element;
            }
         });
         this.ubications.forEach(element => {
            if (element.code == canton.father_code) {
            provincia = element;
            }
         });
         this.ubications.forEach(element => {
            if (element.code == provincia.father_code) {
            zonal = element;
            }
         });
         this.rucEstablishmentRegisterSelected.code = this.selected_register_data.register_code;
         this.rucEstablishmentRegisterSelected.autorized_complementary_capacities = false;
         this.rucEstablishmentRegisterSelected.autorized_complementary_food_capacities = false;
         this.rucEstablishmentRegisterSelected.establishment_id = this.establishment_selected.id;
         this.rucEstablishmentRegisterSelected.complementary_service_types_on_register = [];
         this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register = [];
         this.rucEstablishmentRegisterSelected.capacities_on_register = [];
         this.rucEstablishmentRegisterSelected.requisites = [];
         this.rucEstablishmentRegisterSelected.editable = false;
         this.rucEstablishmentRegisterSelected.total_spaces = 0;
         this.rucEstablishmentRegisterSelected.total_habitations = 0;
         this.rucEstablishmentRegisterSelected.total_beds = 0;
         this.rucEstablishmentRegisterSelected.tarifario_rack = [];
         this.rucEstablishmentRegisterSelected.kitchen_types_on_register = [];
         this.rucEstablishmentRegisterSelected.service_types_on_register = [];
         if (provincia.name == 'GALÁPAGOS') {
            this.rucEstablishmentRegisterSelected.register_type_id = 1003;
         } else {
            this.rucEstablishmentRegisterSelected.register_type_id = 1001;
         }
         if (actividad == 'ALOJAMIENTO') {
            this.registerDataService.register_register_data(this.rucEstablishmentRegisterSelected).then( r => {
               const zonalName = zonal.name.split(' ');
               iniciales_cordinacion_zonal = zonalName[zonalName.length - 1].toUpperCase();
               let qr_value = 'MT-CZ' + iniciales_cordinacion_zonal + '-' + this.ruc.number + '-SOLICITUD-INACTIVACION-' + actividad + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
               const params = [{tipo_tramite: tipo_tramite},
                  {fecha: today.toLocaleDateString().toUpperCase()},
                  {representante_legal: this.user.name.toUpperCase()},
                  {nombre_comercial: this.establishment_selected.commercially_known_name.toUpperCase()},
                  {ruc: this.ruc.number},
                  {razon_social: this.razon_social},
                  {fecha_solicitud: today.toLocaleDateString().toUpperCase()},
                  {actividad: actividad},
                  {clasificacion: clasificacion.toUpperCase()},
                  {categoria: categoria.toUpperCase()},
                  {provincia: provincia.name.toUpperCase()},
                  {canton: canton.name.toUpperCase()},
                  {parroquia: parroquia.name.toUpperCase()},
                  {calle_principal: this.establishment_selected.address_main_street.toUpperCase()},
                  {numeracion: this.establishment_selected.address_number.toUpperCase()},
                  {calle_secundaria: this.establishment_selected.address_secondary_street.toUpperCase()}];
               this.exporterDataService.template(10, true, qr_value, params).then( r_exporter => {
                  let pdfBase64 = r_exporter;
                  const byteCharacters = atob(r_exporter);
                  const byteNumbers = new Array(byteCharacters.length);
                  for (let i = 0; i < byteCharacters.length; i++) {
                     byteNumbers[i] = byteCharacters.charCodeAt(i);
                  }
                  const byteArray = new Uint8Array(byteNumbers);
                  const blob = new Blob([byteArray], { type: 'application/pdf'});
                  let newRegisterProcedure = new RegisterProcedure();
                  newRegisterProcedure.procedure_justification_id = this.idCausal;
                  newRegisterProcedure.register_id = r.id;
                  newRegisterProcedure.date = new Date();
                  this.registerProcedureDataService.post(newRegisterProcedure).then( regProc => { 
                  }).catch( e => { console.log(e); });
                  saveAs(blob, qr_value + '.pdf');
                  const information = {
                     para: this.user.name.toUpperCase(),
                     tramite: tipo_tramite.toUpperCase(),
                     ruc: this.ruc.number,
                     nombreComercial: this.establishment_selected.commercially_known_name.toUpperCase(),
                     fechaSolicitud: today.toLocaleString(),
                     actividad: 'Alojamiento Turístico'.toUpperCase(),
                     clasificacion: clasificacion.toUpperCase(),
                     categoria: categoria.toUpperCase(),
                     razon_social: this.razon_social.toUpperCase(),
                     tipoSolicitud: tipo_tramite.toUpperCase(),
                     provincia: provincia.name.toUpperCase(),
                     canton: canton.name.toUpperCase(),
                     parroquia: parroquia.name.toUpperCase(),
                     callePrincipal: this.establishment_selected.address_main_street.toUpperCase(),
                     calleInterseccion: this.establishment_selected.address_secondary_street.toUpperCase(),
                     numeracion: this.establishment_selected.address_number.toUpperCase(),
                     thisYear: today.getFullYear(),
                     pdfBase64: pdfBase64,
                  };
                  this.mailerDataService.sendMail('mail', this.user.email.toString(), 'Información de Detalle de Solicitud', information).then( r_mail => {
                     this.guardando = false;
                     this.toastr.successToastr('Solicitud Enviada, Satisfactoriamente.', 'Inactivación');
                     this.router.navigate(['/login']);
                  }).catch( e => { console.log(e); });
               }).catch( e => { console.log(e); });
            }).catch( e => {
               this.guardando = false;
               this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Inactivación');
               return;
            });
         }
         if (actividad == 'ALIMENTOS Y BEBIDAS') {
            this.registerABDataService.register_register_data(this.rucEstablishmentRegisterSelected).then( r => {
               const zonalName = zonal.name.split(' ');
               iniciales_cordinacion_zonal = zonalName[zonalName.length - 1].toUpperCase();
               let qr_value = 'MT-CZ' + iniciales_cordinacion_zonal + '-' + this.ruc.number + '-SOLICITUD-INACTIVACION-' + actividad + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
               const params = [{tipo_tramite: tipo_tramite},
                  {fecha: today.toLocaleDateString().toUpperCase()},
                  {representante_legal: this.user.name.toUpperCase()},
                  {nombre_comercial: this.establishment_selected.commercially_known_name.toUpperCase()},
                  {ruc: this.ruc.number},
                  {razon_social: this.razon_social},
                  {fecha_solicitud: today.toLocaleDateString().toUpperCase()},
                  {actividad: actividad},
                  {clasificacion: clasificacion.toUpperCase()},
                  {categoria: categoria.toUpperCase()},
                  {provincia: provincia.name.toUpperCase()},
                  {canton: canton.name.toUpperCase()},
                  {parroquia: parroquia.name.toUpperCase()},
                  {calle_principal: this.establishment_selected.address_main_street.toUpperCase()},
                  {numeracion: this.establishment_selected.address_number.toUpperCase()},
                  {calle_secundaria: this.establishment_selected.address_secondary_street.toUpperCase()}];
               this.exporterDataService.template(10, true, qr_value, params).then( r_exporter => {
                  let pdfBase64 = r_exporter;
                  const byteCharacters = atob(r_exporter);
                  const byteNumbers = new Array(byteCharacters.length);
                  for (let i = 0; i < byteCharacters.length; i++) {
                     byteNumbers[i] = byteCharacters.charCodeAt(i);
                  }
                  const byteArray = new Uint8Array(byteNumbers);
                  const blob = new Blob([byteArray], { type: 'application/pdf'});
                  let newRegisterProcedure = new RegisterProcedure();
                  newRegisterProcedure.procedure_justification_id = this.idCausal;
                  newRegisterProcedure.register_id = r.id;
                  newRegisterProcedure.date = new Date();
                  this.registerProcedureABDataService.post(newRegisterProcedure).then( regProc => { 
                  }).catch( e => { console.log(e); });
                  saveAs(blob, qr_value + '.pdf');
                  const information = {
                     para: this.user.name.toUpperCase(),
                     tramite: tipo_tramite.toUpperCase(),
                     ruc: this.ruc.number,
                     nombreComercial: this.establishment_selected.commercially_known_name.toUpperCase(),
                     fechaSolicitud: today.toLocaleString(),
                     actividad: 'Alimentos y Bebidas'.toUpperCase(),
                     clasificacion: clasificacion.toUpperCase(),
                     categoria: categoria.toUpperCase(),
                     razon_social: this.razon_social.toUpperCase(),
                     tipoSolicitud: tipo_tramite.toUpperCase(),
                     provincia: provincia.name.toUpperCase(),
                     canton: canton.name.toUpperCase(),
                     parroquia: parroquia.name.toUpperCase(),
                     callePrincipal: this.establishment_selected.address_main_street.toUpperCase(),
                     calleInterseccion: this.establishment_selected.address_secondary_street.toUpperCase(),
                     numeracion: this.establishment_selected.address_number.toUpperCase(),
                     thisYear: today.getFullYear(),
                     pdfBase64: pdfBase64,
                  };
                  this.mailerDataService.sendMail('mail', this.user.email.toString(), 'Información de Detalle de Solicitud', information).then( r_mail => {
                     this.guardando = false;
                     this.toastr.successToastr('Solicitud Enviada, Satisfactoriamente.', 'Inactivación');
                     this.router.navigate(['/login']);
                  }).catch( e => { console.log(e); });
               }).catch( e => { console.log(e); });
            }).catch( e => {
               this.guardando = false;
               this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Inactivación');
               return;
            });
         }
      }).catch( e => {console.log(e); });
   }

  checkCedula() {
    this.user.identification = this.user.identification.replace(/[^\d]/, '');
    if (this.user.identification.length !== 10) {
       this.identificationValidated = false;
       this.consumoCedula = false;
       this.fechaIngresada = '';
       this.identidadConfirmada = false;
       this.continuar_proceso = false;
       this.mostrarMasData = false;
       return;
    }
    if (this.consumoCedula && this.REGCIVILOK) {
       return;
    }
    this.SRIOK = false;
    this.CedulaData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al Registro Civil...</strong></div>';
    if (!this.consumoCedula) {
       this.identificationValidated = true;
       this.consumoCedula = true;
       this.dinardapDataService.get_cedula(this.user.identification).then( r => {
          const registros = r.original.entidades.entidad.filas.fila.columnas.columna;
          this.CedulaData = '';
          this.REGCIVILOK = true;
          let sorteo = [];
          registros.forEach(element => {
             if (element.campo === 'cedula') {
                if (element.valor === this.user.identification) {
                  this.toastr.successToastr('La cédula ingresada es correcta.', 'Registro Civil');
                  this.identificationValidated = true;
                } else {
                  this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
                  this.identificationValidated = false;
                }
             }
             if (this.identificationValidated) {
                if (element.campo === 'nombre') {
                   this.user.name= element.valor;
                }
                if (element.campo === 'fechaNacimiento') {
                  if (JSON.stringify(element.valor) !== '{}') {
                     sorteo.push(0);
                   }
                   this.fechaNacimiento = element.valor;
                }
                if (element.campo === 'fechaExpiracion') {
                  if (JSON.stringify(element.valor) !== '{}') {
                     sorteo.push(1);
                   } 
                  this.fechaExpiracion = element.valor;
                }
                if (element.campo === 'fechaExpedicion') {
                  if (JSON.stringify(element.valor) !== '{}') {
                     sorteo.push(2);
                   }
                   this.fechaExpedicion = element.valor;
                }
             }
          });
          const indice = Math.floor(Math.random() * sorteo.length);
          this.aleatorio = sorteo[indice];
       }).catch( e => {
         this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
         this.CedulaData = '<div class="alert alert-danger" role="alert">El Registro Civil, no respondió. Vuelva a intentarlo.</div>';
         this.REGCIVILOK = false;
         this.SRIOK = false;
         this.consumoCedula = false;
         this.identificationValidated = false;
       });
    }
   }

   checkTelefonoPrincipal(): Boolean {
    if (this.user.main_phone_number == null) {
      this.user.main_phone_number = '';
    }
     this.user.main_phone_number = this.user.main_phone_number.replace(/[^\d]/, '');
    if (this.user.main_phone_number.length < 9) {
       this.mainPhoneValidated = false;
       return false;
    }
    this.mainPhoneValidated = true;
    return true;
   }
 
   checkTelefonoSecundario(): Boolean {
     if (this.user.secondary_phone_number == null) {
       this.user.secondary_phone_number = '';
     }
    this.user.secondary_phone_number = this.user.secondary_phone_number.replace(/[^\d]/, '');
    if (this.user.secondary_phone_number.length > 0 && this.user.secondary_phone_number.length < 9) {
       this.secondaryPhoneValidated = false;
       return false;
    }
    this.secondaryPhoneValidated = true;
    return true;
   }

   confirmarIdentidad() {
    if (this.fechaIngresada == '') {
      return false;
    }
    if (this.aleatorio == 0) {
       if( this.fechaIngresada == this.fechaNacimiento) {
          this.identidadConfirmada = true;
          return true;
       }
    }
    if (this.aleatorio == 1) {
       if( this.fechaIngresada == this.fechaExpiracion) {
          this.identidadConfirmada = true;
          return true;
       }
    }
    if (this.aleatorio == 2) {
       if( this.fechaIngresada == this.fechaExpedicion) {
          this.identidadConfirmada = true;
          return true;
       }
    }
    this.identidadConfirmada = false;
    this.cedulaNombre = '';
    return false;
  }

  checkRuc() {
    this.ruc.number = this.ruc.number.replace(/[^\d]/, '');
    if (this.ruc.number.length !== 13) {
      this.rucValidated = false;
      this.consumoRuc = false;
      this.continuar_proceso = false;
      this.mostrarMasData = false;
      return;
    }
    if (this.consumoRuc && this.SRIOK) {
       return;
    }
    this.rucData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al SRI...</strong></div>';
    if (!this.consumoRuc && this.identificationValidated) {
      this.rucValidated = true;
      this.consumoRuc = true;
      this.rucInactive = true;
      this.dinardapDataService.get_RUC(this.ruc.number).then( r => {
        this.SRIOK = true; 
        this.rucValidated = true;
        const itemsDetalles_SRI_RUC = r.sri_ruc.original.entidades.entidad.filas.fila.columnas.columna;
        const itemsDetalles_SRI_RUC_COMPLETO = r.sri_ruc_completo.original.entidades.entidad;
        this.establishment_selected.ruc_code_id = '-';
        this.rucData = '';
        let datosGenerales = '';
        let datosRL = '';
        let nombreRL = '';
        itemsDetalles_SRI_RUC_COMPLETO.forEach(entidad => {
           if (entidad.nombre == 'Actividad Economica') {
              const AE = entidad.filas.fila.columnas.columna;
              AE.forEach(element => {
                 if (element.campo == 'actividadGeneral') {
                 }
              });
           }
           if (entidad.nombre == 'Contribuyente Datos Completo') {
              const DC = entidad.filas.fila.columnas.columna;
              DC.forEach(element => {
                 if (element.campo == 'razonSocial') {
                    this.razon_social = element.valor;
                    datosGenerales += '<strong>Razón Social: </strong> ' + element.valor + '<br/>';
                 }
                 if (element.campo == 'email') {
                    if (JSON.stringify(element.valor) !== '{}') {
                    }
                 }
                 if (element.campo == 'telefonoDomicilio') {
                    if (JSON.stringify(element.valor) !== '{}') {
                    }
                 }
              });
           }
           if (entidad.nombre == 'Representante Legal') {
              const RL = entidad.filas.fila.columnas.columna;
              RL.forEach(element => {
                 if (element.campo == 'identificacion') {
                    if (JSON.stringify(element.valor) !== '{}') {
                       this.ruc.person_representative.identification = element.valor;
                       this.checkIdentificationRepresentant();
                    }
                 }
                 if (element.campo == 'nombre') {
                   datosRL += '<strong>Nombre Representante Legal: </strong> ' + element.valor + '<br/>';
                   nombreRL = element.valor;
                 }
              });
           }
        });
        itemsDetalles_SRI_RUC.forEach(element => {
           if (element.campo == 'estadoContribuyente') {
              if (element.valor === 'ACTIVO') {
                 this.rucInactive = false;
              } else {
                 this.rucInactive = true;
              }
           }
           if (element.campo == 'fechaInscripcionRuc') {
           }
           if (element.campo == 'fechaActualizacion') {
           }
           if (element.campo == 'obligado') {
              if (element.valor == 'N') {
                 this.ruc.baised_accounting = false;
              } else {
                 this.ruc.baised_accounting = true;
              }
           }
           if (element.campo == 'personaSociedad') {
              if (element.valor == 'PNL') {
                 this.ruc.tax_payer_type_id = 1;
                 this.checkRazonSocial();
              } else {
                 this.ruc.tax_payer_type_id = 2;
              }
           }
           this.rucData = datosGenerales;
           this.ruc.owner_name = this.razon_social;
           if (this.ruc.tax_payer_type_id != 1) {
            this.rucData += datosRL;
            this.ruc.owner_name = nombreRL;
           }
           if (this.SRIOK) {
            this.startToGetInformationRegisters();
           }
           this.rucDataService.get_filtered(this.ruc.number).then( ruc_response => {
            const rucIncomming: Ruc = ruc_response.Ruc as Ruc;
            if (ruc_response !== 'ruc no encontrado') {
              this.ruc.id = rucIncomming.id;
              this.ruc.baised_accounting = rucIncomming.baised_accounting;
              this.ruc.contact_user_id = rucIncomming.contact_user_id;
              this.ruc.owner_name = rucIncomming.owner_name;
              this.ruc.tax_payer_type_id = rucIncomming.tax_payer_type_id;
              this.getPays();
              this.checkTelefonoSecundario();
            } else {
               if (!this.guardandoRucNuevo) {
                  this.guardandoRucNuevo = true;
                  this.ruc.contact_user_id = 1;
                  this.rucDataService.post(this.ruc).then(r11 => {
                  }).catch( e => { console.log(e); });
               }
            }
           }).catch( e => { console.log(e); } );
        });
     }).catch( e => {
        console.log(e);
        this.rucData = '<div class="alert alert-danger" role="alert">El SRI, no respondió. Vuelva a intentarlo.</div>';
        this.consumoRuc = false;
        this.SRIOK = false;
     });
   }
  }

  getEstablishmentsOnRuc(currentpage: number) {
   this.mostrarDataEstablishment = false;
   this.establecimientos_pendiente = true;
   this.establishment_selected = new Establishment();
   this.establishment_selected.ruc_code_id = this.establishment_ruc_code;
   this.establishment_selected.ruc_id = this.ruc.id;
   this.establishmentDataService.getByRuc(this.ruc.number, this.recordsByPageEstablishment, currentpage).then( r => {
      const establecimientos = r.data as Establishment[];
      this.conectandoSRIUbicacion = true;
      this.dinardapDataService.get_RUC(this.ruc.number).then( dinardap => {
         this.conectandoSRIUbicacion = false;
         this.establecimientos_pendiente = false;
         let itemsDetalles = [];
         if (!Array.isArray(dinardap.sri_establecimientos.original.entidades.entidad.filas.fila)) {
            itemsDetalles = [dinardap.sri_establecimientos.original.entidades.entidad.filas.fila];
         } else {
            itemsDetalles = dinardap.sri_establecimientos.original.entidades.entidad.filas.fila;
         }
         itemsDetalles.forEach(sri_establecimiento => {
           let existe = false;
           const newEstablishment = new Establishment();
           sri_establecimiento.columnas.columna.forEach(sriData => {
              if (sriData.campo === 'estadoEstablecimiento') {
                 newEstablishment.sri_state = sriData.valor as string;
              }
              if (sriData.campo === 'calle') {
                 if (JSON.stringify(sriData.valor) !== '{}') {
                    newEstablishment.address_main_street = sriData.valor;   
                 } else {
                    newEstablishment.address_main_street = '';
                 }
              }
              if (sriData.campo === 'numero') {
                 if (JSON.stringify(sriData.valor) !== '{}') {
                    newEstablishment.address_number = sriData.valor;
                 } else {
                    newEstablishment.address_number = '';
                 }
              }
              if (sriData.campo === 'interseccion') {
                 if (JSON.stringify(sriData.valor) !== '{}') {
                    newEstablishment.address_secondary_street = sriData.valor;
                 } else {
                    newEstablishment.address_secondary_street = '';
                 }
              }
              if (sriData.campo === 'numeroEstablecimiento') {
                 newEstablishment.ruc_code_id = sriData.valor as string;
              }
              if (sriData.campo === 'nombreFantasiaComercial') {
                 if (JSON.stringify(sriData.valor) !== '{}') {
                    newEstablishment.commercially_known_name = sriData.valor as string;
                 } else {
                    newEstablishment.commercially_known_name = '';
                 }
              }
           });
           establecimientos.forEach(establecimiento => {
              if (establecimiento.ruc_code_id === newEstablishment.ruc_code_id.trim()) {
                 existe = true;
                 establecimiento.sri_state = newEstablishment.sri_state;
              }
           });
           if (!existe) {
              newEstablishment.id = 0;
              establecimientos.push(newEstablishment);
           }
           this.ruc.establishments = establecimientos;
           this.continuar_proceso = true;
        });
        if(establecimientos.length == 0){
           this.ruc.establishments = [];
        }
        this.buildDataTableEstablishment();
      }).catch( e => { 
         console.log(e); 
         this.conectandoSRIUbicacion = false;
      });
   }).catch( e => { 
      console.log(e); 
      this.conectandoSRIUbicacion = false;
   });
  }

  continuarProcesoInactivacion() {
   if (this.establishment_ruc_code == 'NULL') {
      this.mostrarListadoEstablecimientos = true;
   } else {
      this.mostrarListadoEstablecimientos = false;
      this.ruc.establishments.forEach(establecimiento => {
         if (this.establishment_ruc_code == establecimiento.ruc_code_id) {
          this.establishment_selected.ruc_id = this.ruc.id;
          this.establishment_selected.id = establecimiento.id;
          this.establishment_selected.as_turistic_register_date = this.selected_register_data.as_turistic_date;
          this.establishment_selected.ruc_code_id = establecimiento.ruc_code_id;
          this.establishment_selected.address_main_street = establecimiento.address_main_street;
          this.establishment_selected.address_secondary_street = establecimiento.address_secondary_street;
          this.establishment_selected.address_number = establecimiento.address_number;
          this.establishment_selected.address_map_latitude = establecimiento.address_map_latitude;
          this.establishment_selected.address_map_longitude = establecimiento.address_map_longitude;
          this.establishment_selected.address_reference = establecimiento.address_reference;
          this.establishment_selected.ubication_id = establecimiento.ubication_id;
          this.mostrarMasData = true;
          this.recoverUbication();
          this.checkEstablishmentAddress();
          this.getDeclarationsByEstablishment(establecimiento.id);
        }
      });
   }
  }

  recoverUbication() {
   this.ubicationDataService.getByIdLower(this.establishment_selected.ubication_id).then( r => {
     this.zonalEstablishmentSelectedCode = r.zonal.code;
     this.provinciaEstablishmentSelectedCode = r.provincia.code;
     this.cantonEstablishmentSelectedCode = r.canton.code;
     this.establishment_selected.ubication_id = r.parroquia.id;
     this.mostrarUbicationEstablishment = true;
     this.getCantonesEstablishmentRecovery();
     this.getParroquiasEstablishmentRecovery();
   }).catch( e => { console.log(e); });
  }

  getCantonesEstablishmentRecovery() {
   this.ubicationDataService.get_filtered(this.provinciaEstablishmentSelectedCode).then( r => {
      this.cantonesEstablishment = r as Ubication[];
   }).catch( e => { console.log(e) });
  }

  getParroquiasEstablishmentRecovery() {
   this.ubicationDataService.get_filtered(this.cantonEstablishmentSelectedCode).then( r => {
      this.parroquiasEstablishment = r as Ubication[];
   }).catch( e => { console.log(e) });
  }

  buildDataTableEstablishment() {
   this.columnsEstablishment = [
      {title: '', name: 'selected'},
      {title: 'Número de Establecimiento', name: 'code'},
      {title: 'Dirección', name: 'address'},
      {title: 'Nombre Comercial', name: 'name'},
      {title: 'Estado', name: 'sri_state'},
   ];
   const data = [];
   this.ruc.establishments.forEach(item => {
       let yaRegistrado = false;
       data.push({
         selected: '',
         code: item.ruc_code_id,
         yaRegistrado: yaRegistrado,
         main_street_address: item.address_main_street, 
         secondary_street_address: item.address_secondary_street,
         number_address: item.address_number,
         address: item.address_main_street + ' ' + item.address_number + ' ' + item.address_secondary_street,
         name: item.commercially_known_name,
         sri_state: item.sri_state,
      });
   });
    data.sort((previous: any, current: any) => {
       if (Number(previous.code) > Number(current.code)) {
          return 1;
       } else if (Number(previous.code) < Number(current.code)) {
          return -1;
       }
       return 0;
    });
   this.dataEstablishment = data;
   this.onChangeTableEstablishment(this.config);
  }

  onChangeTableEstablishment(config: any, event?): any {
   const page: any = {page: this.currentPageEstablishment, itemsPerPage: this.recordsByPageEstablishment};
   if (config.filtering) {
     Object.assign(this.config.filtering, config.filtering);
   }
   if (config.sorting) {
     Object.assign(this.config.sorting, config.sorting);
   }
   const filteredData = this.changeFilterEstablishment(this.dataEstablishment, this.config);
   const sortedData = this.changeSortEstablishment(filteredData, this.config);
   this.rowsEstablishment = page && config.paging ? this.changePageEstablishment(page, sortedData) : sortedData;
  }

  onCellClickEstablishment(event) {
   this.mostrarUbicationEstablishment = true;
   this.establishment_selected.ruc_id = this.ruc.id;
   this.establishment_selected.id = 0;
   this.establishment_selected.ruc_code_id = event.row.code;
   this.declarations = [];
   this.establishment_selected.sri_state = event.row.sri_state;
   this.establishment_selected.as_turistic_register_date = this.selected_register_data.as_turistic_date;
   this.establishment_selected.commercially_known_name = event.row.name;
   this.establishment_selected.address_main_street = event.row.main_street_address;
   this.establishment_selected.address_number = event.row.number_address;
   this.establishment_selected.address_secondary_street = event.row.secondary_street_address;
   this.checkEstablishmentAddress();
   this.rowsEstablishment.forEach(row => {
      if (row.code == event.row.code) {
         row.selected = '<div class="col-12 text-right"><span class="far fa-hand-point-right"></span></div>';
      } else {
         row.selected = '';
      }
   });
  }

  changePageEstablishment(page: any, data: Array<any> = this.dataEstablishment):Array<any> {
   const start = (page.page - 1) * page.itemsPerPage;
   const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
   return data.slice(start, end);
  }

  changeFilterEstablishment(data: any, config: any): any {
   this.mostrarDataEstablishment = false;
   this.rowsEstablishment.forEach(row => {
      row.selected = '';
   });
   let filteredData: Array<any> = data;
   this.columnsEstablishment.forEach((column: any) => {
     if (column.filtering) {
       filteredData = filteredData.filter((item: any) => {
         return item[column.name].match(column.filtering.filterString);
       });
     }
   });
   if (!config.filtering) {
     return filteredData;
   }
   if (config.filtering.columnName) {
     return filteredData.filter((item:any) =>
       item[config.filtering.columnName].match(this.config.filtering.filterString));
   }
   const tempArray: Array<any> = [];
   filteredData.forEach((item: any) => {
     let flag = false;
     this.columnsEstablishment.forEach((column: any) => {
       if (item[column.name].toString().match(this.config.filtering.filterString)) {
         flag = true;
       }
     });
     if (flag) {
       tempArray.push(item);
     }
   });
   filteredData = tempArray;
   return filteredData;
  }

  changeSortEstablishment(data: any, config: any): any {
   if (!config.sorting) {
     return data;
   }
   const columns = this.config.sorting.columns || [];
   let columnName: string = void 0;
   let sort: string = void 0;
   for (let i = 0; i < columns.length; i++) {
     if (columns[i].sort !== '' && columns[i].sort !== false) {
       columnName = columns[i].name;
       sort = columns[i].sort;
     }
   }
   if (!columnName) {
     return data;
   }
   return data.sort((previous:any, current:any) => {
     if (previous[columnName] > current[columnName]) {
       return sort === 'desc' ? -1 : 1;
     } else if (previous[columnName] < current[columnName]) {
       return sort === 'asc' ? -1 : 1;
     }
     return 0;
   });
  }

  downloadBalance() {
   this.downloadFile(
      this.balance.declaration_attachment_file,
      this.balance.declaration_attachment_file_type,
      this.balance.declaration_attachment_file_name);
  }

  borrarBalance() {
   this.balance = new DeclarationAttachment();
  }

  CodificarArchivoBalance(event) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.balance.declaration_attachment_file = reader.result.toString().split(',')[1];
      this.balance.declaration_attachment_file_type = file.type;
      this.balance.declaration_attachment_file_name = file.name;
    };
   }
  }

  refreshDeclarationInfo() {
   this.calcTotalPartials();
   this.calcularUnoxMil();
  }

  newDeclaration() {
   this.declaration_selected = new Declaration();
   this.mostrarDataDeclaration = true;
   this.guardando = false;
   this.balance = new DeclarationAttachment();
   this.buildDeclarationItemsToShow();
  }

  cancelDeclaration() {
   this.declaration_selected = new Declaration();
   this.mostrarDataDeclaration = false;
   this.balance = new DeclarationAttachment();
  }

  buildDeclarationItemsToShow() {
   this.declarationItemsToShow = [];
   this.declarationItemsCategories.forEach(category => {
      category.total = 0;
      if (category.tax_payer_type_id == this.ruc.tax_payer_type_id) {
         const items = [];
         this.declarationItems.forEach(item => {
           if(item.declaration_item_category_id == category.id) {
              const newValueItem = new DeclarationItemValue();
              newValueItem.declaration_item_id = item.id;
              if (item.tax_payer_type_id == this.ruc.tax_payer_type_id) {
                items.push({declarationItem: item, valueItem: newValueItem});
              }
              category.total += newValueItem.value * item.factor;
           }
         });
         this.declarationItemsToShow.push({Category: category, items: items});  
      }
   });
   this.calcularUnoxMil();
  }

  buildDataTable() {
   this.columns = [
      {title: '', name: 'selected'},
      {title: 'Establecimiento', name: 'comercial_name'},
      {title: 'Fecha de Registro', name: 'as_turistic_date'},
      {title: 'Número de Registro', name: 'register_code'},
      {title: 'Provincia', name: 'ubication_main'},
      {title: 'Cantón', name: 'ubication_sencond'},
      {title: 'Parroquia', name: 'ubication_third'},
      {title: 'Dirección', name: 'address'},
      {title: 'Actividad', name: 'activity'},
      {title: 'Categoría', name: 'category'},
      {title: 'Clasificación', name: 'classification'},
      {title: 'Estado', name: 'establishment_state'},
   ];
   let data = [];
   const dataSITURIN = [];
   const dataSIETE = [];
   const dataOTHERS = [];
   this.registers_mintur.forEach(item => {
       let existe = false;
       this.estados.forEach(element => {
          if (element == item.establishment_state) {
             existe = true;
          }
       });
       if (!existe) {
          this.estados.push(item.establishment_state);
       }
       const newItem = {
          selected: '',
          activity: item.activity,
          address: item.address,
          as_turistic_date: item.as_turistic_date,
          category: item.category,
          classification: item.classification,
          comercial_name: item.comercial_name,
          created_at: item.created_at,
          email: item.email,
          establishment_property_type: item.establishment_property_type,
          establishment_ruc_code: item.establishment_ruc_code,
          establishment_state: item.establishment_state,
          georeference_latitude: item.georeference_latitude,
          georeference_longitude: item.georeference_longitude,
          id: item.id,
          legal_representant_identification: item.legal_representant_identification,
          legal_representant_name: item.legal_representant_name,
          main_phone_number: item.main_phone_number,
          max_areas: item.max_areas,
          max_beds: item.max_beds,
          max_capacity: item.max_capacity,
          organization_type: item.organization_type,
          register_code: item.register_code,
          ruc: item.ruc,
          ruc_state: item.ruc_state,
          secondary_phone_number: item.secondary_phone_number,
          system_source: item.system_source,
          total_female: item.total_female,
          total_male: item.total_male,
          ubication_main: item.ubication_main,
          ubication_sencond: item.ubication_sencond,
          ubication_third: item.ubication_third,
          updated_at: item.updated_at,
          web: item.web,
       };
       if ((newItem.establishment_state.toUpperCase() == 'ABIERTO') || (newItem.establishment_state.toUpperCase() == 'ACTIVO') ) {
         if (newItem.system_source == 'SIETE') {
            dataSIETE.push(newItem);
         }
         if (newItem.system_source == 'SITURIN') {
            dataSITURIN.push(newItem);
         }
         if (newItem.system_source !== 'SITURIN' || newItem.system_source !== 'SIETE') {
            dataOTHERS.push(newItem);
         }
       }
   });
   dataSITURIN.forEach(element => {
      data = this.storeInData(data, element);
   });
   dataSIETE.forEach(itemSIETE => {
      let existeSITURIN = false;
      dataSITURIN.forEach(itemSITURIN => {
         if (itemSITURIN.establishment_ruc_code == itemSIETE.establishment_ruc_code) {
          existeSITURIN = true;
         }
      });
      if (!existeSITURIN) {         
         data = this.storeInData(data, itemSIETE);
      }
   });
   dataOTHERS.forEach(itemOTHER => {
      data = this.storeInData(data, itemOTHER);
   });
   this.data = data;
   if (this.data.length == 0) {
      if (!this.mensajeMostrado) {
         this.mensajeMostrado = true;
         Swal.fire({
            title: 'No tiene Registros Mintur',
            text: 'Se ha validado que usted no tiene registros catastrados en el Ministerio de Turismo',
            type: 'error',
          })
          .then( response => {
            sessionStorage.clear();
            this.router.navigate(['/login']);
          });
      }
   }
   this.onChangeTable(this.config);
  }

  storeInData(data, element) {
   let existe = false;
   data.forEach(e1 => {
      if (e1 == element) {
         existe = true;
      }
   });
   if (!existe) {
      data.push(element);
   }
   return data;
  }

  onChangeTable(config: any, page: any = {page: this.currentPageMinturRegisters, itemsPerPage: this.recordsByPageRegisterMintur}): any {
   if (config.filtering) {
     Object.assign(this.config.filtering, config.filtering);
   }
   if (config.sorting) {
     Object.assign(this.config.sorting, config.sorting);
   }
   const filteredData = this.changeFilter(this.data, this.config);
   const sortedData = this.changeSort(filteredData, this.config);
   this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
  }

  selectDeclaration(declaration: Declaration) {
   this.declaration_selected = declaration;
   this.getDeclarationAttachment(declaration.id);
   this.mostrarDataDeclaration = true;
   this.declarationItemsToShow = [];
   this.guardando = false;
   this.declarationItemsCategories.forEach(category => {
      if (category.tax_payer_type_id == this.ruc.tax_payer_type_id) {
         const items = [];
         declaration.declaration_item_values_on_declaration.forEach(newValueItem => {
            this.declarationItems.forEach(item => {
               if (item.tax_payer_type_id == this.ruc.tax_payer_type_id) {
                  if ((item.id == newValueItem.declaration_item_id) && (item.declaration_item_category_id == category.id)) {
                     items.push({declarationItem: item, valueItem: newValueItem});
                  }
               }
            });
         });
         this.declarationItemsToShow.push({Category: category, items: items});
      }
   });
   this.calcularUnoxMil();
   this.calcTotalPartials();
  }

  calcularUnoxMil() {
   this.totalunoxmil = 0;
   this.declarationItemsToShow.forEach(itemToShow => {
      itemToShow.items.forEach(item => {
         this.totalunoxmil += item.valueItem.value * (item.declarationItem.factor);
      });
   });
  }

  calcTotalPartials() {
   this.declarationItemsToShow.forEach(group => {
      group.Category.total = 0;
      group.items.forEach(item => {
         group.Category.total += item.valueItem.value * item.declarationItem.factor;
      });
   });
  }

  getDeclarationAttachment(declaration_id: number) {
   this.declarationAttachmentDataService.get_by_declaration_id(declaration_id).then( r => {
      this.balance = r as DeclarationAttachment;
   }).catch( e => { console.log(e); });
  }

  changeFilter(data: any, config: any): any {
   this.rows.forEach(row => {
      row.selected = '';
   });
   let filteredData: Array<any> = data;
   this.columns.forEach((column: any) => {
     if (column.filtering) {
       filteredData = filteredData.filter((item: any) => {
         return item[column.name].match(column.filtering.filterString);
       });
     }
   });
   if (!config.filtering) {
     return filteredData;
   }
   if (config.filtering.columnName) {
     return filteredData.filter((item:any) =>
       item[config.filtering.columnName].match(this.config.filtering.filterString));
   }
   const tempArray: Array<any> = [];
   filteredData.forEach((item: any) => {
     let flag = false;
     this.columns.forEach((column: any) => {
       if (item[column.name].toString().match(this.config.filtering.filterString)) {
         flag = true;
       }
     });
     if (flag) {
       tempArray.push(item);
     }
   });
   filteredData = tempArray;
   return filteredData;
  }

  changeSort(data: any, config: any): any {
   if (!config.sorting) {
     return data;
   }
   const columns = this.config.sorting.columns || [];
   let columnName: string = void 0;
   let sort: string = void 0;
   for (let i = 0; i < columns.length; i++) {
     if (columns[i].sort !== '' && columns[i].sort !== false) {
       columnName = columns[i].name;
       sort = columns[i].sort;
     }
   }
   if (!columnName) {
     return data;
   }
   return data.sort((previous:any, current:any) => {
     if (previous[columnName] > current[columnName]) {
       return sort === 'desc' ? -1 : 1;
     } else if (previous[columnName] < current[columnName]) {
       return sort === 'asc' ? -1 : 1;
     }
     return 0;
   });
  }

  changePage(page: any, data: Array<any> = this.data):Array<any> {
   const start = (page.page - 1) * page.itemsPerPage;
   const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
   return data.slice(start, end);
  }

  onCellClick(event) {
     this.mostrarCausales = true;
     this.register_catastro_selected_id = event.row.id;
     this.rows.forEach(row => {
      if (this.register_catastro_selected_id == row.id) {
         row.selected = '<div class="col-12 text-right"><span class="far fa-hand-point-right"></span></div>';
      } else {
         row.selected = '';
      }
     });
     this.selected_register_data = event.row;
     this.establishment_selected.as_turistic_register_date = this.selected_register_data.as_turistic_date;
     this.establishment_ruc_code = event.row.establishment_ruc_code;
     this.getEstablishmentsOnRuc(1);
  }

  onChangeTablePays(config: any, event?): any {
   const page: any = {page: this.currentPagePays, itemsPerPage: this.recordsByPagePays};
   if (config.filtering) {
     Object.assign(this.config.filtering, config.filtering);
   }
   if (config.sorting) {
     Object.assign(this.config.sorting, config.sorting);
   }
   const filteredData = this.changeFilterPays(this.dataPays, this.config);
   const sortedData = this.changeSortPays(filteredData, this.config);
   this.rowsPays = page && config.paging ? this.changePagePays(page, sortedData) : sortedData;
  }

  changeFilterPays(data: any, config: any): any {
   let filteredData: Array<any> = data;
   this.columnsPays.forEach((column: any) => {
     if (column.filtering) {
       filteredData = filteredData.filter((item: any) => {
         return item[column.name].match(column.filtering.filterString);
       });
     }
   });
   if (!config.filtering) {
     return filteredData;
   }
   if (config.filtering.columnName) {
     return filteredData.filter((item:any) =>
       item[config.filtering.columnName].match(this.config.filtering.filterString));
   }
   const tempArray: Array<any> = [];
   filteredData.forEach((item: any) => {
     let flag = false;
     this.columnsPays.forEach((column: any) => {
       if (item[column.name].toString().match(this.config.filtering.filterString)) {
         flag = true;
       }
     });
     if (flag) {
       tempArray.push(item);
     }
   });
   filteredData = tempArray;
   return filteredData;
  }

  startToGetInformationRegisters() {
   this.getStates();
  }
   
  changeSortPays(data: any, config: any): any {
   if (!config.sorting) {
     return data;
   }
   const columns = this.config.sorting.columns || [];
   let columnName: string = void 0;
   let sort: string = void 0;
   for (let i = 0; i < columns.length; i++) {
     if (columns[i].sort !== '' && columns[i].sort !== false) {
       columnName = columns[i].name;
       sort = columns[i].sort;
     }
   }
   if (!columnName) {
     return data;
   }
   return data.sort((previous:any, current:any) => {
     if (previous[columnName] > current[columnName]) {
       return sort === 'desc' ? -1 : 1;
     } else if (previous[columnName] < current[columnName]) {
       return sort === 'asc' ? -1 : 1;
     }
     return 0;
   });
  }

  changePagePays(page: any, data: Array<any> = this.dataPays):Array<any> {
   const start = (page.page - 1) * page.itemsPerPage;
   const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
   return data.slice(start, end);
  }

  onCellClickPays(event) {
  }

  buildDataTablePays() {
   this.columnsPays = [
      {title: 'Código', name: 'code'},
        {title: 'Estado', name: 'state'},
        {title: 'Valor Pagado', name: 'amount_payed'},
        {title: 'Valor a Pagar - Impuesto 1X1000', name: 'amount_to_pay_base'},
        {title: 'Valor a Pagar - Multas', name: 'amount_to_pay_fines'},
        {title: 'Valor a Pagar - Intereses', name: 'amount_to_pay_taxes'},
        {title: 'Valor a Pagar - Total', name: 'amount_to_pay'},
        {title: 'Fecha de Pago', name: 'pay_date'}
   ];
   const data = [];
   this.pays.forEach(item => {
       let state = '';
       let amount_payed = '';
       let amount_to_pay = '';
       let amount_to_pay_base = '';
       let amount_to_pay_fines = '';
       let amount_to_pay_taxes = '';
       if (item.payed) {
          state = '<span class="badge badge-success">Pagado</span>';
       } else {
          state = '<span class="badge badge-danger">Pago Pendiente</span>';
       }
       if (item.amount_payed != -1) {
          amount_payed = item.amount_payed.toString() + ' USD';
       }
       amount_to_pay_base = item.amount_to_pay_base.toString() + ' USD';
       amount_to_pay_fines = item.amount_to_pay_fines.toString() + ' USD';
       amount_to_pay_taxes = item.amount_to_pay_taxes.toString() + ' USD';
       amount_to_pay = item.amount_to_pay.toString() + ' USD';
       let payDate = '';
       if (item.pay_date == null || typeof item.pay_date == 'undefined') {
          payDate = '';
       } else {
          payDate = item.pay_date.toString();
       }
       data.push({
          code: item.code,
          state: state,
          amount_payed: amount_payed,
          amount_to_pay_base: amount_to_pay_base,
          amount_to_pay_fines: amount_to_pay_fines,
          amount_to_pay_taxes: amount_to_pay_taxes,
          amount_to_pay: amount_to_pay,
          pay_date: payDate,
       });
   });
   this.dataPays = data;
   this.onChangeTablePays(this.config);
  }

  validateNombramiento(): Boolean {
    if(this.ruc.tax_payer_type_id <= 1) {
       return true;
    }
    return !(this.ruc.person_representative_attachment.person_representative_attachment_file_name == '');
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

  descargarNombramiento() {
    this.downloadFile(
       this.ruc.person_representative_attachment.person_representative_attachment_file,
       this.ruc.person_representative_attachment.person_representative_attachment_file_type,
       this.ruc.person_representative_attachment.person_representative_attachment_file_name);
  }

  borrarNombramiento() {
    this.ruc.person_representative_attachment.person_representative_attachment_file = '';
    this.ruc.person_representative_attachment.person_representative_attachment_file_type = '';
    this.ruc.person_representative_attachment.person_representative_attachment_file_name = '';
   }

   CodeFilePersonRepresentativeAttachment(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
       const file = event.target.files[0];
       reader.readAsDataURL(file);
       reader.onload = () => {
          this.ruc.person_representative_attachment.person_representative_attachment_file_name = file.name;
          this.ruc.person_representative_attachment.person_representative_attachment_file_type = file.type;
          this.ruc.person_representative_attachment.person_representative_attachment_file = reader.result.toString().split(',')[1];
       };
    }
   }

   checkRazonSocial() {
    this.isRucOwner = false;
    if (this.razon_social == this.user.name) {
      this.isRucOwner = true;
    }
   }

  checkIdentificationRepresentant() { 
    this.isRepresentantLegal = false; 
    if (this.ruc.person_representative.identification == this.user.identification) {
      this.isRepresentantLegal = true;
    }
   }
 
}
