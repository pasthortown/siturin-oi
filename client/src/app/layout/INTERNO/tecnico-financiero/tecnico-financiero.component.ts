import { ZoneService } from './../../../services/CRUD/BASE/zone.service';
import { Zone } from './../../../models/BASE/Zone';
import { MailerService } from './../../../services/negocio/mailer.service';
import { StateDeclarationService } from './../../../services/CRUD/FINANCIERO/statedeclaration.service';
import { PayService } from './../../../services/CRUD/FINANCIERO/pay.service';
import { ApprovalStateAttachmentService } from './../../../services/CRUD/ALOJAMIENTO/approvalstateattachment.service';
import { ApprovalStateAttachment } from './../../../models/ALOJAMIENTO/ApprovalStateAttachment';
import { ApprovalStateService } from './../../../services/CRUD/ALOJAMIENTO/approvalstate.service';
import { ApprovalState } from 'src/app/models/ALOJAMIENTO/ApprovalState';
import { Approval } from 'src/app/models/ALOJAMIENTO/Approval';
import { ConsultorService } from 'src/app/services/negocio/consultor.service';
import { DeclarationService } from 'src/app/services/CRUD/FINANCIERO/declaration.service';
import { DeclarationItemValue } from 'src/app/models/FINANCIERO/DeclarationItemValue';
import { DeclarationItemService } from 'src/app/services/CRUD/FINANCIERO/declarationitem.service';
import { DeclarationItemCategoryService } from 'src/app/services/CRUD/FINANCIERO/declarationitemcategory.service';
import { DeclarationItem } from 'src/app/models/FINANCIERO/DeclarationItem';
import { DeclarationItemCategory } from 'src/app/models/FINANCIERO/DeclarationItemCategory';
import { Pay } from 'src/app/models/FINANCIERO/Pay';
import { Declaration } from 'src/app/models/FINANCIERO/Declaration';
import { RegisterState } from 'src/app/models/ALOJAMIENTO/RegisterState';
import { ComplementaryServiceFood } from 'src/app/models/ALOJAMIENTO/ComplementaryServiceFood';
import { ComplementaryServiceFoodTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/complementaryservicefoodtype.service';
import { ComplementaryServiceFoodType } from 'src/app/models/ALOJAMIENTO/ComplementaryServiceFoodType';
import { EstablishmentCertificationAttachment } from 'src/app/models/BASE/EstablishmentCertificationAttachment';
import { AccountRol } from 'src/app/models/AUTH/AccountRol';
import { Agreement } from 'src/app/models/BASE/Agreement';
import { UserService } from 'src/app/services/profile/user.service';
import { DinardapService } from 'src/app/services/negocio/dinardap.service';
import { CapacityTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/capacitytype.service';
import { CapacityType } from 'src/app/models/ALOJAMIENTO/CapacityType';
import { State } from 'src/app/models/FINANCIERO/State';
import { TariffTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/tarifftype.service';
import { BedTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/bedtype.service';
import { BedType } from 'src/app/models/ALOJAMIENTO/BedType';
import { Bed } from 'src/app/models/ALOJAMIENTO/Bed';
import { Capacity } from 'src/app/models/ALOJAMIENTO/Capacity';
import { RegisterRequisite } from 'src/app/models/ALOJAMIENTO/RegisterRequisite';
import { EstablishmentCertificationTypeService } from 'src/app/services/CRUD/BASE/establishmentcertificationtype.service';
import { EstablishmentCertificationType } from 'src/app/models/BASE/EstablishmentCertificationType';
import { Gender } from 'src/app/models/BASE/Gender';
import { SystemNameService } from 'src/app/services/CRUD/BASE/systemname.service';
import { EstablishmentOnRuc } from 'src/app/models/negocio/EstablishmentOnRuc';
import { GroupTypeService } from 'src/app/services/CRUD/BASE/grouptype.service';
import { GroupType } from 'src/app/models/BASE/GroupType';
import { Requisite } from 'src/app/models/ALOJAMIENTO/Requisite';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstablishmentPicture } from 'src/app/models/BASE/EstablishmentPicture';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { Establishment } from 'src/app/models/BASE/Establishment';
import { EstablishmentPropertyType } from 'src/app/models/BASE/EstablishmentPropertyType';
import { TaxPayerType } from 'src/app/models/BASE/TaxPayerType';
import { EstablishmentCertification } from 'src/app/models/BASE/EstablishmentCertification';
import { Language } from 'src/app/models/BASE/Language';
import { RegistroDataCarrier } from 'src/app/models/negocio/RegistroDataCarrier';
import { TaxPayerTypeService } from 'src/app/services/CRUD/BASE/taxpayertype.service';
import { RucService } from 'src/app/services/CRUD/BASE/ruc.service';
import { EstablishmentService } from 'src/app/services/CRUD/BASE/establishment.service';
import { EstablishmentPropertyTypeService } from 'src/app/services/CRUD/BASE/establishmentpropertytype.service';
import { LanguageService } from 'src/app/services/CRUD/BASE/language.service';
import { UbicationService } from 'src/app/services/CRUD/BASE/ubication.service';
import { PreviewRegisterCode } from 'src/app/models/BASE/PreviewRegisterCode';
import { Ubication } from 'src/app/models/BASE/Ubication';
import { Worker } from 'src/app/models/BASE/Worker';
import { Register } from 'src/app/models/ALOJAMIENTO/Register';
import { ComplementaryServiceType } from 'src/app/models/ALOJAMIENTO/ComplementaryServiceType';
import { ComplementaryServiceTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/complementaryservicetype.service';
import { RegisterType } from 'src/app/models/ALOJAMIENTO/RegisterType';
import { SystemName } from 'src/app/models/BASE/SystemName';
import { WorkerGroup } from 'src/app/models/BASE/WorkerGroup';
import { WorkerGroupService } from 'src/app/services/CRUD/BASE/workergroup.service';
import { GenderService } from 'src/app/services/CRUD/BASE/gender.service';
import { RegisterTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/registertype.service';
import { RequisiteService } from 'src/app/services/CRUD/ALOJAMIENTO/requisite.service';
import { TariffType } from 'src/app/models/ALOJAMIENTO/TariffType';
import { Tariff } from 'src/app/models/ALOJAMIENTO/Tariff';
import { RegisterService as RegistroCatastroService } from 'src/app/services/CRUD/CATASTRO/register.service';
import { RucNameType } from 'src/app/models/BASE/RucNameType';
import { RucNameTypeService } from 'src/app/services/CRUD/BASE/rucnametype.service';
import { StateService } from 'src/app/services/CRUD/FINANCIERO/state.service';
import { User } from 'src/app/models/profile/User';
import { Ruc } from 'src/app/models/BASE/Ruc';
import { GroupGiven } from 'src/app/models/BASE/GroupGiven';
import { PersonRepresentative } from 'src/app/models/BASE/PersonRepresentative';
import { PersonRepresentativeAttachment } from 'src/app/models/BASE/PersonRepresentativeAttachment';
import { PersonRepresentativeAttachmentService } from 'src/app/services/CRUD/BASE/personrepresentativeattachment.service';
import { AgreementService } from 'src/app/services/CRUD/BASE/agreement.service';
import { EstablishmentPictureService } from 'src/app/services/CRUD/BASE/establishmentpicture.service';
import { EstablishmentCertificationAttachmentService } from 'src/app/services/CRUD/BASE/establishmentcertificationattachment.service';
import { RegisterService } from 'src/app/services/CRUD/ALOJAMIENTO/register.service';
import { RegisterStateService } from 'src/app/services/CRUD/ALOJAMIENTO/registerstate.service';
import { StateDeclaration } from 'src/app/models/FINANCIERO/StateDeclaration';
import Swal from 'sweetalert2';
import { StateService as StateAlojamientoService } from 'src/app/services/CRUD/ALOJAMIENTO/state.service';
import { State as StateAlojamiento } from 'src/app/models/ALOJAMIENTO/State';
import { DeclarationAttachment } from 'src/app/models/FINANCIERO/DeclarationAttachment';
import { DeclarationAttachmentService } from 'src/app/services/CRUD/FINANCIERO/declarationattachment.service';
import { PayTax } from 'src/app/models/FINANCIERO/PayTax';
import { PayTaxService } from 'src/app/services/CRUD/FINANCIERO/paytax.service';
import { RegisterProcedureService } from 'src/app/services/CRUD/ALOJAMIENTO/registerprocedure.service';
import { RegisterProcedureService as RegisterProcedureABService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/registerprocedure.service';
import { ExporterService } from 'src/app/services/negocio/exporter.service';
import { PayAttachmentService } from 'src/app/services/CRUD/FINANCIERO/payattachment.service';
import { PayAttachment } from 'src/app/models/FINANCIERO/PayAttachment';
import { RegisterTypeService as RegisterTypeABService} from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/registertype.service';
import { RegisterStateService as RegisterStateABService} from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/registerstate.service';
import { RegisterService as RegisterABService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/register.service';
import { ApprovalStateService as ApprovalStateABService } from './../../../services/CRUD/ALIMENTOSBEBIDAS/approvalstate.service';
import { RegisterType as RegisterTypeAB} from 'src/app/models/ALIMENTOSBEBIDAS/RegisterType';
import { ApprovalStateAttachmentService as ApprovalStateAttachmentABService } from './../../../services/CRUD/ALIMENTOSBEBIDAS/approvalstateattachment.service';

@Component({
  selector: 'app-tecnico-financiero',
  templateUrl: './tecnico-financiero.component.html',
  styleUrls: ['./tecnico-financiero.component.scss']
})
export class TecnicoFinancieroComponent implements OnInit {
  @ViewChild('fotoFachadaInput') fotoFachadaInput;
  @ViewChild('EstablishmentCertificationAttachedFile') EstablishmentCertificationAttachedFile;
  //ASIGNACIONES
  stateTramiteId = 0;
  inspectores: User[] = [];
  financieros: User[] = [];
  financialSelectedId: number = 0;
  zonales: Zone[] = [];
  totalPayBase = 0;
  totalPayFines = 0;
  totalPayTaxes = 0;
  totalPayToPay = 0;
  registerApprovals: ApprovalState[] = [];
  register_types_AB: RegisterTypeAB[] = [];
  registerApprovalCoordinador: ApprovalState = new ApprovalState();
  registerApprovalInspector: ApprovalState = new ApprovalState();
  registerApprovalFinanciero: ApprovalState = new ApprovalState();
  pay: Pay = new Pay();
  paySelectedOrders: Pay = new Pay();
  paytaxes: PayTax[] = [];
  pays: Pay[] = [];
  pays_calc: Pay[] = [];
  isAssigned = false;
  hasIspectionDate  = false;
  hasInform  = false;
  digito = '';
  hasRequisites = false;
  inspectionState = 0;
  imprimiendoDeclaracion = false;
  estoyVacaciones = false;
  declarationApprovalStateAttachment: ApprovalStateAttachment = new ApprovalStateAttachment();
  payApprovalStateAttachment: ApprovalStateAttachment = new ApprovalStateAttachment();
  newRegisterState: RegisterState = new RegisterState();
  maxDeclarationYear: number = 0;
  declaration_state_id = 0;
  declarationstates: State[] = [];
  //REGISTROS MINTUR
  registers_mintur = [];
  tipo_tramite = '';
  registerMinturSelected: any = null;
  currentPageMinturRegisters = 1;
  lastPageMinturRegisters = 1;
  recordsByPageRegisterMintur = 5;
  mostrarDataRegisterMintur = false;
  config: any = {
     paging: true,
     filtering: {filterString: ''},
     className: ['table-striped', 'table-hover', 'table-bordered']
  };
  rows = [];
  columns = [];
  data = [];
 
 //DATOS RUC
 editable = false;
 imContactRuc: Boolean = true;
 roles:any[] = [];
 terminosCondiciones = false;
 terminosCondicionesAgreement: Agreement = new Agreement();
 rucReady = false;
 currentPageRegister = 1;
 lastPageRegister = 1;
 recordsByPageRegister = 5;
 mostrarData = true;
 fechaSolicitud = new Date();
 group_types: GroupType[] = [];
 rucs_registrados: RegistroDataCarrier[] = [];
 ruc_registro_selected: RegistroDataCarrier = new RegistroDataCarrier();
 rucData = 'CONECTÁNDOSE AL SRI...';
 superciasData = 'CONECTÁNDOSE A LA SUPERINTENDENCIA DE COMPANÍAS...';
 cedulaData = 'CONECTÁNDOSE AL REGISTRO CIVIL...';
 representanteCedulaData = 'CONECTÁNDOSE AL REGISTRO CIVIL...';
 cedulaEstablishmentContactData = 'CONECTÁNDOSE AL REGISTRO CIVIL...';
 tax_payer_types: TaxPayerType[] = [];
 zonalSelectedCode = '-';
 provinciaSelectedCode = '-';
 cantonSelectedCode = '-';
 groupTypeSelected: GroupType = new GroupType();
 rucValidated = false;
 identificationRepresentativePersonValidated = false;
 identificationContactValidated = false;
 addressContactValidated = false;
 emailContactValidated = false;
 mainPhoneContactValidated = false;
 secondaryPhoneContactValidated = true;
 user: User = new User();

 //DATOS ESTABLECIMIENTO
 rowsEstablishment = [];
 columnsEstablishment = [];
 dataEstablishment = [];

 establishment_certification_types = [];
 identificationContactEstablishmentValidated = false;
 mainPhoneContactEstablishmentValidated = false;
 secondaryPhoneContactEstablishmentValidated = true;
 emailContactEstablishmentValidated = false;
 currentPageEstablishment = 1;
 lastPageEstablishment = 1;
 recordsByPageEstablishment = 5;
 mostrarDataEstablishment = false;
 zonalEstablishmentSelectedCode = '-';
 provinciaEstablishmentSelectedCode = '-';
 cantonEstablishmentSelectedCode = '-';
 payManualAgreement = false;
 zonalesEstablishment: Ubication[] = [];
 provinciasEstablishment: Ubication[] = [];
 ruc_name_types: RucNameType[] = [];
 cantonesEstablishment: Ubication[];
 parroquiasEstablishment: Ubication[];
 preview_register_codes: PreviewRegisterCode[] = [];
 establishment_selected: Establishment = new Establishment();
 establishment_property_types: EstablishmentPropertyType[] = [];
 establishment_selected_picture: EstablishmentPicture = new EstablishmentPicture();
 languages: Language[] = [];
 guardandoFinanciero = false;
 languages_establishmentSelectedId = 0;
 ubications: Ubication[] = [];
 system_names: SystemName[] = [];
 workers: Worker[] = [];
 worker_establishmentSelected: Worker = new Worker();
 worker_groups: WorkerGroup[] = [];
 genders: Gender[] = [];
 establishment_certification_types_categories: EstablishmentCertificationType[] = [];
 establishment_certifications: EstablishmentCertification[] = [];
 preview_register_codes_establishmentSelected = new PreviewRegisterCode();
 establishmentComercialNameValidated = false;
 addressEstablishmentValidated = false;
 mainPhoneEstablishmentValidated = false;
 secondaryPhoneEstablishmentValidated = true;
 urlwebEstablishmentValidated = true;
 establishment_certifications_establishmentSelected: EstablishmentCertification = new EstablishmentCertification();

 //DATOS REGISTRO
 rowsRegister = [];
 columnsRegister = [];
 dataRegister = [];

 estados_tramites: State[];
 specific_states: State[];
 estado_tramite_selected_code: String = '1';
 statusSelected: RegisterState = new RegisterState();
 mostrarDataRegister = false;
 showRequisites = false;
 complementaryServiceFoodSelected: ComplementaryServiceFood = new ComplementaryServiceFood();
 rucEstablishmentRegisterSelected: Register = new Register();
 clasifications_registers: RegisterType[] = [];
 categories_registers: RegisterType[] = [];
 register_types: RegisterType[] = [];
 complementary_service_types: ComplementaryServiceType[] = [];
 complementary_service_types_categories: ComplementaryServiceType[] = [];
 requisitesByRegisterType: Requisite[] = [];
 categorySelectedCode = '-';
 complementary_service_types_registerSelectedId = 0;
 capacitySelected: Capacity = new Capacity();
 bedSelected: Bed = new Bed();
 as_turistic_date = null;
 register_code = '';
 alowed_bed_types: BedType[] = [];
 register_establishment_capacities_registerSelectedId = 0;
 rack_prices_registerSelectedId = 0;
 establishment_service_offers_registerSelectedId = 0;
 tarifas: any[] = [];
 states: State[] = [];
 statesAlojamiento: StateAlojamiento[] = [];
 alowed_capacity_types: CapacityType[] = [];
 complementaryServiceFoodTypes: ComplementaryServiceFoodType[] = [];
 
 //DINARDAP
 consumoCedula = false;
 consumoCedulaEstablishmentContact = false;
 consumoRuc = false;
 establishment_id = 0;
 consumoCedulaRepresentanteLegal = false;
 SRIOK = false;
 contactUser: User = new User();
 REGCIVILOK = false;
 balance: DeclarationAttachment = new DeclarationAttachment();
 REGCIVILOKEstablishment = false;
 REGCIVILREPRESENTANTELEGALOK = false;
 guardando = false;

 //DECLARACIONES
 currentPageDeclaration = 1;
 lastPageDeclaration = 1;
 mostrarMotivoTramite = false;
 motivoTramite = '';
 recordsByPageDeclaration = 5;
 establishment_declarations_selected = new Establishment();
 declaration_selected: Declaration = new Declaration();
 mostrarDataDeclaration = false;
 declarations: Declaration[] = [];
 payDeclarationSelected: Pay = new Pay();
 declarationItemsToShow: any[] = [];
 declarationItemsCategories: DeclarationItemCategory[] = [];
 declarationItems: DeclarationItem[] = [];
 totalunoxmil = 0;
 maxYear: number = 2019;
 idRegister: number = 0;
 activity = '';

 constructor(private toastr: ToastrManager,
             private approvalStateDataService: ApprovalStateService,
             private consultorDataService: ConsultorService,
             private mailerDataService: MailerService,
             private payDataService: PayService,
             private userDataService: UserService,
             private registerProcedureDataService: RegisterProcedureService,
             private dinardapDataService: DinardapService,
             private registerStateDataService: RegisterStateService,
             private approvalStateAttachmentDataService: ApprovalStateAttachmentService,
             private rucDataService: RucService,
             private modalService: NgbModal,
             private payAttachmentDataService: PayAttachmentService,
             private agreementDataService: AgreementService,
             private rucNameTypeDataService: RucNameTypeService,
             private group_typeDataService: GroupTypeService,
             private approvalStateABDataService: ApprovalStateABService,
             private registerStateABDataService: RegisterStateABService,
             private register_typeABDataService: RegisterTypeABService,
             private registerABDataService: RegisterABService,
             private approvalStateAttachmentABDataService: ApprovalStateAttachmentABService,
             private stateDeclaratonDataService: StateDeclarationService,
             private registerCatastroDataService: RegistroCatastroService,
             private languageDataService: LanguageService,
             private registerProcedureABDataService: RegisterProcedureABService,
             private zoneDataService: ZoneService,
             private complementaryServiceFoodTypeDataService: ComplementaryServiceFoodTypeService,
             private establishmentPictureDataService: EstablishmentPictureService,
             private ubicationDataService: UbicationService,
             private exporterDataService: ExporterService,
             private establishmentCertificationAttachmentDataService: EstablishmentCertificationAttachmentService,
             private personRepresentativeAttachmentDataService: PersonRepresentativeAttachmentService,
             private complementary_service_typeDataService: ComplementaryServiceTypeService,
             private systemNameDataService: SystemNameService,
             private genderDataService: GenderService,
             private workerGroupDataService: WorkerGroupService,
             private capacityTypeDataService: CapacityTypeService,
             private payTaxDataService: PayTaxService,
             private establishment_certification_typeDataService: EstablishmentCertificationTypeService,
             private establishment_property_typeDataService: EstablishmentPropertyTypeService,
             private establishmentDataService: EstablishmentService,
             private register_typeDataService: RegisterTypeService,
             private requisiteDataService: RequisiteService,
             private declarationAttachmentDataService: DeclarationAttachmentService,
             private bedTypeDataService: BedTypeService,
             private declarationDataService: DeclarationService,
             private declarationItemCategoryDataService: DeclarationItemCategoryService,
             private declarationItemDataService: DeclarationItemService,
             private tariffTypeDataService: TariffTypeService,
             private stateDataService: StateService,
             private stateAlojamientoDataService: StateAlojamientoService,
             private tax_payer_typeDataService: TaxPayerTypeService,
             private registerDataService: RegisterService) {}

 ngOnInit() {
  this.refresh();
  this.getUser();
 }

 descargarDocumentoDePago(paySelected: Pay) {
   this.downloadFile(
      paySelected.pay_attachment.pay_attachment_file,
      paySelected.pay_attachment.pay_attachment_file_type,
      paySelected.pay_attachment.pay_attachment_file_name);   
 }

 CodeFileDocumentoPago(event, payselected: Pay) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
         payselected.pay_attachment.pay_attachment_file_name = file.name;
         payselected.pay_attachment.pay_attachment_file_type = file.type;
         payselected.pay_attachment.pay_attachment_file = reader.result.toString().split(',')[1];
         payselected.pay_attachment.pay_id = payselected.id;
         this.payAttachmentDataService.post(payselected.pay_attachment).then( r=> {
            this.toastr.successToastr('Documento de Pago Guardado Satisfactoriamente', 'Documento de Pago');
         }).catch( e => { console.log(e); })
      };
   }
  }

 borrarDocumentoDePago(paySelected: Pay) {
   this.payAttachmentDataService.delete(paySelected.pay_attachment.id).then( r => {
      paySelected.pay_attachment = new PayAttachment();
      this.toastr.warningToastr('Documento de Pago Borrado Satisfactoriamente', 'Documento de Pago');
   }).catch( e => { console.log(e); });
 }

 checkMotivoTramite(estado: String) {
   this.motivoTramite = '';
   const PrimerDigito = estado.substring(0, 1);
   if (PrimerDigito == '1') {
      this.mostrarMotivoTramite = false;
   } else {
      this.mostrarMotivoTramite = true;
   }
   this.tipo_tramite = 'REGISTRO';
   const primerdigito = estado.substring(0, 1);
   if (primerdigito == '1') {
      this.tipo_tramite = 'REGISTRO';
   }
   if (primerdigito == '2') {
      this.tipo_tramite = 'RECLASIFICACIÓN';
   }
   if (primerdigito == '3') {
      this.tipo_tramite = 'RECATEGORIZACIÓN';
   }
   if (primerdigito == '4') {
      this.tipo_tramite = 'ACTUALIZACIÓN';
   }
   if (primerdigito == '5') {
      this.tipo_tramite = 'INACTIVACIÓN';
   }
   if (primerdigito == '6') {
      this.tipo_tramite = 'REINGRESO';
   }
   
   if (estado == '20') {
      this.tipo_tramite = 'REGISTRO';
   }
   if (estado == '30') {
      this.tipo_tramite = 'RECLASIFICACIÓN';
   }
   if (estado == '40') {
      this.tipo_tramite = 'RECATEGORIZACIÓN';
   }
   if (estado == '50') {
      this.tipo_tramite = 'ACTUALIZACIÓN';
   }
   if (estado == '60') {
      this.tipo_tramite = 'INACTIVACIÓN';
   }
   if (estado == '70') {
      this.tipo_tramite = 'REINGRESO';
   }
   this.registerCatastroDataService.get_by_register_code(this.register_code).then( r2 => {
      if (typeof r2.activity != 'undefined') {
         this.as_turistic_date = new Date(r2.as_turistic_date.toString());
         if (r2.activity == 'ALOJAMIENTO') {
            this.registerProcedureDataService.get_by_register_id(this.idRegister.toString()).then( r => {
               if (typeof r.id != 'undefined') {
                  this.motivoTramite = r.justification;
               }
            }).catch( e => { console.log(e); });
         }
         if (r2.activity == 'ALIMENTOS Y BEBIDAS') {
            this.registerProcedureABDataService.get_by_register_id(this.idRegister.toString()).then( r => {
               if (typeof r.id != 'undefined') {
                  this.motivoTramite = r.justification;
               }
            }).catch( e => { console.log(e); });
         }      
      }
   }).catch( e => { console.log(e); });
  }

 onChangeTableEstablishment(config: any, page: any = {page: this.currentPageEstablishment, itemsPerPage: this.recordsByPageEstablishment}): any {
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

 rechazarCheck() {
   this.registerApprovalFinanciero.notes = '';
 }

 pagado(): Boolean {
   let toReturn = true;
   this.pays.forEach(pay => {
      if (!pay.payed) {
         toReturn = false;
      }
   });
   return toReturn;
 }

 devolverVacaciones() {
   if(this.registerApprovalFinanciero.notes == '') {
     this.toastr.errorToastr('Debe indicar la justificación para la devolución del trámite.', 'Devolución por Vacaciones / Fuera de Oficina');
     return;
   }
 Swal.fire({
    title: 'Confirmación',
    text: '¿Está seguro de devolver el trámite al Coordinador Zonal?, Recuerde que al hacerlo, la solicitud volverá a la Bandeja del Coordinador Zonal para una nueva asignación.',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, continuar',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Trámite Devuelto!',
        'La solicitud ha sido devuelta al Coordinador Zonal',
        'success'
      );
      this.registerApprovalFinanciero.date_assigment = null;
      this.registerApprovalFinanciero.notes = 'Devuelto: <strong>' + this.user.name + ':</strong> ' + this.registerApprovalFinanciero.notes;
      if (this.activity == 'ALOJAMIENTO') {
            this.approvalStateDataService.put(this.registerApprovalFinanciero).then( r => {
            const newRegisterState = new RegisterState();
            newRegisterState.justification = 'El Técnico Financiero no se encuentra disponible por Vacaciones / Fuera de Oficina';
            newRegisterState.register_id =  this.idRegister;
            const estado: String = this.stateTramiteId.toString();
            const digito = estado.substring(estado.length-1, estado.length);
            if (digito == '7') {
              newRegisterState.state_id = this.stateTramiteId + 3;
            }
            this.registerStateDataService.post(newRegisterState).then( r1 => {
               this.toastr.warningToastr('Trámite devuelto al Coordinador Zonal, Satisfactoriamente.', 'Devolución por Vacaciones / Fuera de Oficina');
               this.refresh();
            }).catch( e => { console.log(e); });
        }).catch( e => { console.log(e); });
      }
      if (this.activity == 'ALIMENTOS Y BEBIDAS') {
         this.approvalStateABDataService.put(this.registerApprovalFinanciero).then( r => {
            const newRegisterState = new RegisterState();
            newRegisterState.justification = 'El Técnico Financiero no se encuentra disponible por Vacaciones / Fuera de Oficina';
            newRegisterState.register_id =  this.idRegister;
            const estado: String = this.stateTramiteId.toString();
            const digito = estado.substring(estado.length-1, estado.length);
            if (digito == '7') {
            newRegisterState.state_id = this.stateTramiteId + 3;
            }
            this.registerStateABDataService.post(newRegisterState).then( r1 => {
               this.toastr.warningToastr('Trámite devuelto al Coordinador Zonal, Satisfactoriamente.', 'Devolución por Vacaciones / Fuera de Oficina');
               this.refresh();
            }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });
      }
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      Swal.fire(
        'Cancelado',
        '',
        'error'
      );
    }
  });
}

calcularUnoxMil() {
   this.totalunoxmil = 0;
   this.declarationItemsToShow.forEach(itemToShow => {
      itemToShow.items.forEach(item => {
         this.totalunoxmil += item.valueItem.value * (item.declarationItem.factor);
      });
   });
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

 changePageEstablishment(page: any, data: Array<any> = this.dataEstablishment):Array<any> {
  const start = (page.page - 1) * page.itemsPerPage;
  const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
  return data.slice(start, end);
 }

 buildDataTableEstablishment() {
   this.columnsEstablishment = [
      {title: '', name: 'selected'},
      {title: 'Número de Establecimiento', name: 'code'},
      {title: 'Dirección', name: 'address'},
      {title: 'Nombre Comercial', name: 'name'},
   ];
   const data = [];
   this.ruc_registro_selected.ruc.establishments.forEach(item => {
      if (Number(item.ruc_code_id) == Number(this.registerMinturSelected.establishment.ruc_code_id)) {
         data.push({
            selected: '',
            code: item.ruc_code_id,
            address: item.address_main_street + ' ' + item.address_number + ' ' + item.address_secondary_street,
            name: item.commercially_known_name,
         });
      }
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

  onCellClickEstablishment(event) {
   if (event.row.name == ''){
      this.toastr.errorToastr('El establecimiento seleccionado, no tiene nombre comercial. Acérquese al SRI para registrar el nombre comercial del establecimiento.', 'Datos - SRI');
      return;
   }
   this.ruc_registro_selected.ruc.establishments.forEach(element => {
      if (element.ruc_code_id == event.row.code) {
         this.selectRegisterEstablishment(element);
      }
   });
   this.rowsEstablishment.forEach(row => {
      if (row.code == event.row.code) {
         row.selected = '<div class="col-12 text-right"><span class="far fa-hand-point-right"></span></div>';
      } else {
         row.selected = '';
      }
   });
  }

 onChangeTableRegister(config: any, page: any = {page: this.currentPageRegister, itemsPerPage: this.recordsByPageRegister}): any {
  if (config.filtering) {
    Object.assign(this.config.filtering, config.filtering);
  }
  if (config.sorting) {
    Object.assign(this.config.sorting, config.sorting);
  }
  const filteredData = this.changeFilterRegister(this.dataRegister, this.config);
  const sortedData = this.changeSortRegister(filteredData, this.config);
  this.rowsRegister = page && config.paging ? this.changePageRegister(page, sortedData) : sortedData;
 }

 changeFilterRegister(data: any, config: any): any {
  this.mostrarDataRegister = false;
  this.rowsRegister.forEach(row => {
     row.selected = '';
  });
  let filteredData: Array<any> = data;
  this.columnsRegister.forEach((column: any) => {
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
    this.columnsRegister.forEach((column: any) => {
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

 downloadBalance() {
   this.downloadFile(
      this.balance.declaration_attachment_file,
      this.balance.declaration_attachment_file_type,
      this.balance.declaration_attachment_file_name);
  }

 changeSortRegister(data: any, config: any): any {
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

 changePageRegister(page: any, data: Array<any> = this.dataRegister):Array<any> {
  const start = (page.page - 1) * page.itemsPerPage;
  const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
  return data.slice(start, end);
 }

 buildDataTableRegister() {
    this.columnsRegister = [
       {title: '', name: 'selected'},
       {title: 'Código del Establecimiento', name: 'establishment_code', filtering: {filterString: '', placeholder: 'Código del Establecimiento'}},
       {title: 'Ubicación del Establecimiento', name: 'address', filtering: {filterString: '', placeholder: 'Ubicación del Establecimiento'}},
       {title: 'Código del Registro', name: 'register_code', filtering: {filterString: '', placeholder: 'Código del Registro'}},
       {title: 'Tipo de Registro', name: 'register_type', filtering: {filterString: '', placeholder: 'Tipo de Registro'}},
       {title: 'Estado', name: 'state', filtering: {filterString: '', placeholder: 'Estado'}},
       {title: 'Observaciones', name: 'notes'},
    ];
    const data = [];
    this.ruc_registro_selected.registers.forEach(item => {
        data.push({
           selected: '',
           id: item.register.id,
           establishment_code: item.establishment.ruc_code_id,
           address: item.establishment.address_main_street + ' ' + item.establishment.address_number + ' ' + item.establishment.address_secondary_street,
           register_code: item.register.code,
           register_type: item.type.register_category.name + ' / ' + item.type.register_type.name,
           state: this.getRegisterState(item.status.id),
           state_id: item.status_register.state_id,
           notes: '<div class="col-12 text-justify">' + item.status_register.justification + '</div>',
        });
    });
    this.dataRegister = data;
    this.onChangeTableRegister(this.config);
 }

 onCellClickRegister(event) {
  this.ruc_registro_selected.registers.forEach(element => {
     if (element.register.id == event.row.id) {
        this.selectEstablishmentRegister(element.register);
     }
  });
  this.stateTramiteId = event.row.state_id;
  this.showTramiteState();
  this.rowsRegister.forEach(row => {
     if (row.id == event.row.id) {
        row.selected = '<div class="col-12 text-right"><span class="far fa-hand-point-right"></span></div>';
     } else {
        row.selected = '';
     }
  });
 }

 showTramiteState() {
   const estado: String = this.stateTramiteId.toString();
   const digito = estado.substring(estado.length-1, estado.length);
   this.estado_tramite_selected_code = digito;
   this.getSpecificStates();
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

 changeFilter(data: any, config: any): any {
  this.mostrarDataRegisterMintur = false;
  this.rows.forEach(row => {
     row.selected = '';
  });
  let filteredData: Array<any> = data;
  this.columns.forEach((column: any) => {
    if (column.filtering) {
      filteredData = filteredData.filter((item: any) => {
        return item[column.name].toUpperCase().match(column.filtering.filterString.toUpperCase());
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

 getRegistersMintur() {
  this.registers_mintur = [];
  this.registerMinturSelected = new Register();
  this.consultorDataService.get_registers_assigned_financial_id(this.user.id).then( r => {
     this.registers_mintur = r;
     this.buildDataTable();
  }).catch( e => console.log(e) );
 }

 buildDataTable() {
   this.columns = [
      {title: '', name: 'selected'},
      //{title: 'Tiempo de Atención', name: 'date_assigment_alert'},
      {title: 'Número de RUC', name: 'number'},
      {title: 'Número de Establecimiento', name: 'ruc_code_id'},
      {title: 'Nombre Comercial', name: 'establishment'},
      {title: 'Sistema de Origen', name: 'system_source'},
      {title: 'Bandeja', name: 'status'},
      {title: 'Estado', name: 'estado'},
      {title: 'Actividad', name: 'actividad'},
      {title: 'Dirección', name: 'address'},
      {title: 'Clasificación - Categoría', name: 'category'},
      {title: 'Fecha de Solicitud', name: 'created_at'},
      {title: 'Fecha de Asignación', name: 'date_assigment'},
     ];
    const data = [];
    this.registers_mintur.forEach(item => {
       let thiscategory: String =  '';
       const PrimerDigito = item.states.state_id.toString().substring(0, 1);
       if (PrimerDigito == '5' || item.states.state_id.toString() == '60') {
         if (item.register_data_on_catastro.classification == '') {
            thiscategory = this.getRegisterCategory(item.register.register_type_id, item.activity).toString();
         } else {
            thiscategory = item.register_data_on_catastro.classification.toString() + ' - ' + item.register_data_on_catastro.category.toString();   
         }
      } else {
         thiscategory = this.getRegisterCategory(item.register.register_type_id, item.activity).toString();
      }
      let existe = false;
       data.forEach(elementOnData => {
          if ( (elementOnData.number == item.ruc.number) &&
               (elementOnData.ruc_code_id == item.establishment.ruc_code_id) && 
               (thiscategory.toUpperCase() == elementOnData.category)) {
             existe = true;
          }
       });
       if (!existe) {
         let date_assigment_alert = '';
         let date1 = new Date();
         const registerState = this.getRegisterState(item.states.state_id);
         if (registerState.search('Aprobado') == 0) {
            date1 = new Date(item.states.updated_at);
         }
         if (registerState.search('Negado') == 0) {
            date1 = new Date(item.states.updated_at);
         }
         const date2 = new Date(item.register.created_at);
         const diffTime = Math.abs(date2.getTime() - date1.getTime());
         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays < 7) {
           date_assigment_alert = '<div class="col-12 text-center"><span class="badge badge-success">&nbsp;' + diffDays.toString() + '&nbsp;</span></div>';
        }
        if (diffDays >= 7 && diffDays <= 10) {
           date_assigment_alert = '<div class="col-12 text-center"><span class="badge badge-warning">&nbsp;' + diffDays.toString() + '&nbsp;</span></div>';
        }
        if (diffDays > 10) {
           date_assigment_alert = '<div class="col-12 text-center"><span class="badge badge-danger">&nbsp;' + diffDays.toString() + '&nbsp;</span></div>';
        }
        const estado: String = item.states.state_id.toString();
        const digito = estado.substring(estado.length-1, estado.length);
        if ( digito == '7' || digito == '8' ) {
         const creacion = new Date(item.register.created_at.toString());
         data.push({
            selected: '',
            date_assigment_alert: date_assigment_alert,
            number: item.ruc.number,
            date_assigment: new Date(item.register.date_assigment.toString()).toLocaleDateString(),
            registerId: item.register.id,
            actividad: item.activity,
            ruc_code_id: item.establishment.ruc_code_id,
            establishment: item.establishment.commercially_known_name,
            address: item.establishment.address_main_street + ' ' + item.establishment.address_number + ' ' + item.establishment.address_secondary_street,
            created_at: creacion.toLocaleDateString(),
            code: item.register.code,
            category: thiscategory.toUpperCase(),
            system_source: item.register_data_on_catastro.system_source,
            status: registerState,
            establishment_id: item.establishment.id,
            status_id: item.states.state_id,
            estado: this.getRegisterState(item.states.state_id),
         });
        }
       }
    });
    this.data = data;
    this.onChangeTable(this.config);
 }

 imprimirDeclaracion() {
  
 }

 validateNotesInspection(): Boolean {
  return this.registerApprovalFinanciero.notes.length > 4;
 }
 
 validateInspectionInfo(): Boolean {
  return this.validateNotesInspection();
 }

 borrarOrdenDePago(paySelected: Pay) {
   this.payDataService.delete(paySelected.id).then( r => {
      this.toastr.errorToastr('Órden de Pago Eliminada Satisfactoriamente', 'Revisión, Técnico Financiero');
      this.getPays();
   }).catch( e => { console.log(e); });
 }

 saveToPayValue() {
   this.pay.ruc_id = this.ruc_registro_selected.ruc.id;
   this.pay.amount_payed = -1;
   this.pay.pay_date = null;
   this.pay.code = this.ruc_registro_selected.ruc.number.substring(0, 10) + this.pays.length.toString() + 'CP';
   this.pay.payed = false;
   this.payDataService.post(this.pay).then( r => {
      this.getPays();
   }).catch( e => { console.log(e); });
 }

 saveToPayValueCalc(paySelected: Pay) {
   paySelected.ruc_id = this.ruc_registro_selected.ruc.id;
   paySelected.amount_payed = -1;
   paySelected.pay_date = null;
   paySelected.code = this.ruc_registro_selected.ruc.number.substring(0, 10) + this.pays.length.toString();
   paySelected.payed = false;
   this.payDataService.post(paySelected).then( r => {
      this.getPays();
   }).catch( e => { console.log(e); });
 }

 calcTotales(): Boolean {
   this.totalPayBase = 0;
   this.totalPayFines = 0;
   this.totalPayTaxes = 0;
   this.totalPayToPay = 0;
   this.pays.forEach(pay => {
      if (!pay.payed) {
        this.totalPayToPay += pay.amount_to_pay*1;
        this.totalPayBase += pay.amount_to_pay_base*1;
        this.totalPayFines += pay.amount_to_pay_fines*1;
        this.totalPayTaxes += pay.amount_to_pay_taxes*1;
      }
   });
   return true;
 }

 enviarEmailPago() {
    let payCodes = '';
    this.totalPayBase = 0;
    this.totalPayFines = 0;
    this.totalPayTaxes = 0;
    this.totalPayToPay = 0;
    this.pays.forEach(pay => {
       if (!pay.payed) {
         this.totalPayToPay += pay.amount_to_pay*1;
         this.totalPayBase += pay.amount_to_pay_base*1;
         this.totalPayFines += pay.amount_to_pay_fines*1;
         this.totalPayTaxes += pay.amount_to_pay_taxes*1;
         payCodes += pay.code + ', ';
       }
    });
    payCodes = payCodes.trim().substr(0,payCodes.length - 1);
   const today = new Date();
   let clasificacion: String = '';
   let categoria: String = '';
   let category: RegisterType = new RegisterType();
   if (this.activity == 'ALOJAMIENTO') {
      this.register_types.forEach(element => {
         if (this.registerMinturSelected.register.register_type_id == element.id) {
            category = element;
            categoria = element.name;
         }
      });
      this.register_types.forEach(element => {
         if (category.father_code == element.code) {
            clasificacion = element.name;
         }
      });   
   }
   if (this.activity == 'ALIMENTOS Y BEBIDAS') {
      this.register_types_AB.forEach(element => {
         if (this.registerMinturSelected.register.register_type_id == element.id) {
            category = element;
            categoria = element.name;
         }
      });
      this.register_types_AB.forEach(element => {
         if (category.father_code == element.code) {
            clasificacion = element.name;
         }
      });
   }
   let parroquiaName: String = '';
   let parroquia: Ubication = new Ubication();
   this.ubications.forEach(element => {
      if (element.id == this.registerMinturSelected.establishment.ubication_id) {
         parroquiaName = element.name;
         parroquia = element;
      }
   });
   let cantonName: String = '';
   let canton: Ubication = new Ubication();
   this.ubications.forEach(element => {
      if (element.code == parroquia.father_code) {
         cantonName = element.name;
         canton = element;
      }
   });
   let provinciaName: String = '';
   let provincia: Ubication = new Ubication();
   this.ubications.forEach(element => {
      if (element.code == canton.father_code) {
         provinciaName = element.name;
         provincia = element;
      }
   });
   let zonal: Ubication = new Ubication();
   this.ubications.forEach(element => {
      if (element.code == provincia.father_code){
         zonal = element;
      }
   });
   let datosZonal: Zone;
   this.zonales.forEach(element => {
      if (element.name == zonal.name) {
         datosZonal = element;
      }
   });
   const czDireccion = datosZonal.address;
   const czTelefono = datosZonal.phone_number;
   this.userDataService.get(this.registerMinturSelected.establishment.contact_user_id).then( r => {
      const information = {
         para: r.name.toUpperCase(),
         amount_to_pay_base: this.totalPayBase,
         amount_to_pay_fines: this.totalPayFines,
         amount_to_pay_taxes: this.totalPayTaxes,
         amount_to_pay: this.totalPayToPay,
         ruc: this.ruc_registro_selected.ruc.number,
         nombreComercial: this.registerMinturSelected.establishment.commercially_known_name.toUpperCase(),
         fechaSolicitud: this.fechaSolicitud.toLocaleDateString(),
         actividad: this.registerMinturSelected.activity.toUpperCase(),
         clasificacion: clasificacion.toUpperCase(),
         categoria: categoria.toUpperCase(),
         tipoSolicitud: this.tipo_tramite.toUpperCase(),
         provincia: provinciaName.toUpperCase(),
         canton: cantonName.toUpperCase(),
         parroquia: parroquiaName.toUpperCase(),
         payCodes: payCodes,
         callePrincipal: this.registerMinturSelected.establishment.address_main_street.toUpperCase(),
         calleInterseccion: this.registerMinturSelected.establishment.address_secondary_street.toUpperCase(),
         numeracion: this.registerMinturSelected.establishment.address_number,
         czDireccion: czDireccion.toUpperCase(),
         czTelefono: czTelefono,
         thisYear: today.getFullYear()
      };
      this.mailerDataService.sendMail('pago', r.email.toString(), 'Órden de Pago Registrada', information).then( r => {
         this.toastr.successToastr('Información Guardada Satisfactoriamente', 'Revisión, Técnico Financiero');
      }).catch( e => { console.log(e); });
   }).catch( e => {console.log(e); });
 }

 descargarDeclaracionPDF(pay: Pay) {
   this.imprimiendoDeclaracion = true;
   this.declarations.forEach(declaration => {
      if (declaration.year.toString() == pay.code) {
         const today = new Date();
         let year_fiscal = declaration.year;
         let tipo_persona = 'PERSONA NATURAL';
         if (this.ruc_registro_selected.ruc.tax_payer_type_id == 1) {
            year_fiscal = declaration.year;
            tipo_persona = 'PERSONA NATURAL';
         } else {
            year_fiscal = declaration.year - 1;
            tipo_persona = 'PERSONA JURÍDICA';
         }
         if (pay.nuevo) {
            year_fiscal = declaration.year;
         }
         const params = [{year_declaration: declaration.year},
            {year_fiscal: year_fiscal},
            {tipo_persona: tipo_persona},
            {razon_social: this.registerMinturSelected.establishment.commercially_known_name.toUpperCase()},
            {ruc: this.ruc_registro_selected.ruc.number},
            {nombre_responsable: this.user.name.toUpperCase()},
            {identificacion_responsable: this.user.identification},
            {direccion: (this.registerMinturSelected.establishment.address_main_street + ' ' + this.registerMinturSelected.establishment.address_number + ' ' + this.registerMinturSelected.establishment.address_secondary_street).toUpperCase()},
            {registro: this.registerMinturSelected.register.code},
            {nombre_declarante: this.ruc_registro_selected.ruc.contact_user.name.toUpperCase()},
            {identificacion_declarante: this.ruc_registro_selected.ruc.contact_user.identification}];
         const parametrosQR = [{Año_Declaración: declaration.year},
            {Año_Fiscal: today.getFullYear()},
            {Razón_Social: this.registerMinturSelected.establishment.commercially_known_name.toUpperCase()},
            {RUC: this.ruc_registro_selected.ruc.number},
            {Dirección: (this.registerMinturSelected.establishment.address_main_street + ' ' + this.registerMinturSelected.establishment.address_number + ' ' + this.registerMinturSelected.establishment.address_secondary_street).toUpperCase()},
            {Registro: this.registerMinturSelected.register.code},
            {Nombre_Declarante: this.ruc_registro_selected.ruc.contact_user.name.toUpperCase()},
            {Identificación_Declarante: this.ruc_registro_selected.ruc.contact_user.identification},
            {Valor_Pagar_Base: pay.amount_to_pay_base},
            {Valor_Pagar_Multas: pay.amount_to_pay_fines},
            {Valor_Pagar_Intereses: pay.amount_to_pay_taxes},
            {Valor_Pagar_Total: pay.amount_to_pay}];
         const qr_value = JSON.stringify(parametrosQR);
         const declarationItemsToSend = [];
         this.declarationItemsCategories.forEach(category => {
            if (category.tax_payer_type_id == this.ruc_registro_selected.ruc.tax_payer_type_id) {
               const items = [];
               declaration.declaration_item_values_on_declaration.forEach(newValueItem => {
                  this.declarationItems.forEach(item => {
                     if (item.tax_payer_type_id == this.ruc_registro_selected.ruc.tax_payer_type_id) {
                        if ((item.id == newValueItem.declaration_item_id) && (item.declaration_item_category_id == category.id)) {
                           items.push({declarationItem: item, valueItem: newValueItem});
                        }
                     }
                  });
               });
               declarationItemsToSend.push({Category: category, items: items});
            }
         });
         this.exporterDataService.getPDFDeclaration(declarationItemsToSend, pay, true, qr_value, params).then( r => {
            const byteCharacters = atob(r);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
               byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'application/pdf'});
            saveAs(blob, 'declaración_' + this.ruc_registro_selected.ruc.number + '_' + declaration.year + '.pdf');
            this.imprimiendoDeclaracion = false;
         }).catch( e => { console.log(e); });
      }
   });
 }

 descargarDeclaracion() {
  this.downloadFile(
     this.declarationApprovalStateAttachment.approval_state_attachment_file,
     this.declarationApprovalStateAttachment.approval_state_attachment_file_type,
     this.declarationApprovalStateAttachment.approval_state_attachment_file_name);
 }

 borrarDeclaracion() {
  this.declarationApprovalStateAttachment = new ApprovalStateAttachment();
 }

 imprimirPago() {

 }

 descargarPago() {
  this.downloadFile(
     this.payApprovalStateAttachment.approval_state_attachment_file,
     this.payApprovalStateAttachment.approval_state_attachment_file_type,
     this.payApprovalStateAttachment.approval_state_attachment_file_name);
 }

 borrarPago() {
  this.payApprovalStateAttachment = new ApprovalStateAttachment();
 }

 CodeFileDeclaracionAttachment(event) {
  const reader = new FileReader();
  if (event.target.files && event.target.files.length > 0) {
     const file = event.target.files[0];
     reader.readAsDataURL(file);
     reader.onload = () => {
        this.declarationApprovalStateAttachment.approval_state_attachment_file_name = file.name;
        this.declarationApprovalStateAttachment.approval_state_attachment_file_type = file.type;
        this.declarationApprovalStateAttachment.approval_state_attachment_file = reader.result.toString().split(',')[1];
     };
  }
 }

 CodeFileComprobanteAttachment(event) {
  const reader = new FileReader();
  if (event.target.files && event.target.files.length > 0) {
     const file = event.target.files[0];
     reader.readAsDataURL(file);
     reader.onload = () => {
        this.payApprovalStateAttachment.approval_state_attachment_file_name = file.name;
        this.payApprovalStateAttachment.approval_state_attachment_file_type = file.type;
        this.payApprovalStateAttachment.approval_state_attachment_file = reader.result.toString().split(',')[1];
     };
  }
 }

 validateDeclaracionFile(): Boolean {
  return !(this.declarationApprovalStateAttachment.approval_state_attachment_file_name == '');
 }

 validateComprobanteFile(): Boolean {
  return !(this.payApprovalStateAttachment.approval_state_attachment_file_name == '');
 }

 guardarInspeccion() {
   this.guardandoFinanciero = true;
   const estado: String = this.stateTramiteId.toString();
   const digito = estado.substring(estado.length-1, estado.length);
   if ( this.inspectionState == 0) {
     this.toastr.errorToastr('Debe seleccionar un estado de la revisión', 'Revisión, Técnico Financiero');
     return;
   }
   const today = new Date();
   this.registerApprovalFinanciero.date_fullfill = today;
   if ( this.inspectionState == 1) {
     this.registerApprovalFinanciero.value = true;
     if (digito == '0') {
      this.newRegisterState.state_id = this.stateTramiteId;
     }
     if (digito == '7') {
      this.newRegisterState.state_id = this.stateTramiteId + 3;
     }
     if (digito == '8') {
      this.newRegisterState.state_id = this.stateTramiteId + 2;
     }
   }
   if ( this.inspectionState == 2) {
     this.registerApprovalFinanciero.value = false;
     if (digito == '0') {
      this.newRegisterState.state_id = this.stateTramiteId;
     }
     if (digito == '7') {
      this.newRegisterState.state_id = this.stateTramiteId + 3;
     }
     if (digito == '8') {
      this.newRegisterState.state_id = this.stateTramiteId + 2;
     }
   }
   if ( this.inspectionState == 3) {
     this.registerApprovalFinanciero.value = false;
     if (digito == '0') {
      this.newRegisterState.state_id = this.stateTramiteId - 2;
     }
     if (digito == '7') {
      this.newRegisterState.state_id = this.stateTramiteId + 1;
     }
     if (digito == '8') {
      this.newRegisterState.state_id = this.stateTramiteId;
     }
   }
   this.newRegisterState.justification = 'Resultados de la Revisión de Técnico Financiero cargados en la fecha ' + today.toDateString();
   this.newRegisterState.register_id = this.registerApprovalFinanciero.register_id;
   if (this.activity == 'ALOJAMIENTO') {
      this.registerStateDataService.post(this.newRegisterState).then( r1 => {
      }).catch( e => { console.log(e); });
      this.approvalStateDataService.put(this.registerApprovalFinanciero).then( r => {
         this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Revisión, Técnico Financiero');
         this.guardandoFinanciero = false;
         this.refresh();
      }).catch( e => { console.log(e); });
   }
   if (this.activity == 'ALIMENTOS Y BEBIDAS') {
      this.registerStateABDataService.post(this.newRegisterState).then( r1 => {
      }).catch( e => { console.log(e); });
      this.approvalStateABDataService.put(this.registerApprovalFinanciero).then( r => {
         this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Revisión, Técnico Financiero');
         this.guardandoFinanciero = false;
         this.refresh();
      }).catch( e => { console.log(e); });
   }
 }

 onCellClick(event) {
   this.register_code = event.row.code;
   this.idRegister = event.row.registerId;
   this.activity = event.row.actividad;
   this.rows.forEach(row => {
      if (this.idRegister == row.registerId && this.activity == row.actividad) {
         row.selected = '<div class="col-12 text-right"><span class="far fa-hand-point-right"></span></div>';
      } else {
         row.selected = '';
      }
   });  
   this.registers_mintur.forEach(element => {
   if ((element.ruc.number == event.row.number) && (element.establishment.ruc_code_id == event.row.ruc_code_id) && (element.register.id == event.row.registerId) && (event.row.actividad == element.activity)) {
        this.selectRegisterMintur(element);
        this.stateTramiteId = element.states.state_id;
        const estado = this.stateTramiteId.toString();
        this.digito = estado.substring(estado.length-1, estado.length);
        this.getApprovalStates();
        this.establishment_id = event.row.establishment_id;
        this.getDeclarationsByEstablishment(event.row.establishment_id);
     }
  });
 }

 checkIfIsAssigned() {
  if (this.financialSelectedId !== 0) {
     this.isAssigned = true;
  } else {
     this.isAssigned = false;
  }
 }

 checkIfHasInform() {

 }

 checkIfHasRequisites() {

 }

 checkIfHasIspectionDate() {

 }

 getApprovalStates() {
  this.isAssigned = false;
  this.hasIspectionDate  = false;
  this.hasInform  = false;
  this.hasRequisites = false;
  this.registerApprovalInspector = new ApprovalState();
  this.registerApprovalFinanciero = new ApprovalState();
  this.registerApprovalCoordinador = new ApprovalState();
  if (this.activity == 'ALOJAMIENTO') {
      this.approvalStateDataService.get_by_register_id(this.idRegister).then( r => {
      this.registerApprovals = r;
      this.approvalStateAttachmentDataService.get_by_register_id(this.idRegister).then( r => {
         const approvalStateAttachments = r as ApprovalStateAttachment[];
         this.registerApprovals.forEach(element => {
            if (element.approval_id == 2){
               if (element.value) {
                  this.inspectionState = 1;
               } else {
                  if (this.pays.length > 0) {
                     this.inspectionState = 2;
                  } else {
                     this.inspectionState = 0;
                  }
                  const estado: String = this.stateTramiteId.toString();
                  const digito = estado.substring(estado.length-1, estado.length);
                  if (digito == '8'){
                     this.inspectionState = 3;
                  }
               }
               if (approvalStateAttachments.length == 0) {
                  this.inspectionState = 0;
                  this.declarationApprovalStateAttachment = new ApprovalStateAttachment();
                  this.declarationApprovalStateAttachment.approval_state_id = element.id;
                  this.payApprovalStateAttachment = new ApprovalStateAttachment();
                  this.payApprovalStateAttachment.approval_state_id = element.id;
               }
               approvalStateAttachments.forEach(approvalStateAttachment => {
                  if (approvalStateAttachment.approval_state_id == element.id) {
                     if (approvalStateAttachment.approval_state_attachment_file_name.search('Informe') == 0) {
                        this.payApprovalStateAttachment = approvalStateAttachment;
                     }
                     if (approvalStateAttachment.approval_state_attachment_file_name.search('Formulario') == 0) {
                        this.declarationApprovalStateAttachment = approvalStateAttachment;
                     }
                  }
               });
               this.registerApprovalFinanciero = element;
               this.registerApprovalFinanciero.date_fullfill = new Date();
               if (typeof this.registerApprovalFinanciero.notes == 'undefined' || this.registerApprovalFinanciero.notes == null) {
                  this.registerApprovalFinanciero.notes = '';
               }
               this.financialSelectedId = this.registerApprovalFinanciero.id_user;
               this.checkIfIsAssigned();
               this.checkIfHasInform();
               this.checkIfHasRequisites();
               this.checkIfHasIspectionDate();
            }
         });
      }).catch( e => { console.log(e); });
   }).catch( e => { console.log(e); });
  }
  if (this.activity == 'ALIMENTOS Y BEBIDAS') {
   this.approvalStateABDataService.get_by_register_id(this.idRegister).then( r => {
      this.registerApprovals = r;
      this.approvalStateAttachmentABDataService.get_by_register_id(this.idRegister).then( r => {
         const approvalStateAttachments = r as ApprovalStateAttachment[];
         this.registerApprovals.forEach(element => {
            if (element.approval_id == 2){
               if (element.value) {
                  this.inspectionState = 1;
               } else {
                  if (this.pays.length > 0) {
                     this.inspectionState = 2;
                  } else {
                     this.inspectionState = 0;
                  }
                  const estado: String = this.stateTramiteId.toString();
                  const digito = estado.substring(estado.length-1, estado.length);
                  if (digito == '8'){
                     this.inspectionState = 3;
                  }
               }
               if (approvalStateAttachments.length == 0) {
                  this.inspectionState = 0;
                  this.declarationApprovalStateAttachment = new ApprovalStateAttachment();
                  this.declarationApprovalStateAttachment.approval_state_id = element.id;
                  this.payApprovalStateAttachment = new ApprovalStateAttachment();
                  this.payApprovalStateAttachment.approval_state_id = element.id;
               }
               approvalStateAttachments.forEach(approvalStateAttachment => {
                  if (approvalStateAttachment.approval_state_id == element.id) {
                     if (approvalStateAttachment.approval_state_attachment_file_name.search('Informe') == 0) {
                        this.payApprovalStateAttachment = approvalStateAttachment;
                     }
                     if (approvalStateAttachment.approval_state_attachment_file_name.search('Formulario') == 0) {
                        this.declarationApprovalStateAttachment = approvalStateAttachment;
                     }
                  }
               });
               this.registerApprovalFinanciero = element;
               this.registerApprovalFinanciero.date_fullfill = new Date();
               if (typeof this.registerApprovalFinanciero.notes == 'undefined' || this.registerApprovalFinanciero.notes == null) {
                  this.registerApprovalFinanciero.notes = '';
               }
               this.financialSelectedId = this.registerApprovalFinanciero.id_user;
               this.checkIfIsAssigned();
               this.checkIfHasInform();
               this.checkIfHasRequisites();
               this.checkIfHasIspectionDate();
            }
         });
      }).catch( e => { console.log(e); });
   }).catch( e => { console.log(e); });
  }
 }

 getRegisterTypes() {
   this.register_typeDataService.get().then( r => {
      this.register_types = r as RegisterType[];
      this.getRegisterTypesAB();
   }).catch( e => { console.log(e); });
  }

  getRegisterTypesAB() {
   this.register_typeABDataService.get().then( r => {
      this.register_types_AB = r as RegisterTypeAB[];
      this.getRegistersMintur();
   }).catch( e => { console.log(e); });
  }

 selectRegisterMintur(item: any) {
  this.registerMinturSelected = item;
  this.mostrarDataRegisterMintur = true;
  const estado: String = item.states.state_id.toString();
  this.checkMotivoTramite(estado);
  this.fechaSolicitud = new Date(item.register.created_at.toString());
  this.getRuc(this.registerMinturSelected.ruc.number);
  this.getRegistersOnRuc();
  this.groupTypeSelected = new GroupType();
 }

 validateGroupGivenTipe(): Boolean {
    if (this.ruc_registro_selected.ruc.tax_payer_type_id > 1) {
      return this.ruc_registro_selected.ruc.group_given.group_type_id !== 0;
    }
    return true;
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

 validateTariffs() {
   return true;
  }

 validateRuc(): Boolean {
      let validateRepresentantLegalId = true;
      if(this.ruc_registro_selected.ruc.tax_payer_type_id > 1) {
         validateRepresentantLegalId = this.identificationRepresentativePersonValidated;
         return this.identificationContactValidated &&
         this.rucValidated &&
         this.mainPhoneContactValidated &&
         this.secondaryPhoneContactValidated &&
         this.emailContactValidated &&
         this.validateNombramiento() &&
         this.validateGroupGivenTipe() &&
         validateRepresentantLegalId &&
         this.REGCIVILOK &&
         this.SRIOK &&
         this.REGCIVILREPRESENTANTELEGALOK;
      }
      return this.identificationContactValidated &&
      this.rucValidated &&
      this.mainPhoneContactValidated &&
      this.secondaryPhoneContactValidated &&
      this.emailContactValidated &&
      this.REGCIVILOK &&
      this.SRIOK;
   }

 cancelPayManual() {
   this.pay = new Pay();
   this.payManualAgreement = false;
 }

 refresh() {
   this.mostrarMotivoTramite = false;
   this.registerMinturSelected = new Register();
   this.mostrarDataRegisterMintur = false;
   this.ruc_registro_selected = new RegistroDataCarrier();
   this.pay = new Pay();
   this.contactUser.id = 0;
   this.payManualAgreement = false;
   this.pays = [];
   this.estoyVacaciones = false;
   this.getZonales();
   this.getDeclarationStates();
   this.getTramiteStates();
   this.getDeclarationCategories();
   this.getDeclarationItems();
   this.getMaxDeclarationDate();
   this.getTaxPayerType();
   this.getGroupType();
   this.getStates();
   this.getZonalesEstablishment();
   this.getUbications();
 }

 getZonales() {
   this.zoneDataService.get().then( r => {
      this.zonales = r;
   }).catch( e => { console.log(e); });
 }

 getUbications() {
   this.ubications = [];
   this.ubicationDataService.get().then( r => {
      this.ubications = r as Ubication[];
   }).catch( e => { console.log(e); });
  }

 getInspectores() {
  this.inspectores = [];
  this.userDataService.get_by_rol('5').then( r => {
     this.inspectores = r as User[];
  }).catch( e => {console.log(e); });
 }
  
 getFinancieros() {
  this.financieros = [];
  this.userDataService.get_by_rol('6').then( r => {
     this.financieros = r as User[];
  }).catch( e => {console.log(e); });
 }

 actualizarDeclaracion() {
   const newStateDeclaration  = new StateDeclaration();
   newStateDeclaration.declaration_id = this.declaration_selected.id;
   newStateDeclaration.state_id = this.declaration_selected.status.id;
   newStateDeclaration.moment = new Date();
   this.declarationstates.forEach(element => {
      if (element.id == newStateDeclaration.state_id) {
         newStateDeclaration.justification = element.name + ' en la fecha ' + newStateDeclaration.moment.toDateString();
      }
   });
   this.stateDeclaratonDataService.post(newStateDeclaration).then( r => {
      this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Declaración');
      this.refresh();
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

 newDeclaration() {
  this.declaration_selected = new Declaration();
  this.mostrarDataDeclaration = true;
  this.guardando = false;
  this.buildDeclarationItemsToShow();
 }

 mostrarFechaMaximaPago(): Boolean {
    return typeof this.declaration_selected.max_date_to_pay != 'undefined';
 }

 getMaxDeclarationDate() {
  const today = new Date();
  this.maxYear = today.getFullYear();
 }

 getComplementaryFoodServiceType() {
  this.complementaryServiceFoodTypeDataService.get().then( r => {
     this.complementaryServiceFoodTypes = r as ComplementaryServiceFoodType[];
  }).catch( e => { console.log(e); });
 }

 buildDeclarationItemsToShow() {
   this.declarationItemsToShow = [];
   this.declarationItemsCategories.forEach(category => {
      category.total = 0;
      if (category.tax_payer_type_id == this.ruc_registro_selected.ruc.tax_payer_type_id) {
         const items = [];
         this.declarationItems.forEach(item => {
           if(item.declaration_item_category_id == category.id) {
              const newValueItem = new DeclarationItemValue();
              newValueItem.declaration_item_id = item.id;
              if (item.tax_payer_type_id == this.ruc_registro_selected.ruc.tax_payer_type_id) {
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

 addComplementaryFoodService() {
    const complementaryFoodService = new ComplementaryServiceFood();
    this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register.push(complementaryFoodService);
 }

 selectComplementaryFoodService(complementaryServiceFood: ComplementaryServiceFood) {
  this.complementaryServiceFoodSelected = complementaryServiceFood;
 }

 removeComplementaryFoodService(complementaryServiceFood: ComplementaryServiceFood) {
  const newList: ComplementaryServiceFood[] = [];
  this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register.forEach(element => {
     if (element !== complementaryServiceFood) {
        newList.push(element);
     }
  });
  this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register = newList;
 }

 getTerminosCondicionesAgreement() {
  this.agreementDataService.get(1).then( r => {
     this.terminosCondicionesAgreement = r.Agreement as Agreement;
     this.terminosCondicionesAgreement.content = this.terminosCondicionesAgreement.content.replace('##USER##', '<strong>' + this.user.name.toUpperCase() + '</strong>');
     this.terminosCondicionesAgreement.content = this.terminosCondicionesAgreement.content.replace('##RUC##', '<strong>' + this.user.ruc + '</strong>');
  }).catch( e => { console.log(e); });
 }

 actualizarValorPagar(pay: Pay) {
    pay.amount_to_pay = (pay.amount_to_pay_base*1) + (pay.amount_to_pay_fines*1) + (pay.amount_to_pay_taxes*1);
 }

 getRuc(number: String) {
   this.rucDataService.get_filtered(number).then( r => {
      if ( typeof r.Ruc === 'undefined') {
         this.ruc_registro_selected.ruc = new Ruc();
         this.ruc_registro_selected.ruc.establishments = [];
         this.ruc_registro_selected.ruc.number = number;
         this.ruc_registro_selected.ruc.contact_user = new User();
         this.ruc_registro_selected.ruc.establishments = [];
         this.ruc_registro_selected.ruc.group_given = new GroupGiven();
         this.ruc_registro_selected.ruc.person_representative = new PersonRepresentative();
         this.ruc_registro_selected.ruc.tax_payer_type_id = 0;
         this.ruc_registro_selected.ruc.contact_user_id = 0;
         this.ruc_registro_selected.ruc.person_representative.identification = this.user.identification;
         this.checkIdentificationRepresentant();
         this.checkRuc();
      } else {
         this.ruc_registro_selected.ruc = r.Ruc as Ruc;
         this.getPays();
         this.getRegistersOnRuc();
         this.ruc_registro_selected.ruc.establishments = [];
         this.ruc_registro_selected.ruc.contact_user = r.contact_user as User;
         this.contactUser = r.contact_user as User;
         if (r.group_given == '0') {
            this.ruc_registro_selected.ruc.group_given = new GroupGiven();
         } else {
            this.ruc_registro_selected.ruc.group_given = r.group_given as GroupGiven;
            this.group_types = [];
            this.group_typeDataService.get().then( r => {
               this.group_types = r as GroupType[];
               this.setGroupTypeSelected(this.ruc_registro_selected.ruc.group_given.group_type_id);
            }).catch( e => console.log(e) );
         }
         if (r.person_representative == '0') {
            this.ruc_registro_selected.ruc.person_representative = new PersonRepresentative();
         } else {
            this.ruc_registro_selected.ruc.person_representative = r.person_representative as PersonRepresentative;
         }
         this.ruc_registro_selected.ruc.person_representative_attachment = new PersonRepresentativeAttachment();
         if(this.ruc_registro_selected.ruc.tax_payer_type_id > 1) {
            this.getPersonRepresentativeAttachment(this.ruc_registro_selected.ruc.number);
         }
         this.consumoCedula = false;
         this.consumoCedulaEstablishmentContact = false;
         this.consumoRuc = false;
         this.consumoCedulaRepresentanteLegal = false;
         this.SRIOK = false;
         this.REGCIVILOK = false;
         this.REGCIVILOKEstablishment = false;
         this.REGCIVILREPRESENTANTELEGALOK = false;
         this.checkRuc();
         this.checkIdentificationRepresentant();
         this.getEstablishmentsOnRuc(this.currentPageEstablishment);
      }
   }).catch( e => { console.log(e); });
  }

 selectPay(pay: Pay) {
   this.paySelectedOrders = pay;
 }

 getPays() {
    this.payManualAgreement = false;
    this.paySelectedOrders = new Pay();
   this.payDataService.get_by_ruc_id(this.ruc_registro_selected.ruc.id).then( r => {
      this.pays = r as Pay[];
      this.pays.forEach(pay => {
         if( pay.pay_attachment == null || typeof(pay.pay_attachment) == 'undefined') {
            pay.pay_attachment = new PayAttachment();
         }
      });
      if (this.pays.length == 0) {
         this.pay = new Pay();
      }
      this.buildPays();
   }).catch( e => { console.log(e); } );
 }

 buildPays() {
    this.payTaxDataService.get().then( r => {
       this.paytaxes = r as PayTax[];
       this.pays_calc = [];
       this.declarations.forEach(declaration => {
         this.calcTaxes(declaration);
       });
    }).catch( e => { console.log(e); });
 }

 checkImContactRuc() {
  if (this.imContactRuc) {
     this.ruc_registro_selected.ruc.contact_user.id = this.user.id;
     this.ruc_registro_selected.ruc.contact_user = this.user;
     this.identificationContactValidated = true;
     this.consumoCedula = true;
     this.mainPhoneContactValidated = true;
     this.secondaryPhoneContactValidated = true;
     this.emailContactValidated = true;
     this.REGCIVILOK = true;
  }
 }

 getEstablishmentsOnRuc(currentpage: number) {
    this.declaration_selected = new Declaration();
   this.establishment_selected = new Establishment();
   this.mostrarDataEstablishment = false;
   this.establishmentDataService.getByRuc(this.ruc_registro_selected.ruc.number, this.recordsByPageEstablishment, currentpage).then( r => {
      const establecimientos = r.data as Establishment[];
      if(establecimientos.length == 0){
        this.ruc_registro_selected.ruc.establishments = [];
      }else {
        this.ruc_registro_selected.ruc.establishments = r.data as Establishment[];
        this.buildDataTableEstablishment();
      }
   }).catch( e => { console.log(e); });
 }

 getPersonRepresentativeAttachment(ruc_number: String) {
  this.personRepresentativeAttachmentDataService.get_filtered(ruc_number).then( r => {
     if(r == '0'){
        this.ruc_registro_selected.ruc.person_representative_attachment = new PersonRepresentativeAttachment();
     }else {
        this.ruc_registro_selected.ruc.person_representative_attachment = r as PersonRepresentativeAttachment;
     }
  }).catch( e => { console.log(e); });
 }

 getCertificationTypes() {
  this.establishment_certification_types = [];
  this.establishment_certification_typeDataService.get().then( r => {
     this.establishment_certification_types = r as EstablishmentCertificationType[];
  }).catch( e => { console.log(e); });
 }

 validateNombramiento(): Boolean {
    if(this.ruc_registro_selected.ruc.tax_payer_type_id <= 1) {
       return true;
    }
    return !(this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_name == '');
 }

 getUser() {
  this.roles = JSON.parse(sessionStorage.getItem('roles')) as AccountRol[];
  this.userDataService.get(JSON.parse(sessionStorage.getItem('user')).id).then( r => {
    this.user = r as User;
    this.getTerminosCondicionesAgreement();
  }).catch( e => console.log(e));
 }

 CodeFilePersonRepresentativeAttachment(event) {
  const reader = new FileReader();
  if (event.target.files && event.target.files.length > 0) {
     const file = event.target.files[0];
     reader.readAsDataURL(file);
     reader.onload = () => {
        this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_name = file.name;
        this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_type = file.type;
        this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file = reader.result.toString().split(',')[1];
     };
  }
 }

 borrarNombramiento() {
  this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file = '';
  this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_type = '';
  this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_name = '';
 }

 descargarNombramiento() {
  this.downloadFile(
     this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file,
     this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_type,
     this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_name);
 }

 getCapacityTypes() {
  this.alowed_capacity_types = [];
  this.capacityTypeDataService.get_filtered_by_register_type(this.rucEstablishmentRegisterSelected.register_type_id).then( r => {
     this.alowed_capacity_types = r as CapacityType[];
  }).catch( e => { console.log(e); });
 }

 refreshEstablishment() {
  this.goToPageEstablishment(this.currentPageEstablishment);
 }

 getStates() {
  this.states = [];
  this.stateDataService.get().then( r => {
     this.states = r as State[];
     this.getStatesAlojamiento();
  }).catch( e => { console.log(e); });
 }

 getStatesAlojamiento() {
   this.statesAlojamiento = [];
   this.stateAlojamientoDataService.get().then( r => {
      this.statesAlojamiento = r as StateAlojamiento[];
      this.getRegisterTypes();
      this.getSpecificStates();
   }).catch( e => { console.log(e); });
 }

 getRegisterCategory(id: number, activity: string): String {
   let toReturn: String = '';
   let fatherCode: String = '';
   if (activity == 'ALOJAMIENTO') {
      this.register_types.forEach(register_type => {
         if (register_type.id == id) {
          toReturn = register_type.name;
          fatherCode = register_type.father_code;
         }
      });
      this.register_types.forEach(register_type => {
         if (register_type.code == fatherCode) {
            toReturn = register_type.name + ' - ' + toReturn;
         }
      });
   }
   if (activity == 'ALIMENTOS Y BEBIDAS') {
      this.register_types_AB.forEach(register_type => {
         if (register_type.id == id) {
          toReturn = register_type.name;
          toReturn = register_type.name;
          if (register_type.name == 'Pendiente') {
             toReturn = "No Cumple Inspección (No Turístico)";
          }
          fatherCode = register_type.father_code;
         }
      });
      this.register_types_AB.forEach(register_type => {
         if (register_type.code == fatherCode) {
            toReturn = register_type.name + ' - ' + toReturn;
         }
      });
   }
   return toReturn;
  }

 getRegisterState(id: number): String {
   let toReturn: String = '';
   let fatherCode: String = '';
   this.statesAlojamiento.forEach(state => {
      if (state.id == id) {
       toReturn = state.name;
       fatherCode = state.father_code;
      }
   });
   this.statesAlojamiento.forEach(state => {
      if (state.code == fatherCode) {
         toReturn = state.name + ' - ' + toReturn;
      }
   });
   return toReturn;
}


 getClasifications() {
  this.clasifications_registers = [];
  this.categorySelectedCode = '-';
  this.showRequisites = false;
  this.register_typeDataService.get_filtered('-').then( r => {
     this.clasifications_registers = r as RegisterType[];
  }).catch( e => { console.log(e) });
 }

 getRucNameTypes() {
  this.ruc_name_types = [];
  this.rucNameTypeDataService.get().then( r => {
     this.ruc_name_types = r as RucNameType[];
  }).catch( e => { console.log(e); });
 }

 getDeclarationsByEstablishment(id: number) {
    this.declarations = [];
   this.declarationDataService.get_by_establishment(id).then( r => {
      this.declarations = r as Declaration[];
   }).catch( e => { console.log(e); });
 }

 nuevaOrdenDePago() {
   this.pay = new Pay();
 }

 selectDeclaration(declaration: Declaration) {
   this.declaration_selected = declaration;
   this.getDeclarationAttachment(declaration.id);
   this.mostrarDataDeclaration = true;
   this.declarationItemsToShow = [];
   this.guardando = false;
   this.declarationItemsCategories.forEach(category => {
      if (category.tax_payer_type_id == this.ruc_registro_selected.ruc.tax_payer_type_id) {
         const items = [];
         declaration.declaration_item_values_on_declaration.forEach(newValueItem => {
            this.declarationItems.forEach(item => {
               if (item.tax_payer_type_id == this.ruc_registro_selected.ruc.tax_payer_type_id) {
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

calcTotalPartials() {
   this.declarationItemsToShow.forEach(group => {
      group.Category.total = 0;
      group.items.forEach(item => {
         group.Category.total += item.valueItem.value * item.declarationItem.factor;
      });
   });
  }

calcTaxes(declaration: Declaration) {
   const toCalc = [];
   this.declarationItemsCategories.forEach(category => {
      if (category.tax_payer_type_id == this.ruc_registro_selected.ruc.tax_payer_type_id) {
         const items = [];
         declaration.declaration_item_values_on_declaration.forEach(newValueItem => {
            this.declarationItems.forEach(item => {
               if (item.tax_payer_type_id == this.ruc_registro_selected.ruc.tax_payer_type_id) {
                  if ((item.id == newValueItem.declaration_item_id) && (item.declaration_item_category_id == category.id)) {
                     items.push({declarationItem: item, valueItem: newValueItem});
                  }
               }
            });
         });
         toCalc.push({Category: category, items: items});
      }
   });
   let totaltoPayBase = 0;
   toCalc.forEach(itemToShow => {
      itemToShow.items.forEach(item => {
         totaltoPayBase += item.valueItem.value * (item.declarationItem.factor);
      });
   });
   const mora = [0.03, 0.011, 0.011, 0.011, 0.011, 0.011, 0.011];
   let intereses = 0;
   const meses = [
               {month: 0, trimester: 1},
               {month: 1, trimester: 1},
               {month: 2, trimester: 1},
               {month: 3, trimester: 2},
               {month: 4, trimester: 2},
               {month: 5, trimester: 2},
               {month: 6, trimester: 3},
               {month: 7, trimester: 3},
               {month: 8, trimester: 3},
               {month: 9, trimester: 4},
               {month: 10, trimester: 4},
               {month: 11, trimester: 4}
            ];
   let cuenta = 0;
   this.paytaxes.forEach(paytax => {
      if (paytax.year >= declaration.year) {
         meses.forEach(mes => {
            if (mes.trimester == paytax.trimester) {
               intereses = intereses + (paytax.value*1);
               cuenta = cuenta + 1;
            }
         });
      }
   });
   const today = new Date();
   this.paytaxes.forEach(paytax => {
      if (paytax.year == declaration.year) {
         meses.forEach(mes => {
            if(mes.month < 7) {
               if (mes.trimester == paytax.trimester) {
                  intereses = intereses - (paytax.value*1);
                  cuenta = cuenta - 1;
               }
            }
         });
      }
      if (paytax.year == today.getFullYear()) {
         meses.forEach(mes => {
            if(mes.month > today.getMonth() ) {
               if (mes.trimester == paytax.trimester) {
                  intereses = intereses - (paytax.value*1);
                  cuenta = cuenta - 1;
               }
            }
         });
      }
   });
   let moraCalculado = 0;
   if (cuenta > 0) {
      for(let i = 1; i<=cuenta; i++){
         if (i <= mora.length) {
            moraCalculado += mora[i - 1]*1;
         }
      }
   }
   const impuestoCausado = totaltoPayBase/1000;
   const interesNominal = intereses/100;
   const newPayCalc = new Pay();
   newPayCalc.amount_to_pay_base = this.rounded(impuestoCausado);
   newPayCalc.amount_to_pay_fines = this.rounded(impuestoCausado * moraCalculado);
   newPayCalc.amount_to_pay_taxes = this.rounded(impuestoCausado * interesNominal);
   newPayCalc.amount_to_pay = this.rounded(newPayCalc.amount_to_pay_base + newPayCalc.amount_to_pay_fines + newPayCalc.amount_to_pay_taxes);
   newPayCalc.code = declaration.year.toString();
   this.pays_calc.push(newPayCalc);
}

rounded(numero: number): number {
   const toround = numero*100;
   return Math.round(toround)/100;
}

encerarAllDeclaracion(paySelected: Pay) {
   Swal.fire({
      title: 'Confirmación',
      text: '¿Está seguro que desea encerar la declaración?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Confirmado!',
          'Los valores de la declaración han sido encerados',
          'success'
        );
        paySelected.amount_to_pay_base = 0;
        paySelected.amount_to_pay_fines = 0;
        paySelected.amount_to_pay_taxes = 0;
        paySelected.amount_to_pay = paySelected.amount_to_pay_base + paySelected.amount_to_pay_fines + paySelected.amount_to_pay_taxes;
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          '',
          'error'
        );
      }
    });
}

encerarDeclaracion(paySelected: Pay) {
   paySelected.amount_to_pay_fines = 0;
   paySelected.amount_to_pay_taxes = 0;
   paySelected.amount_to_pay = paySelected.amount_to_pay_base + paySelected.amount_to_pay_fines + paySelected.amount_to_pay_taxes;
}

  getDeclarationAttachment(declaration_id: number) {
   this.declarationAttachmentDataService.get_by_declaration_id(declaration_id).then( r => {
      this.balance = r as DeclarationAttachment;
   }).catch( e => { console.log(e); });
  }

 guardarDeclaracion() {
  this.declaration_selected.declaration_item_values_on_declaration = [];
  this.declarationItemsToShow.forEach(element => {
     element.items.forEach(item => {
        this.declaration_selected.declaration_item_values_on_declaration.push(item.valueItem);
     });
  });
  this.guardando = true;
  this.declaration_selected.establishment_id = this.establishment_declarations_selected.id;
  this.declarationDataService.register_data(this.declaration_selected).then( r => {
     this.guardando = false;
     if ( r === '0' ) {
        this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Declaración');
        return;
     }
     this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Declaración');
     this.getEstablishmentsOnRuc(this.currentPageEstablishment);
     this.establishment_declarations_selected = new Establishment();
     this.mostrarDataDeclaration = false;
  }).catch( e => {
     this.guardando = false;
     this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Declaración');
     return;
  });
 }

 guardarRUC() {
  if (!this.validateRuc()) {
     this.toastr.errorToastr('Existe conflicto con la información ingresada.', 'Nuevo');
     return;
  }
  if(!this.REGCIVILOK) {
     this.toastr.errorToastr('Esperando confirmación del Registro Civil', 'Registro Civil');
  }
  if(!this.SRIOK) {
     this.toastr.errorToastr('Esperando confirmación del SRI', 'SRI');
  }
  if(!this.SRIOK || !this.REGCIVILOK){
     return;
  }
  this.ruc_registro_selected.ruc.contact_user.ruc = this.ruc_registro_selected.ruc.number;
  this.ruc_registro_selected.ruc.person_representative_attachment.ruc = this.ruc_registro_selected.ruc.number;
  this.guardando = true;
  if (typeof this.ruc_registro_selected.ruc.id === 'undefined') {11
     this.rucDataService.register_ruc(this.ruc_registro_selected.ruc).then( r => {
        this.guardando = false;
        if ( r === '0' ) {
           this.toastr.errorToastr('Existe conflicto con el correo de la persona de contacto ingresada.', 'Nuevo');
           return;
        }
        this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
        this.refresh();
     }).catch( e => {
        this.guardando = false;
        this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Nuevo');
        return;
     });
  } else {
     this.rucDataService.update_ruc(this.ruc_registro_selected.ruc).then( r => {
        this.guardando = false;
        if ( r === '0' ) {
           this.toastr.errorToastr('Existe conflicto con el correo de la persona de contacto ingresada.', 'Actualizar');
           return;
        }
        this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
        this.refresh();
     }).catch( e => {
        this.guardando = false;
        this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Nuevo');
        return;
     });
  }
 }

 checkAgreement() {
  if (this.terminosCondiciones) {
     this.refresh();
  }
 }

 getRegistersOnRuc() {
   this.rucEstablishmentRegisterSelected = new Register();
   this.mostrarDataRegister = false;
   if (this.activity == 'ALOJAMIENTO') {
      this.registerDataService.get_registers_by_ruc(this.ruc_registro_selected.ruc.number).then( r => {
         this.ruc_registro_selected.registers = r as any[];
      }).catch( e => { console.log(e); });
   }
   if (this.activity == 'ALIMENTOS Y BEBIDAS') {
      this.registerABDataService.get_registers_by_ruc(this.ruc_registro_selected.ruc.number).then( r => {
         this.ruc_registro_selected.registers = r as any[];
      }).catch( e => { console.log(e); });
   }
  }

 onCellClickEstablishmentDeclaration(event) {
  this.ruc_registro_selected.ruc.establishments.forEach(element => {
     if (element.ruc_code_id == event.row.code) {
        this.selectRegisterEstablishmentDeclaration(element);
     }
  });
  this.rowsEstablishment.forEach(row => {
     if (row.code == event.row.code) {
        row.selected = '<div class="col-12 text-right"><span class="far fa-hand-point-right"></span></div>';
     } else {
        row.selected = '';
     }
  });
 }
 
 getTariffs() {
  this.tarifas = [];
  this.tariffTypeDataService.get().then( r => {
     const result = r as TariffType[];
     result.forEach(father => {
        if(father.father_code == '-'){
           const tariff_father: TariffType = father;
           const tariff_child: TariffType[] = [];
           result.forEach(child => {
              if(child.father_code == father.code) {
                 tariff_child.push(child);
              }
           });
           this.tarifas.push({father: tariff_father, childs: tariff_child});
        }
     });
  }).catch( e => { console.log(e); });
 }

 getEstablishmentWorkerGroup(): Worker[] {
  const workers_on_establishment: Worker[] = [];
  this.genders.forEach(gender => {
     this.worker_groups.forEach(worker_group => {
        const newEstablishmentWorker = new Worker();
        newEstablishmentWorker.gender_id = gender.id;
        newEstablishmentWorker.gender_name = gender.name;
        newEstablishmentWorker.worker_group_id = worker_group.id;
        newEstablishmentWorker.worker_group_name = worker_group.name;
        newEstablishmentWorker.is_max = worker_group.is_max;
        workers_on_establishment.push(newEstablishmentWorker);
     });
  });
  return workers_on_establishment;
 }

 getComplementaryServiceType(categoryFilter: string) {
  this.complementary_service_types = [];
  this.complementary_service_typeDataService.get_filtered(categoryFilter).then( r => {
     this.complementary_service_types = r as ComplementaryServiceType[];
  }).catch( e => console.log(e) );
 }

 getAllowedInfo() {
  this.getRequisitesByRegisterType();
  this.getBedTypes();
  this.getCapacityTypes();
 }

 getBedTypes() {
  this.alowed_bed_types = [];
  this.bedTypeDataService.get_filtered_by_register_type(this.rucEstablishmentRegisterSelected.register_type_id).then( r => {
     this.alowed_bed_types = r as BedType[];
  }).catch( e => console.log(e) );
 }

 getRequisitesByRegisterType() {
  const AllRequisites = [];
  this.requisitesByRegisterType = [];
  this.rucEstablishmentRegisterSelected.requisites = [];
  this.showRequisites = false;
  this.requisiteDataService.get_filtered(this.rucEstablishmentRegisterSelected.register_type_id).then( r => {
     this.requisitesByRegisterType = r as Requisite[];
     this.requisitesByRegisterType.forEach(element => {
        let existe = false;
        this.rucEstablishmentRegisterSelected.requisites.forEach(element1 => {
           if (element1.requisite_name == element.name) {
              existe = true;
           }
        });
        if (!existe) {
           const newRegisterRequisite = new RegisterRequisite();
           newRegisterRequisite.requisite_name = element.name;
           newRegisterRequisite.requisite_id = element.id;
           newRegisterRequisite.fullfill = true;
           newRegisterRequisite.requisite_father_code = element.father_code;
           AllRequisites.push(newRegisterRequisite);
        }
     });
     this.showRequisites  = true;
     const padres = [];
     AllRequisites.forEach(element => {
        if (element.requisite_father_code == '-') {
           padres.push(element);
        }
     });
     padres.forEach(padre => {
        this.rucEstablishmentRegisterSelected.requisites.push(padre);
        AllRequisites.forEach(element => {
           if (element.requisite_father_code == padre.requisite_id.toString()) {
              this.rucEstablishmentRegisterSelected.requisites.push(element);
           }
        });
     });
  }).catch( e => console.log(e) );
 }

 getComplementaryServiceTypeCategories() {
  this.complementary_service_types_categories = [];
  this.complementary_service_typeDataService.get_filtered('-').then( r => {
     this.complementary_service_types_categories = r as ComplementaryServiceType[];
  }).catch( e => console.log(e) );
 }

 getCategories() {
  this.categories_registers = [];
  this.rucEstablishmentRegisterSelected.requisites = [];
  this.register_typeDataService.get_filtered(this.categorySelectedCode).then( r => {
     this.categories_registers = r as RegisterType[];
  }).catch( e => { console.log(e) });
 }

 getEstablishmentCertificationTypesCategories() {
  this.establishment_certification_types_categories = [];
  this.establishment_certification_typeDataService.get_filtered('-').then( r => {
     this.establishment_certification_types_categories = r as EstablishmentCertificationType[];
  }).catch( e => console.log(e) );
 }

 getEstablishmentCertificationTypesSpecific(establishment_certification: EstablishmentCertification) {
  establishment_certification.establishment_certification_type_specifics = [];
  this.establishment_certification_typeDataService.get_filtered(establishment_certification.establishment_certification_type_fatherCode).then( r => {
     establishment_certification.establishment_certification_type_specifics = r as EstablishmentCertificationType[];
  }).catch( e => console.log(e) );
 }

 getEstablishmentPropertyType() {
  this.establishment_property_types = [];
  this.establishment_property_typeDataService.get().then( r => {
     this.establishment_property_types = r as EstablishmentPropertyType[];
  }).catch( e => console.log(e) );
 }

 borrarCertificado(establishment_certification) {
  establishment_certification.establishment_certification_attachment = new EstablishmentCertificationAttachment();
 }

 getGenders() {
  this.genders = [];
  this.genderDataService.get().then( r => {
     this.genders = r as Gender[];
     this.buildWorkerGroups();
  }).catch( e => console.log(e) );
 }

 getSystemNames() {
  this.system_names = [];
  this.systemNameDataService.get().then( r => {
     this.system_names = r as SystemName[];
  }).catch( e => console.log(e) );
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
           this.provinciasEstablishment.sort();
        }).catch( e => { console.log(e) });
     });
  }).catch( e => { console.log(e) });
 }

 getCantonesEstablishment() {
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

 updateGmap() {
   this.parroquiasEstablishment.forEach(parroquia => {
      if (parroquia.id == this.establishment_selected.ubication_id) {
         this.establishment_selected.address_map_latitude = parroquia.gmap_reference_latitude;
        this.establishment_selected.address_map_longitude = parroquia.gmap_reference_longitude;
      }
   });
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

 getMaxBed(capacity: Capacity) {
   this.alowed_capacity_types.forEach(capacityType => {
      if(capacityType.id == capacity.capacity_type_id) {
         capacity.editable_beds = capacityType.editable_beds;
         capacity.editable_spaces = capacityType.editable_spaces;
      }
   });
  }
 
 setGroupTypeSelected(id: number) {
    this.groupTypeSelected = new GroupType();
    this.group_types.forEach(element => {
      if(element.id == id) {
         this.groupTypeSelected = element;
      }
    });
 }

 getGroupType() {
   this.group_types = [];
   this.group_typeDataService.get().then( r => {
     this.group_types = r as GroupType[];
   }).catch( e => console.log(e) );
 }
 
 validateEstablecimiento(): Boolean {
  if (!((this.establishment_selected.ruc_code_id !== '-') &&
  (this.establishment_selected.ruc_name_type_id !== 0) &&
  this.establishmentComercialNameValidated  &&
  (this.establishment_selected.establishment_property_type_id !== 0) &&
  this.urlwebEstablishmentValidated &&
  (this.establishment_selected.ubication_id !== 0) &&
  this.addressEstablishmentValidated &&
  (this.establishment_selected.address_reference !== '') &&
  this.identificationContactEstablishmentValidated &&
  this.mainPhoneContactEstablishmentValidated &&
  this.secondaryPhoneContactEstablishmentValidated &&
  this.emailContactEstablishmentValidated &&
  this.REGCIVILOKEstablishment
  )) {
     return false;
  }
  return true;
 }

 validateWorkers(): Boolean {
  let toreturn = true;
  this.genders.forEach(gender => {
     let max = 0;
     this.establishment_selected.workers_on_establishment.forEach(worker => {
        if (worker.gender_name == gender.name && worker.is_max) {
           max = worker.count;
        }
     });
     this.establishment_selected.workers_on_establishment.forEach(worker => {
        if(worker.gender_name == gender.name && worker.count > max) {
           toreturn = false;
        }
     });
  });
  return toreturn;
 }

 guardarEstablecimiento() {
   if (this.cantonEstablishmentSelectedCode == '021701') {
      this.toastr.errorToastr('Estimado Usuario, para solicitar el Certificado de Registro de Turismo de establecimientos ubicados en el Cantón Quito, por favor acercarse a las oficinas de "Quito Turismo"', 'Nuevo');
      return;
   }
   if (!this.validateWorkers()) {
      this.toastr.errorToastr('Existe conflicto con la información ingresada referente a los Trabajadores en el Establecimiento.', 'Nuevo');
      return;
   }
   if (!this.validateEstablecimiento()) {
      this.toastr.errorToastr('Existe conflicto con la información ingresada.', 'Nuevo');
      return;
   }
   if(!this.REGCIVILOKEstablishment) {
      this.toastr.errorToastr('Esperando confirmación del Registro Civil', 'Registro Civil');
      return;
   }
   if(this.establishment_selected_picture.establishment_picture_file === '') {
      this.toastr.errorToastr('Debe cargar la fotografía de la fachada del establecimiento', 'Fotografía de Fachada del Establecimiento');
      return;
   }
   if(!this.secondaryPhoneContactEstablishmentValidated) {
      this.toastr.errorToastr('Existe conflicto con la información del contacto del establecimiento', 'Información');
      return;
   }
   if(!this.REGCIVILOKEstablishment){
      return;
   }
   this.guardando = true;
   this.establishment_selected.ruc_id = this.ruc_registro_selected.ruc.id;
   this.establishment_declarations_selected = this.establishment_selected;
   if (this.establishment_selected.ruc_name_type_id <= 1 ) {
      this.establishment_selected.franchise_chain_name = '';
   } else {
      if (this.establishment_selected.franchise_chain_name == '') {
         this.toastr.errorToastr('Escriba el nombre de la Franquicia o Cadena', 'Nuevo');
         return;
      }
   }
   this.establishmentDataService.register_establishment_data(this.establishment_selected).then( r => {
      this.guardando = false;
      if ( r === '0' ) {
         this.toastr.errorToastr('Existe conflicto con el correo de la persona de contacto ingresada.', 'Nuevo');
         return;
      }
      this.establishment_declarations_selected.id = r.id;
      if (typeof this.establishment_selected_picture.id === 'undefined') {
         this.establishment_selected_picture.establishment_id = r.id;
         this.establishmentPictureDataService.post(this.establishment_selected_picture).then( r => {
            this.selectRegisterEstablishment(this.establishment_selected);
            this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
         }).catch( e => console.log(e) );
      } else {
         this.establishmentPictureDataService.put(this.establishment_selected_picture).then( r => {
            this.selectRegisterEstablishment(this.establishment_selected);
            this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
         }).catch( e => console.log(e) );
      }
   }).catch( e => {
      this.guardando = false;
      this.toastr.errorToastr('Existe conflicto con la información ingresada.', 'Nuevo');
      return;
   });
  }

 newRegisterRecord() {
  this.rucEstablishmentRegisterSelected = new Register();
  this.mostrarDataRegister = true;
 }

 checkRuc() {
   if (this.consumoRuc && this.SRIOK) {
     return;
   }
   this.rucData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al SRI...</strong></div>';
   this.ruc_registro_selected.ruc.number = this.ruc_registro_selected.ruc.number.replace(/[^\d]/, '');
   if (this.ruc_registro_selected.ruc.number.length !== 13) {
     this.rucValidated = false;
     this.consumoRuc = false;
     this.ruc_registro_selected.ruc.baised_accounting = false;
     this.ruc_registro_selected.ruc.tax_payer_type_id = 1;
     return;
   }
   if (!this.consumoRuc) {
     this.consumoRuc = true;
     this.rucValidated = true;
     this.dinardapDataService.get_super_cias(this.ruc_registro_selected.ruc.number).then( r => {
        this.superciasData = '';
        if (r.companias !== 0) {
           const companias = r.companias.original.entidades.entidad;
           companias.forEach(entidad => {
              if (entidad.nombre == 'Superintendencia de Compañias Datos Companía') {
                 entidad.filas.fila.columnas.columna.forEach(element => {
                    if (element.campo == 'expediente') {
                       this.superciasData += '<strong>Número de Expediente: </strong> ' + element.valor + '<br/>';
                       if (JSON.stringify(element.valor) !== '{}') {
                          this.ruc_registro_selected.ruc.group_given.register_code = element.valor;
                        }
                    }
                    if (element.campo == 'objeto_social') {
                       this.superciasData += '<strong>Objeto Social: </strong> ' + element.valor + '<br/>';
                    }   
                 });
              }
           });  
        }
     }).catch( e => { console.log(e); });
     this.dinardapDataService.get_RUC(this.ruc_registro_selected.ruc.number).then( r => {
        this.SRIOK = true; 
        this.rucValidated = true;
        const itemsDetalles_SRI_RUC = r.sri_ruc.original.entidades.entidad.filas.fila.columnas.columna;
        const itemsDetalles_SRI_RUC_COMPLETO = r.sri_ruc_completo.original.entidades.entidad;
        this.establishment_selected.ruc_code_id = '-';
        this.rucData = '';
        let datosGenerales = '';
        let datosRL = '';
        let datosAE = '';
        let datosContactoSRI = '';
        itemsDetalles_SRI_RUC_COMPLETO.forEach(entidad => {
           if (entidad.nombre == 'Actividad Economica') {
              const AE = entidad.filas.fila.columnas.columna;
              AE.forEach(element => {
                 if (element.campo == 'actividadGeneral') {
                    datosAE += '<strong>Actividad Económica: </strong> ' + element.valor + '<br/>';
                 }
              });
           }
           if (entidad.nombre == 'Contribuyente Datos Completo') {
              const DC = entidad.filas.fila.columnas.columna;
              DC.forEach(element => {
                 if (element.campo == 'razonSocial') {
                    datosGenerales += '<strong>Razón Social: </strong> ' + element.valor + '<br/>';
                 }
                 if (element.campo == 'email') {
                    if (JSON.stringify(element.valor) !== '{}') {
                       datosContactoSRI += '<strong>Correo Electrónico - Registrado en SRI: </strong> ' + element.valor + '<br/>';
                    }
                 }
                 if (element.campo == 'telefonoDomicilio') {
                    if (JSON.stringify(element.valor) !== '{}') {
                       datosContactoSRI += '<strong>Teléfono Domicilio - Registrado en SRI: </strong> ' + element.valor + '<br/>';
                    }
                 }
              });
           }
           if (entidad.nombre == 'Representante Legal') {
              const RL = entidad.filas.fila.columnas.columna;
              RL.forEach(element => {
                 if (element.campo == 'identificacion') {
                    datosRL += '<strong>Identificación Representante Legal: </strong> ' + element.valor + '<br/>';
                    if (JSON.stringify(element.valor) !== '{}') {
                       this.ruc_registro_selected.ruc.person_representative.identification = element.valor;
                       this.consumoCedulaRepresentanteLegal = false;
                       this.REGCIVILREPRESENTANTELEGALOK = false;
                       this.checkIdentificationRepresentant();
                    }
                 }
                 if (element.campo == 'nombre') {
                    datosRL += '<strong>Nombre Representante Legal: </strong> ' + element.valor + '<br/>';
                 }
              });
           }
        });
        itemsDetalles_SRI_RUC.forEach(element => {
           if (element.campo == 'estadoContribuyente') {
              datosGenerales += '<strong>Estado Contribuyente: </strong> ' + element.valor + '<br/>';
           }
           if (element.campo == 'fechaInscripcionRuc') {
              datosGenerales += '<strong>Fecha de Inscripción del RUC: </strong> ' + element.valor + '<br/>';
           }
           if (element.campo == 'fechaActualizacion') {
              datosGenerales += '<strong>Fecha de Actualización: </strong> ' + element.valor + '<br/>';
           }
           if (element.campo == 'obligado') {
              if (element.valor == 'N') {
                 this.ruc_registro_selected.ruc.baised_accounting = false;
                 datosGenerales += '<strong>Obligado a Llevar Contabilidad: </strong> NO<br/>';
              } else {
                 this.ruc_registro_selected.ruc.baised_accounting = true;
                 datosGenerales += '<strong>Obligado a Llevar Contabilidad: </strong> SI<br/>';
              }
           }
           if (element.campo == 'personaSociedad') {
              if (element.valor == 'PNL') {
                 this.ruc_registro_selected.ruc.tax_payer_type_id = 1;
              } else {
                 this.ruc_registro_selected.ruc.tax_payer_type_id = 2;
              }
              datosGenerales += '<strong>Tipo de Contribuyente: </strong> ' + element.valor + '<br/>';
           }
           this.rucData = datosGenerales + datosAE + datosContactoSRI;
           if (this.ruc_registro_selected.ruc.tax_payer_type_id != 1) {
              this.rucData += datosRL;
           }
        });
     }).catch( e => {
        console.log(e);
        this.rucData = '<div class="alert alert-danger" role="alert">El SRI, no respondió. Vuelva a intentarlo.</div>';
        this.consumoRuc = false;
        this.SRIOK = false;
     });
  }
 }

 checkCedula() {
   this.ruc_registro_selected.ruc.contact_user.identification = this.ruc_registro_selected.ruc.contact_user.identification.replace(/[^\d]/, '');
   if (this.ruc_registro_selected.ruc.contact_user.identification.length !== 10) {
      this.identificationContactValidated = false;
      this.consumoCedula = false;
      return;
   }
   if (this.consumoCedula && this.REGCIVILOK) {
      return;
   }
   this.cedulaData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al Registro Civil...</strong></div>';
   if (this.ruc_registro_selected.ruc.contact_user.identification === this.user.identification) {
      this.ruc_registro_selected.ruc.contact_user = this.user;
   }
   if (!this.consumoCedula) {
      this.consumoCedula = true;
      this.identificationContactValidated = true;
      this.dinardapDataService.get_cedula(this.ruc_registro_selected.ruc.contact_user.identification).then( r => {
         this.REGCIVILOK = true;
         const registros = r.original.entidades.entidad.filas.fila.columnas.columna;
         this.cedulaData = '';
         registros.forEach(element => {
            if (element.campo === 'cedula') {
               if (element.valor === this.ruc_registro_selected.ruc.contact_user.identification) {
                  this.toastr.successToastr('La cédula ingresada es correcta.', 'Registro Civil');
                  this.identificationContactValidated = true;
               } else {
                  this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
                  this.identificationContactValidated = false;
               }
            }
            if (this.identificationContactValidated) {
               if (element.campo === 'nombre') {
                  this.ruc_registro_selected.ruc.contact_user.name = element.valor;
                  this.cedulaData += '<strong>Nombre: </strong> ' + element.valor + '<br/>';
               }
               if (element.campo === 'fechaNacimiento') {
                  this.cedulaData += '<strong>Fecha de Nacimiento: </strong> ' + element.valor + '<br/>';
               }
               if (element.campo === 'nacionalidad') {
                  this.cedulaData += '<strong>Nacionalidad: </strong> ' + element.valor + '<br/>';
               }
            }
         });
      }).catch( e => {
         this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
         this.cedulaData = '<div class="alert alert-danger" role="alert">El Registro Civil, no respondió. Vuelva a intentarlo.</div>';
         this.REGCIVILOK = false;
         this.consumoCedula = false;
      });
   }
  }

 rucSaved(): Boolean {
  return typeof this.ruc_registro_selected.ruc.id !== 'undefined';
 }

 checkCedulaEstablishment() {
   this.establishment_selected.contact_user.identification = this.establishment_selected.contact_user.identification.replace(/[^\d]/, '');
   if (this.establishment_selected.contact_user.identification.length !== 10) {
      this.identificationContactEstablishmentValidated = false;
      this.consumoCedulaEstablishmentContact = false;
      return;
   }
   if (this.consumoCedulaEstablishmentContact && this.REGCIVILOKEstablishment) {
      return;
   }
   this.cedulaEstablishmentContactData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al Registro Civil...</strong></div>';
   if (!this.consumoCedulaEstablishmentContact) {
      this.identificationContactEstablishmentValidated = true;
      this.consumoCedulaEstablishmentContact = true;
      this.dinardapDataService.get_cedula(this.establishment_selected.contact_user.identification).then( r => {
         const registros = r.original.entidades.entidad.filas.fila.columnas.columna;
         this.cedulaEstablishmentContactData = '';
         this.REGCIVILOKEstablishment = true;
         registros.forEach(element => {
            if (element.campo === 'cedula') {
               if (element.valor === this.establishment_selected.contact_user.identification) {
                  this.toastr.successToastr('La cédula ingresada es correcta.', 'Registro Civil');
                  this.identificationContactEstablishmentValidated = true;
               } else {
                  this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
                  this.identificationContactEstablishmentValidated = false;
               }
            }
            if (this.identificationContactEstablishmentValidated) {
               if (element.campo === 'nombre') {
                  this.cedulaEstablishmentContactData += '<strong>Nombre: </strong> ' + element.valor + '<br/>';
                  this.establishment_selected.contact_user.name = element.valor;
               }
               if (element.campo === 'nacionalidad') {
                  this.cedulaEstablishmentContactData += '<strong>Nacionalidad: </strong> ' + element.valor + '<br/>';
               }
            }
         });
      }).catch( e => {
         this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
         this.cedulaEstablishmentContactData = '<div class="alert alert-danger" role="alert">El Registro Civil, no respondió. Vuelva a intentarlo.</div>';
         this.REGCIVILOKEstablishment = false;
         this.consumoCedulaEstablishmentContact = false;
      });
   }
  }

  checkIdentificationRepresentant() {
   this.ruc_registro_selected.ruc.person_representative.identification = this.ruc_registro_selected.ruc.person_representative.identification.replace(/[^\d]/, '');
   if (this.ruc_registro_selected.ruc.person_representative.identification.length !== 10) {
      this.identificationRepresentativePersonValidated = true;
      this.consumoCedulaRepresentanteLegal = true;
      this.REGCIVILREPRESENTANTELEGALOK = true;
     return;
   }
   if (this.consumoCedulaRepresentanteLegal && this.REGCIVILREPRESENTANTELEGALOK) {
      return;
   }
   this.representanteCedulaData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al Registro Civil...</strong></div>';
   if (!this.consumoCedulaRepresentanteLegal) {
      this.identificationRepresentativePersonValidated = true;
      this.consumoCedulaRepresentanteLegal = true;
      this.dinardapDataService.get_cedula(this.ruc_registro_selected.ruc.person_representative.identification).then( r => {
         const registros = r.original.entidades.entidad.filas.fila.columnas.columna;
         this.representanteCedulaData = '';
         this.ruc_registro_selected.ruc.owner_name = '';
         this.REGCIVILREPRESENTANTELEGALOK = true;
         registros.forEach(element => {
            if (element.campo === 'cedula') {
               if (element.valor === this.ruc_registro_selected.ruc.person_representative.identification) {
                  this.toastr.successToastr('La cédula ingresada es correcta.', 'Registro Civil');
                  this.identificationRepresentativePersonValidated = true;
               } else {
                  this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
                  this.identificationRepresentativePersonValidated = false;
               }
            }
            if (this.identificationRepresentativePersonValidated) {
               if (element.campo === 'nombre') {
                  this.representanteCedulaData += '<strong>Nombre: </strong> ' + element.valor + '<br/>';
                  this.ruc_registro_selected.ruc.owner_name = element.valor;
               }
               if (element.campo === 'fechaNacimiento') {
                  this.representanteCedulaData += '<strong>Fecha de Nacimiento: </strong> ' + element.valor + '<br/>';
               }
               if (element.campo === 'nacionalidad') {
                  this.representanteCedulaData += '<strong>Nacionalidad: </strong> ' + element.valor + '<br/>';
               }
            }
         });
      }).catch( e => {
         this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
         this.representanteCedulaData = '<div class="alert alert-danger" role="alert">El Registro Civil, no respondió. Vuelva a intentarlo.</div>';
         this.REGCIVILREPRESENTANTELEGALOK = false;
         this.consumoCedulaRepresentanteLegal = false;
      });
   }
  }

 checkTelefonoPrincipal(): Boolean {
  this.ruc_registro_selected.ruc.contact_user.main_phone_number = this.ruc_registro_selected.ruc.contact_user.main_phone_number.replace(/[^\d]/, '');
  if (this.ruc_registro_selected.ruc.contact_user.main_phone_number.length < 9) {
     this.mainPhoneContactValidated = false;
     return false;
  }
  this.mainPhoneContactValidated = true;
  return true;
 }

 checkTelefonoPrincipalContactoEstablecimiento(): Boolean {
  this.establishment_selected.contact_user.main_phone_number = this.establishment_selected.contact_user.main_phone_number.replace(/[^\d]/, '');
  if (this.establishment_selected.contact_user.main_phone_number.length < 9) {
     this.mainPhoneContactEstablishmentValidated = false;
     return false;
  }
  this.mainPhoneContactEstablishmentValidated = true;
  return true;
 }

 checkTelefonoSecundario(): Boolean {
  this.ruc_registro_selected.ruc.contact_user.secondary_phone_number = this.ruc_registro_selected.ruc.contact_user.secondary_phone_number.replace(/[^\d]/, '');
  if (this.ruc_registro_selected.ruc.contact_user.secondary_phone_number.length > 0 && this.ruc_registro_selected.ruc.contact_user.secondary_phone_number.length < 9) {
     this.secondaryPhoneContactValidated = false;
     return false;
  }
  this.secondaryPhoneContactValidated = true;
  return true;
 }

 checkTelefonoSecundarioContactoEstablecimiento(): Boolean {
  this.establishment_selected.contact_user.secondary_phone_number = this.establishment_selected.contact_user.secondary_phone_number.replace(/[^\d]/, '');
  if (this.establishment_selected.contact_user.secondary_phone_number.length > 0 && this.establishment_selected.contact_user.secondary_phone_number.length < 9) {
     this.secondaryPhoneContactEstablishmentValidated = false;
     return false;
  }
  this.secondaryPhoneContactEstablishmentValidated = true;
  return true;
 }

 checkTelefonoPrincipalEstablishment(): Boolean {
  this.establishment_selected.contact_user.main_phone_number = this.establishment_selected.contact_user.main_phone_number.replace(/[^\d]/, '');
  if (this.establishment_selected.contact_user.main_phone_number.length < 9) {
     this.mainPhoneEstablishmentValidated = false;
     return false;
  }
  this.mainPhoneEstablishmentValidated = true;
  return true;
 }

 checkTelefonoSecundarioEstablishment(): Boolean {
  this.establishment_selected.contact_user.secondary_phone_number = this.establishment_selected.contact_user.secondary_phone_number.replace(/[^\d]/, '');
  if (this.establishment_selected.contact_user.secondary_phone_number.length > 0 && this.establishment_selected.contact_user.secondary_phone_number.length < 9) {
     this.secondaryPhoneEstablishmentValidated = false;
     return false;
  }
  this.secondaryPhoneEstablishmentValidated = true;
  return true;
 }

 checkEmail(): Boolean {
  const isOk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.ruc_registro_selected.ruc.contact_user.email.toString());
  this.emailContactValidated = isOk;
  return this.emailContactValidated;
 }

 checkEmailContactEstablishment(): Boolean {
  const isOk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.establishment_selected.contact_user.email.toString());
  this.emailContactEstablishmentValidated = isOk;
  return this.emailContactEstablishmentValidated;
 }

 checkURLWeb():Boolean {
  const isOk = /^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/.test(this.establishment_selected.url_web.toString());
  const isOk2 = /^(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/.test(this.establishment_selected.url_web.toString());
  this.urlwebEstablishmentValidated = isOk || isOk2 || (this.establishment_selected.url_web == '');
  return this.urlwebEstablishmentValidated;
 }

 checkEstablishmentComercialName(): Boolean {
  if(this.establishment_selected.commercially_known_name.length < 1) {
     this.establishmentComercialNameValidated = false;
     return false;
  }
  this.establishmentComercialNameValidated = true;
  return true;
 }

 checkEstablishmentAddress(): Boolean {
   if(this.establishment_selected.address_main_street.length < 5 || this.establishment_selected.address_number.length < 5 || this.establishment_selected.address_secondary_street.length < 5) {
      this.addressEstablishmentValidated = false;
      return false;
   }
   this.addressEstablishmentValidated = true;
   return true;
  }
 
 buildWorkerGroups() {
  this.establishment_selected.workers_on_establishment = [];
  this.genders.forEach(gender => {
     this.worker_groups.forEach(worker_group => {
        const newWorker = new Worker();
        newWorker.worker_group_id = worker_group.id;
        newWorker.worker_group_name = worker_group.name;
        newWorker.gender_id = gender.id;
        newWorker.gender_name = gender.name;
        newWorker.count = 0;
        newWorker.is_max = worker_group.is_max;
        this.establishment_selected.workers_on_establishment.push(newWorker);
     });
  });
 }

 getWorkerGroups() {
  this.worker_groups = [];
  this.workerGroupDataService.get().then( r => {
     this.worker_groups = r as WorkerGroup[];
     this.getGenders();
  }).catch( e => console.log(e) ); 
 }

 getTaxPayerType() {
   this.tax_payer_types = [];
   this.tax_payer_typeDataService.get().then( r => {
      this.tax_payer_types = r as TaxPayerType[];
   }).catch( e => console.log(e) );
 }

 addPreviewRegisterCode() {
    const newPreviewRegisterCode = new PreviewRegisterCode();
    this.establishment_selected.preview_register_codes_on_establishment.push(newPreviewRegisterCode);
 }

 removePreviewRegisterCode(registerCode: PreviewRegisterCode) {
   const newPreviewRegisterCodes: PreviewRegisterCode[] = [];
   this.establishment_selected.preview_register_codes_on_establishment.forEach(preview_register_code => {
      if( preview_register_code !== registerCode ){
        newPreviewRegisterCodes.push(preview_register_code);
      }
   });
   this.establishment_selected.preview_register_codes_on_establishment = newPreviewRegisterCodes;
 }

 address_mapEventEstablishment(event) {
   this.establishment_selected.address_map_latitude = event.coords.lat;
   this.establishment_selected.address_map_longitude = event.coords.lng;
 }

 selectRegisterEstablishment(establishment: Establishment) {
   this.establishmentDataService.get_filtered(establishment.id).then( r => {
     this.establishment_selected = r.establishment as Establishment;
     this.recoverUbication();
     this.checkEstablishmentAddress();
     this.checkURLWeb();
     this.checkEstablishmentComercialName();
     this.establishment_selected.contact_user = r.contact_user as User;
     this.checkCedulaEstablishment();
     this.checkTelefonoPrincipalContactoEstablecimiento();
     this.checkTelefonoSecundarioContactoEstablecimiento();
     this.checkEmailContactEstablishment();
     this.buildWorkerGroups();
     this.establishment_selected.workers_on_establishment = r.workers_on_establishment as Worker[];
     this.establishment_selected.workers_on_establishment.forEach(worker => {
        this.genders.forEach(gender => {
           if(gender.id == worker.gender_id) {
              worker.gender_name = gender.name;
           }
        });
        this.worker_groups.forEach(worker_group => {
           if(worker_group.id == worker.worker_group_id) {
              worker.worker_group_name = worker_group.name;
           }
        });
     });
     this.establishment_selected.languages_on_establishment = r.languages_on_establishment as Language[];
     this.establishment_selected.establishment_certifications_on_establishment = r.establishment_certifications_on_establishment as EstablishmentCertification[];
     this.establishment_selected.establishment_certifications_on_establishment.forEach(establishment_certification_on_establishment => {
        establishment_certification_on_establishment.establishment_certification_attachment = new EstablishmentCertificationAttachment();
        this.establishment_certification_types.forEach(establishment_certification_type => {
           if (establishment_certification_on_establishment.establishment_certification_type_id == establishment_certification_type.id) {
              establishment_certification_on_establishment.establishment_certification_type_fatherCode = establishment_certification_type.father_code;
              this.getEstablishmentCertificationTypesSpecific(establishment_certification_on_establishment);
           }
        });
        this.establishmentCertificationAttachmentDataService.get(establishment_certification_on_establishment.establishment_certification_attachment_id).then( r_attachment => {
           establishment_certification_on_establishment.establishment_certification_attachment = r_attachment.EstablishmentCertificationAttachment as EstablishmentCertificationAttachment;
        }).catch( e => { console.log(e); });
     });
     this.mostrarDataEstablishment = true;
   }).catch( e => { console.log(e); });
   this.establishmentPictureDataService.get_by_establishment_id(establishment.id).then( r => {
      this.establishment_selected_picture = r as EstablishmentPicture;
   }).catch( e => { console.log(e); });
 }


 selectRegisterEstablishmentDeclaration(establishment: Establishment) {
  this.establishment_declarations_selected = establishment;
  this.getDeclarationsByEstablishment(establishment.id);
  this.declaration_selected = new Declaration();
  this.mostrarDataDeclaration = false;
 }

 recoverUbication() {
   this.ubicationDataService.getByIdLower(this.establishment_selected.ubication_id).then( r => {
     this.zonalEstablishmentSelectedCode = r.zonal.code;
     this.provinciaEstablishmentSelectedCode = r.provincia.code;
     this.cantonEstablishmentSelectedCode = r.canton.code;
     this.establishment_selected.ubication_id = r.parroquia.id;
     this.getCantonesEstablishmentRecovery();
     this.getParroquiasEstablishmentRecovery();
   }).catch( e => { console.log(e); });
 }

 newRegisterEstablishment() {
   this.establishment_selected = new Establishment();
   this.establishment_selected.workers_on_establishment = this.getEstablishmentWorkerGroup();
   this.mostrarDataEstablishment = true;
 }

 newPreviewRegisterCode() {

 }

 selectPreviewRegisterCode(preview_register_code: PreviewRegisterCode) {
   this.preview_register_codes_establishmentSelected = preview_register_code;
 }

 selectLanguage(language: Language) {
   this.languages_establishmentSelectedId = language.id;
}

addLanguage() {
   if (this.languages_establishmentSelectedId === 0) {
      this.toastr.errorToastr('Seleccione un coordinador.', 'Error');
      return;
   }
   this.languages.forEach(language => {
      if (language.id == this.languages_establishmentSelectedId) {
         let existe = false;
         this.establishment_selected.languages_on_establishment.forEach(element => {
            if (element.id == language.id) {
               existe = true;
            }
         });
         if (!existe) {
            this.establishment_selected.languages_on_establishment.push(language);
            this.languages_establishmentSelectedId = 0;
         } else {
            this.toastr.errorToastr('El registro ya existe.', 'Error');
         }
      }
   });
}

getLanguage() {
  this.languages = [];
  this.languageDataService.get().then( r => {
     this.languages = r as Language[];
  }).catch( e => console.log(e) );
}

getLanguagesOnEstablishment() {
  this.establishment_selected.languages_on_establishment = [];
  this.establishmentDataService.get(this.establishment_selected.id).then( r => {
     this.establishment_selected.languages_on_establishment = r.attach[0].languages_on_establishment as Language[];
  }).catch( e => console.log(e) );
}

removeLanguage() {
   if (this.languages_establishmentSelectedId === 0) {
      this.toastr.errorToastr('Seleccione un coordinador.', 'Error');
      return;
   }
   const newLanguages: Language[] = [];
   let eliminado = false;
   this.establishment_selected.languages_on_establishment.forEach(language => {
      if (language.id !== this.languages_establishmentSelectedId) {
         newLanguages.push(language);
      } else {
         eliminado = true;
      }
   });
   if (!eliminado) {
      this.toastr.errorToastr('Registro no encontrado.', 'Error');
      return;
   }
   this.establishment_selected.languages_on_establishment = newLanguages;
   this.languages_establishmentSelectedId = 0;
 }
 
 selectWorker(worker: Worker) {
   this.worker_establishmentSelected = worker;
 }

 addWorker() {
  const newWorker = new Worker();
  this.establishment_selected.workers_on_establishment.push(newWorker);
 }

 removeWorker(worker: Worker) {
   const newWorkers: Worker[] = [];
   this.establishment_selected.workers_on_establishment.forEach(element => {
      if (element !== worker){
         newWorkers.push(element);
      }
   });
   this.establishment_selected.workers_on_establishment = newWorkers;
 }

 selectEstablishmentCertification(establishment_certification: EstablishmentCertification) {
   this.establishment_certifications_establishmentSelected = establishment_certification;
 }

 addEstablishmentCertification() {
  const newEstablishmentCertification = new EstablishmentCertification();
  this.establishment_selected.establishment_certifications_on_establishment.push(newEstablishmentCertification);
 }

 removeEstablishmentCertification(establishmentCertification: EstablishmentCertification) {
   const newEstablishmentCertifications: EstablishmentCertification[] = [];
   this.establishment_selected.establishment_certifications_on_establishment.forEach(element => {
      if (element !== establishmentCertification) {
         newEstablishmentCertifications.push(element);
      }
   });
   this.establishment_selected.establishment_certifications_on_establishment = newEstablishmentCertifications;
 }

 downloadEstablishmentCertification(establishmentCertification: EstablishmentCertification) {
  this.establishment_selected.establishment_certifications_on_establishment.forEach(element => {
     if (element == establishmentCertification) {
        this.downloadFile(
           element.establishment_certification_attachment.establishment_certification_attachment_file, 
           element.establishment_certification_attachment.establishment_certification_attachment_file_type, 
           element.establishment_certification_attachment.establishment_certification_attachment_file_name);  
     }
  });
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

 CodificarArchivoEstablishmentCertification(event, establishment_certification) {
  const reader = new FileReader();
  if (event.target.files && event.target.files.length > 0) {
   const file = event.target.files[0];
   reader.readAsDataURL(file);
   reader.onload = () => {
     this.establishment_selected.establishment_certifications_on_establishment.forEach(element => {
        if(element == establishment_certification) {
           element.establishment_certification_attachment.establishment_certification_attachment_file = reader.result.toString().split(',')[1];
           element.establishment_certification_attachment.establishment_certification_attachment_file_type = file.type;
           element.establishment_certification_attachment.establishment_certification_attachment_file_name = file.name;
        }
     });
   };
  }
 }

 selectEstablishmentRegister(register: Register) {
   this.mostrarDataRegister = false;
   const tarifas: Tariff[] = this.newTariffs();
   this.rucEstablishmentRegisterSelected = new Register();
   if (this.activity == 'ALOJAMIENTO') {
         this.registerDataService.get_register_data(register.id).then( r => {
         this.rucEstablishmentRegisterSelected = r.register as Register;
         this.rucEstablishmentRegisterSelected.status = r.status.state_id;
         this.getTramiteStatus(this.rucEstablishmentRegisterSelected.status);
         this.categorySelectedCode = r.register_category.code;
         this.rucEstablishmentRegisterSelected.complementary_service_types_on_register = r.complementary_service_types_on_register as ComplementaryServiceType[];
         this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register = r.complementary_service_foods_on_register as ComplementaryServiceFood[];
         this.rucEstablishmentRegisterSelected.capacities_on_register = r.capacities_on_register as Capacity[];
         this.getCategories();
         this.getAllowedInfo();
         this.alowed_capacity_types = [];
         this.capacityTypeDataService.get_filtered_by_register_type(this.rucEstablishmentRegisterSelected.register_type_id).then( r2 => {
           this.alowed_capacity_types = r2 as CapacityType[];
           this.mostrarDataRegister = true;
           this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(capacity => {
              this.getMaxBed(capacity);
              this.calcBeds(capacity);
           });
           this.calcSpaces();
         }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });
   }
   if (this.activity == 'ALIMENTOS Y BEBIDAS') {
      // select ab
   }
 }

 selectComplementaryServiceType(complementary_service_type: ComplementaryServiceType) {
   this.complementary_service_types_registerSelectedId = complementary_service_type.id;
 }

 getTramiteStatus(status_id: number) {
    this.statesAlojamiento.forEach(state => {
       if (state.id == status_id) {
        this.estado_tramite_selected_code = state.father_code;
        this.getSpecificStates();
       }
    });
 }

 getSpecificStates() {
   this.specific_states = [];
   this.statesAlojamiento.forEach(element => {
      if (element.father_code == this.estado_tramite_selected_code) {
         this.specific_states.push(element);
      }
   });
   this.getRegisterTypes();
 }

 getDeclarationStates() {
   this.stateDataService.get().then( r => {
      this.declarationstates = r as State[];
   }).catch( e => { console.log(e); });
 }

 addComplementaryServiceType() {
   if (this.complementary_service_types_registerSelectedId === 0) {
     this.toastr.errorToastr('Seleccione un coordinador.', 'Error');
     return;
   }
   this.complementary_service_types.forEach(complementary_capacity => {
     if (complementary_capacity.id == this.complementary_service_types_registerSelectedId) {
        let existe = false;
        this.rucEstablishmentRegisterSelected.complementary_service_types_on_register.forEach(element => {
           if (element.id == complementary_capacity.id) {
              existe = true;
           }
        });
        if (!existe) {
           this.rucEstablishmentRegisterSelected.complementary_service_types_on_register.push(complementary_capacity);
           this.complementary_service_types_registerSelectedId = 0;
        } else {
           this.toastr.errorToastr('El registro ya existe.', 'Error');
        }
     }
   });
 }

 validateRegister(): Boolean {
    const c1 = (this.rucEstablishmentRegisterSelected.establishment_id == 0);
    const c2 = (this.rucEstablishmentRegisterSelected.status == 0);
    const c3 = (this.categorySelectedCode == '-');
    const c4 = (this.rucEstablishmentRegisterSelected.register_type_id == 0);
    const c5 = (this.rucEstablishmentRegisterSelected.total_spaces == 0);
    let c6: Boolean = false;
    this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(capacity => {
     if (!c6) {
        c6 = (capacity.quantity * capacity.total_spaces == 0);
     }
    });
    let c7: Boolean = false;
    this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register.forEach(complementaryServiceFood => {
     if (!c7) {
        c7 = (complementaryServiceFood.complementary_service_food_type_id == 0);
     }
    });
    const toReturn = c1 || c2 || c3 || c4 || c5 || c6 || c7;
  return !toReturn;
 }

 removeComplementaryServiceType() {
   if (this.complementary_service_types_registerSelectedId === 0) {
     this.toastr.errorToastr('Seleccione un coordinador.', 'Error');
     return;
   }
   const newComplementaryCapacities: ComplementaryServiceType[] = [];
   let eliminado = false;
   this.rucEstablishmentRegisterSelected.complementary_service_types_on_register.forEach(complementary_capacity => {
     if (complementary_capacity.id !== this.complementary_service_types_registerSelectedId) {
        newComplementaryCapacities.push(complementary_capacity);
     } else {
        eliminado = true;
     }
   });
   if (!eliminado) {
     this.toastr.errorToastr('Registro no encontrado.', 'Error');
     return;
   }
   this.rucEstablishmentRegisterSelected.complementary_service_types_on_register = newComplementaryCapacities;
   this.complementary_service_types_registerSelectedId = 0;
 }

 subirFotoFachada() {
  this.fotoFachadaInput.nativeElement.click();
 }

  CodificarArchivo(event) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.establishment_selected_picture.establishment_picture_file_name = file.name;
      this.establishment_selected_picture.establishment_picture_file_type = file.type;
      this.establishment_selected_picture.establishment_picture_file = reader.result.toString().split(',')[1];
    };
   }
  }

 goToPageEstablishment(page: number) {
  if ( page < 1 || page > this.lastPageEstablishment ) {
     this.toastr.errorToastr('La página solicitada no existe.', 'Error');
     return;
  }
  this.currentPageEstablishment = page;
 }

 goToPageRegister(page: number) {
  this.mostrarDataRegister = false;
  this.ruc_registro_selected.registers = [];
  this.rucEstablishmentRegisterSelected = new Register();
  this.getRegistersOnRuc();
  if ( page < 1 || page > this.lastPageRegister ) {
     this.toastr.errorToastr('La página solicitada no existe.', 'Error');
     return;
  }
  this.currentPageRegister = page;
 }

 selectBed(bed: Bed) {
  this.bedSelected = bed;
 }

 addBed(capacity: Capacity) {
  const newBed = new Bed();
  capacity.total_spaces = 0;
  capacity.beds_on_capacity.push(newBed);
 }

 removeBed(capacity: Capacity) {
  const newBeds: Bed[] = [];
  capacity.total_spaces = 0;
  capacity.beds_on_capacity.forEach(element => {
     if(element !== this.bedSelected){
        newBeds.push(element);
     }
  });
  capacity.beds_on_capacity = newBeds;
 }

 addCapacity() {
  const newCapacity = new Capacity();
  this.rucEstablishmentRegisterSelected.total_spaces = 0;
  this.rucEstablishmentRegisterSelected.capacities_on_register.push(newCapacity);
 }

 newTariffs(): Tariff[] {
  const toReturn: Tariff[] = [];
  this.tarifas.forEach(element => {
     element.childs.forEach(tariffType => {
        const newTariff = new Tariff();
        newTariff.tariff_father_name = element.father.name;
        newTariff.tariff_name = tariffType.name;
        newTariff.tariff_type_id = tariffType.id;
        toReturn.push(newTariff);
     });
  });
  return toReturn;
 }

 removeCapacity(capacity: Capacity) {
  const newCapacities: Capacity[] = [];
  this.rucEstablishmentRegisterSelected.total_spaces = 0;
  this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(element => {
     if(capacity !== element) {
        newCapacities.push(element);
     }
  });
  this.rucEstablishmentRegisterSelected.capacities_on_register = newCapacities;
 }

 calcSpaces() {
  this.rucEstablishmentRegisterSelected.total_spaces = 0;
  this.rucEstablishmentRegisterSelected.total_habitations = 0;
  this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(element => {
     this.rucEstablishmentRegisterSelected.total_spaces += element.total_spaces * element.quantity;
     this.rucEstablishmentRegisterSelected.total_habitations += element.quantity;
  });
  this.validateTariffs();
  this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(capacity => {
     this.calcBeds(capacity);
  });
 }

 calcBeds(capacity: Capacity) {
  capacity.total_spaces = 0;
  let beds_declared = 0;
  capacity.beds_on_capacity.forEach(bed => {
     let places = 0;
     beds_declared += bed.quantity;
     this.alowed_bed_types.forEach(bedType => {
        if(bedType.id == bed.bed_type_id) {
           places = bed.quantity;
        }
     });
     capacity.total_spaces += places;
  });
  if(beds_declared == capacity.max_beds){
     capacity.max_bed_ok = true;
  }else {
     capacity.max_bed_ok = false;
  }
  this.validateTariffs();
 }

 selectCapacity(capacity: Capacity) {
  this.capacitySelected = capacity;
 }

 openDialog(content, status) {
    this.statusSelected = status;
  this.modalService.open(content, { centered: true, size: 'sm' }).result.then(( response => {
  }), ( r => {}));
 }
}
