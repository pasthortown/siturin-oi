import { ZoneService } from './../../../services/CRUD/BASE/zone.service';
import { Zone } from './../../../models/BASE/Zone';
import { ApprovalStateReportService } from './../../../services/CRUD/ALOJAMIENTO/approvalstatereport.service';
import { ApprovalStateReport } from './../../../models/ALOJAMIENTO/ApprovalStateReport';
import { ReceptionRoomService } from './../../../services/CRUD/ALOJAMIENTO/receptionroom.service';
import { MailerService } from './../../../services/negocio/mailer.service';
import { DeclarationAttachmentService } from './../../../services/CRUD/FINANCIERO/declarationattachment.service';
import { FloorAuthorizationCertificateService } from './../../../services/CRUD/BASE/floorauthorizationcertificate.service';
import { PayService } from './../../../services/CRUD/FINANCIERO/pay.service';
import { DeclarationAttachment } from './../../../models/FINANCIERO/DeclarationAttachment';
import { FloorAuthorizationCertificate } from './../../../models/BASE/FloorAuthorizationCertificate';
import { Router } from '@angular/router';
import { ReceptionRoom } from 'src/app/models/ALOJAMIENTO/ReceptionRoom';

import { environment } from 'src/environments/environment';
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
import { State } from 'src/app/models/ALOJAMIENTO/State';
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
import { RegisterRequisite as RegisterABRequisite } from 'src/app/models/ALIMENTOSBEBIDAS/RegisterRequisite';

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
import { RucNameType } from 'src/app/models/BASE/RucNameType';
import { RucNameTypeService } from 'src/app/services/CRUD/BASE/rucnametype.service';
import { StateService } from 'src/app/services/CRUD/ALOJAMIENTO/state.service';
import { Capacity as CapacityAB} from 'src/app/models/ALIMENTOSBEBIDAS/Capacity';
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
import { ExporterService } from 'src/app/services/negocio/exporter.service';
import Swal from 'sweetalert2';
import { DocumentService } from 'src/app/services/CRUD/EXPORTER/document.service';
import { Document as Documento } from 'src/app/models/EXPORTER/Document';
import { RegisterProcedureService } from 'src/app/services/CRUD/ALOJAMIENTO/registerprocedure.service';
import { RegisterProcedureService as RegisterProcedureABService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/registerprocedure.service';
import { RegisterService as RegistroCatastroService } from 'src/app/services/CRUD/CATASTRO/register.service';
import { AuthorizationAttachment } from 'src/app/models/ALOJAMIENTO/AuthorizationAttachment';
import { PropertyTitleAttachment } from 'src/app/models/ALOJAMIENTO/PropertyTitleAttachment';
import { PropertyTitleAttachmentService } from 'src/app/services/CRUD/ALOJAMIENTO/propertytitleattachment.service';
import { AuthorizationAttachmentService } from 'src/app/services/CRUD/ALOJAMIENTO/authorizationattachment.service';
import { RegisterTypeService as RegisterTypeABService} from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/registertype.service';
import { RegisterStateService as RegisterStateABService} from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/registerstate.service';
import { RegisterService as RegisterABService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/register.service';
import { ApprovalStateService as ApprovalStateABService } from './../../../services/CRUD/ALIMENTOSBEBIDAS/approvalstate.service';
import { ApprovalStateAttachmentService as ApprovalStateAttachmentABService } from './../../../services/CRUD/ALIMENTOSBEBIDAS/approvalstateattachment.service';
import { RegisterType as RegisterTypeAB} from 'src/app/models/ALIMENTOSBEBIDAS/RegisterType';
import { ApprovalStateReportService as ApprovalStateReportABService } from './../../../services/CRUD/ALIMENTOSBEBIDAS/approvalstatereport.service';
import { RequisiteService as RequisiteABService} from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/requisite.service';
import { ServiceType } from 'src/app/models/ALIMENTOSBEBIDAS/ServiceType';
import { KitchenType } from 'src/app/models/ALIMENTOSBEBIDAS/KitchenType';
import { ServiceTypeService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/servicetype.service';
import { KitchenTypeService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/kitchentype.service';
import { FoodDrinkAttachmentService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/fooddrinkattachment.service';
import { FoodDrinkAttachment } from 'src/app/models/ALIMENTOSBEBIDAS/FoodDrinkAttachment';

@Component({
  selector: 'app-registro',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent implements OnInit {
   @ViewChild('fotoFachadaInput') fotoFachadaInput;
   @ViewChild('EstablishmentCertificationAttachedFile') EstablishmentCertificationAttachedFile;
   @ViewChild('pasos') pasosTabSet;
   @ViewChild('pasosSuperiores') pasosSuperioresTabSet;
   tabActive = 'paso1';
   zonales: Zone[] = [];
   please_wait_requisites = false;
   tabActiveSuperior = 'tab1';
   tramite = '-';
   selectedNameType: RucNameType = new RucNameType();
   total_workers = 0;
   salaRecepciones: ReceptionRoom = new ReceptionRoom();
   tarifarioResponse: Tariff[] = [];
   listasPrecios: FoodDrinkAttachment[] = [];
   tarifarioRack = {cabecera: [], valores: []};
   currentPagePays = 1;
   balance: DeclarationAttachment = new DeclarationAttachment();
   lastPagePays = 1;
   register_code = '';
   as_turistic_date: Date = null;
   recordsByPagePays = 5;
   rowsPays = [];
   columnsPays = [];
   dataPays = [];
   pays: Pay[] = [];
   actividadSelected = '-';
   regiones = [];
   regionSelectedCode = '-';
   franchiseChainNameValidated = false;
   certificadoUsoSuelo: FloorAuthorizationCertificate = new FloorAuthorizationCertificate();
   tituloPropiedad: PropertyTitleAttachment = new PropertyTitleAttachment();
   autorizacionCondomino: AuthorizationAttachment = new AuthorizationAttachment();
   franchises_rucSelectedId = 0;
   fechaNombramientoOK = false;
   allowed_capacity_types: CapacityType[] = []; 
   establecimientos_pendiente = false;
   idTramiteEstadoFilter = 0;
   report: ApprovalStateReport = new ApprovalStateReport();
   estoyVacaciones = false;
   imprimiendo_informe = false;
   imprimiendo_acta = false;
   listaPrecios: FoodDrinkAttachment = new FoodDrinkAttachment();
   totalABPuntos = 0;
   totalABPuntosShown = 0;
   categoryAB = 'Pendiente';
   tipo_tramite_seleccionado = 'pendiente';
   //ASIGNACIONES
   inspectores: User[] = [];
   financieros: User[] = [];
   tipo_tramite = '';
   inspectorSelectedId: number = 0;
   registerApprovals: ApprovalState[] = [];
   registerApprovalCoordinador: ApprovalState = new ApprovalState();
   registerApprovalInspector: ApprovalState = new ApprovalState();
   registerApprovalFinanciero: ApprovalState = new ApprovalState();
   isAssigned = false;
   razon_social = '';
   hasIspectionDate  = false;
   hasInform  = false;
   hasRequisites = false;
   inspectionState = 0;
   requisitosApprovalStateAttachment: ApprovalStateAttachment = new ApprovalStateAttachment();
   informeApprovalStateAttachment: ApprovalStateAttachment = new ApprovalStateAttachment();
   actaNotificacionApprovalStateAttachment: ApprovalStateAttachment = new ApprovalStateAttachment();
   newRegisterState: RegisterState = new RegisterState();
   stateTramiteId = 0;

   //REGISTROS MINTUR
   registers_mintur = [];
   registerMinturSelected: any = null;
   coordinadorZonal = '';
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
  imContactRuc: Boolean = true;
  roles:any[] = [];
  terminosCondiciones = false;
  terminosCondicionesAgreement: Agreement = new Agreement();
  rucReady = false;
  currentPageRegister = 1;
  lastPageRegister = 1;
  recordsByPageRegister = 5;
  mostrarData = true;
  group_types: GroupType[] = [];
  hasdateByUserRequisites = false;
  dateByUserRequisites = new Date();
  rucs_registrados: RegistroDataCarrier[] = [];
  representante_legal = '';
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
  capacity_types: CapacityType[] = [];
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
  zonalesEstablishment: Ubication[] = [];
  provinciasEstablishment: Ubication[] = [];
  ruc_name_types: RucNameType[] = [];
  cantonesEstablishment: Ubication[];
  parroquiasEstablishment: Ubication[];
  totalunoxmil = 0;
  preview_register_codes: PreviewRegisterCode[] = [];
  establishment_selected: Establishment = new Establishment();
  establishment_property_types: EstablishmentPropertyType[] = [];
  establishment_selected_picture: EstablishmentPicture = new EstablishmentPicture();
  languages: Language[] = [];
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
  register_types_AB: RegisterTypeAB[] = [];
  service_types: ServiceType[] = [];
  kitchen_types: KitchenType[] = [];
  selected_year_id = 2019;
  years: any[] = [];
  currentYear = 2019;
  minYear = 2019;
  capacitiesToShow: any[] = [];
  tariffsToShow = {cabecera: [], valores: []};
  modificadoCapacidades = false;
  canEditCapacity = false;
  mainPhoneEstablishmentValidated = false;
  secondaryPhoneEstablishmentValidated = true;
  urlwebEstablishmentValidated = true;
  establishment_certifications_establishmentSelected: EstablishmentCertification = new EstablishmentCertification();
  catastro_category = '';
  catastro_classification = '';
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
  categories_registers: any[] = [];
  register_types: RegisterType[] = [];
  complementary_service_types: ComplementaryServiceType[] = [];
  complementary_service_types_categories: ComplementaryServiceType[] = [];
  requisitesByRegisterType: any[] = [];
  categorySelectedCode = '-';
  complementary_service_types_registerSelectedId = 0;
  capacitySelected: Capacity = new Capacity();
  bedSelected: Bed = new Bed();
  mostrarMotivoTramite = false;
  motivoTramite = '';
  alowed_bed_types: BedType[] = []; 
  register_establishment_capacities_registerSelectedId = 0;
  rack_prices_registerSelectedId = 0;
  establishment_service_offers_registerSelectedId = 0;
  tarifas: any[] = [];
  kitchen_type_registerSelectedId = 0;
  service_type_registerSelectedId = 0;
  states: State[] = [];
  complementaryServiceFoodTypes: ComplementaryServiceFoodType[] = [];
  
  //DINARDAP
  consumoCedula = false;
  consumoCedulaEstablishmentContact = false;
  consumoRuc = false;
  consumoCedulaRepresentanteLegal = false;
  SRIOK = false;
  REGCIVILOK = false;
  REGCIVILOKEstablishment = false;
  REGCIVILREPRESENTANTELEGALOK = false;
  guardando = false;
  estado = '';

  //DECLARACIONES
  currentPageDeclaration = 1;
  lastPageDeclaration = 1;
  recordsByPageDeclaration = 5;
  establishment_declarations_selected = new Establishment();
  declaration_selected: Declaration = new Declaration();
  mostrarDataDeclaration = false;
  declarations: Declaration[] = [];
  payDeclarationSelected: Pay = new Pay();
  declarationItemsToShow: any[] = [];
  declarationItemsCategories: DeclarationItemCategory[] = [];
  declarationItems: DeclarationItem[] = [];
  maxYear: number = 2019;
  idRegister: number = 0;
  activity = '';

  constructor(private toastr: ToastrManager,
              private mailerDataService: MailerService,
              private floorAuthorizationCertificateDataService: FloorAuthorizationCertificateService,
              private propertyTitleAttachmentDataService: PropertyTitleAttachmentService,
              private authorizationAttachmentDataService: AuthorizationAttachmentService,
              private payDataService: PayService,
              private foodDrinkAttachmentDataService: FoodDrinkAttachmentService,
              private approvalStateABDataService: ApprovalStateABService,
              private registerStateABDataService: RegisterStateABService,
              private requisiteABDataService: RequisiteABService,
              private serviceTypeDataService: ServiceTypeService,
              private kitchenTypeDataService: KitchenTypeService,
              private register_typeABDataService: RegisterTypeABService,
              private registerABDataService: RegisterABService,
              private approvalStateAttachmentABDataService: ApprovalStateAttachmentABService,
              private documentDataService: DocumentService,
              private approvalStateReportDataService: ApprovalStateReportService,
              private receptionRoomDataService: ReceptionRoomService,
              private declarationAttachmentDataService: DeclarationAttachmentService,
              private router: Router,
              private exporterDataService: ExporterService,
              private approvalStateDataService: ApprovalStateService,
              private consultorDataService: ConsultorService,
              private userDataService: UserService,
              private dinardapDataService: DinardapService,
              private registerCatastroDataService: RegistroCatastroService,
              private registerStateDataService: RegisterStateService,
              private approvalStateAttachmentDataService: ApprovalStateAttachmentService,
              private rucDataService: RucService,
              private modalService: NgbModal,
              private agreementDataService: AgreementService,
              private registerProcedureABDataService: RegisterProcedureABService,
              private rucNameTypeDataService: RucNameTypeService,
              private group_typeDataService: GroupTypeService,
              private languageDataService: LanguageService,
              private complementaryServiceFoodTypeDataService: ComplementaryServiceFoodTypeService,
              private establishmentPictureDataService: EstablishmentPictureService,
              private ubicationDataService: UbicationService,
              private establishmentCertificationAttachmentDataService: EstablishmentCertificationAttachmentService,
              private personRepresentativeAttachmentDataService: PersonRepresentativeAttachmentService,
              private complementary_service_typeDataService: ComplementaryServiceTypeService,
              private systemNameDataService: SystemNameService,
              private genderDataService: GenderService,
              private workerGroupDataService: WorkerGroupService,
              private capacityTypeDataService: CapacityTypeService,
              private registerProcedureDataService: RegisterProcedureService,
              private establishment_certification_typeDataService: EstablishmentCertificationTypeService,
              private establishment_property_typeDataService: EstablishmentPropertyTypeService,
              private establishmentDataService: EstablishmentService,
              private register_typeDataService: RegisterTypeService,
              private requisiteDataService: RequisiteService,
              private zoneDataService: ZoneService,
              private bedTypeDataService: BedTypeService,
              private declarationDataService: DeclarationService,
              private declarationItemCategoryDataService: DeclarationItemCategoryService,
              private declarationItemDataService: DeclarationItemService,
              private tariffTypeDataService: TariffTypeService,
              private stateDataService: StateService,
              private tax_payer_typeDataService: TaxPayerTypeService,
              private approvalStateReportABDataService: ApprovalStateReportABService,
              private registerDataService: RegisterService) {}

  ngOnInit() {
   this.refresh();
   this.getUser();
   this.getDeclarationCategories();
   this.getDeclarationItems();
   this.getMaxDeclarationDate();
   this.getTramiteStates();
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

  editableTramiteRequerido(): Boolean {
   if (this.estado_tramite_selected_code == '1' || this.estado_tramite_selected_code == '9') {
      return true;
   }
   return false;
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
   if (PrimerDigito == '1') {
      this.tipo_tramite = 'REGISTRO';
   }
   if (PrimerDigito == '2') {
      this.tipo_tramite = 'RECLASIFICACIÓN';
   }
   if (PrimerDigito == '3') {
      this.tipo_tramite = 'RECATEGORIZACIÓN';
   }
   if (PrimerDigito == '4') {
      this.tipo_tramite = 'ACTUALIZACIÓN';
   }
   if (PrimerDigito == '5') {
      this.tipo_tramite = 'INACTIVACIÓN';
   }
   if (PrimerDigito == '6') {
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

  changeTabActive(event) {
   this.tabActive = event.nextId;
  }

  changeTabActiveSuperior(event) {
   this.tabActiveSuperior = event.nextId;
   if (this.tabActiveSuperior == 'tab2') {
      this.getEstablishmentsOnRuc(1);
   }
  }

  validateNombreComercial() {
   let toReturn = true;
   const textoAValidar = this.establishment_selected.commercially_known_name.toUpperCase();
   if(this.establishment_selected.commercially_known_name.length < 1) {
       toReturn = false;
       this.establishmentComercialNameValidated = toReturn;
       return;
   }
   let errorEnNombreDetectado = false;
   this.register_types.forEach(register_type => {
      const nombre = register_type.name.toUpperCase();
      if (textoAValidar.search(nombre + ' ') !== -1 && !errorEnNombreDetectado) {
       errorEnNombreDetectado = true;
       toReturn = false;
      }
   });
   this.register_types_AB.forEach(register_type => {
      const nombre = register_type.name.toUpperCase();
      if (textoAValidar.search(nombre + ' ') !== -1 && !errorEnNombreDetectado) {
       errorEnNombreDetectado = true;
       toReturn = false;
      }
   });
   const palabrasNoPermitidas = ['hotel',
   'hostal',
   'residencia',
   'residencial',
   'hacienda turística',
   'hacienda turistica',
   'hostería',
   'hosteria',
   'pensión',
   'pension',
   'albergue',
   'lodge',
   'motel',
   'campamento',
   'refugio',
   'resort '];
   let errorEnNombreDetectadoListaPalabras = false;
   palabrasNoPermitidas.forEach(palabraNoPermitida => {
      const nombre = palabraNoPermitida.toUpperCase();
      if (textoAValidar.search(nombre) !== -1 && !errorEnNombreDetectadoListaPalabras) {
       errorEnNombreDetectadoListaPalabras = true;
       toReturn = false;
      }
   });
   this.establishmentComercialNameValidated = toReturn;
  }

  calcularUnoxMil() {
   this.totalunoxmil = 0;
   this.declarationItemsToShow.forEach(itemToShow => {
      itemToShow.items.forEach(item => {
         this.totalunoxmil += item.valueItem.value * (item.declarationItem.factor);
      });
   });
}

  guardarRecepcionRoom(register_id: number) {
     this.salaRecepciones.register_id = register_id;
     if (this.salaRecepciones.id == 0 || typeof this.salaRecepciones.id == 'undefined') {
      this.receptionRoomDataService.post(this.salaRecepciones).then( r => {

      }).catch( e => { console.log(e); });
     } else {
      this.receptionRoomDataService.put(this.salaRecepciones).then( r => {
         
      }).catch( e => { console.log(e); });
     }
  }

  validateNombreFranquiciaCadena() {
   let toReturn = true;
   const textoAValidar = this.establishment_selected.commercially_known_name.toUpperCase();
   if(this.establishment_selected.commercially_known_name.length < 1) {
       toReturn = false;
       this.franchiseChainNameValidated = toReturn;
       return;
   } 
   let errorEnNombreDetectado = false;
   this.register_types.forEach(register_type => {
      const nombre = register_type.name.toUpperCase();
      if (textoAValidar.search(nombre + ' ') !== -1 && !errorEnNombreDetectado) {
       errorEnNombreDetectado = true;
       toReturn = false;
      }
   });
   this.register_types_AB.forEach(register_type => {
      const nombre = register_type.name.toUpperCase();
      if (textoAValidar.search(nombre + ' ') !== -1 && !errorEnNombreDetectado) {
       errorEnNombreDetectado = true;
       toReturn = false;
      }
   });
   this.franchiseChainNameValidated = toReturn;
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

  onCellClickPays(event) {
  }

  refreshTotalWorkers() {
   this.total_workers = 0;
   this.establishment_selected.workers_on_establishment.forEach(element => {
      if (element.is_max) {
         this.total_workers += element.count;
      }
   });
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

  onChangeTableRegister(config: any, event?): any {
   const page: any = {page: this.currentPageEstablishment, itemsPerPage: this.recordsByPageEstablishment};
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

  fechasNombramiento() {
   const today = new Date();
   const min = new Date(today.getFullYear() - 5, today.getMonth(), today.getDate());
   if(typeof this.ruc_registro_selected.ruc.person_representative_attachment.assignment_date === 'undefined') {
      return;
   }
   if (new Date(this.ruc_registro_selected.ruc.person_representative_attachment.assignment_date.toString()) > today || new Date(this.ruc_registro_selected.ruc.person_representative_attachment.assignment_date.toString()) < min) {
      this.fechaNombramientoOK = false;
   }else {
      this.fechaNombramientoOK = true;
   }
   return {max: today, min: min};
  }

  getPays() {
   this.payDataService.get_by_ruc_number(this.registerMinturSelected.ruc.number).then( r => {
      this.pays = r as Pay[];
      this.buildDataTablePays();
   }).catch( e => { console.log(e); } );
  }

  scroll(el: HTMLElement) {
   el.scrollIntoView({behavior: 'smooth'});
  }

  guardarCertificadoUsoSuelos() {
     if(this.certificadoUsoSuelo.id == 0) {
      this.floorAuthorizationCertificateDataService.post(this.certificadoUsoSuelo).then( r => { 

      }).catch( e => { console.log(e); });
     } else {
      this.floorAuthorizationCertificateDataService.put(this.certificadoUsoSuelo).then( r => { 

      }).catch( e => { console.log(e); });
     }
  }

  guardarTituloPropiedad() {
   if(this.tituloPropiedad.id == 0) {
    this.propertyTitleAttachmentDataService.post(this.tituloPropiedad).then( r => { 

    }).catch( e => { console.log(e); });
   } else {
    this.propertyTitleAttachmentDataService.put(this.tituloPropiedad).then( r => { 

    }).catch( e => { console.log(e); });
   }
  }

  guardarAutorizacionCondominos() {
   if(this.autorizacionCondomino.id == 0) {
    this.authorizationAttachmentDataService.post(this.autorizacionCondomino).then( r => { 

    }).catch( e => { console.log(e); });
   } else {
    this.authorizationAttachmentDataService.put(this.autorizacionCondomino).then( r => { 

    }).catch( e => { console.log(e); });
   }
  }

  downloadFloorCertification() {
   this.downloadFile(
      this.certificadoUsoSuelo.floor_authorization_certificate_file,
      this.certificadoUsoSuelo.floor_authorization_certificate_file_type,
      this.certificadoUsoSuelo.floor_authorization_certificate_file_name);
  }

  downloadPropertyTitle() {
   this.downloadFile(
      this.tituloPropiedad.property_title_attachment_file,
      this.tituloPropiedad.property_title_attachment_file_type,
      this.tituloPropiedad.property_title_attachment_file_name);
  }

  downloadAutorizacionCondominio() {
   this.downloadFile(
      this.autorizacionCondomino.authorization_attachment_file,
      this.autorizacionCondomino.authorization_attachment_file_type,
      this.autorizacionCondomino.authorization_attachment_file_name);
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

  borrarFloorCertificado() {
   this.certificadoUsoSuelo = new FloorAuthorizationCertificate();
  }

  borrarPropertyTitle() {
   this.tituloPropiedad = new PropertyTitleAttachment();
  }

  borrarAutorizacionCondominio() {
   this.autorizacionCondomino = new AuthorizationAttachment();
  }

  getRegiones() {
   this.regiones = [];
   this.clasifications_registers = [];
   this.showRequisites = false;
   this.register_typeDataService.get_filtered('-').then( r => {
      this.regiones = r as RegisterType[];
   }).catch( e => { console.log(e) });
  }

  getDeclarationAttachment(declaration_id: number) {
   this.declarationAttachmentDataService.get_by_declaration_id(declaration_id).then( r => {
      this.balance = r as DeclarationAttachment;
   }).catch( e => { console.log(e); });
  }

  validateDeclaration(): Boolean {
   return true;
  }

  getNameTypeInfo() {
     this.ruc_name_types.forEach(element => {
        if (element.id == this.establishment_selected.ruc_name_type_id) {
           this.selectedNameType = element;
        }
     });
  }

  changeFullfill(register_requisite: RegisterRequisite) {
     if (register_requisite.fullfill) {
      register_requisite.value = 'true';
     } else {
      register_requisite.value = 'false';
     }
  }

  checkRegistroSupercias() {
   this.ruc_registro_selected.ruc.group_given.register_code = this.ruc_registro_selected.ruc.group_given.register_code.replace(/[^\d]/, '');
  }

  getCertificadoUsoSuelo(register_id: number) {
     this.floorAuthorizationCertificateDataService.get_by_register_id(register_id).then( r => {
        this.certificadoUsoSuelo = r as FloorAuthorizationCertificate;
     }).catch( e => { console.log(e); });
  }

  getTituloPropiedad(register_id: number) {
   this.propertyTitleAttachmentDataService.get_by_register_id(register_id).then( r => {
      this.tituloPropiedad = r as PropertyTitleAttachment;
   }).catch( e => { console.log(e); });
  }

  getAutorizacionCondominos(register_id: number) {
   this.authorizationAttachmentDataService.get_by_register_id(register_id).then( r => {
      this.autorizacionCondomino = r as AuthorizationAttachment;
   }).catch( e => { console.log(e); });
  }

  getReceptionRoom(register_id: number) {
   this.receptionRoomDataService.get_by_register_id(register_id).then( r => {
      this.salaRecepciones = r as ReceptionRoom;
   }).catch( e => { console.log(e); });
  }

  getTarifarioRack(register_id: number) {
   this.registerDataService.get_tarifario(register_id).then( r => {
      this.tarifarioResponse = r as Tariff[];
      let max_year = 0;
      this.tarifarioResponse.forEach(element => {
         if(element.year > max_year){
            max_year = element.year;
         }
      });
      this.tarifarioRack.valores.forEach(element => {
         element.tariffs.forEach(tariffRack => {
            const tariff = tariffRack.tariff;
            this.tarifarioResponse.forEach(tariffResponse => {
               if(tariffResponse.tariff_type_id == tariff.tariff_type_id && tariffResponse.year == max_year && tariffResponse.capacity_type_id == tariff.capacity_type_id) {
                  tariffRack.tariff.price = tariffResponse.price;
                  tariffRack.tariff.year = tariffResponse.year;
               }
            });
         });
      });
   }).catch( e => { console.log(e); });
  }

  refreshDeclaracion() {
     this.selectRegisterEstablishmentDeclaration(this.establishment_selected);
  }

  CodificarArchivoFloorCertification(event) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.certificadoUsoSuelo.floor_authorization_certificate_file = reader.result.toString().split(',')[1];
      this.certificadoUsoSuelo.floor_authorization_certificate_file_type = file.type;
      this.certificadoUsoSuelo.floor_authorization_certificate_file_name = file.name;
    };
   }
  }

  CodificarArchivoPropertyTitle(event) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.tituloPropiedad.property_title_attachment_file = reader.result.toString().split(',')[1];
      this.tituloPropiedad.property_title_attachment_file_type = file.type;
      this.tituloPropiedad.property_title_attachment_file_name = file.name;
    };
   }
  }

  CodificarArchivoAutorizacionCondominio(event) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.autorizacionCondomino.authorization_attachment_file = reader.result.toString().split(',')[1];
      this.autorizacionCondomino.authorization_attachment_file_type = file.type;
      this.autorizacionCondomino.authorization_attachment_file_name = file.name;
    };
   }
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

  setCategory(type_id: number){
   let categoryCode = '';
   this.actividadSelected = '1';
   this.register_typeDataService.get().then(r => {
      let types: RegisterType[] = r as RegisterType[];
      types.forEach(registerType => {
         if (registerType.id == type_id) {
            categoryCode = registerType.father_code.toString();
         }
      });
      types.forEach(registerType => {
         if (categoryCode == registerType.code) {
            this.regionSelectedCode = registerType.father_code.toString();
         }
      });
      this.clasifications_registers = [];
      this.register_typeDataService.get_filtered(this.regionSelectedCode).then( r => {
         this.clasifications_registers = r as RegisterType[];
         this.categorySelectedCode = categoryCode;
         this.categories_registers = [];
         this.register_typeDataService.get_filtered(this.categorySelectedCode).then( r => {
            this.categories_registers = r as RegisterType[];
         }).catch( e => { console.log(e) });
      }).catch( e => { console.log(e) });
   }).catch( e=> { console.log(e); });
  }

  changeTramiteRequerido() {
   this.estado_tramite_selected_code = '1';
  }

  checkValuesTariffs() {
     this.tarifarioRack.valores.forEach(valor => {
        valor.tariffs.forEach(tariff => {
           if (!tariff.isReference) {
            valor.tariffs.forEach(tariff2 => {
               if( tariff !== tariff2) {
                  if (tariff.nombreDivision == tariff2.nombreDivision && tariff.plazasHabitacion !== 999) {
                     tariff.tariff.price = this.rounded(tariff2.tariff.price / tariff2.plazasHabitacion);
                  }
               }
            });
           }
        });
     });
  }

  rounded(numero: number): number {
   const toround = numero*100;
   return Math.round(toround)/100;
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
      {title: 'Estado', name: 'sri_state'},
   ];
   const data = [];
   this.ruc_registro_selected.ruc.establishments.forEach(item => {
      if (Number(item.ruc_code_id) == Number(this.registerMinturSelected.establishment.ruc_code_id)) {
         data.push({
            selected: '',
            code: item.ruc_code_id,
            address: item.address_main_street + ' ' + item.address_number + ' ' + item.address_secondary_street,
            name: item.commercially_known_name,
            sri_state: item.sri_state,
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
      {title: 'Días en Espera', name: 'date_assigment_alert'},
      {title: 'Código del Establecimiento', name: 'establishment_code'},
      {title: 'Ubicación del Establecimiento', name: 'address'},
      {title: 'Código del Registro', name: 'register_code'},
      {title: 'Categoría', name: 'register_type'},
      {title: 'Estado', name: 'state'},
      {title: 'Observaciones', name: 'notes'},
   ];
   const data = []; 
   this.ruc_registro_selected.registers.forEach(item => {
       let date_assigment_alert = '';
       let date1 = new Date();
       const registerState = this.getRegisterState(item.status_register.state_id);
       let editable = true;
       const estado: String = item.status_register.state_id.toString();
       const digito = estado.substring(estado.length-1, estado.length);
       if (digito == '1' || digito == '9') {
          editable = true;
       } else {
          editable = false;
       }
       if (registerState.search('Aprobado') == 0) {
          date1 = new Date(item.status_register.updated_at);
       }
       if (registerState.search('Negado') == 0) {
          date1 = new Date(item.status_register.updated_at);
       }
       const date2 = new Date(item.register.updated_at);
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
       data.push({
          selected: '',
          id: item.register.id,
          date_assigment_alert: date_assigment_alert,
          establishment_code: item.establishment.ruc_code_id,
          address: item.establishment.address,
          register_code: item.register.code,
          register_type: item.type.register_category.name + ' / ' + item.type.register_type.name,
          state: registerState,
          editable: editable,
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
         this.selectEstablishmentRegister(element.register, event.row.editable);
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
   this.consultorDataService.get_registers_assigned_inspector_id(this.user.id).then( r => {
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
      {title: 'Actividad', name: 'actividad'},
      {title: 'Provincia', name: 'provincia'},
      {title: 'Cantón', name: 'canton'},
      {title: 'Parroquia', name: 'parroquia'},
      {title: 'Dirección', name: 'address'},
      {title: 'Clasificación - Categoría', name: 'category'},
      {title: 'Fecha de Solicitud', name: 'created_at'},
      {title: 'Número de Registro', name: 'code'},
      {title: 'Fecha de Asignación', name: 'date_assigment'},
     ];
     const data = [];
     this.registers_mintur.forEach(item => {
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
         let provincia = new Ubication();
         let canton = new Ubication();
         let parroquia = new Ubication();
         let zonal = new Ubication();
         this.ubications.forEach(element => {
            if (element.id == item.establishment.ubication_id) {
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
         if ( digito == '4' || digito == '5' || digito == '6' ) {
            const creacion = new Date(item.register.created_at.toString());
            data.push({
               selected: '',
               date_assigment_alert: date_assigment_alert,
               number: item.ruc.number,
               date_assigment: new Date(item.register.date_assigment.toString()).toLocaleDateString(),
               registerId: item.register.id,
               actividad: item.activity,
               provincia: provincia.name,
               canton: canton.name,
               parroquia: parroquia.name,
               ruc_code_id: item.establishment.ruc_code_id,
               establishment: item.establishment.commercially_known_name,
               address: item.establishment.address_main_street + ' ' + item.establishment.address_number + ' ' + item.establishment.address_secondary_street,
               created_at: creacion.toLocaleDateString(),
               code: item.register.code,
               category: thiscategory.toUpperCase(),
               catastro_category: item.register_data_on_catastro.category.toUpperCase(),
               catastro_classification: item.register_data_on_catastro.classification.toUpperCase(),
               system_source: item.register_data_on_catastro.system_source,
               status: registerState,
               status_id: item.states.state_id,
            });
         }
     });
     this.data = data;
     this.onChangeTable(this.config);
  }

  getRequisitesSetByUser() {
   if (this.activity == 'ALOJAMIENTO') {
      this.registerDataService.get_requisites_set_by_user(this.idRegister).then( r => {
         this.rucEstablishmentRegisterSelected.requisites = r as RegisterRequisite[];
      }).catch( e => { console.log(e); });
   }
   if (this.activity == 'ALIMENTOS Y BEBIDAS') {
      this.registerABDataService.get_requisites_set_by_user(this.idRegister).then( r => {
         this.rucEstablishmentRegisterSelected.requisites = r as RegisterRequisite[];
      }).catch( e => { console.log(e); });
   }
  }

  imprimirActaNotificacion() {
   this.imprimiendo_acta = true;
   if (this.activity == 'ALOJAMIENTO') {
         this.registerDataService.get_register_data(this.registerMinturSelected.register.id).then( r0 => {
         this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r2 => {
            let provincia = new Ubication();
            let canton = new Ubication();
            let parroquia = new Ubication();
            let zonal = new Ubication();
            this.ubications.forEach(element => {
               if (element.id == r2.establishment.ubication_id) {
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
            let iniciales_tecnico_zonal = '';
            this.user.name.split(' ').forEach(element => {
               iniciales_tecnico_zonal += element.substring(0, 1).toUpperCase();
            });
            let iniciales_cordinacion_zonal = '';
            const zonalName = zonal.name.split(' ');
            iniciales_cordinacion_zonal = zonalName[zonalName.length - 1].toUpperCase();
            const today = new Date();
            let qr_value = 'MT-' + iniciales_cordinacion_zonal + '-' + this.ruc_registro_selected.ruc.number + '-' + r2.establishment.ruc_code_id + '-ACTA-NOTIFICACION- ' + this.activity + ' -' + iniciales_tecnico_zonal + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
            let aclaracion_registro = '';
            if (this.tipo_tramite == 'REGISTRO') {
               aclaracion_registro = 'Es importante destacar que de no cumplir con lo indicado, lamentaremos tener que ejecutar las acciones determinadas en el Art. 52 de la Ley de Turismo en concordancia con el Art. 91 y 87 del Reglamento General a la Ley de Turismo a los establecimientos que incumplan con el marco legal vigente.';
            }
            const actividad = this.registerMinturSelected.activity.toUpperCase();
            this.documentDataService.get_doc_id(qr_value).then( respuesta => {
               const codigo = 'MT-AN-' + iniciales_cordinacion_zonal + '-' + iniciales_tecnico_zonal + '-' + today.getFullYear() + '-' + respuesta.toString();
               const params = [{canton: canton.name.toUpperCase()},
                  {fecha: this.dateByUserRequisites.toLocaleDateString()},
                  {codigo: codigo},
                  {numero_coordinacion_zonal: iniciales_cordinacion_zonal},
                  {aclaracion_registro: aclaracion_registro},
                  {razon_social: this.razon_social.toUpperCase()},
                  {tramite: this.tipo_tramite.toUpperCase()},
                  {nombre_comercial: r2.establishment.commercially_known_name.toUpperCase()},
                  {representante_legal: this.representante_legal.toUpperCase()},
                  {direccion_establecimiento: r2.establishment.address_main_street.toUpperCase() + ' ' + r2.establishment.address_number.toUpperCase() + ' ' + r2.establishment.address_secondary_street.toUpperCase()},
                  {tipo_tramite: this.tipo_tramite.toUpperCase()}];
               
               let document = new Documento();
               document.activity =actividad;
               document.code = qr_value;
               document.document_type = 'ACTA NOTIFICACION';
               let paramsToBuild = {
                  template: 1, qr: true, qr_value: qr_value, params: params
               }
               document.procedure_id = this.tipo_tramite.toUpperCase();
               document.zonal = zonal.name;
               document.user = iniciales_tecnico_zonal;
               document.params = JSON.stringify(paramsToBuild);
               this.documentDataService.post(document).then().catch( e => { console.log(e); });
               this.exporterDataService.template(1, true, qr_value, params).then( r => {
                  const byteCharacters = atob(r);
                  const byteNumbers = new Array(byteCharacters.length);
                  for (let i = 0; i < byteCharacters.length; i++) {
                     byteNumbers[i] = byteCharacters.charCodeAt(i);
                  }
                  const byteArray = new Uint8Array(byteNumbers);
                  const blob = new Blob([byteArray], { type: 'application/pdf'});
                  saveAs(blob, qr_value + '.pdf');
                  this.imprimiendo_acta = false;
               }).catch( e => { console.log(e); });
            }).catch( e => { console.log(e); });
         }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });
   }
   if (this.activity == 'ALIMENTOS Y BEBIDAS') {
      this.registerABDataService.get_register_data(this.registerMinturSelected.register.id).then( r0 => {
         this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r2 => {
            let provincia = new Ubication();
            let canton = new Ubication();
            let parroquia = new Ubication();
            let zonal = new Ubication();
            this.ubications.forEach(element => {
               if (element.id == r2.establishment.ubication_id) {
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
            let iniciales_tecnico_zonal = '';
            this.user.name.split(' ').forEach(element => {
               iniciales_tecnico_zonal += element.substring(0, 1).toUpperCase();
            });
            let iniciales_cordinacion_zonal = '';
            const zonalName = zonal.name.split(' ');
            iniciales_cordinacion_zonal = zonalName[zonalName.length - 1].toUpperCase();
            const today = new Date();
            let qr_value = 'MT-' + iniciales_cordinacion_zonal + '-' + this.ruc_registro_selected.ruc.number + '-' + r2.establishment.ruc_code_id + '-ACTA-NOTIFICACION-' + this.activity + '-' + iniciales_tecnico_zonal + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
            let aclaracion_registro = '';
            if (this.tipo_tramite == 'REGISTRO') {
               aclaracion_registro = 'Es importante destacar que de no cumplir con lo indicado, lamentaremos tener que ejecutar las acciones determinadas en el Art. 52 de la Ley de Turismo en concordancia con el Art. 91 y 87 del Reglamento General a la Ley de Turismo a los establecimientos que incumplan con el marco legal vigente.';
            }
            const actividad = this.registerMinturSelected.activity.toUpperCase();
            this.documentDataService.get_doc_id(qr_value).then( respuesta => {
               const codigo = 'MT-AN-' + iniciales_cordinacion_zonal + '-' + iniciales_tecnico_zonal + '-' + today.getFullYear() + '-' + respuesta.toString();
               const params = [{canton: canton.name.toUpperCase()},
                  {fecha: this.dateByUserRequisites.toLocaleDateString()},
                  {codigo: codigo},
                  {numero_coordinacion_zonal: iniciales_cordinacion_zonal},
                  {aclaracion_registro: aclaracion_registro},
                  {razon_social: this.razon_social.toUpperCase()},
                  {tramite: this.tipo_tramite.toUpperCase()},
                  {nombre_comercial: r2.establishment.commercially_known_name.toUpperCase()},
                  {representante_legal: this.representante_legal.toUpperCase()},
                  {direccion_establecimiento: r2.establishment.address_main_street.toUpperCase() + ' ' + r2.establishment.address_number.toUpperCase() + ' ' + r2.establishment.address_secondary_street.toUpperCase()},
                  {tipo_tramite: this.tipo_tramite.toUpperCase()}];
               
               let document = new Documento();
               document.activity =actividad;
               document.code = qr_value;
               document.document_type = 'ACTA NOTIFICACION';
               let paramsToBuild = {
                  template: 1, qr: true, qr_value: qr_value, params: params
               }
               document.procedure_id = this.tipo_tramite.toUpperCase();
               document.zonal = zonal.name;
               document.user = iniciales_tecnico_zonal;
               document.params = JSON.stringify(paramsToBuild);
               this.documentDataService.post(document).then().catch( e => { console.log(e); });
               this.exporterDataService.template(1, true, qr_value, params).then( r => {
                  const byteCharacters = atob(r);
                  const byteNumbers = new Array(byteCharacters.length);
                  for (let i = 0; i < byteCharacters.length; i++) {
                     byteNumbers[i] = byteCharacters.charCodeAt(i);
                  }
                  const byteArray = new Uint8Array(byteNumbers);
                  const blob = new Blob([byteArray], { type: 'application/pdf'});
                  saveAs(blob, qr_value + '.pdf');
                  this.imprimiendo_acta = false;
               }).catch( e => { console.log(e); });
            }).catch( e => { console.log(e); });
         }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });
   }
  }
  
  removeKitchenType() {
   if (this.kitchen_type_registerSelectedId === 0) {
     this.toastr.errorToastr('Seleccione un registro.', 'Error');
     return;
   }
   const newKitchenTypes: any[] = [];
   let eliminado = false;
   this.rucEstablishmentRegisterSelected.kitchen_types_on_register.forEach(kitchenType => {
     if (kitchenType.id !== this.kitchen_type_registerSelectedId) {
         newKitchenTypes.push(kitchenType);
     } else {
        eliminado = true;
     }
   });
   if (!eliminado) {
     this.toastr.errorToastr('Registro no encontrado.', 'Error');
     return;
   }
   this.rucEstablishmentRegisterSelected.kitchen_types_on_register = newKitchenTypes;
   this.kitchen_type_registerSelectedId = 0;
  }

  getYears() {
   this.years = [];
   const today = new Date();
   this.minYear = 2019;
   let lastYearDeclared = 2019;
   this.rucEstablishmentRegisterSelected.capacities_on_register.forEach( capacity => {
      let existe = false;
      this.years.forEach(year => {
         if (year.value == capacity.year) {
            existe = true;
         }
      });
      if (capacity.year < this.minYear) {
         this.minYear = capacity.year;
      }
      if (capacity.year > lastYearDeclared){
         lastYearDeclared = capacity.year;
      }
      if (!existe) {
         let newYear = capacity.year;
         if (newYear != null) {
            this.years.push({value: newYear});
         }
      }
   });
   this.years.sort(function(a, b) {
      const a_value = a.value;
      const b_value = b.value;
      return a_value > b_value ? 1 : a_value < b_value ? -1 : 0;
  });
  this.selected_year_id = lastYearDeclared;
  this.yearCapacity();
 }

 yearCapacity() {
   if (this.selected_year_id > this.currentYear) {
      this.canEditCapacity = true;
   } else {
      this.canEditCapacity = false;
   }
   this.capacitiesToShow = [];
   this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(c1 => {
      if (c1.year == this.selected_year_id) {
         this.capacitiesToShow.push(c1);
      }
   });
   if (this.registerMinturSelected.activity == 'ALIMENTOS Y BEBIDAS') {
      if (this.capacitiesToShow.length == 0) {
         const newCapacity = new CapacityAB();
         newCapacity.year = this.selected_year_id;
         this.capacitiesToShow.push(newCapacity);
      }
   }
   this.tariffsToShow.cabecera = [];
   this.tariffsToShow.valores = [];
   if (this.registerMinturSelected.activity == 'ALOJAMIENTO') {
      this.tarifarioRack.cabecera.forEach(c=> {
         this.tariffsToShow.cabecera.push(c);
      });
      this.tarifarioRack.valores.forEach(v=> {
         let insertar = false;
         v.tariffs.forEach(v1 => {
            if (v1.tariff.year == this.selected_year_id) {
               insertar = true;
            }
         });
         if (insertar) {
            this.tariffsToShow.valores.push(v);
         }
      });
   }
   this.listasPrecios.forEach(element => {
      if (element.year == this.selected_year_id) {
         this.listaPrecios = element;
      }
   });
  }

  addServiceType() {
   if (this.service_type_registerSelectedId === 0) {
     this.toastr.errorToastr('Seleccione un registro.', 'Error');
     return;
   }
   this.service_types.forEach(service_type => {
     if (service_type.id == this.service_type_registerSelectedId) {
        let existe = false;
        this.rucEstablishmentRegisterSelected.service_types_on_register.forEach(element => {
           if (element.id == service_type.id) {
              existe = true;
           }
        });
        if (!existe) {
           this.rucEstablishmentRegisterSelected.service_types_on_register.push(service_type);
           this.service_type_registerSelectedId = 0;
        } else {
           this.toastr.errorToastr('El registro ya existe.', 'Error');
        }
     }
   });
 }

 addKitchenType() {
   if (this.kitchen_type_registerSelectedId === 0) {
     this.toastr.errorToastr('Seleccione un registro.', 'Error');
     return;
   }
   this.kitchen_types.forEach(kitchenType => {
     if (kitchenType.id == this.kitchen_type_registerSelectedId) {
        let existe = false;
        this.rucEstablishmentRegisterSelected.kitchen_types_on_register.forEach(element => {
           if (element.id == kitchenType.id) {
              existe = true;
           }
        });
        if (!existe) {
           this.rucEstablishmentRegisterSelected.kitchen_types_on_register.push(kitchenType);
           this.kitchen_type_registerSelectedId = 0;
        } else {
           this.toastr.errorToastr('El registro ya existe.', 'Error');
        }
     }
   });
 }

  removeServiceType() {
   if (this.service_type_registerSelectedId === 0) {
     this.toastr.errorToastr('Seleccione un registro.', 'Error');
     return;
   }
   const newServiceTypes: ComplementaryServiceType[] = [];
   let eliminado = false;
   this.rucEstablishmentRegisterSelected.service_types_on_register.forEach(service_type => {
     if (service_type.id !== this.service_type_registerSelectedId) {
      newServiceTypes.push(service_type);
     } else {
        eliminado = true;
     }
   });
   if (!eliminado) {
     this.toastr.errorToastr('Registro no encontrado.', 'Error');
     return;
   }
   this.rucEstablishmentRegisterSelected.service_types_on_register = newServiceTypes;
   this.service_type_registerSelectedId = 0;
  }

  imprimirInforme() {
   const today = new Date();
   Swal.fire({
    title: 'Ingreso de Información',
    text: '¿En que fecha usted ejecutará la inspección? (ejemplo: 15/09/2020)',
    type: 'warning',
    inputValue: today.toLocaleDateString(),
    input: 'text',
    inputValidator: (value) => {
       if (!value) {
         return 'Por favor, ingrese la fecha.'
       } else {
          const dateParts = value.split('/'); 
          if (dateParts.length != 3) {
             return 'Ingrese la fecha en el formato correcto. Ejemplo (15/09/2020)';
          }
          let noAdmitido = false;
          dateParts.forEach(element => {
             if (this.stringHasLetter(element)){
                noAdmitido = true;
             }
          });
          if (parseInt(dateParts[0])>31) {
             noAdmitido = true;
          }
          if (parseInt(dateParts[1])>12) {
             noAdmitido = true;
          }
          if (dateParts[2].length > 4){
             noAdmitido = true;
          }
          if (parseInt(dateParts[2])>9999) {
             noAdmitido = true;
          }
          if (noAdmitido) {
             return 'Ingrese la fecha en el formato correcto. Ejemplo (15/09/2020)';
          }
          const dateByUser = new Date(dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0] + ' 23:59:59');
          this.hasdateByUserRequisites = true;
          this.dateByUserRequisites = new Date(dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0] + ' 23:59:59');
          this.please_wait_requisites = true;
       }
    },
    showCancelButton: true,
    confirmButtonText: 'Si, continuar',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
      const dateParts = result.value.split('/'); 
      const dateByUser = new Date(dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0] + ' 23:59:59');
      this.imprimiendo_informe = true;
      if (this.activity == 'ALOJAMIENTO') {
         this.registerDataService.get_register_data(this.registerMinturSelected.register.id).then( r0 => {
            this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r2 => {
               let provincia = new Ubication();
               let canton = new Ubication();
               let parroquia = new Ubication();
               let zonal = new Ubication();
               this.ubications.forEach(element => {
                  if (element.id == r2.establishment.ubication_id) {
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
               let clasificacion = '';
               this.register_types.forEach(element => {
                  if (element.id == r0.register.register_type_id) {
                     clasificacion = element.name.toString();
                  }
               });
               let iniciales_tecnico_zonal = '';
               this.user.name.split(' ').forEach(element => {
                  iniciales_tecnico_zonal += element.substring(0, 1).toUpperCase();
               });
               let zone = new Zone();
               this.zonales.forEach(element => {
                  if (element.ubication_id == provincia.id) {
                     zone = element;
                  }
               });
               const iniciales_cordinacion_zonal = zone.acronym;
               const today = new Date();
               let qr_value = 'MT-IN-' + iniciales_cordinacion_zonal + '-' + this.ruc_registro_selected.ruc.number + '-' + r2.establishment.ruc_code_id + '-INFORME-' + this.activity + '-' + iniciales_tecnico_zonal + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
               const actividad = this.registerMinturSelected.activity.toUpperCase();
               let resultado_aprobacion = '';
               if (this.inspectionState == 1) {
                  resultado_aprobacion = 'APROBADA';
               }
               if (this.inspectionState == 2) {
                  resultado_aprobacion = 'NEGADA';
               }
               if (this.inspectionState == 3) {
                  resultado_aprobacion = 'PRÓRROGA DE 15 DÍAS';
               }
               if (this.inspectionState == 4) {
                  resultado_aprobacion = 'PRÓRROGA DE 6 MESES';
               }
               if (this.registerApprovalInspector.date_fullfill == null || typeof(this.registerApprovalInspector.date_fullfill.toString()) == 'undefined') {
                  this.registerApprovalInspector.date_fullfill = new Date();
               }
               const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
               this.userDataService.get(zone.id_coordinator).then( resp => {
                  const coordinatorName = resp.name;
                  let category = '';
                  let classification = '';
                  if (this.tipo_tramite_seleccionado !== 'inactivation') {
                     category = clasificacion.toUpperCase();
                     classification = r0.register_category.name.toUpperCase();
                  } else {
                     category = this.catastro_category;
                     classification = this.catastro_classification;       
                  }
                  
                  this.documentDataService.get_doc_id(qr_value).then( respuesta => {
                     const codigo_informe = 'MT-' + iniciales_cordinacion_zonal + '-' + iniciales_tecnico_zonal + '-' + today.getFullYear() + '-' + respuesta.toString();
                     const params = [{codigo_informe: codigo_informe},
                        {canton: canton.name.toUpperCase()},
                        {fecha: today.toLocaleDateString().toUpperCase()},
                        {nombre_coordinador_zonal: coordinatorName.toUpperCase()},
                        {actividad: actividad},
                        {nombre_comercial: r2.establishment.commercially_known_name.toUpperCase()},
                        {dia: (new Date(r0.register.updated_at.toString())).getDate()},
                        {mes: meses[(new Date(r0.register.updated_at.toString())).getMonth()].toUpperCase()},
                        {year: (new Date(r0.register.updated_at.toString())).getFullYear()},
                        {ruc: this.ruc_registro_selected.ruc.number.toUpperCase()},
                        {provincia: provincia.name.toUpperCase()},
                        {fecha_solicitud: (new Date(r0.register.updated_at.toString())).toLocaleDateString().toUpperCase()},
                        {parroquia: parroquia.name.toUpperCase()},
                        {actividad: actividad},
                        {clasificacion: classification},
                        {tipo_tramite: this.tipo_tramite},
                        {fecha_inspeccion: dateByUser.toLocaleDateString()},
                        {categoria: category},
                        {calle_principal: r2.establishment.address_main_street.toUpperCase()},            
                        {numeracion: r2.establishment.address_number.toUpperCase()},
                        {calle_secundaria: r2.establishment.address_secondary_street.toUpperCase()},
                        {resultado_aprobacion: resultado_aprobacion},
                        {identificacion: this.user.identification.toUpperCase()},
                        {conclusiones: this.report.conclution},
                        {recomendaciones: this.report.recomendation},
                        {nombre_tecnico_Zonal: this.user.name.toUpperCase()},
                        {zonal: iniciales_cordinacion_zonal.toUpperCase()}];
                        let document = new Documento();
                        document.activity = this.registerMinturSelected.activity.toUpperCase();
                        document.code = qr_value;
                        document.document_type = 'INFORME';
                        let paramsToBuild = {
                           template: 11, qr: true, qr_value: qr_value, params: params
                        }
                        document.procedure_id = this.tipo_tramite.toUpperCase();
                        document.zonal = zonal.name;
                        document.user = iniciales_tecnico_zonal;
                        document.params = JSON.stringify(paramsToBuild);
                        this.documentDataService.post(document).then().catch( e => { console.log(e); });
            
                     this.exporterDataService.template(11, true, qr_value, params).then( r => {
                        const byteCharacters = atob(r);
                        const byteNumbers = new Array(byteCharacters.length);
                        for (let i = 0; i < byteCharacters.length; i++) {
                           byteNumbers[i] = byteCharacters.charCodeAt(i);
                        }
                        const byteArray = new Uint8Array(byteNumbers);
                        const blob = new Blob([byteArray], { type: 'application/pdf'});
                        saveAs(blob, qr_value + '.pdf');
                        this.please_wait_requisites = false;
                        this.imprimiendo_informe = false;
                     }).catch( e => { console.log(e); });
                  }).catch( e => { console.log(e); });
   
               }).catch( e => { console.log(e); });
            }).catch( e => { console.log(e); });
         }).catch( e => { console.log(e); });
      }
      if (this.activity == 'ALIMENTOS Y BEBIDAS') {
         this.registerABDataService.get_register_data(this.registerMinturSelected.register.id).then( r0 => {
         this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r2 => {
            let provincia = new Ubication();
            let canton = new Ubication();
            let parroquia = new Ubication();
            let zonal = new Ubication();
            this.ubications.forEach(element => {
               if (element.id == r2.establishment.ubication_id) {
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
            let clasificacion = '';
            this.register_types_AB.forEach(element => {
               if (element.id == r0.register.register_type_id) {
                  clasificacion = element.name.toString();
               }
            });
            let iniciales_tecnico_zonal = '';
            this.user.name.split(' ').forEach(element => {
               iniciales_tecnico_zonal += element.substring(0, 1).toUpperCase();
            });
            let zone = new Zone();
            this.zonales.forEach(element => {
               if (element.ubication_id == provincia.id) {
                  zone = element;
               }
            });
            const iniciales_cordinacion_zonal = zone.acronym;
            const today = new Date();
            let qr_value = 'MT-IN-' + iniciales_cordinacion_zonal + '-' + this.ruc_registro_selected.ruc.number + '-' + r2.establishment.ruc_code_id + '-INFORME-' + this.activity + '-' + iniciales_tecnico_zonal + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
            const actividad = this.registerMinturSelected.activity.toUpperCase();
            let resultado_aprobacion = '';
            if (this.inspectionState == 1) {
               resultado_aprobacion = 'APROBADA';
            }
            if (this.inspectionState == 2) {
               resultado_aprobacion = 'NEGADA';
            }
            if (this.inspectionState == 3) {
               resultado_aprobacion = 'PRÓRROGA DE 15 DÍAS';
            }
            if (this.inspectionState == 4) {
               resultado_aprobacion = 'PRÓRROGA DE 6 MESES';
            }
            if (this.registerApprovalInspector.date_fullfill == null || typeof(this.registerApprovalInspector.date_fullfill.toString()) == 'undefined') {
               this.registerApprovalInspector.date_fullfill = new Date();
            }
            if (this.inspectionState == 5) {
               clasificacion = 'No Cumple Inspección (No Turístico)';
            }
            const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
            this.userDataService.get(zone.id_coordinator).then( resp => {
               const coordinatorName = resp.name;
   
               this.documentDataService.get_doc_id(qr_value).then( respuesta => {
                  const codigo_informe = 'MT-' + iniciales_cordinacion_zonal + '-' + iniciales_tecnico_zonal + '-' + today.getFullYear() + '-' + respuesta.toString();
                  const params = [{codigo_informe: codigo_informe},
                     {canton: canton.name.toUpperCase()},
                     {fecha: today.toLocaleDateString().toUpperCase()},
                     {nombre_coordinador_zonal: coordinatorName.toUpperCase()},
                     {actividad: actividad},
                     {nombre_comercial: r2.establishment.commercially_known_name.toUpperCase()},
                     {dia: (new Date(r0.register.updated_at.toString())).getDate()},
                     {mes: meses[(new Date(r0.register.updated_at.toString())).getMonth()].toUpperCase()},
                     {year: (new Date(r0.register.updated_at.toString())).getFullYear()},
                     {ruc: this.ruc_registro_selected.ruc.number.toUpperCase()},
                     {provincia: provincia.name.toUpperCase()},
                     {fecha_solicitud: (new Date(r0.register.updated_at.toString())).toLocaleDateString().toUpperCase()},
                     {parroquia: parroquia.name.toUpperCase()},
                     {actividad: actividad},
                     {clasificacion: r0.register_category.name.toUpperCase()},
                     {tipo_tramite: this.tipo_tramite},
                     {fecha_inspeccion: dateByUser.toLocaleDateString()},
                     {categoria: clasificacion.toUpperCase()},
                     {calle_principal: r2.establishment.address_main_street.toUpperCase()},            
                     {numeracion: r2.establishment.address_number.toUpperCase()},
                     {calle_secundaria: r2.establishment.address_secondary_street.toUpperCase()},
                     {resultado_aprobacion: resultado_aprobacion},
                     {identificacion: this.user.identification.toUpperCase()},
                     {conclusiones: this.report.conclution},
                     {recomendaciones: this.report.recomendation},
                     {nombre_tecnico_Zonal: this.user.name.toUpperCase()},
                     {zonal: iniciales_cordinacion_zonal.toUpperCase()}];
                     let document = new Documento();
                     document.activity = this.registerMinturSelected.activity.toUpperCase();
                     document.code = qr_value;
                     document.document_type = 'INFORME';
                     let paramsToBuild = {
                        template: 11, qr: true, qr_value: qr_value, params: params
                     }
                     document.procedure_id = this.tipo_tramite.toUpperCase();
                     document.zonal = zonal.name;
                     document.user = iniciales_tecnico_zonal;
                     document.params = JSON.stringify(paramsToBuild);
                     this.documentDataService.post(document).then().catch( e => { console.log(e); });
         
                  this.exporterDataService.template(11, true, qr_value, params).then( r => {
                     const byteCharacters = atob(r);
                     const byteNumbers = new Array(byteCharacters.length);
                     for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                     }
                     const byteArray = new Uint8Array(byteNumbers);
                     const blob = new Blob([byteArray], { type: 'application/pdf'});
                     saveAs(blob, qr_value + '.pdf');
                     this.please_wait_requisites = false;
                     this.imprimiendo_informe = false;
                  }).catch( e => { console.log(e); });
               }).catch( e => { console.log(e); });
   
            }).catch( e => { console.log(e); });
         }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelado',
        '',
        'error'
      );
    }
  });
  }

  stringHasLetter(stringToCheck: String) {
     let toReturn = false;
     for (let i = 0; i<stringToCheck.length; i++) {
      if (stringToCheck[i].match(/[a-z]/i)) {
         toReturn = true;
      }
     }
     return toReturn;
  }

  imprimirRequisitos() {
     const today = new Date();
     Swal.fire({
      title: 'Ingreso de Información',
      text: '¿En que fecha usted ejecutará la inspección? (ejemplo: 15/09/2020)',
      type: 'warning',
      inputValue: today.toLocaleDateString(),
      input: 'text',
      inputValidator: (value) => {
         if (!value) {
           return 'Por favor, ingrese la fecha.'
         } else {
            const dateParts = value.split('/'); 
            if (dateParts.length != 3) {
               return 'Ingrese la fecha en el formato correcto. Ejemplo (15/09/2020)';
            }
            let noAdmitido = false;
            dateParts.forEach(element => {
               if (this.stringHasLetter(element)){
                  noAdmitido = true;
               }
            });
            if (parseInt(dateParts[0])>31) {
               noAdmitido = true;
            }
            if (parseInt(dateParts[1])>12) {
               noAdmitido = true;
            }
            if (dateParts[2].length > 4){
               noAdmitido = true;
            }
            if (parseInt(dateParts[2])>9999) {
               noAdmitido = true;
            }
            if (noAdmitido) {
               return 'Ingrese la fecha en el formato correcto. Ejemplo (15/09/2020)';
            }
            const dateByUser = new Date(dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0] + ' 23:59:59');
            this.hasdateByUserRequisites = true;
            this.dateByUserRequisites = new Date(dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0] + ' 23:59:59');
            if (dateByUser < today) {
               this.hasdateByUserRequisites = false;
               this.dateByUserRequisites = new Date();
               return 'No se admiten fechas pasadas.';
            }
            this.please_wait_requisites = true;
         }
      },
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
         const dateParts = result.value.split('/'); 
         const dateByUser = new Date(dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0] + ' 23:59:59');
         if (this.activity == 'ALOJAMIENTO') {
               this.registerDataService.get_register_data(this.registerMinturSelected.register.id).then( r0 => {
               this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r2 => {
                  this.registerDataService.get_tarifario(this.registerMinturSelected.register.id).then( r3 => {
                     this.tarifarioResponse = r3 as Tariff[];
                     const capacities = [];
                     const capacities_on_register = r0.capacities_on_register;
                     const years = [];
                     let last_year = 0;
                     capacities_on_register.forEach(capacity => {
                        let existe = false;
                        years.forEach(year => {
                           if (capacity.year == year) {
                              existe = true;
                              if (year > last_year) {
                                 last_year = year;
                              }
                           }
                        });
                        if (!existe) {
                           years.push(capacity.year);
                        }
                     });   
                     capacities_on_register.forEach(capacity => {
                        if (capacity.year == last_year) {
                           const newCapacity = {type: '', spaces: 0, habitaciones: 0, beds: 0, year: 0};
                           newCapacity.habitaciones = capacity.quantity;
                           newCapacity.spaces = capacity.max_spaces;
                           newCapacity.beds = capacity.max_beds;
                           newCapacity.year = capacity.year;
                           this.capacity_types.forEach(element => {
                                 if (element.id == capacity.capacity_type_id) {
                                    newCapacity.type = element.name.toString();
                                 }
                           });
                           capacities.push(newCapacity);
                        }
                     });
                     const tariffs = [];
                     this.tarifarioResponse.forEach(tariff => {
                        if (tariff.year == last_year) {
                           const newTariff = {capacity_type_id: 0, type: '', habitacion_alta: 0, habitacion_baja: 0, persona_alta: 0, persona_baja: 0, year: 0};
                           let existe = false;
                           tariffs.forEach(element => {
                              if (element.capacity_type_id == tariff.capacity_type_id) {
                                 existe = true;
                              }
                           });
                           if (!existe) {
                              this.capacity_types.forEach(element => {
                                 if (element.id == tariff.capacity_type_id) {
                                    newTariff.type = element.name.toString();
                                    newTariff.capacity_type_id = tariff.capacity_type_id;
                                    newTariff.year = tariff.year;
                                 }
                              });
                              tariffs.push(newTariff);
                           }
                        }
                     });
                     tariffs.forEach(element => {
                        this.tarifarioResponse.forEach(tariff => {
                           if (tariff.year == last_year) {
                              if (tariff.capacity_type_id == element.capacity_type_id) {
                                 element.year = tariff.year;
                                 if (tariff.tariff_type_id == 3) {
                                    element.habitacion_baja = tariff.price;
                                 }
                                 if (tariff.tariff_type_id == 5) {
                                    element.habitacion_alta = tariff.price;
                                 }
                                 if (tariff.tariff_type_id == 4) {
                                    element.persona_baja = tariff.price;
                                 }
                                 if (tariff.tariff_type_id == 6) {
                                    element.persona_alta = tariff.price;
                                 }
                              }
                           }
                        });
                     });
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
                     const personal = [];
                     workers_on_establishment.forEach(worker_group_template => {
                        let newworkergroup = {worker_group_name: '', gender_name: '', count: ''};
                        r2.workers_on_establishment.forEach(worker_group_in => {
                           if (worker_group_in.worker_group_id == worker_group_template.worker_group_id && worker_group_in.gender_id == worker_group_template.gender_id) {
                              newworkergroup.worker_group_name = worker_group_template.worker_group_name.toString();
                              newworkergroup.gender_name = worker_group_template.gender_name.toString();
                              newworkergroup.count = worker_group_in.count;
                           }
                        });
                        personal.push(newworkergroup);
                     });
                     const requisites = [];
                     this.requisiteDataService.get_filtered(r0.register.register_type_id).then( r => {
                        this.requisitesByRegisterType = r as Requisite[];
                        this.requisitesByRegisterType.forEach(element => {
                           const newRegisterRequisite = new RegisterRequisite();
                           newRegisterRequisite.requisite_name = element.name;
                           newRegisterRequisite.requisite_id = element.id;
                           newRegisterRequisite.fullfill = true;
                           newRegisterRequisite.requisite_code = element.code;
                           newRegisterRequisite.mandatory = element.mandatory;
                           newRegisterRequisite.requisite_father_code = element.father_code;
                           newRegisterRequisite.level = element.code.split('.').length;
                           newRegisterRequisite.HTMLtype = element.type;
                           newRegisterRequisite.fullfill = false;
                           if (newRegisterRequisite.HTMLtype == 'YES / NO') {
                              newRegisterRequisite.value = '0';
                           }
                           if (newRegisterRequisite.HTMLtype == 'NUMBER') {
                              newRegisterRequisite.value = '0';
                           }
                           if (newRegisterRequisite.HTMLtype == 'TRUE / FALSE') {
                              newRegisterRequisite.value = 'false';
                           }
                           requisites.push(newRegisterRequisite);
                        });
                        requisites.sort(function(a, b) {
                           const a_id = a.requisite_id;
                           const b_id = b.requisite_id;
                           return a_id > b_id ? 1 : a_id < b_id ? -1 : 0;
                     });
                     requisites.forEach(requisite_template => {
                        r0.requisites.forEach(requisite_in => {
                           if (requisite_template.requisite_id == requisite_in.requisite_id) {
                              requisite_template.fullfill = requisite_in.fullfill;
                              requisite_template.value = requisite_in.value;
                           }
                        });
                     });
                     let fecha_registro = '';
                     if (r2.establishment.as_turistic_register_date == null || typeof r2.establishment.as_turistic_register_date == 'undefined') {
                        fecha_registro = 'PENDIENTE';
                     } else {
                        fecha_registro = (new Date(r2.establishment.as_turistic_register_date)).toLocaleDateString();
                     }
                     if (this.as_turistic_date !== null) {
                        fecha_registro = this.as_turistic_date.toLocaleDateString();
                     }
                     let local = '';
                     if (r2.establishment.establishment_property_type_id == 1) {
                        local = 'PROPIO';
                     } else {
                        local = 'ARRENDADO';
                     }
                     let clasificacion = '';
                     this.register_types.forEach(element => {
                        if (element.id == r0.register.register_type_id) {
                           clasificacion = element.name.toString();
                        }
                     });
                     let actividad = this.registerMinturSelected.activity.toUpperCase();
                     let tipo_establecimiento = '';
                     this.ruc_name_types.forEach(element => {
                        if (element.id == r2.establishment.ruc_name_type_id) {
                           tipo_establecimiento = element.name.toString();
                        }
                     });
                     let provincia = new Ubication();
                     let canton = new Ubication();
                     let parroquia = new Ubication();
                     let zonal = new Ubication();
                     this.ubications.forEach(element => {
                        if (element.id == r2.establishment.ubication_id) {
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
                     const today = new Date();
                     let iniciales_cordinacion_zonal = '';
                     const zonalName = zonal.name.split(' ');
                     iniciales_cordinacion_zonal = zonalName[zonalName.length - 1].toUpperCase();
                     const params = [{nombre_tecnico_zonal: this.user.name},
                        {dia: dateByUser.getDate()},
                        {mes: dateByUser.getMonth() + 1},
                        {year: dateByUser.getFullYear()},
                        {nombre_comercial: r2.establishment.commercially_known_name.toUpperCase()},
                        {razon_social: this.razon_social.toUpperCase()},
                        {ruc: this.ruc_registro_selected.ruc.number.toUpperCase()},
                        {actividad: actividad.toUpperCase()},
                        {categoria: clasificacion.toUpperCase()},
                        {tipo_establecimiento:tipo_establecimiento.toUpperCase()},
                        {representante_legal: this.representante_legal.toUpperCase()},
                        {telefono_principal: r2.contact_user.main_phone_number.toUpperCase()},
                        {local: local.toUpperCase()},
                        {pagina_web: r2.establishment.url_web.toUpperCase()},
                        {numero_registro: r0.register.code.toUpperCase()},
                        {fecha_registro: fecha_registro.toUpperCase()},
                        {tipo_tramite: this.tipo_tramite.toUpperCase()},
                        {clasificacion: r0.register_category.name.toUpperCase()},
                        {franquicia_cadena: r2.establishment.franchise_chain_name.toUpperCase()},
                        {contacto_establecimiento: r2.contact_user.name.toUpperCase()},
                        {telefono_secundario: r2.contact_user.secondary_phone_number.toUpperCase()},
                        {correo_electronico:r2.contact_user.email.toUpperCase()},
                        {provincia:provincia.name.toUpperCase()},
                        {canton:canton.name.toUpperCase()},
                        {parroquia:parroquia.name.toUpperCase()},
                        {referencia_ubicacion: r2.establishment.address_reference},
                        {calle_principal: r2.establishment.address_main_street.toUpperCase()},
                        {numeracion: r2.establishment.address_number.toUpperCase()},
                        {calle_secundaria: r2.establishment.address_secondary_street.toUpperCase()}];
                        let iniciales_tecnico_zonal = '';
                        this.user.name.split(' ').forEach(element => {
                           iniciales_tecnico_zonal += element.substring(0, 1).toUpperCase();
                        });
                     let qr_value = 'MT-CHL-' + iniciales_cordinacion_zonal + '-' + this.ruc_registro_selected.ruc.number + '-' + r2.establishment.ruc_code_id + '-CHECKLIST-' + this.activity.toUpperCase() + '-' + iniciales_tecnico_zonal + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
                     let document = new Documento();
                     document.activity = this.registerMinturSelected.activity.toUpperCase();
                     document.code = qr_value;
                     document.document_type = 'CHECKLIST';
                     let paramsToBuild = {
                        requisites: requisites, capacities: capacities, tariffs: tariffs, personal: personal, latitud: r2.establishment.address_map_latitude, longitud: r2.establishment.address_map_longitude, qr: true, qr_value: qr_value, params: params
                     }
                     document.procedure_id = this.tipo_tramite.toUpperCase();
                     document.zonal = zonal.name;
                     document.user = iniciales_tecnico_zonal;
                     document.params = JSON.stringify(paramsToBuild);
                     this.documentDataService.post(document).then().catch( e => { console.log(e); });
                     const complementary_services = [];
                     r0.complementary_service_foods_on_register.forEach(element => {
                        let complementary_service_food_type = '';
                        this.complementaryServiceFoodTypes.forEach(ct => {
                           if (ct.id == element.complementary_service_food_type_id) {
                              complementary_service_food_type = ct.name.toString();
                           }
                        });
                        const newComplementaryService = {type: complementary_service_food_type, tables: element.quantity_tables, spaces: element.quantity_chairs};
                        complementary_services.push(newComplementaryService);
                     });
                     this.exporterDataService.getPDFNormativa(this.activity, requisites, capacities, tariffs, complementary_services, personal, r2.establishment.address_map_latitude, r2.establishment.address_map_longitude, true, qr_value, params).then( r => {
                        const byteCharacters = atob(r);
                        const byteNumbers = new Array(byteCharacters.length);
                        for (let i = 0; i < byteCharacters.length; i++) {
                           byteNumbers[i] = byteCharacters.charCodeAt(i);
                        }
                        const byteArray = new Uint8Array(byteNumbers);
                        const blob = new Blob([byteArray], { type: 'application/pdf'});
                        saveAs(blob, qr_value + '.pdf');
                        this.please_wait_requisites = false;
                     }).catch( e => { console.log(e); });
                     }).catch( e => console.log(e) );
                  }).catch( e => { console.log(e); });
               }).catch( e => { console.log(e); });
            }).catch( e => { console.log(e); });
         }
           if (this.activity == 'ALIMENTOS Y BEBIDAS') {
            this.registerABDataService.get_register_data(this.registerMinturSelected.register.id).then( r0 => {
               this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r2 => {
                     const capacities = r0.capacities_on_register;
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
                     const personal = [];
                     workers_on_establishment.forEach(worker_group_template => {
                        let newworkergroup = {worker_group_name: '', gender_name: '', count: ''};
                        r2.workers_on_establishment.forEach(worker_group_in => {
                           if (worker_group_in.worker_group_id == worker_group_template.worker_group_id && worker_group_in.gender_id == worker_group_template.gender_id) {
                              newworkergroup.worker_group_name = worker_group_template.worker_group_name.toString();
                              newworkergroup.gender_name = worker_group_template.gender_name.toString();
                              newworkergroup.count = worker_group_in.count;
                           }
                        });
                        personal.push(newworkergroup);
                     });
                     const requisites = [];
                     let register_type_father_code = '';
                     this.register_types_AB.forEach(element => {
                        if (element.id == r0.register.register_type_id) {
                           register_type_father_code = element.father_code.toString();
                        }
                     });
                     let register_type_father_id = 0;
                     this.register_types_AB.forEach(element => {
                        if (element.code == register_type_father_code) {
                           register_type_father_id = element.id;
                        }
                     });
                     this.requisiteABDataService.get_filtered(register_type_father_id).then( r => {
                        this.requisitesByRegisterType = r as any[];
                        this.requisitesByRegisterType.forEach(element => {
                           const newRegisterRequisite = new RegisterABRequisite();
                           newRegisterRequisite.to_approve = element.to_approve;
                           newRegisterRequisite.score = element.score;
                           newRegisterRequisite.requisite_name = element.name;
                           newRegisterRequisite.requisite_id = element.id;
                           newRegisterRequisite.fullfill = true;
                           newRegisterRequisite.requisite_code = element.code;
                           newRegisterRequisite.mandatory = element.mandatory;
                           newRegisterRequisite.id = element.id;
                           newRegisterRequisite.requisite_father_code = element.father_code;
                           newRegisterRequisite.level = element.code.split('.').length;
                           newRegisterRequisite.HTMLtype = element.type;
                           newRegisterRequisite.fullfill = false;
                           if (newRegisterRequisite.HTMLtype == 'YES / NO') {
                              newRegisterRequisite.value = '0';
                           }
                           if (newRegisterRequisite.HTMLtype == 'NUMBER') {
                              newRegisterRequisite.value = '0';
                           }
                           if (newRegisterRequisite.HTMLtype == 'TRUE / FALSE') {
                              newRegisterRequisite.value = 'false';
                           }
                           requisites.push(newRegisterRequisite);
                        });
                        requisites.sort(function(a, b) {
                           const a_id = a.requisite_id;
                           const b_id = b.requisite_id;
                           return a_id > b_id ? 1 : a_id < b_id ? -1 : 0;
                     });
                     requisites.forEach(requisite_template => {
                        r0.requisites.forEach(requisite_in => {
                           if (requisite_template.requisite_id == requisite_in.requisite_id) {
                              requisite_template.fullfill = requisite_in.fullfill;
                              requisite_template.value = requisite_in.value;
                           }
                        });
                     });
                     let fecha_registro = '';
                     if (r2.establishment.as_turistic_register_date == null || typeof r2.establishment.as_turistic_register_date == 'undefined') {
                        fecha_registro = 'PENDIENTE';
                     } else {
                        fecha_registro = (new Date(r2.establishment.as_turistic_register_date)).toLocaleDateString();
                     }
                     if (this.as_turistic_date !== null) {
                        fecha_registro = this.as_turistic_date.toLocaleDateString();
                     }
                     let local = '';
                     if (r2.establishment.establishment_property_type_id == 1) {
                        local = 'PROPIO';
                     } else {
                        local = 'ARRENDADO';
                     }
                     let clasificacion = '';
                     this.register_types_AB.forEach(element => {
                        if (element.id == r0.register.register_type_id) {
                           clasificacion = element.name.toString();
                        }
                     });
                     let actividad = this.registerMinturSelected.activity.toUpperCase();
                     let tipo_establecimiento = '';
                     this.ruc_name_types.forEach(element => {
                        if (element.id == r2.establishment.ruc_name_type_id) {
                           tipo_establecimiento = element.name.toString();
                        }
                     });
                     let provincia = new Ubication();
                     let canton = new Ubication();
                     let parroquia = new Ubication();
                     let zonal = new Ubication();
                     this.ubications.forEach(element => {
                        if (element.id == r2.establishment.ubication_id) {
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
                     const today = new Date();
                     let iniciales_cordinacion_zonal = '';
                     const zonalName = zonal.name.split(' ');
                     iniciales_cordinacion_zonal = zonalName[zonalName.length - 1].toUpperCase();
                     const params = [{nombre_tecnico_zonal: this.user.name},
                        {dia: dateByUser.getDate()},
                        {mes: dateByUser.getMonth() + 1},
                        {year: dateByUser.getFullYear()},
                        {nombre_comercial: r2.establishment.commercially_known_name.toUpperCase()},
                        {razon_social: this.razon_social.toUpperCase()},
                        {ruc: this.ruc_registro_selected.ruc.number.toUpperCase()},
                        {actividad: actividad.toUpperCase()},
                        {categoria: clasificacion.toUpperCase()},
                        {tipo_establecimiento:tipo_establecimiento.toUpperCase()},
                        {representante_legal: this.representante_legal.toUpperCase()},
                        {telefono_principal: r2.contact_user.main_phone_number.toUpperCase()},
                        {local: local.toUpperCase()},
                        {pagina_web: r2.establishment.url_web.toUpperCase()},
                        {numero_registro: r0.register.code.toUpperCase()},
                        {fecha_registro: fecha_registro.toUpperCase()},
                        {tipo_tramite: this.tipo_tramite.toUpperCase()},
                        {clasificacion: r0.register_category.name.toUpperCase()},
                        {franquicia_cadena: r2.establishment.franchise_chain_name.toUpperCase()},
                        {contacto_establecimiento: r2.contact_user.name.toUpperCase()},
                        {telefono_secundario: r2.contact_user.secondary_phone_number.toUpperCase()},
                        {correo_electronico:r2.contact_user.email.toUpperCase()},
                        {provincia:provincia.name.toUpperCase()},
                        {canton:canton.name.toUpperCase()},
                        {parroquia:parroquia.name.toUpperCase()},
                        {referencia_ubicacion: r2.establishment.address_reference},
                        {calle_principal: r2.establishment.address_main_street.toUpperCase()},
                        {numeracion: r2.establishment.address_number.toUpperCase()},
                        {calle_secundaria: r2.establishment.address_secondary_street.toUpperCase()}];
                        let iniciales_tecnico_zonal = '';
                        this.user.name.split(' ').forEach(element => {
                           iniciales_tecnico_zonal += element.substring(0, 1).toUpperCase();
                        });
                     let qr_value = 'MT-CHL-' + iniciales_cordinacion_zonal + '-' + this.ruc_registro_selected.ruc.number + '-' + r2.establishment.ruc_code_id + '-CHECKLIST-' + this.activity.toUpperCase() + '-' + iniciales_tecnico_zonal + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
                     let document = new Documento();
                     document.activity = this.registerMinturSelected.activity.toUpperCase();
                     document.code = qr_value;
                     document.document_type = 'CHECKLIST';
                     let paramsToBuild = {
                        requisites: requisites, capacities: capacities, personal: personal, latitud: r2.establishment.address_map_latitude, longitud: r2.establishment.address_map_longitude, qr: true, qr_value: qr_value, params: params
                     }
                     document.procedure_id = this.tipo_tramite.toUpperCase();
                     document.zonal = zonal.name;
                     document.user = iniciales_tecnico_zonal;
                     document.params = JSON.stringify(paramsToBuild);
                     this.documentDataService.post(document).then().catch( e => { console.log(e); });
                     const tariffs = [];
                     const complementary_services = [];
                     this.exporterDataService.getPDFNormativa(this.activity.toUpperCase(),requisites, capacities, tariffs, complementary_services, personal, r2.establishment.address_map_latitude, r2.establishment.address_map_longitude, true, qr_value, params).then( r => {
                        const byteCharacters = atob(r);
                        const byteNumbers = new Array(byteCharacters.length);
                        for (let i = 0; i < byteCharacters.length; i++) {
                           byteNumbers[i] = byteCharacters.charCodeAt(i);
                        }
                        const byteArray = new Uint8Array(byteNumbers);
                        const blob = new Blob([byteArray], { type: 'application/pdf'});
                        saveAs(blob, qr_value + '.pdf');
                        this.please_wait_requisites = false;
                     }).catch( e => { console.log(e); });
                     }).catch( e => console.log(e) );
               }).catch( e => { console.log(e); });
            }).catch( e => { console.log(e); });
           } 
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          '',
          'error'
        );
      }
    });
  }

  validateNotesInspection(): Boolean {
   this.report.background = "                ";
     return this.report.background.length > 4 && this.report.conclution.length > 4 && this.report.recomendation.length > 4;
  }
  
  validateInspectionInfo(): Boolean {
     if (this.tipo_tramite_seleccionado !== 'inactivation') {
      return this.validateNotesInspection() && this.validateInformeFile() && this.validateRequisitesFile();
     } else {
      return this.validateNotesInspection() && this.validateInformeFile();   
     }
   }

  descargarRequisitos() {
   this.downloadFile(
      this.requisitosApprovalStateAttachment.approval_state_attachment_file,
      this.requisitosApprovalStateAttachment.approval_state_attachment_file_type,
      this.requisitosApprovalStateAttachment.approval_state_attachment_file_name);
  }

  borrarRequisitos() {
   this.requisitosApprovalStateAttachment = new ApprovalStateAttachment();
  }

  descargarInforme() {
   this.downloadFile(
      this.informeApprovalStateAttachment.approval_state_attachment_file,
      this.informeApprovalStateAttachment.approval_state_attachment_file_type,
      this.informeApprovalStateAttachment.approval_state_attachment_file_name);
  }

  descargarActaNotificacion() {
   this.downloadFile(
      this.actaNotificacionApprovalStateAttachment.approval_state_attachment_file,
      this.actaNotificacionApprovalStateAttachment.approval_state_attachment_file_type,
      this.actaNotificacionApprovalStateAttachment.approval_state_attachment_file_name);
  }

  borrarInforme() {
   this.informeApprovalStateAttachment = new ApprovalStateAttachment();
  }

  borrarActaNotificacion() {
   this.actaNotificacionApprovalStateAttachment = new ApprovalStateAttachment();
  }

  CodeFileRequisitesAttachment(event) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
         this.requisitosApprovalStateAttachment.approval_state_attachment_file_name = file.name;
         this.requisitosApprovalStateAttachment.approval_state_attachment_file_type = file.type;
         this.requisitosApprovalStateAttachment.approval_state_attachment_file = reader.result.toString().split(',')[1];
      };
   }
  }

  CodeFileInformeAttachment(event) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
         this.informeApprovalStateAttachment.approval_state_attachment_file_name = file.name;
         this.informeApprovalStateAttachment.approval_state_attachment_file_type = file.type;
         this.informeApprovalStateAttachment.approval_state_attachment_file = reader.result.toString().split(',')[1];
      };
   }
  }

  CodeFileActaNotificacionAttachment(event) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
         this.actaNotificacionApprovalStateAttachment.approval_state_attachment_file_name = file.name;
         this.actaNotificacionApprovalStateAttachment.approval_state_attachment_file_type = file.type;
         this.actaNotificacionApprovalStateAttachment.approval_state_attachment_file = reader.result.toString().split(',')[1];
      };
   }
  }

  validateRequisitesFile(): Boolean {
   return !(this.requisitosApprovalStateAttachment.approval_state_attachment_file_name == '');
  }

  rechazarCheck() {
   this.registerApprovalInspector.notes = '';
  }

  validateInformeFile(): Boolean {
   return !(this.informeApprovalStateAttachment.approval_state_attachment_file_name == '');
  }

  validateActaNotificacionFile(): Boolean {
   return !(this.actaNotificacionApprovalStateAttachment.approval_state_attachment_file_name == '');
  }

  guardarInspeccion() {
   const estado: String = this.stateTramiteId.toString();
   const digito = estado.substring(estado.length-1, estado.length);
   if ( this.inspectionState == 0) {
      this.toastr.errorToastr('Debe seleccionar un estado de la inspección', 'Inspección');
      return;
   }
   let enviarEmailUsuario = false;
   let prorroga15 = false;
   let prorroga6 = false;
   this.motivoTramite = '';
   this.mostrarMotivoTramite = false;
   Swal.fire({
      title: 'Confirmación',
      text: '¿Está seguro de confirmar el resultado del trámite a su cargo?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
         const today = new Date();
         if ( this.inspectionState == 1) {
            this.registerApprovalInspector.value = true;
            if (digito == '4') {
               this.newRegisterState.state_id = this.stateTramiteId + 6;
            }
            if (digito == '5') {
               this.newRegisterState.state_id = this.stateTramiteId + 5;
            }
            if (digito == '6') {
               this.newRegisterState.state_id = this.stateTramiteId + 4;
            }
            if (digito == '0') {
               this.newRegisterState.state_id = this.stateTramiteId;
            }
         }
         if ( this.inspectionState == 2) {
            this.registerApprovalInspector.value = false;
            if (digito == '4') {
               this.newRegisterState.state_id = this.stateTramiteId + 6;
            }
            if (digito == '5') {
               this.newRegisterState.state_id = this.stateTramiteId + 5;
            }
            if (digito == '6') {
               this.newRegisterState.state_id = this.stateTramiteId + 4;
            }
            if (digito == '0') {
               this.newRegisterState.state_id = this.stateTramiteId;
            }
         }
         if ( this.inspectionState == 3) {
            this.registerApprovalInspector.value = false;
            enviarEmailUsuario = true;
            prorroga15 = true;
            prorroga6 = false;
            if (digito == '4') {
               this.newRegisterState.state_id = this.stateTramiteId + 1;
            }
            if (digito == '5') {
               this.newRegisterState.state_id = this.stateTramiteId;
            }
            if (digito == '6') {
               this.newRegisterState.state_id = this.stateTramiteId - 1;
            }
            if (digito == '0') {
               this.newRegisterState.state_id = this.stateTramiteId - 5;
            }
         }
         if ( this.inspectionState == 4) {
            this.registerApprovalInspector.value = false;
            enviarEmailUsuario = true;
            prorroga15 = false;
            prorroga6 = true;
            if (digito == '4') {
               this.newRegisterState.state_id = this.stateTramiteId + 2;
            }
            if (digito == '5') {
               this.newRegisterState.state_id = this.stateTramiteId + 1;
            }
            if (digito == '6') {
               this.newRegisterState.state_id = this.stateTramiteId;
            }
            if (digito == '0') {
               this.newRegisterState.state_id = this.stateTramiteId - 4;
            }
         }
         if (this.inspectionState == 5) {
            this.registerApprovalInspector.value = true;
            this.registerABDataService.isNotTuristic(this.idRegister).then( r => { } ).catch( e => { console.log(e); });
            if (digito == '4') {
               this.newRegisterState.state_id = this.stateTramiteId + 6;
            }
            if (digito == '5') {
               this.newRegisterState.state_id = this.stateTramiteId + 5;
            }
            if (digito == '6') {
               this.newRegisterState.state_id = this.stateTramiteId + 4;
            }
            if (digito == '0') {
               this.newRegisterState.state_id = this.stateTramiteId;
            }
         }
         this.newRegisterState.justification = 'Resultados de la Inspección cargados en la fecha ' + new Date(this.registerApprovalInspector.date_fullfill).toDateString();
         this.newRegisterState.register_id = this.registerApprovalInspector.register_id;
         this.registerApprovalInspector.notes = '';
         this.report.approval_state_id = this.registerApprovalInspector.id;
         if (this.activity == 'ALOJAMIENTO') {
            if (this.report.id == 0) {
               this.approvalStateReportDataService.post(this.report).then().catch( e => { console.log(e); });
            } else {
               this.approvalStateReportDataService.put(this.report).then().catch( e => { console.log(e); });
            }
            this.registerStateDataService.post(this.newRegisterState).then( r1 => {
            }).catch( e => { console.log(e); });
            this.approvalStateDataService.put(this.registerApprovalInspector).then( r => {
               this.requisitosApprovalStateAttachment.approval_state_attachment_file_name = 'Formulario_Requisitos_' + this.user.identification + '_' + today.getFullYear().toString() + '_' + (today.getMonth() + 1).toString() + '_' + today.getDate().toString()+'.pdf';
               this.requisitosApprovalStateAttachment.approval_state_id = this.registerApprovalInspector.id;
               this.informeApprovalStateAttachment.approval_state_attachment_file_name = 'Informe_Requisitos_' + this.user.identification + '_' + today.getFullYear().toString() + '_' + (today.getMonth() + 1).toString() + '_' + today.getDate().toString()+'.pdf';
               this.informeApprovalStateAttachment.approval_state_id = this.registerApprovalInspector.id;
               if ( this.validateActaNotificacionFile() ) {
                  this.actaNotificacionApprovalStateAttachment.approval_state_attachment_file_name = 'Acta_Notificacion_' + this.user.identification + '_' + today.getFullYear().toString() + '_' + (today.getMonth() + 1).toString() + '_' + today.getDate().toString()+'.pdf';
               }
               if (this.requisitosApprovalStateAttachment.id == 0) {
                  this.approvalStateAttachmentDataService.post(this.requisitosApprovalStateAttachment).then( r_attach_1 => {
                     this.toastr.successToastr('Inspección Guardada Satisfactoriamente', 'Inspección');
                     if (this.informeApprovalStateAttachment.id == 0) {
                        this.approvalStateAttachmentDataService.post(this.informeApprovalStateAttachment).then( r_attach_2 => {
                           if ( this.validateActaNotificacionFile() ) { 
                              this.actaNotificacionApprovalStateAttachment.approval_state_id = this.informeApprovalStateAttachment.approval_state_id;
                              if (this.actaNotificacionApprovalStateAttachment.id == 0) {
                                 this.approvalStateAttachmentDataService.post(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              } else {
                                 this.approvalStateAttachmentDataService.put(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              }
                           }
                        }).catch( e => { console.log(e); });
                     } else {
                        this.approvalStateAttachmentDataService.put(this.informeApprovalStateAttachment).then( r_attach_2 => {
                           if ( this.validateActaNotificacionFile() ) { 
                              this.actaNotificacionApprovalStateAttachment.approval_state_id = this.informeApprovalStateAttachment.approval_state_id;
                              if (this.actaNotificacionApprovalStateAttachment.id == 0) {
                                 this.approvalStateAttachmentDataService.post(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              } else {
                                 this.approvalStateAttachmentDataService.put(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              }
                           }
                        }).catch( e => { console.log(e); });
                     }
                     Swal.fire(
                        'Confirmado!',
                        'El resultado del trámite ha sido almacenado',
                        'success'
                     );
                     this.refresh();
                  }).catch( e => { console.log(e); });
               } else {
                  this.approvalStateAttachmentDataService.put(this.requisitosApprovalStateAttachment).then( r_attach_1 => {
                     this.toastr.successToastr('Inspección Guardada Satisfactoriamente', 'Inspección');
                     if (this.informeApprovalStateAttachment.id == 0) {
                        this.approvalStateAttachmentDataService.post(this.informeApprovalStateAttachment).then( r_attach_2 => {
                           if ( this.validateActaNotificacionFile() ) { 
                              this.actaNotificacionApprovalStateAttachment.approval_state_id = this.informeApprovalStateAttachment.approval_state_id;
                              if (this.actaNotificacionApprovalStateAttachment.id == 0) {
                                 this.approvalStateAttachmentDataService.post(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              } else {
                                 this.approvalStateAttachmentDataService.put(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              }
                           }
                        }).catch( e => { console.log(e); });
                     } else {
                        this.approvalStateAttachmentDataService.put(this.informeApprovalStateAttachment).then( r_attach_2 => {
                           if ( this.validateActaNotificacionFile() ) { 
                              this.actaNotificacionApprovalStateAttachment.approval_state_id = this.informeApprovalStateAttachment.approval_state_id;
                              if (this.actaNotificacionApprovalStateAttachment.id == 0) {
                                 this.approvalStateAttachmentDataService.post(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              } else {
                                 this.approvalStateAttachmentDataService.put(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              }
                           }
                        }).catch( e => { console.log(e); });
                     }
                     Swal.fire(
                        'Confirmado!',
                        'El resultado del trámite ha sido almacenado',
                        'success'
                     );
                     this.refresh();
                  }).catch( e => { console.log(e); });
               }
            }).catch( e => { console.log(e); });
         }
         if (this.activity == 'ALIMENTOS Y BEBIDAS') {
               if (this.report.id == 0) {
                  this.approvalStateReportABDataService.post(this.report).then().catch( e => { console.log(e); });
               } else {
                  this.approvalStateReportABDataService.put(this.report).then().catch( e => { console.log(e); });
               }
            this.registerStateABDataService.post(this.newRegisterState).then( r1 => {
            }).catch( e => { console.log(e); });
            this.approvalStateABDataService.put(this.registerApprovalInspector).then( r => {
               this.requisitosApprovalStateAttachment.approval_state_attachment_file_name = 'Formulario_Requisitos_' + this.user.identification + '_' + today.getFullYear().toString() + '_' + (today.getMonth() + 1).toString() + '_' + today.getDate().toString()+'.pdf';
               this.requisitosApprovalStateAttachment.approval_state_id = this.registerApprovalInspector.id;
               this.informeApprovalStateAttachment.approval_state_attachment_file_name = 'Informe_Requisitos_' + this.user.identification + '_' + today.getFullYear().toString() + '_' + (today.getMonth() + 1).toString() + '_' + today.getDate().toString()+'.pdf';
               this.informeApprovalStateAttachment.approval_state_id = this.registerApprovalInspector.id;
               if ( this.validateActaNotificacionFile() ) {
                  this.actaNotificacionApprovalStateAttachment.approval_state_attachment_file_name = 'Acta_Notificacion_' + this.user.identification + '_' + today.getFullYear().toString() + '_' + (today.getMonth() + 1).toString() + '_' + today.getDate().toString()+'.pdf';
               }
               if (this.requisitosApprovalStateAttachment.id == 0) {
                  this.approvalStateAttachmentABDataService.post(this.requisitosApprovalStateAttachment).then( r_attach_1 => {
                     this.toastr.successToastr('Inspección Guardada Satisfactoriamente', 'Inspección');
                     if (this.informeApprovalStateAttachment.id == 0) {
                        this.approvalStateAttachmentABDataService.post(this.informeApprovalStateAttachment).then( r_attach_2 => {
                           if ( this.validateActaNotificacionFile() ) { 
                              this.actaNotificacionApprovalStateAttachment.approval_state_id = this.informeApprovalStateAttachment.approval_state_id;
                              if (this.actaNotificacionApprovalStateAttachment.id == 0) {
                                 this.approvalStateAttachmentABDataService.post(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              } else {
                                 this.approvalStateAttachmentABDataService.put(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              }
                           }
                        }).catch( e => { console.log(e); });
                     } else {
                        this.approvalStateAttachmentABDataService.put(this.informeApprovalStateAttachment).then( r_attach_2 => {
                           if ( this.validateActaNotificacionFile() ) { 
                              this.actaNotificacionApprovalStateAttachment.approval_state_id = this.informeApprovalStateAttachment.approval_state_id;
                              if (this.actaNotificacionApprovalStateAttachment.id == 0) {
                                 this.approvalStateAttachmentABDataService.post(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              } else {
                                 this.approvalStateAttachmentABDataService.put(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              }
                           }
                        }).catch( e => { console.log(e); });
                     }
                     Swal.fire(
                        'Confirmado!',
                        'El resultado del trámite ha sido almacenado',
                        'success'
                     );
                     this.refresh();
                  }).catch( e => { console.log(e); });
               } else {
                  this.approvalStateAttachmentABDataService.put(this.requisitosApprovalStateAttachment).then( r_attach_1 => {
                     this.toastr.successToastr('Inspección Guardada Satisfactoriamente', 'Inspección');
                     if (this.informeApprovalStateAttachment.id == 0) {
                        this.approvalStateAttachmentABDataService.post(this.informeApprovalStateAttachment).then( r_attach_2 => {
                           if ( this.validateActaNotificacionFile() ) { 
                              this.actaNotificacionApprovalStateAttachment.approval_state_id = this.informeApprovalStateAttachment.approval_state_id;
                              if (this.actaNotificacionApprovalStateAttachment.id == 0) {
                                 this.approvalStateAttachmentABDataService.post(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              } else {
                                 this.approvalStateAttachmentABDataService.put(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              }
                           }
                        }).catch( e => { console.log(e); });
                     } else {
                        this.approvalStateAttachmentABDataService.put(this.informeApprovalStateAttachment).then( r_attach_2 => {
                           if ( this.validateActaNotificacionFile() ) { 
                              this.actaNotificacionApprovalStateAttachment.approval_state_id = this.informeApprovalStateAttachment.approval_state_id;
                              if (this.actaNotificacionApprovalStateAttachment.id == 0) {
                                 this.approvalStateAttachmentABDataService.post(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              } else {
                                 this.approvalStateAttachmentABDataService.put(this.actaNotificacionApprovalStateAttachment).then( r_attach_3 => {
                                 }).catch( e => { console.log(e); });
                              }
                           }
                        }).catch( e => { console.log(e); });
                     }
                     Swal.fire(
                        'Confirmado!',
                        'El resultado del trámite ha sido almacenado',
                        'success'
                     );
                     this.refresh();
                  }).catch( e => { console.log(e); });
               }
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
    if (!enviarEmailUsuario) {
      return;
    }
    const diaHoy = new Date();
   let clasificacion: String = '';
   let categoria: String = '';
   let category: RegisterType = new RegisterType();
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
   this.ubications.forEach(element => {
      if (element.code == canton.father_code) {
         provinciaName = element.name;
      }
   });
   let prorroga = '';
   if (prorroga15) {
      prorroga = 'Prórroga de 15 días';
   }
   if (prorroga6) {
      prorroga = 'Prórroga de 6 meses';
   }
   let observaciones = this.registerApprovalInspector.notes;
   this.userDataService.get(this.registerMinturSelected.establishment.contact_user_id).then( r => {
      const information = {
         para: r.name,
         tramite: 'Registro',
         ruc: this.ruc_registro_selected.ruc.number,
         nombreComercial: this.registerMinturSelected.establishment.commercially_known_name,
         fechaSolicitud: diaHoy.toLocaleString(),
         actividad: this.registerMinturSelected.activity.toUpperCase(),
         clasificacion: clasificacion,
         categoria: categoria,
         tipoSolicitud: 'Registro',
         provincia: provinciaName,
         canton: cantonName,
         prorroga: prorroga,
         parroquia: parroquiaName,
         observaciones: observaciones,
         callePrincipal: this.registerMinturSelected.establishment.address_main_street,
         calleInterseccion: this.registerMinturSelected.establishment.address_secondary_street,
         numeracion: this.registerMinturSelected.establishment.address_number,
         thisYear:diaHoy.getFullYear()
      };
      this.mailerDataService.sendMail('prorroga', r.email.toString(), 'Prórroga en su Trámite', information).then( r => {
         this.toastr.successToastr('Usuario Notificado Satisfactoriamente.', 'Notificación al Usuario');
         this.refresh();
      }).catch( e => { console.log(e); });
   }).catch( e => {console.log(e); });
  }

  onCellClick(event) {
   this.register_code = event.row.code;
   this.idRegister = event.row.registerId;
   this.activity = event.row.actividad;
   this.catastro_category = event.row.catastro_category;
   this.catastro_classification = event.row.catastro_classification;
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
         this.registerCatastroDataService.get_by_register_code(this.register_code).then( r2 => {
            if (typeof r2.activity != 'undefined') {
               this.as_turistic_date = new Date(r2.as_turistic_date.toString());
            }
         }).catch( e => { console.log(e); });
         this.stateTramiteId = element.states.state_id;
         this.estado = this.stateTramiteId.toString();
         const primerDigito = this.estado.substring(0, this.estado.length-1);
         if ((primerDigito == '5' || this.estado == '60') && (this.estado !== '50')) {
            this.tipo_tramite_seleccionado = 'inactivation';
         }
         this.checkMotivoTramite(this.estado);
         this.getApprovalStates();
      }
   });
  }

  checkIfIsAssigned() {
   if (this.inspectorSelectedId !== 0) {
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
               if (element.approval_id == 1){
                  if (element.value) {
                     this.inspectionState = 1;
                  } else {
                     this.inspectionState = 2;
                     const estado: String = this.stateTramiteId.toString();
                     const digito = estado.substring(estado.length-1, estado.length);
                     if (digito == '5'){
                        this.inspectionState = 3;
                     }
                     if (digito == '6'){
                        this.inspectionState = 4;
                     }
                  }
                  if (approvalStateAttachments.length == 0) {
                     this.inspectionState = 0;
                     this.requisitosApprovalStateAttachment = new ApprovalStateAttachment();
                     this.requisitosApprovalStateAttachment.approval_state_id = element.id;
                     this.informeApprovalStateAttachment = new ApprovalStateAttachment();
                     this.informeApprovalStateAttachment.approval_state_id = element.id;
                     this.actaNotificacionApprovalStateAttachment = new ApprovalStateAttachment();
                     this.actaNotificacionApprovalStateAttachment.approval_state_id = element.id;
                  }
                  approvalStateAttachments.forEach(approvalStateAttachment => {
                     if (approvalStateAttachment.approval_state_id == element.id) {
                        if (approvalStateAttachment.approval_state_attachment_file_name.search('Informe') == 0) {
                           this.informeApprovalStateAttachment = approvalStateAttachment;
                        }
                        if (approvalStateAttachment.approval_state_attachment_file_name.search('Formulario') == 0) {
                           this.requisitosApprovalStateAttachment = approvalStateAttachment;
                        }
                        if (approvalStateAttachment.approval_state_attachment_file_name.search('Acta') == 0) {
                           this.actaNotificacionApprovalStateAttachment = approvalStateAttachment;
                        }
                     }
                  });
                  this.registerApprovalInspector = element;
                  this.approvalStateReportDataService.get_by_approval_state_id(element.id).then( r => {
                     const reporte = r as ApprovalStateReport;
                     if (typeof reporte.id != 'undefined' || reporte.id != null) {
                        this.report = reporte;
                     }
                  }).catch( e => { console.log(e); });
                  if (typeof this.registerApprovalInspector.notes == 'undefined' || this.registerApprovalInspector.notes == null) {
                     this.registerApprovalInspector.notes = '';
                  }
                  this.inspectorSelectedId = this.registerApprovalInspector.id_user;
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
               if (element.approval_id == 1){
                  if (element.value) {
                     this.inspectionState = 1;
                  } else {
                     this.inspectionState = 2;
                     const estado: String = this.stateTramiteId.toString();
                     const digito = estado.substring(estado.length-1, estado.length);
                     if (digito == '5'){
                        this.inspectionState = 3;
                     }
                     if (digito == '6'){
                        this.inspectionState = 4;
                     }
                  }
                  if (approvalStateAttachments.length == 0) {
                     this.inspectionState = 0;
                     this.requisitosApprovalStateAttachment = new ApprovalStateAttachment();
                     this.requisitosApprovalStateAttachment.approval_state_id = element.id;
                     this.informeApprovalStateAttachment = new ApprovalStateAttachment();
                     this.informeApprovalStateAttachment.approval_state_id = element.id;
                     this.actaNotificacionApprovalStateAttachment = new ApprovalStateAttachment();
                     this.actaNotificacionApprovalStateAttachment.approval_state_id = element.id;
                  }
                  approvalStateAttachments.forEach(approvalStateAttachment => {
                     if (approvalStateAttachment.approval_state_id == element.id) {
                        if (approvalStateAttachment.approval_state_attachment_file_name.search('Informe') == 0) {
                           this.informeApprovalStateAttachment = approvalStateAttachment;
                        }
                        if (approvalStateAttachment.approval_state_attachment_file_name.search('Formulario') == 0) {
                           this.requisitosApprovalStateAttachment = approvalStateAttachment;
                        }
                        if (approvalStateAttachment.approval_state_attachment_file_name.search('Acta') == 0) {
                           this.actaNotificacionApprovalStateAttachment = approvalStateAttachment;
                        }
                     }
                  });
                  this.registerApprovalInspector = element;
                  this.approvalStateReportABDataService.get_by_approval_state_id(element.id).then( r => {
                     const reporte = r as ApprovalStateReport;
                     if (typeof reporte.id != 'undefined' || reporte.id != null) {
                        this.report = reporte;
                     }
                  }).catch( e => { console.log(e); });
                  if (typeof this.registerApprovalInspector.notes == 'undefined' || this.registerApprovalInspector.notes == null) {
                     this.registerApprovalInspector.notes = '';
                  }
                  this.inspectorSelectedId = this.registerApprovalInspector.id_user;
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
   this.getRuc(this.registerMinturSelected.ruc.number);
   this.groupTypeSelected = new GroupType();
  }

  devolverVacaciones() {
     if(this.registerApprovalInspector.notes == '') {
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
        this.registerApprovalInspector.id_user = 0;
        this.registerApprovalInspector.date_assigment = null;
        this.registerApprovalInspector.notes = '<strong>' + this.user.name + ':</strong> ' + this.registerApprovalInspector.notes;
        if (this.activity == 'ALOJAMIENTO') {
            this.approvalStateDataService.put(this.registerApprovalInspector).then( r => {
               const newRegisterState = new RegisterState();
               newRegisterState.justification = 'El Técnico Zonal no se encuentra disponible por Vacaciones / Fuera de Oficina';
               newRegisterState.register_id =  this.idRegister;
               newRegisterState.state_id = this.stateTramiteId - 3;
               this.registerStateDataService.post(newRegisterState).then( r1 => {
                  this.toastr.warningToastr('Trámite devuelto al Coordinador Zonal, Satisfactoriamente.', 'Devolución por Vacaciones / Fuera de Oficina');
                  this.refresh();
               }).catch( e => { console.log(e); });
         }).catch( e => { console.log(e); });
        }
        if (this.activity == 'ALIMENTOS Y BEBIDAS') {
            this.approvalStateABDataService.put(this.registerApprovalInspector).then( r => {
               const newRegisterState = new RegisterState();
               newRegisterState.justification = 'El Técnico Zonal no se encuentra disponible por Vacaciones / Fuera de Oficina';
               newRegisterState.register_id =  this.idRegister;
               newRegisterState.state_id = this.stateTramiteId - 3;
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
   this.fechaNombramientoOK = true;
   if(this.ruc_registro_selected.ruc.tax_payer_type_id > 1) {
      this.fechasNombramiento();
      validateRepresentantLegalId = this.identificationRepresentativePersonValidated;
      const validateExpediente = (this.ruc_registro_selected.ruc.group_given.register_code !== '');
      return this.rucValidated &&
       this.validateNombramiento() &&
       this.validateGroupGivenTipe() &&
       validateRepresentantLegalId &&
       this.SRIOK &&
       this.REGCIVILREPRESENTANTELEGALOK &&
       validateExpediente &&
       this.fechaNombramientoOK;
   }
   return this.rucValidated &&
    this.SRIOK;
  }

  refresh() {
   this.getZonales();
   this.getAllCapacityTypes();
   this.fechasNombramiento();
   this.pays = [];
   this.consumoCedula = false;
   this.consumoCedulaEstablishmentContact = false;
   this.consumoRuc = false;
   this.consumoCedulaRepresentanteLegal = false;
   this.SRIOK = false;
   this.REGCIVILOK = false;
   this.REGCIVILOKEstablishment = false;
   this.REGCIVILREPRESENTANTELEGALOK = false;
   this.guardando = false;
   this.ruc_registro_selected = new RegistroDataCarrier();
   this.getTaxPayerType();
   this.getGroupType();
   this.getTariffs();
   this.getRucNameTypes();
   this.getZonalesEstablishment();
   this.getEstablishmentPropertyType();
   this.getLanguage();
   this.getComplementaryFoodServiceType();
   this.getSystemNames();
   this.getCertificationTypes();
   this.getWorkerGroups();
   this.getRegiones();
   this.getEstablishmentCertificationTypesCategories();
   this.getComplementaryServiceTypeCategories();
   this.getUbications();
   this.groupTypeSelected = new GroupType();
  }

  getUbications() {
   this.ubications = [];
   this.ubicationDataService.get().then( r => {
      this.ubications = r as Ubication[];
      this.getStates();
   }).catch( e => { console.log(e); });
  }

  getZonales() {
   this.zoneDataService.get().then( r => {
      this.zonales = r;
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
   this.balance = new DeclarationAttachment();
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
   let agregable = true;
   this.complementaryServiceFoodTypes.forEach(element1 => {
      let existe = false;
      this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register.forEach(element2 => {
         if(element2.quantity_tables == 0) {
            agregable = false;
         }
          if(element1.id == element2.complementary_service_food_type_id) {
             existe = true;
          }
       });
       if (!existe) {
          complementaryFoodService.type_of_complementary_service_food.push(element1);
       }
   });
   if(this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register.length == 0){
      agregable = true;
   }
   if (!agregable){
    this.toastr.errorToastr('Complete la información, para continuar.', 'Nuevo');
    return;
   }
   if(complementaryFoodService.type_of_complementary_service_food.length > 0) {
     this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register.push(complementaryFoodService);
   }else {
    this.toastr.errorToastr('Usted ha declarado los tipos admitidos.', 'Nuevo');
   }
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

  getRuc(number: String) {
   this.rucDataService.get_filtered(number).then( r => {
      if ( typeof r.Ruc === 'undefined') {
         this.ruc_registro_selected.ruc = new Ruc();
         this.ruc_registro_selected.ruc.establishments = [];
         this.ruc_registro_selected.ruc.number = number;
         this.ruc_registro_selected.ruc.contact_user = new User();
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
    this.establishment_selected = new Establishment();
    this.mostrarDataEstablishment = false;
    this.establecimientos_pendiente = true;
    this.establishmentDataService.getByRuc(this.ruc_registro_selected.ruc.number, this.recordsByPageEstablishment, currentpage).then( r => {
       const establecimientos = r.data as Establishment[];
       this.dinardapDataService.get_RUC(this.ruc_registro_selected.ruc.number).then( dinardap => {
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
               establecimientos.push(newEstablishment);
            }
            this.ruc_registro_selected.ruc.establishments = establecimientos;
         });
         if(establecimientos.length == 0){
            this.ruc_registro_selected.ruc.establishments = [];
         }
         this.buildDataTableEstablishment();
       }).catch( e => { console.log(e); });
    }).catch( e => { console.log(e); });
  }

 getPersonRepresentativeAttachment(ruc_number: String) {
   if (this.ruc_registro_selected.ruc.tax_payer_type_id <= 1) {
      this.ruc_registro_selected.ruc.person_representative_attachment = new PersonRepresentativeAttachment();
      return;
   }
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
   this.allowed_capacity_types = [];
   this.capacityTypeDataService.get_filtered_by_register_type(this.rucEstablishmentRegisterSelected.register_type_id).then( r => {
      this.allowed_capacity_types = r as CapacityType[];
   }).catch( e => { console.log(e); });
  }

  getAllCapacityTypes() {
     this.capacity_types = [];
     this.capacityTypeDataService.get().then( r => {
        this.capacity_types = r;
     }).catch( e => { console.log(e); });
  }

  refreshEstablishment() {
   this.goToPageEstablishment(this.currentPageEstablishment);
  }

  getStates() {
   this.states = [];
   this.stateDataService.get().then( r => {
      this.states = r as State[];
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
     this.states.forEach(state => {
        if (state.id == id) {
         toReturn = state.name;
         fatherCode = state.father_code;
        }
     });
     this.states.forEach(state => {
        if (state.code == fatherCode) {
           toReturn = state.name + ' - ' + toReturn;
        }
     });
     return toReturn;
  }

  getClasifications() {
   this.clasifications_registers = [];
   this.showRequisites = false;
     if (this.activity == 'ALOJAMIENTO') {
      this.register_typeDataService.get_filtered(this.regionSelectedCode).then( r => {
         let esRegitro = false;
         this.specific_states.forEach(element => {
            if (element.id == this.rucEstablishmentRegisterSelected.status) {
               if (element.name == 'Registro') {
                  esRegitro = true;
               }
            }
         });
         if ( this.regionSelectedCode != '1' && esRegitro) {
            const clasificaciones = [];
            r.forEach(element => {
               if (element.id !== 30 && element.id !== 44) {
                  if (element.id < 1000) {
                     clasificaciones.push(element);
                  }
               }
            });
            this.clasifications_registers = clasificaciones;
         } else {
            this.clasifications_registers = r as any[];
         }
      }).catch( e => { console.log(e) });
     }
     if (this.activity=='ALIMENTOS Y BEBIDAS') {
      this.register_typeABDataService.get_filtered(this.regionSelectedCode).then( r => {
         let esRegitro = false;
         this.specific_states.forEach(element => {
            if (element.id == this.rucEstablishmentRegisterSelected.status) {
               if (element.name == 'Registro') {
                  esRegitro = true;
               }
            }
         });
         if ( this.regionSelectedCode != '1' && esRegitro) {
            const clasificaciones = [];
            r.forEach(element => {
               if (element.id !== 30 && element.id !== 44) {
                  if (element.id < 1000) {
                     clasificaciones.push(element);
                  }
               }
            });
            this.clasifications_registers = clasificaciones;
         } else {
            this.clasifications_registers = r as any[];
         }
      }).catch( e => { console.log(e) });
     }
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

guardarDeclaracion() {
   if(!this.validateDeclaration) {
      this.toastr.errorToastr('La información ingresada es incorrecta.', 'Declaración');
      return;
   }
   if (this.balance.declaration_attachment_file == ''){
      if (this.ruc_registro_selected.ruc.tax_payer_type_id == 2) {
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
   this.declaration_selected.establishment_id = this.establishment_declarations_selected.id;
   this.declarationDataService.register_data(this.declaration_selected).then( r => {
      if ( r === '0' ) {
         this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Declaración');
         return;
      }
      const declarationSaved = r as Declaration;
      this.balance.declaration_id = declarationSaved.id;
      if (this.balance.id == 0) {
         this.declarationAttachmentDataService.post(this.balance).then( r1 => {
            this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Declaración');
            this.refreshDeclaracion();
            this.establishment_declarations_selected = new Establishment();
            this.establishment_declarations_selected.id = this.establishment_selected.id;
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
            this.establishment_declarations_selected = new Establishment();
            this.establishment_declarations_selected.id = this.establishment_selected.id;
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

  guardarRUC() {
   this.REGCIVILOK = true;
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
   this.ruc_registro_selected.ruc.person_representative_attachment.ruc = this.ruc_registro_selected.ruc.number;
   this.guardando = true;
   if (typeof this.ruc_registro_selected.ruc.id === 'undefined') {
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
         this.toastr.successToastr('Datos actualizados satisfactoriamente.', 'Actualizar');
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

  selectServiceType(serviceType: ServiceType) {
   this.service_type_registerSelectedId = serviceType.id;
}

selectKitchenType(kitchenType: KitchenType) {
   this.kitchen_type_registerSelectedId = kitchenType.id;
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
   this.tarifarioRack = {cabecera: [{valor:'Tipo de Habitación', padre: '', hijo: ''}], valores: []};
   this.tariffTypeDataService.get().then( r => {
      const result = r as TariffType[];
      result.forEach(father => {
         if(father.father_code == '-'){
            const tariff_father: TariffType = father;
            const tariff_child: TariffType[] = [];
            result.forEach(child => {
               if(child.father_code == father.code) {
                  child.is_reference = father.is_reference;
                  tariff_child.push(child);
                  this.tarifarioRack.cabecera.push({valor:'Tarifa por ' + tariff_father.name + ' en ' + child.name, padre:tariff_father.name, hijo: child.name});
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

  getAllowedInfo(requisites?: RegisterRequisite[]) {
   if (this.activity == 'ALIMENTOS Y BEBIDAS') {
      return;
   }
   this.getRequisitesByRegisterType(requisites);
   this.getBedTypes();
   this.getCapacityTypes();
  }

  getBedTypes() {
   this.alowed_bed_types = [];
   this.bedTypeDataService.get_filtered_by_register_type(this.rucEstablishmentRegisterSelected.register_type_id).then( r => {
      this.alowed_bed_types = r as BedType[];
   }).catch( e => console.log(e) );
  }

  getRequisitesByRegisterType(requisites?: RegisterRequisite[]) {
   this.requisitesByRegisterType = [];
   this.rucEstablishmentRegisterSelected.requisites = [];
   this.showRequisites = false;
   this.requisiteDataService.get_filtered(this.rucEstablishmentRegisterSelected.register_type_id).then( r => {
      this.requisitesByRegisterType = r as Requisite[];
      this.requisitesByRegisterType.forEach(element => {
         const newRegisterRequisite = new RegisterRequisite();
         newRegisterRequisite.requisite_name = element.name;
         newRegisterRequisite.requisite_id = element.id;
         newRegisterRequisite.id = element.id;
         newRegisterRequisite.fullfill = true;
         newRegisterRequisite.requisite_code = element.code;
         newRegisterRequisite.mandatory = element.mandatory;
         newRegisterRequisite.requisite_father_code = element.father_code;
         newRegisterRequisite.level = element.code.split('.').length;
         newRegisterRequisite.HTMLtype = element.type;
         newRegisterRequisite.fullfill = false;
         if (newRegisterRequisite.HTMLtype == 'YES / NO') {
            newRegisterRequisite.value = '0';
         }
         if (newRegisterRequisite.HTMLtype == 'NUMBER') {
            newRegisterRequisite.value = '0';
         }
         if (newRegisterRequisite.HTMLtype == 'TRUE / FALSE') {
            newRegisterRequisite.value = 'false';
         }
         this.rucEstablishmentRegisterSelected.requisites.push(newRegisterRequisite);
      });
      this.showRequisites  = true;
      if (typeof requisites !== 'undefined') {
         this.rucEstablishmentRegisterSelected.requisites.forEach(requisite => {
            requisites.forEach(requisite_incomming => {
               if (requisite.requisite_id == requisite_incomming.requisite_id) {
                  requisite.value = requisite_incomming.value;
                  requisite.fullfill = requisite_incomming.fullfill;
                  requisite.id = requisite_incomming.id;
                  requisite.register_id = requisite_incomming.register_id;
               }
            });
         });
      }
      this.rucEstablishmentRegisterSelected.requisites.sort(function(a, b) {
         const a_id = a.requisite_id;
         const b_id = b.requisite_id;
         return a_id > b_id ? 1 : a_id < b_id ? -1 : 0;
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
     if (this.activity == 'ALIMENTOS Y BEBIDAS') {
        return;
     }
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
   this.allowed_capacity_types.forEach(capacityType => {
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
         if (worker.gender_name == gender.name) {
            this.worker_groups.forEach(workergroup => {
               if (workergroup.id == worker.worker_group_id) {
                  if (workergroup.is_max) {
                     max = worker.count;
                  }
               }
            });
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
      if (!this.franchiseChainNameValidated) {
         this.toastr.errorToastr('El nombre de la Franquicia o Cadena es Incorrecto', 'Nuevo');
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
        let RL_name = '';
        let RZ_name = '';
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
                    RZ_name = element.valor;
                    this.razon_social = element.valor;
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
                    RL_name = element.valor;
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
              this.representante_legal = RL_name;
           } else {
              this.representante_legal = RZ_name;
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
   const isOk = /^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{2,}\.[a-z]{2}$/.test(this.establishment_selected.url_web.toString());
   const isOk2 = /^(www\.)?[a-z0-9\-\.]{2,}\.[a-z]{2}$/.test(this.establishment_selected.url_web.toString());
   const isOk3 = /^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{2,}\.[a-z]{3}$/.test(this.establishment_selected.url_web.toString());
   const isOk4 = /^(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{2}$/.test(this.establishment_selected.url_web.toString());
   const isOk5 = /^(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/.test(this.establishment_selected.url_web.toString());
   this.urlwebEstablishmentValidated = isOk || isOk2 || isOk3 || isOk4 || isOk5 || (this.establishment_selected.url_web == '');
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
   if(this.establishment_selected.address_main_street === '' || this.establishment_selected.address_number === '' || this.establishment_selected.address_secondary_street === '') {
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
   if(establishment.id == 0) {
      if (establishment.sri_state == 'CERRADO') {
         this.toastr.errorToastr('El sistema ha detectado que el establecimeinto seleccionado, en el SRI está en estado CERRADO.', 'Estado de Establecimiento');
         return;
      }
    this.newRegisterEstablishment();
    this.establishment_selected.ruc_code_id = establishment.ruc_code_id;
    this.establishment_selected.commercially_known_name = establishment.commercially_known_name;
    this.establishment_selected.address_main_street = establishment.address_main_street;
    this.establishment_selected.address_number = establishment.address_number;
    this.establishment_selected.address_secondary_street = establishment.address_secondary_street;
    this.establishment_selected.sri_state = establishment.sri_state;
    this.validateNombreComercial();
    this.checkEstablishmentAddress();
    this.selectedNameType = new RucNameType();
    return;
   }
  this.selectRegisterEstablishmentDeclaration(establishment);
  let registerSelected = new Register();
  this.ruc_registro_selected.registers.forEach(register => {
     if (register.establishment.id == establishment.id) {
       registerSelected = register.register;
     }
  });
  if (registerSelected.id == 0) {
    this.rucEstablishmentRegisterSelected = new Register();
    this.certificadoUsoSuelo = new FloorAuthorizationCertificate();
    this.rucEstablishmentRegisterSelected.status = 11;
    this.rucEstablishmentRegisterSelected.establishment_id = establishment.id;
    this.mostrarDataRegister = true;
  } else {
    this.selectEstablishmentRegister(registerSelected, false);
  }
  this.establishmentDataService.get_filtered(establishment.id).then( r => {
    this.establishment_selected = r.establishment as Establishment;
    this.recoverUbication();
    this.checkEstablishmentAddress();
    this.checkURLWeb();
    this.getNameTypeInfo();
    this.validateNombreComercial();
    this.establishment_selected.contact_user = r.contact_user as User;
    this.checkCedulaEstablishment();
    this.checkTelefonoPrincipalContactoEstablecimiento();
    this.checkTelefonoSecundarioContactoEstablecimiento();
    this.validateNombreFranquiciaCadena();
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
             worker.is_max = worker_group.is_max;
          }
       });
    });
    this.refreshTotalWorkers();
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
     this.regionSelectedCode = r.region;
     this.getClasifications();
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

  selectEstablishmentRegister(register: Register, editable: Boolean) {
   this.mostrarDataRegister = false;
   this.rucEstablishmentRegisterSelected = new Register();
   this.certificadoUsoSuelo = new FloorAuthorizationCertificate();
   if (this.activity == 'ALOJAMIENTO') {
      this.registerDataService.get_register_data(register.id).then( r => {
         this.rucEstablishmentRegisterSelected = r.register as Register;
         this.getCertificadoUsoSuelo(this.rucEstablishmentRegisterSelected.id);
         this.getTituloPropiedad(this.rucEstablishmentRegisterSelected.id);
         this.getAutorizacionCondominos(this.rucEstablishmentRegisterSelected.id);
         this.getReceptionRoom(this.rucEstablishmentRegisterSelected.id);
         this.setCategory(this.rucEstablishmentRegisterSelected.register_type_id);
         this.rucEstablishmentRegisterSelected.editable = false;
         this.rucEstablishmentRegisterSelected.status = r.status.state_id;
         this.getTramiteStatus(this.rucEstablishmentRegisterSelected.status);
         this.rucEstablishmentRegisterSelected.complementary_service_types_on_register = r.complementary_service_types_on_register as ComplementaryServiceType[];
         this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register = r.complementary_service_foods_on_register as ComplementaryServiceFood[];
         this.rucEstablishmentRegisterSelected.capacities_on_register = r.capacities_on_register as Capacity[];
         this.calcSpaces();
         this.getTarifarioRack(register.id);
         this.getCategories();
         this.getAllowedInfo(r.requisites);
         this.allowed_capacity_types = [];
         this.capacityTypeDataService.get_filtered_by_register_type(this.rucEstablishmentRegisterSelected.register_type_id).then( r2 => {
           this.allowed_capacity_types = r2 as CapacityType[];
           this.mostrarDataRegister = true;
           if (typeof this.rucEstablishmentRegisterSelected.capacities_on_register == 'undefined') {
            this.rucEstablishmentRegisterSelected.capacities_on_register = [];
           }
           this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(capacity => {
              this.getMaxBed(capacity);
              this.calcBeds(capacity);
           });
           this.calcSpaces();
         }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });
   }
   if (this.activity == 'ALIMENTOS Y BEBIDAS') {
      this.registerABDataService.get_register_data(register.id).then( r => {
         this.rucEstablishmentRegisterSelected = r.register as Register;
         this.rucEstablishmentRegisterSelected.kitchen_types_on_register = r.kitchen_types;
         this.rucEstablishmentRegisterSelected.service_types_on_register = r.service_types;
         this.getCertificadoUsoSuelo(this.rucEstablishmentRegisterSelected.id);
         this.rucEstablishmentRegisterSelected.editable = false;
         this.rucEstablishmentRegisterSelected.status = r.status.state_id;
         this.getTramiteStatus(this.rucEstablishmentRegisterSelected.status);
         this.getServiceType();
         this.getKitchenType();
         this.rucEstablishmentRegisterSelected.requisites = [];
         this.getListaPrecios(register.id);
         this.mostrarDataRegister = true;
         this.setCategoryAB(this.rucEstablishmentRegisterSelected.register_type_id, r.requisites);
         this.rucEstablishmentRegisterSelected.complementary_service_types_on_register = r.complementary_service_types_on_register as ComplementaryServiceType[];
         this.rucEstablishmentRegisterSelected.capacities_on_register = r.capacities_on_register as any[];
         this.getYears();  
      }).catch( e => { console.log(e); });
   }
 }

 getRequisitesABByRegisterType(requisites?: RegisterABRequisite[]) {
   let categorySelectedID = 0;
   this.clasifications_registers.forEach(classification => {
      if (classification.code == this.categorySelectedCode) {
         categorySelectedID = classification.id;
      }
   });
   this.requisiteABDataService.get_filtered(categorySelectedID).then( r => {
      this.requisitesByRegisterType = r as any[];
      this.requisitesByRegisterType.forEach(element => {
         const newRegisterRequisite = new RegisterABRequisite();
         newRegisterRequisite.to_approve = element.to_approve;
         newRegisterRequisite.score = element.score;
         newRegisterRequisite.requisite_name = element.name;
         newRegisterRequisite.requisite_id = element.id;
         newRegisterRequisite.fullfill = true;
         newRegisterRequisite.requisite_code = element.code;
         newRegisterRequisite.mandatory = element.mandatory;
         newRegisterRequisite.id = element.id;
         newRegisterRequisite.requisite_father_code = element.father_code;
         newRegisterRequisite.level = element.code.split('.').length;
         newRegisterRequisite.HTMLtype = element.type;
         newRegisterRequisite.fullfill = false;
         if (newRegisterRequisite.HTMLtype == 'YES / NO') {
            newRegisterRequisite.value = '0';
         }
         if (newRegisterRequisite.HTMLtype == 'NUMBER') {
            newRegisterRequisite.value = '0';
         }
         if (newRegisterRequisite.HTMLtype == 'TRUE / FALSE') {
            newRegisterRequisite.value = 'false';
         }
         this.rucEstablishmentRegisterSelected.requisites.push(newRegisterRequisite);
      });
      this.showRequisites  = true;
      if (typeof requisites !== 'undefined') {
         this.rucEstablishmentRegisterSelected.requisites.forEach(requisite => {
            requisites.forEach(requisite_incomming => {
               if (requisite.requisite_id == requisite_incomming.requisite_id) {
                  requisite.value = requisite_incomming.value;
                  requisite.fullfill = requisite_incomming.fullfill;
                  requisite.id = requisite_incomming.id;
                  requisite.register_id = requisite_incomming.register_id;
               }
            });
         });
      }
      this.calcTotalPoints();
      this.rucEstablishmentRegisterSelected.requisites.sort(function(a, b) {
         const a_id = a.requisite_id;
         const b_id = b.requisite_id;
         return a_id > b_id ? 1 : a_id < b_id ? -1 : 0;
     });
   }).catch( e => { console.log(e) });
  }

  calcTotalPoints() {
   let totalScore = 0;
   let totalScoreShown = 0;
   let totalAviable = 0;
   let totalAviableExtra = 0;
   this.rucEstablishmentRegisterSelected.requisites.forEach(element => {
      totalAviable += element.score * 1;
      if (element.fullfill) {
         totalScore += element.score;
         if (!element.mandatory) {
            totalScoreShown += element.score * 1;
         } else {
            totalAviableExtra += element.score * 1;
         }
      }
   });
   this.totalABPuntos = totalScore * 100 / totalAviable;
   this.totalABPuntosShown = totalScoreShown * 100 / (totalAviable - totalAviableExtra);
   this.categoryAB = 'Pendiente';
   this.categories_registers.forEach(category => {
      if (category.min_points*1 <= this.totalABPuntosShown*1) {
         this.categoryAB = category.name;
         this.rucEstablishmentRegisterSelected.register_type_id = category.id;
      }
   });
  }

 getListaPrecios(register_id: number) {
   this.foodDrinkAttachmentDataService.get_by_register_id(register_id).then( r => {
      this.listasPrecios = r as FoodDrinkAttachment[];
      if (this.listasPrecios.length > 0) {
         this.listaPrecios = r[0];
      } else {
         this.listaPrecios = new FoodDrinkAttachment();
      }
   }).catch( e => { console.log(e); });
  }

  guardarListaPrecios(register_id: number) {
   this.listaPrecios.register_id = register_id;
   if(this.listaPrecios.id == 0) {
    this.foodDrinkAttachmentDataService.post(this.listaPrecios).then( r => { 

    }).catch( e => { console.log(e); });
   } else {
    this.foodDrinkAttachmentDataService.put(this.listaPrecios).then( r => { 

    }).catch( e => { console.log(e); });
   }
  }

  borrarListaPrecios() {
   this.listaPrecios = new FoodDrinkAttachment();
  }

  downloadListaPrecios() {
   this.downloadFile(
      this.listaPrecios.food_drink_attachment_file,
      this.listaPrecios.food_drink_attachment_file_type,
      this.listaPrecios.food_drink_attachment_file_name);
  }
  

  setCategoryAB(type_id: number, requisites){
   let categoryCode = '';
   this.actividadSelected = '2';
   this.register_typeABDataService.get().then(r => {
      let types = r as any[];
      types.forEach(registerType => {
         if (registerType.id == type_id) {
            categoryCode = registerType.father_code.toString();
         }
      });
      types.forEach(registerType => {
         if (categoryCode == registerType.code) {
            this.regionSelectedCode = registerType.father_code.toString();
         }
      });
      this.clasifications_registers = [];
      this.register_typeABDataService.get_filtered(this.regionSelectedCode).then( r => {
         this.clasifications_registers = r as any[];
         this.categorySelectedCode = categoryCode;
         this.getRequisitesABByRegisterType(requisites);
         this.categories_registers = [];
         this.register_typeABDataService.get_filtered(this.categorySelectedCode).then( r => {
            this.categories_registers = r as any[];
         }).catch( e => { console.log(e) });
      }).catch( e => { console.log(e) });
   }).catch( e=> { console.log(e); });
  }

 getServiceType() {
   this.service_types = [];
   let categorySelectedID = 0;
   this.clasifications_registers.forEach(classification => {
      if (classification.code == this.categorySelectedCode) {
         categorySelectedID = classification.id;
      }
   });
   this.serviceTypeDataService.getFiltered(categorySelectedID).then( r => {
      this.service_types = r as ServiceType[];
   }).catch( e => console.log(e) );
  }
  
  getKitchenType() {
   this.kitchen_types = [];
   let categorySelectedID = 0;
   this.clasifications_registers.forEach(classification => {
      if (classification.code == this.categorySelectedCode) {
         categorySelectedID = classification.id;
      }
   });
   this.kitchenTypeDataService.getFiltered(categorySelectedID).then( r => {
      this.kitchen_types = r as KitchenType[];
   }).catch( e => console.log(e) );
  }

  selectComplementaryServiceType(complementary_service_type: ComplementaryServiceType) {
    this.complementary_service_types_registerSelectedId = complementary_service_type.id;
  }

  getTramiteStatus(status_id: number) {
     this.states.forEach(state => {
        if (state.id == status_id) {
         this.estado_tramite_selected_code = state.father_code;
         this.getSpecificStates();
        }
     });
  }

  getSpecificStates() {
   this.specific_states = [];
   this.states.forEach(element => {
      if (element.father_code == this.estado_tramite_selected_code) {
         this.specific_states.push(element);
      }
   });
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

  calcSpaces(capacity?) {
      this.getYears();
      if(typeof capacity !== 'undefined') {
         this.allowed_capacity_types.forEach(capacityType => {
            if (capacityType.id == capacity.capacity_type_id) {
               if (!capacityType.editable_spaces) {
                  capacity.max_spaces = capacityType.spaces * capacity.quantity;
               }
               if (capacity.max_beds > capacityType.bed_quantity){
                  capacity.max_beds = capacityType.bed_quantity;
               }
               if (capacity.max_beds == 0) {
                  capacity.max_beds = 1;
               }
            }
         });
      }
      const lastValuesTariffs = {cabecera: [], valores: []};
      this.tarifarioRack.cabecera.forEach(c=> {
         lastValuesTariffs.cabecera.push(c);
      });
      this.tarifarioRack.valores.forEach(v=> {
         lastValuesTariffs.valores.push(v);
      });
      this.rucEstablishmentRegisterSelected.total_spaces = 0;
      this.rucEstablishmentRegisterSelected.total_habitations = 0;
      this.rucEstablishmentRegisterSelected.total_beds = 0;
      if (this.tarifarioRack.valores.length == this.rucEstablishmentRegisterSelected.capacities_on_register.length) {
         for (let i = 0; i<this.rucEstablishmentRegisterSelected.capacities_on_register.length ; i++) {
            this.tarifarioRack.valores[i].idTipoCapacidad = this.rucEstablishmentRegisterSelected.capacities_on_register[i].capacity_type_id;
         }
      } else {
         this.tarifarioRack.valores = [];
         this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(c1 => {
            const childs = [];
            let idTipoCapacidad = c1.capacity_type_id;
            let editable = c1.editable;
            if (this.modificadoCapacidades) {
               editable = true;
            }
            this.tarifas.forEach(tariffType => {
               tariffType.childs.forEach(tariffTypeChild => {
                  const es_referencia = tariffType.father.is_reference;
                  let plazasHabitacion = 0;
                  this.allowed_capacity_types.forEach(capacityType => {
                     if (capacityType.id == idTipoCapacidad) {
                        plazasHabitacion = capacityType.spaces;
                     }
                  });
                  let nombreDivision = '';
                  nombreDivision = tariffTypeChild.name;
                  const tariff = new Tariff();
                  tariff.tariff_type_id = tariffTypeChild.id;
                  tariff.price = 0;
                  tariff.year = this.selected_year_id;
                  lastValuesTariffs.valores.forEach(tariffValue => {
                     if (tariffValue.idTipoCapacidad == idTipoCapacidad) {
                        tariffValue.tariffs.forEach(t1 => {
                           if (t1.tariff.tariff_type_id == tariff.tariff_type_id) {
                              tariff.price = t1.tariff.price;
                              tariff.year = t1.tariff.year;
                           }
                        });
                     }
                  });
                  tariff.capacity_type_id = c1.capacity_type_id;
                  tariff.isNewTariff = c1.isNewCapacity;
                  let newChild = {nombreDivision: nombreDivision, tariff: tariff, isReference: es_referencia, plazasHabitacion: plazasHabitacion};
                  childs.push(newChild);
               });
            });
            const topush = {idTipoCapacidad: idTipoCapacidad, tariffs: childs, editable: editable};
            let ya_existe_capacidad = false;
            this.tarifarioRack.valores.forEach(el_t_r => {
               if (el_t_r.idTipoCapacidad == idTipoCapacidad) {
                  ya_existe_capacidad = true;
               }
            });
            if (!ya_existe_capacidad) {
               this.tarifarioRack.valores.push(topush);
            }
         });
      }
      this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(c2 => {
         this.allowed_capacity_types.forEach(capacityType => {
            if (capacityType.id == c2.capacity_type_id) {
               c2.editable_beds = capacityType.editable_beds;
               c2.editable_spaces = capacityType.editable_spaces;
            }
         });
         this.rucEstablishmentRegisterSelected.total_spaces += c2.max_spaces;
         this.rucEstablishmentRegisterSelected.total_habitations += c2.quantity;
         this.rucEstablishmentRegisterSelected.total_beds += (c2.max_beds * c2.quantity);
      });
   }

  calcBeds(capacity: Capacity) {
   capacity.total_spaces = 0;
   let beds_declared = 0;
   if (typeof capacity.beds_on_capacity == 'undefined') {
      capacity.beds_on_capacity = [];
   }
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

   imprimirActaNotificacionInactivacion() {
      const today = new Date();
      this.tipo_tramite = 'INACTIVACIÓN';
     Swal.fire({
      title: 'Ingreso de Información',
      text: '¿En que fecha usted ejecutará la inspección? (ejemplo: 15/09/2020)',
      type: 'warning',
      inputValue: today.toLocaleDateString(),
      input: 'text',
      inputValidator: (value) => {
         if (!value) {
           return 'Por favor, ingrese la fecha.'
         } else {
            const dateParts = value.split('/'); 
            if (dateParts.length != 3) {
               return 'Ingrese la fecha en el formato correcto. Ejemplo (15/09/2020)';
            }
            let noAdmitido = false;
            dateParts.forEach(element => {
               if (this.stringHasLetter(element)){
                  noAdmitido = true;
               }
            });
            if (parseInt(dateParts[0])>31) {
               noAdmitido = true;
            }
            if (parseInt(dateParts[1])>12) {
               noAdmitido = true;
            }
            if (dateParts[2].length > 4){
               noAdmitido = true;
            }
            if (parseInt(dateParts[2])>9999) {
               noAdmitido = true;
            }
            if (noAdmitido) {
               return 'Ingrese la fecha en el formato correcto. Ejemplo (15/09/2020)';
            }
            const dateByUser = new Date(dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0] + ' 23:59:59');
            this.hasdateByUserRequisites = true;
            this.dateByUserRequisites = new Date(dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0] + ' 23:59:59');
            if (dateByUser < today) {
               this.hasdateByUserRequisites = false;
               this.dateByUserRequisites = new Date();
               return 'No se admiten fechas pasadas.';
            }
            this.please_wait_requisites = true;
         }
      },
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
         const dateParts = result.value.split('/'); 
         const dateByUser = new Date(dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0] + ' 23:59:59');
         this.imprimiendo_acta = true;
         if (this.activity == 'ALOJAMIENTO') {
               this.registerDataService.get_register_data(this.registerMinturSelected.register.id).then( r0 => {
               this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r2 => {
                  let provincia = new Ubication();
                  let canton = new Ubication();
                  let parroquia = new Ubication();
                  let zonal = new Ubication();
                  this.ubications.forEach(element => {
                     if (element.id == r2.establishment.ubication_id) {
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
                  let iniciales_tecnico_zonal = '';
                  this.user.name.split(' ').forEach(element => {
                     iniciales_tecnico_zonal += element.substring(0, 1).toUpperCase();
                  });
                  let iniciales_cordinacion_zonal = '';
                  const zonalName = zonal.name.split(' ');
                  iniciales_cordinacion_zonal = zonalName[zonalName.length - 1].toUpperCase();
                  const today = new Date();
                  let qr_value = 'MT-' + iniciales_cordinacion_zonal + '-' + this.ruc_registro_selected.ruc.number + '-' + r2.establishment.ruc_code_id + '-ACTA-NOTIFICACION- ' + this.activity + ' -' + iniciales_tecnico_zonal + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
                  let aclaracion_registro = '';
                  if (this.tipo_tramite == 'REGISTRO') {
                     aclaracion_registro = 'Es importante destacar que de no cumplir con lo indicado, lamentaremos tener que ejecutar las acciones determinadas en el Art. 52 de la Ley de Turismo en concordancia con el Art. 91 y 87 del Reglamento General a la Ley de Turismo a los establecimientos que incumplan con el marco legal vigente.';
                  }
                  const actividad = this.registerMinturSelected.activity.toUpperCase();
                  this.documentDataService.get_doc_id(qr_value).then( respuesta => {
                     const codigo = 'MT-AN-' + iniciales_cordinacion_zonal + '-' + iniciales_tecnico_zonal + '-' + today.getFullYear() + '-' + respuesta.toString();
                     const params = [{canton: canton.name.toUpperCase()},
                        {fecha: dateByUser.toLocaleDateString()},
                        {codigo: codigo},
                        {numero_coordinacion_zonal: iniciales_cordinacion_zonal},
                        {aclaracion_registro: aclaracion_registro},
                        {razon_social: this.razon_social.toUpperCase()},
                        {tramite: this.tipo_tramite.toUpperCase()},
                        {nombre_comercial: r2.establishment.commercially_known_name.toUpperCase()},
                        {representante_legal: this.representante_legal.toUpperCase()},
                        {direccion_establecimiento: r2.establishment.address_main_street.toUpperCase() + ' ' + r2.establishment.address_number.toUpperCase() + ' ' + r2.establishment.address_secondary_street.toUpperCase()},
                        {tipo_tramite: this.tipo_tramite.toUpperCase()}];
                     
                     let document = new Documento();
                     document.activity =actividad;
                     document.code = qr_value;
                     document.document_type = 'ACTA NOTIFICACION';
                     let paramsToBuild = {
                        template: 1, qr: true, qr_value: qr_value, params: params
                     }
                     document.procedure_id = this.tipo_tramite.toUpperCase();
                     document.zonal = zonal.name;
                     document.user = iniciales_tecnico_zonal;
                     document.params = JSON.stringify(paramsToBuild);
                     this.documentDataService.post(document).then().catch( e => { console.log(e); });
                     this.exporterDataService.template(1, true, qr_value, params).then( r => {
                        const byteCharacters = atob(r);
                        const byteNumbers = new Array(byteCharacters.length);
                        for (let i = 0; i < byteCharacters.length; i++) {
                           byteNumbers[i] = byteCharacters.charCodeAt(i);
                        }
                        const byteArray = new Uint8Array(byteNumbers);
                        const blob = new Blob([byteArray], { type: 'application/pdf'});
                        saveAs(blob, qr_value + '.pdf');
                        this.imprimiendo_acta = false;
                     }).catch( e => { console.log(e); });
                  }).catch( e => { console.log(e); });
               }).catch( e => { console.log(e); });
            }).catch( e => { console.log(e); });
         }
         if (this.activity == 'ALIMENTOS Y BEBIDAS') {
            this.registerABDataService.get_register_data(this.registerMinturSelected.register.id).then( r0 => {
               this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r2 => {
                  let provincia = new Ubication();
                  let canton = new Ubication();
                  let parroquia = new Ubication();
                  let zonal = new Ubication();
                  this.ubications.forEach(element => {
                     if (element.id == r2.establishment.ubication_id) {
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
                  let iniciales_tecnico_zonal = '';
                  this.user.name.split(' ').forEach(element => {
                     iniciales_tecnico_zonal += element.substring(0, 1).toUpperCase();
                  });
                  let iniciales_cordinacion_zonal = '';
                  const zonalName = zonal.name.split(' ');
                  iniciales_cordinacion_zonal = zonalName[zonalName.length - 1].toUpperCase();
                  const today = new Date();
                  let qr_value = 'MT-' + iniciales_cordinacion_zonal + '-' + this.ruc_registro_selected.ruc.number + '-' + r2.establishment.ruc_code_id + '-ACTA-NOTIFICACION-' + this.activity + '-' + iniciales_tecnico_zonal + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
                  let aclaracion_registro = '';
                  if (this.tipo_tramite == 'REGISTRO') {
                     aclaracion_registro = 'Es importante destacar que de no cumplir con lo indicado, lamentaremos tener que ejecutar las acciones determinadas en el Art. 52 de la Ley de Turismo en concordancia con el Art. 91 y 87 del Reglamento General a la Ley de Turismo a los establecimientos que incumplan con el marco legal vigente.';
                  }
                  const actividad = this.registerMinturSelected.activity.toUpperCase();
                  this.documentDataService.get_doc_id(qr_value).then( respuesta => {
                     const codigo = 'MT-AN-' + iniciales_cordinacion_zonal + '-' + iniciales_tecnico_zonal + '-' + today.getFullYear() + '-' + respuesta.toString();
                     const params = [{canton: canton.name.toUpperCase()},
                        {fecha: dateByUser.toLocaleDateString()},
                        {codigo: codigo},
                        {numero_coordinacion_zonal: iniciales_cordinacion_zonal},
                        {aclaracion_registro: aclaracion_registro},
                        {razon_social: this.razon_social.toUpperCase()},
                        {tramite: this.tipo_tramite.toUpperCase()},
                        {nombre_comercial: r2.establishment.commercially_known_name.toUpperCase()},
                        {representante_legal: this.representante_legal.toUpperCase()},
                        {direccion_establecimiento: r2.establishment.address_main_street.toUpperCase() + ' ' + r2.establishment.address_number.toUpperCase() + ' ' + r2.establishment.address_secondary_street.toUpperCase()},
                        {tipo_tramite: this.tipo_tramite.toUpperCase()}];
                     
                     let document = new Documento();
                     document.activity =actividad;
                     document.code = qr_value;
                     document.document_type = 'ACTA NOTIFICACION';
                     let paramsToBuild = {
                        template: 1, qr: true, qr_value: qr_value, params: params
                     }
                     document.procedure_id = this.tipo_tramite.toUpperCase();
                     document.zonal = zonal.name;
                     document.user = iniciales_tecnico_zonal;
                     document.params = JSON.stringify(paramsToBuild);
                     this.documentDataService.post(document).then().catch( e => { console.log(e); });
                     this.exporterDataService.template(1, true, qr_value, params).then( r => {
                        const byteCharacters = atob(r);
                        const byteNumbers = new Array(byteCharacters.length);
                        for (let i = 0; i < byteCharacters.length; i++) {
                           byteNumbers[i] = byteCharacters.charCodeAt(i);
                        }
                        const byteArray = new Uint8Array(byteNumbers);
                        const blob = new Blob([byteArray], { type: 'application/pdf'});
                        saveAs(blob, qr_value + '.pdf');
                        this.imprimiendo_acta = false;
                     }).catch( e => { console.log(e); });
                  }).catch( e => { console.log(e); });
               }).catch( e => { console.log(e); });
            }).catch( e => { console.log(e); });
         }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
         Swal.fire(
           'Cancelado',
           '',
           'error'
         );
      }
    });
   }

  openDialog(content, status) {
     this.statusSelected = status;
   this.modalService.open(content, { centered: true, size: 'sm' }).result.then(( response => {
   }), ( r => {}));
  }
}
