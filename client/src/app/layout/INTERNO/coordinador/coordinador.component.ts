import { IdentificationRoutingModule } from './../../CRUD/DINARDAP/Identification/identification-routing.module';
import { AuthLocationService } from 'src/app/services/CRUD/AUTH/authlocation.service';
import { ZoneService } from './../../../services/CRUD/BASE/zone.service';
import { Zone } from './../../../models/BASE/Zone';
import { ReceptionRoomService } from './../../../services/CRUD/ALOJAMIENTO/receptionroom.service';
import { MailerService } from './../../../services/negocio/mailer.service';
import { DeclarationAttachmentService } from './../../../services/CRUD/FINANCIERO/declarationattachment.service';
import { FloorAuthorizationCertificateService } from './../../../services/CRUD/BASE/floorauthorizationcertificate.service';
import { PayService } from './../../../services/CRUD/FINANCIERO/pay.service';
import { DeclarationAttachment } from './../../../models/FINANCIERO/DeclarationAttachment';
import { FloorAuthorizationCertificate } from './../../../models/BASE/FloorAuthorizationCertificate';
import { Router } from '@angular/router'; 
import { RegisterTypeImageService } from './../../../services/CRUD/ALIMENTOSBEBIDAS/registertypeimage.service';

import { ApprovalStateAttachment } from './../../../models/ALOJAMIENTO/ApprovalStateAttachment';
import { ApprovalStateAttachmentService } from './../../../services/CRUD/ALOJAMIENTO/approvalstateattachment.service';
import { ApprovalStateService } from './../../../services/CRUD/ALOJAMIENTO/approvalstate.service';
import { ApprovalStateService as ApprovalStateABService } from './../../../services/CRUD/ALIMENTOSBEBIDAS/approvalstate.service';
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
import { RegisterRequisite as RegisterABRequisite } from 'src/app/models/ALIMENTOSBEBIDAS/RegisterRequisite';
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
import { RegisterType as RegisterTypeAB} from 'src/app/models/ALIMENTOSBEBIDAS/RegisterType';
import { SystemName } from 'src/app/models/BASE/SystemName';
import { WorkerGroup } from 'src/app/models/BASE/WorkerGroup';
import { WorkerGroupService } from 'src/app/services/CRUD/BASE/workergroup.service';
import { GenderService } from 'src/app/services/CRUD/BASE/gender.service';
import { RegisterTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/registertype.service';
import { RegisterTypeService as RegisterTypeABService} from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/registertype.service';
import { RequisiteService } from 'src/app/services/CRUD/ALOJAMIENTO/requisite.service';
import { TariffType } from 'src/app/models/ALOJAMIENTO/TariffType';
import { Tariff } from 'src/app/models/ALOJAMIENTO/Tariff';
import { RucNameType } from 'src/app/models/BASE/RucNameType';
import { RucNameTypeService } from 'src/app/services/CRUD/BASE/rucnametype.service';
import { StateService } from 'src/app/services/CRUD/ALOJAMIENTO/state.service';
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
import { RegisterService as RegisterABService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/register.service';
import { RegisterStateService } from 'src/app/services/CRUD/ALOJAMIENTO/registerstate.service';
import { RegisterStateService as RegisterStateABService} from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/registerstate.service';
import { ReceptionRoom } from 'src/app/models/ALOJAMIENTO/ReceptionRoom';
import Swal from 'sweetalert2';
import { ExporterService } from 'src/app/services/negocio/exporter.service';
import { DocumentService } from 'src/app/services/CRUD/EXPORTER/document.service';
import { Capacity as CapacityAB} from 'src/app/models/ALIMENTOSBEBIDAS/Capacity';
import { Document as Documento } from 'src/app/models/EXPORTER/Document';
import { Register as RegistroCatastro } from 'src/app/models/CATASTRO/Register';
import { RegisterService as RegistroCatastroService } from 'src/app/services/CRUD/CATASTRO/register.service';
import { RegisterProcedureService } from 'src/app/services/CRUD/ALOJAMIENTO/registerprocedure.service';
import { RegisterProcedureService as RegisterProcedureABService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/registerprocedure.service';
import { PropertyTitleAttachment } from 'src/app/models/ALOJAMIENTO/PropertyTitleAttachment';
import { AuthorizationAttachment } from 'src/app/models/ALOJAMIENTO/AuthorizationAttachment';
import { PropertyTitleAttachmentService } from 'src/app/services/CRUD/ALOJAMIENTO/propertytitleattachment.service';
import { AuthorizationAttachmentService } from 'src/app/services/CRUD/ALOJAMIENTO/authorizationattachment.service';
import { ApprovalStateAttachmentService as ApprovalStateAttachmentABService } from './../../../services/CRUD/ALIMENTOSBEBIDAS/approvalstateattachment.service';
import { ServiceType } from 'src/app/models/ALIMENTOSBEBIDAS/ServiceType';
import { KitchenType } from 'src/app/models/ALIMENTOSBEBIDAS/KitchenType';
import { ServiceTypeService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/servicetype.service';
import { KitchenTypeService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/kitchentype.service';
import { FoodDrinkAttachmentService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/fooddrinkattachment.service';
import { FoodDrinkAttachment } from 'src/app/models/ALIMENTOSBEBIDAS/FoodDrinkAttachment';
import { RequisiteService as RequisiteABService} from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/requisite.service';
import { AuthLocation } from 'src/app/models/AUTH/AuthLocation';

@Component({
  selector: 'app-registro',
  templateUrl: './coordinador.component.html',
  styleUrls: ['./coordinador.component.scss']
})
export class CoordinadorComponent implements OnInit {
   @ViewChild('fotoFachadaInput') fotoFachadaInput;
   @ViewChild('EstablishmentCertificationAttachedFile') EstablishmentCertificationAttachedFile;
   @ViewChild('pasos') pasosTabSet;
   @ViewChild('pasosSuperiores') pasosSuperioresTabSet;
   zonales: Zone[] = [];
   idTramiteEstadoFilter = 0;
   tramite = '-';
   tabActive = 'paso1';
   catastro_category = '';
   catastro_classification = '';
   tabActiveSuperior = 'tab1';
   selectedNameType: RucNameType = new RucNameType();
   total_workers = 0;
   salaRecepciones: ReceptionRoom = new ReceptionRoom();
   franchiseChainNameValidated = false;
   establecimientos_pendiente = false;
   rechazarTramite = false;
   digito = '';
   tarifarioResponse: Tariff[] = [];
   tarifarioRack = {cabecera: [], valores: []};
   listaPrecios: FoodDrinkAttachment = new FoodDrinkAttachment();
   currentPagePays = 1;
   balance: DeclarationAttachment = new DeclarationAttachment();
   lastPagePays = 1;
   recordsByPagePays = 5;
   rowsPays = [];
   columnsPays = [];
   dataPays = [];
   pays: Pay[] = [];
   actividadSelected = '-';
   representante_legal_identificacion = '';
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
   motivoTramite = '';
   regiones = [];
   estadoOrigen = 0;
   regionSelectedCode = '-';
   certificadoUsoSuelo: FloorAuthorizationCertificate = new FloorAuthorizationCertificate();
   tituloPropiedad: PropertyTitleAttachment = new PropertyTitleAttachment();
   autorizacionCondomino: AuthorizationAttachment = new AuthorizationAttachment();
   franchises_rucSelectedId = 0;
   fechaNombramientoOK = false;
   allowed_capacity_types: CapacityType[] = []; 
   guardandoTramite = false;
   totalABPuntos = 0;
   totalABPuntosShown = 0;
   kitchen_type_registerSelectedId = 0;
   service_type_registerSelectedId = 0;
   categoryAB = 'Pendiente';
   
   //ASIGNACIONES
   registerIdSelected = 0;
   listasPrecios: FoodDrinkAttachment[] = [];
   stateTramite: number = 0;
   stateTramiteId: number = 0;
   inspectores: User[] = [];
   mostrarMotivoTramite = false;
   totalunoxmil = 0;
   financieros: User[] = [];
   asignandoFinanciero: Boolean = false;
   desasignandoFinanciero: Boolean = false;
   asignandoInspector: Boolean = false;
   desasignandoInspector: Boolean = false;
   total_male = 0;
   total_female = 0;
   activity = '';
   inspectorSelectedId: number = 0;
   registerApprovals: ApprovalState[] = [];
   registerApprovalCoordinador: ApprovalState = new ApprovalState();
   registerApprovalInspector: ApprovalState = new ApprovalState();
   registerApprovalFinanciero: ApprovalState = new ApprovalState();
   isAssigned = false;
   hasIspectionDate  = false;
   hasInform  = false;
   hasActaNotificacion = false;
   hasRegisterReady = false;
   canSave = true;
   organization_type = '';
   hasRequisites = false;
   tipo_tramite_seleccionado = 'pendiente';
   informeApprovalStateAttachment = new ApprovalStateAttachment();
   requisitosApprovalStateAttachment = new ApprovalStateAttachment();
   actaNotificacionApprovalStateAttachment: ApprovalStateAttachment = new ApprovalStateAttachment();
   tarifarioRackApprovalStateAttachment: ApprovalStateAttachment = new ApprovalStateAttachment();
   registroApprovalStateAttachment: ApprovalStateAttachment = new ApprovalStateAttachment();
   certificadoInactivacionApprovalStateAttachment: ApprovalStateAttachment = new ApprovalStateAttachment();
   financialSelectedId: number = 0;
   isAssignedFinancial = false;
   //RREGISTROS MINTUR
   registers_mintur = [];
   registerMinturSelected: any = null;
   currentPageMinturRegisters = 1;
   razon_social = '';
   lastPageMinturRegisters = 1;
   myAbleUbications: Ubication[] = [];
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
  group_types: GroupType[] = [];
  capacity_types: CapacityType[] = [];
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
  tipo_tramite = '';
  cantonSelectedCode = '-';
  representante_legal = '';
  groupTypeSelected: GroupType = new GroupType();
  rucValidated = false;
  identificationRepresentativePersonValidated = false;
  identificationContactValidated = false;
  addressContactValidated = false;
  emailContactValidated = false;
  mainPhoneContactValidated = false;
  secondaryPhoneContactValidated = true;
  imprimiendo_tarifario = false;
  imprimiendo_registro = false;
  imprimiendo_certificado_inactivacion = false;
  register_code = '';
  as_turistic_date = null;
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
  rechazarTramiteFinanciero = false;
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
  register_types_AB: RegisterTypeAB[] = [];
  complementary_service_types: ComplementaryServiceType[] = [];
  complementary_service_types_categories: ComplementaryServiceType[] = [];
  requisitesByRegisterType: any[] = [];
  categorySelectedCode = '-';
  complementary_service_types_registerSelectedId = 0;
  capacitySelected: Capacity = new Capacity();
  bedSelected: Bed = new Bed();
  alowed_bed_types: BedType[] = []; 
  register_establishment_capacities_registerSelectedId = 0;
  rack_prices_registerSelectedId = 0;
  establishment_service_offers_registerSelectedId = 0;
  tarifas: any[] = [];
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

  constructor(private toastr: ToastrManager,
              private receptionRoomDataService: ReceptionRoomService,
              private payDataService: PayService,
              private requisiteABDataService: RequisiteABService,
              private foodDrinkAttachmentDataService: FoodDrinkAttachmentService,
              private floorAuthorizationCertificateDataService: FloorAuthorizationCertificateService,
              private propertyTitleAttachmentDataService: PropertyTitleAttachmentService,
              private authorizationAttachmentDataService: AuthorizationAttachmentService,
              private declarationAttachmentDataService: DeclarationAttachmentService,
              private mailerDataService: MailerService,
              private router: Router, 
              private serviceTypeDataService: ServiceTypeService,
              private kitchenTypeDataService: KitchenTypeService,
              private approvalStateDataService: ApprovalStateService, 
              private registerProcedureABDataService: RegisterProcedureABService,
              private consultorDataService: ConsultorService,
              private userDataService: UserService,
              private registerStateDataService: RegisterStateService,
              private exporterDataService: ExporterService,
              private dinardapDataService: DinardapService,
              private rucDataService: RucService,
              private approvalStateAttachmentDataService: ApprovalStateAttachmentService,
              private modalService: NgbModal,
              private agreementDataService: AgreementService,
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
              private documentDataService: DocumentService,
              private workerGroupDataService: WorkerGroupService,
              private capacityTypeDataService: CapacityTypeService,
              private establishment_certification_typeDataService: EstablishmentCertificationTypeService,
              private establishment_property_typeDataService: EstablishmentPropertyTypeService,
              private establishmentDataService: EstablishmentService,
              private zoneDataService: ZoneService,
              private register_typeDataService: RegisterTypeService,
              private registerTypeImageDataService: RegisterTypeImageService,
              private registerCatastroDataService: RegistroCatastroService,
              private requisiteDataService: RequisiteService,
              private registerProcedureDataService: RegisterProcedureService,
              private authLocationDataService: AuthLocationService,
              private bedTypeDataService: BedTypeService,
              private approvalStateAttachmentABDataService: ApprovalStateAttachmentABService,
              private declarationDataService: DeclarationService,
              private declarationItemCategoryDataService: DeclarationItemCategoryService,
              private declarationItemDataService: DeclarationItemService,
              private tariffTypeDataService: TariffTypeService,
              private stateDataService: StateService,
              private tax_payer_typeDataService: TaxPayerTypeService,
              private registerDataService: RegisterService,
              private approvalStateABDataService: ApprovalStateABService,
              private registerStateABDataService: RegisterStateABService,
              private register_typeABDataService: RegisterTypeABService,
              private registerABDataService: RegisterABService) {}

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

  getAllCapacityTypes() {
   this.capacity_types = [];
   this.capacityTypeDataService.get().then( r => {
      this.capacity_types = r;
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

  aceptarTramite() {
    Swal.fire({
      title: 'Confirmación',
      text: '¿Está seguro de Aprobar el resultado emitido por el Técnico Zonal?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Aprobado!',
          'El resultado emitido por el Técnico Zonal ha sido aprobado',
          'success'
        );
        this.registerApprovalCoordinador.id_user = this.user.id;
        this.registerApprovalCoordinador.notes = '';
        const today = new Date();
        this.registerApprovalCoordinador.date_assigment = today;
        this.registerApprovalCoordinador.date_fullfill = today;
        this.registerApprovalCoordinador.value = this.registerApprovalInspector.value;
        if (this.activity == 'ALOJAMIENTO') {
         this.approvalStateDataService.put(this.registerApprovalCoordinador).then( r => {
            const newRegisterState = new RegisterState();
            newRegisterState.justification = 'Coordinador Zonal aprueba el estado de inspección en la fecha ' + this.registerApprovalCoordinador.date_assigment.toDateString();
            newRegisterState.register_id = this.idRegister;
            newRegisterState.state_id = this.stateTramiteId;
            this.registerStateDataService.post(newRegisterState).then( r1 => {
               this.toastr.successToastr('Aprobado el Estado de la Inspección Satisfactoriamente.', 'Aprobación de Coordinador Zonal');
               this.refresh();
            }).catch( e => { console.log(e); });
          }).catch( e => { console.log(e); });
        }
        if (this.activity == 'ALIMENTOS Y BEBIDAS') {
         this.approvalStateABDataService.put(this.registerApprovalCoordinador).then( r => {
            const newRegisterState = new RegisterState();
            newRegisterState.justification = 'Coordinador Zonal aprueba el estado de inspección en la fecha ' + this.registerApprovalCoordinador.date_assigment.toDateString();
            newRegisterState.register_id = this.idRegister;
            newRegisterState.state_id = this.stateTramiteId;
            this.registerStateABDataService.post(newRegisterState).then( r1 => {
               this.toastr.successToastr('Aprobado el Estado de la Inspección Satisfactoriamente.', 'Aprobación de Coordinador Zonal');
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

  confirmarRechazoTramiteFinanciero() {
   if(this.registerApprovalFinanciero.notes == '') {
    this.toastr.errorToastr('Debe indicar la justificación para la devolución del trámite.', 'Rechazo de Trámite');
    return;
   }
   Swal.fire({
      title: 'Confirmación',
      text: '¿Está seguro de Rechazar el resultado emitido por el Técnico Financiero?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
   }).then((result) => {
      if (result.value) {
         Swal.fire(
         'Rechazado!',
         'El resultado emitido por el Técnico Financiero ha sido rechazado y devuelto al Técnico Financiero para su revisión',
         'success'
         );
         this.isAssigned = true;
         this.registerApprovalFinanciero.id_user = this.financialSelectedId;
         this.registerApprovalFinanciero.date_assigment = new Date();
         if (this.activity == 'ALOJAMIENTO') {
         this.approvalStateDataService.put(this.registerApprovalFinanciero).then( r => {
            const newRegisterState = new RegisterState();
            newRegisterState.justification = 'Técnico Financiero asignado en la fecha ' + this.registerApprovalFinanciero.date_assigment.toDateString();
            newRegisterState.register_id = this.idRegister;          
            newRegisterState.state_id = this.stateTramiteId - 3;
               this.registerStateDataService.post(newRegisterState).then( r1 => {
               }).catch( e => { console.log(e); });
         }).catch( e => { console.log(e); });
         }
         if (this.activity == 'ALIMENTOS Y BEBIDAS') {
         this.approvalStateABDataService.put(this.registerApprovalInspector).then( r => {
            const newRegisterState = new RegisterState();
            newRegisterState.justification = 'Técnico Financiero asignado en la fecha ' + this.registerApprovalFinanciero.date_assigment.toDateString();
            newRegisterState.register_id = this.idRegister;          
            newRegisterState.state_id = this.stateTramiteId - 3;
               this.registerStateABDataService.post(newRegisterState).then( r1 => {
               }).catch( e => { console.log(e); });
         }).catch( e => { console.log(e); });
         }
         const today = new Date();
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
         let financiero = new User();
         this.financieros.forEach(element => {
            if (element.id == this.financialSelectedId) {
               financiero = element;
            }
         });
         let motivoRechazo = this.registerApprovalFinanciero.notes;
         motivoRechazo = motivoRechazo.replace('<p>', '');
         motivoRechazo = motivoRechazo.replace('</p>', '');
         const information = {
            para: financiero.name,
            tramite: this.tipo_tramite.toUpperCase(),
            motivoRechazo: motivoRechazo,
            ruc: this.ruc_registro_selected.ruc.number,
            nombreComercial: this.registerMinturSelected.establishment.commercially_known_name,
            fechaSolicitud: today.toLocaleString(),
            actividad: this.registerMinturSelected.activity.toUpperCase(),
            clasificacion: clasificacion,
            categoria: categoria,
            tipoSolicitud: this.tipo_tramite.toUpperCase(),
            provincia: provinciaName,
            canton: cantonName,
            parroquia: parroquiaName,
            callePrincipal: this.registerMinturSelected.establishment.address_main_street,
            calleInterseccion: this.registerMinturSelected.establishment.address_secondary_street,
            numeracion: this.registerMinturSelected.establishment.address_number,
            thisYear:today.getFullYear()
         };
         this.mailerDataService.sendMail('rechazo_informe_tf', financiero.email.toString(), 'Rechazo y reasignación de trámite para su revisión', information).then( r => {
            this.toastr.successToastr('Técnico Financiero Asignado Satisfactoriamente.', 'Asignación de Técnico Financiero');
            this.refresh();
         }).catch( e => { console.log(e); });
         
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

  confirmarRechazoTramite() {
     if(this.registerApprovalInspector.notes == '') {
      this.toastr.errorToastr('Debe indicar la justificación para la devolución del trámite.', 'Rechazo de Trámite');
      return;
    }
   Swal.fire({
      title: 'Confirmación',
      text: '¿Está seguro de Rechazar el resultado emitido por el Técnico Zonal?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Rechazado!',
          'El resultado emitido por el Técnico Zonal ha sido rechazado y devuelto al Técnico Zonal para su revisión',
          'success'
        );
        this.isAssigned = true;
        this.registerApprovalInspector.id_user = this.inspectorSelectedId;
        this.registerApprovalInspector.date_assigment = new Date();
        if (this.activity == 'ALOJAMIENTO') {
         this.approvalStateDataService.put(this.registerApprovalInspector).then( r => {
            const newRegisterState = new RegisterState();
            newRegisterState.justification = 'Técnico Zonal asignado en la fecha ' + this.registerApprovalInspector.date_assigment.toDateString();
            newRegisterState.register_id = this.idRegister;          
            newRegisterState.state_id = this.stateTramiteId - 6;
              this.registerStateDataService.post(newRegisterState).then( r1 => {
              }).catch( e => { console.log(e); });
          }).catch( e => { console.log(e); });
        }
        if (this.activity == 'ALIMENTOS Y BEBIDAS') {
         this.approvalStateABDataService.put(this.registerApprovalInspector).then( r => {
            const newRegisterState = new RegisterState();
            newRegisterState.justification = 'Técnico Zonal asignado en la fecha ' + this.registerApprovalInspector.date_assigment.toDateString();
            newRegisterState.register_id = this.idRegister;          
            newRegisterState.state_id = this.stateTramiteId - 6;
              this.registerStateABDataService.post(newRegisterState).then( r1 => {
              }).catch( e => { console.log(e); });
          }).catch( e => { console.log(e); });
        }
        const today = new Date();
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
         let inspector = new User();
         this.inspectores.forEach(element => {
            if (element.id == this.inspectorSelectedId) {
               inspector = element;
            }
         });
         let motivoRechazo = this.registerApprovalInspector.notes;
         motivoRechazo = motivoRechazo.replace('<p>', '');
         motivoRechazo = motivoRechazo.replace('</p>', '');
         const information = {
            para: inspector.name,
            tramite: this.tipo_tramite.toUpperCase(),
            motivoRechazo: motivoRechazo,
            ruc: this.ruc_registro_selected.ruc.number,
            nombreComercial: this.registerMinturSelected.establishment.commercially_known_name,
            fechaSolicitud: today.toLocaleString(),
            actividad: this.registerMinturSelected.activity.toUpperCase(),
            clasificacion: clasificacion,
            categoria: categoria,
            tipoSolicitud: this.tipo_tramite.toUpperCase(),
            provincia: provinciaName,
            canton: cantonName,
            parroquia: parroquiaName,
            callePrincipal: this.registerMinturSelected.establishment.address_main_street,
            calleInterseccion: this.registerMinturSelected.establishment.address_secondary_street,
            numeracion: this.registerMinturSelected.establishment.address_number,
            thisYear:today.getFullYear()
         };
         this.mailerDataService.sendMail('rechazo_informe_tz', inspector.email.toString(), 'Rechazo y reasignación de trámite para su revisión', information).then( r => {
            this.toastr.successToastr('Técnico Zonal Asignado Satisfactoriamente.', 'Asignación de Técnico Zonal');
            this.refresh();
         }).catch( e => { console.log(e); });
         
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

  rechazarCheck() {
   this.registerApprovalInspector.notes = '';
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
         if (element.gender_id == 1) {
            this.total_male = element.count;
         }
         if (element.gender_id == 2) {
            this.total_female = element.count;
         }
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

  validateTarifarioRackFile(): Boolean {
   return !(this.tarifarioRackApprovalStateAttachment.approval_state_attachment_file_name == '');
  }

  validateRegistroFile(): Boolean {
   return !(this.registroApprovalStateAttachment.approval_state_attachment_file_name == '');
  }

  validateCertificadoInactivacionFile(): Boolean {
   return !(this.certificadoInactivacionApprovalStateAttachment.approval_state_attachment_file_name == '');
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

  changeFullfill(register_requisite: RegisterRequisite) {
     if (register_requisite.fullfill) {
      register_requisite.value = 'true';
     } else {
      register_requisite.value = 'false';
     }
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

  asignarInspector() {
   this.asignandoInspector = true;
   this.isAssigned = true;
   this.registerApprovalInspector.id_user = this.inspectorSelectedId;
   this.registerApprovalInspector.date_assigment = new Date();
   this.registerApprovalInspector.notes = '';
   const newRegisterState = new RegisterState();
   newRegisterState.justification = 'Técnico Zonal asignado en la fecha ' + this.registerApprovalInspector.date_assigment.toDateString();
   newRegisterState.register_id = this.idRegister;
   newRegisterState.state_id = this.stateTramiteId + 3;
   this.asignandoInspector = false;
   if (this.activity == 'ALOJAMIENTO') {
      this.approvalStateDataService.put(this.registerApprovalInspector).then( r => {
         this.registerStateDataService.post(newRegisterState).then( r1 => {
         }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });
   }
   if (this.activity == 'ALIMENTOS Y BEBIDAS') {
      this.approvalStateABDataService.put(this.registerApprovalInspector).then( r => {
         this.registerStateABDataService.post(newRegisterState).then( r1 => {
         }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });
   }
   let clasificacion: String = '';
   let categoria: String = '';
   let category: any = null;
   if (this.activity == 'ALOJAMIENTO') {
      category = new RegisterType();
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
      category = new RegisterTypeAB();
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
   let inspector = new User();
   this.inspectores.forEach(element => {
      if (element.id == this.inspectorSelectedId) {
         inspector = element;
      }
   });  
   const today = new Date();
   const actividad = this.registerMinturSelected.activity.toUpperCase();
   let provincia = new Ubication();
   let canton = new Ubication();
   let parroquia = new Ubication();
   let zonal = new Ubication();
   let iniciales_cordinacion_zonal = '';
   this.ubications.forEach(element => {
      if (element.id == this.registerMinturSelected.establishment.ubication_id) {
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
   const zonalName = zonal.name.split(' ');
   const estado = this.stateTramiteId.toString();
   this.refreshMotivoTramite(estado);
   iniciales_cordinacion_zonal = zonalName[zonalName.length - 1].toUpperCase();
   let qr_value = 'MT-CZ' + iniciales_cordinacion_zonal + '-' + this.ruc_registro_selected.ruc.number + '-SOLICITUD-' + this.registerMinturSelected.activity.toUpperCase() + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
   const params = [{tipo_tramite: this.tipo_tramite.toUpperCase()},
      {fecha: today.toLocaleDateString().toUpperCase()},
      {representante_legal: this.user.name.toUpperCase()},
      {nombre_comercial: this.registerMinturSelected.establishment.commercially_known_name.toUpperCase()},
      {ruc: this.ruc_registro_selected.ruc.number},
      {fecha_solicitud: today.toLocaleDateString().toUpperCase()},
      {actividad: actividad.toUpperCase()},
      {clasificacion: clasificacion.toUpperCase()},
      {categoria: categoria.toUpperCase()},
      {provincia: provincia.name.toUpperCase()},
      {canton: canton.name.toUpperCase()},
      {parroquia: parroquia.name.toUpperCase()},
      {calle_principal: this.registerMinturSelected.establishment.address_main_street.toUpperCase()},
      {numeracion: this.registerMinturSelected.establishment.address_number.toUpperCase()},
      {calle_secundaria: this.registerMinturSelected.establishment.address_secondary_street.toUpperCase()}];
   this.exporterDataService.template(10, true, qr_value, params).then( r => {
      let pdfBase64 = r;
      const information = {
         para: inspector.name,
         tramite: this.tipo_tramite.toUpperCase(),
         ruc: this.ruc_registro_selected.ruc.number,
         nombreComercial: this.registerMinturSelected.establishment.commercially_known_name.toUpperCase(),
         fechaSolicitud: today.toLocaleString(),
         actividad: this.registerMinturSelected.activity.toUpperCase(),
         clasificacion: clasificacion.toUpperCase(),
         categoria: categoria.toUpperCase(),
         tipoSolicitud: this.tipo_tramite.toUpperCase(),
         provincia: provincia.name.toUpperCase(),
         canton: canton.name.toUpperCase(),
         parroquia: parroquia.name.toUpperCase(),
         callePrincipal: this.registerMinturSelected.establishment.address_main_street.toUpperCase(),
         calleInterseccion: this.registerMinturSelected.establishment.address_secondary_street.toUpperCase(),
         numeracion: this.registerMinturSelected.establishment.address_number.toUpperCase(),
         thisYear:today.getFullYear(),
         pdfBase64: pdfBase64,
      };
      this.mailerDataService.sendMail('asignacion', inspector.email.toString(), 'Asignación de trámite para su revisión', information).then( r => {
         this.toastr.successToastr('Técnico Zonal Asignado Satisfactoriamente.', 'Asignación de Técnico Zonal');
         this.refresh();
      }).catch( e => { console.log(e); });
   }).catch( e => { console.log(e); });
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

  noRequiereInspeccion() {
   Swal.fire({
      title: 'Confirmación',
      text: '¿Está seguro que el trámite no requiere revisión por parte del Técnico Zonal?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
         Swal.fire(
          'Aprobado!',
          'El trámite se encuentra listo para ser asignado a un Técnico Financiero',
          'success'
         );
         const today = new Date();
         this.registerApprovalInspector.id_user = 9999999;
         this.registerApprovalInspector.date_assigment = today;
         this.registerApprovalInspector.notes = 'NO REQUIERE INSPECCIÓN';
         this.registerApprovalInspector.value = true;
         this.registerApprovalInspector.date_fullfill = today;
         const newRegisterState = new RegisterState();
         newRegisterState.justification = 'No se requiere inspección - fecha:' + this.registerApprovalInspector.date_assigment.toDateString();
         newRegisterState.register_id = this.idRegister;
         newRegisterState.state_id = this.stateTramiteId + 9;
         this.registerApprovalCoordinador.id_user = this.user.id;
         this.registerApprovalCoordinador.notes = 'NO REQUIERE INSPECCIÓN';
         this.registerApprovalCoordinador.date_assigment = today;
         this.registerApprovalCoordinador.date_fullfill = today;
         this.registerApprovalCoordinador.value = true;
         if (this.activity == 'ALOJAMIENTO') {
            this.approvalStateDataService.put(this.registerApprovalInspector).then( r => {
               this.registerStateDataService.post(newRegisterState).then( r1 => {
               }).catch( e => { console.log(e); });
            }).catch( e => { console.log(e); });
            this.approvalStateDataService.put(this.registerApprovalCoordinador).then( r => {
            }).catch( e => { console.log(e); });
         }
         if (this.activity == 'ALIMENTOS Y BEBIDAS') {
            this.approvalStateABDataService.put(this.registerApprovalInspector).then( r => {
               this.registerStateABDataService.post(newRegisterState).then( r1 => {
               }).catch( e => { console.log(e); });
            }).catch( e => { console.log(e); });
            this.approvalStateABDataService.put(this.registerApprovalCoordinador).then( r => {
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

  desasignarInspector() {
   this.desasignandoInspector = true;
   const today = new Date();
   let clasificacion: String = '';
   let categoria: String = '';
   let category: any = null;
   if (this.activity == 'ALOJAMIENTO') {
      category = new RegisterType();
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
      category = new RegisterTypeAB();
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
   this.ubications.forEach(element => {
      if (element.code == canton.father_code) {
         provinciaName = element.name;
      }
   });
   let inspector = new User();
   this.inspectores.forEach(element => {
      if (element.id == this.inspectorSelectedId) {
         inspector = element;
      }
   });
   const estado = this.stateTramiteId.toString();
   this.refreshMotivoTramite(estado);
   const information = {
      para: inspector.name.toUpperCase(),
      tramite: this.tipo_tramite.toUpperCase(),
      ruc: this.ruc_registro_selected.ruc.number,
      nombreComercial: this.registerMinturSelected.establishment.commercially_known_name.toUpperCase(),
      fechaSolicitud: today.toLocaleString(),
      actividad: this.registerMinturSelected.activity.toUpperCase(),
      clasificacion: clasificacion.toUpperCase(),
      categoria: categoria.toUpperCase(),
      tipoSolicitud: this.tipo_tramite.toUpperCase(),
      provincia: provinciaName.toUpperCase(),
      canton: cantonName.toUpperCase(),
      parroquia: parroquiaName.toUpperCase(),
      callePrincipal: this.registerMinturSelected.establishment.address_main_street,
      calleInterseccion: this.registerMinturSelected.establishment.address_secondary_street,
      numeracion: this.registerMinturSelected.establishment.address_number,
      thisYear:today.getFullYear()
   };
   this.mailerDataService.sendMail('desasignacion', inspector.email.toString(), 'Desasignación de trámite', information).then( r => {
      this.toastr.warningToastr('Técnico Zonal Desasignado Satisfactoriamente.', 'Desasignación de Técnico Zonal');
      this.refresh();
   }).catch( e => { console.log(e); });
   this.isAssigned = false;
   this.inspectorSelectedId = 0;
   this.registerApprovalInspector.id_user = 0;
   this.registerApprovalInspector.date_assigment = null;
   if (this.activity == 'ALOJAMIENTO') {
      this.approvalStateDataService.put(this.registerApprovalInspector).then( r => {
         const newRegisterState = new RegisterState();
         newRegisterState.justification = 'Técnico Zonal removido en la fecha ' + today.toDateString();
         newRegisterState.register_id =  this.idRegister;
         newRegisterState.state_id = this.stateTramiteId - 3;
         this.desasignandoInspector = true;
         this.registerStateDataService.post(newRegisterState).then( r1 => {
            this.desasignandoInspector = false;
         }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });
   }
   if (this.activity == 'ALIMENTOS Y BEBIDAS') {
      this.approvalStateABDataService.put(this.registerApprovalInspector).then( r => {
         const newRegisterState = new RegisterState();
         newRegisterState.justification = 'Técnico Zonal removido en la fecha ' + today.toDateString();
         newRegisterState.register_id =  this.idRegister;
         newRegisterState.state_id = this.stateTramiteId - 3;
         this.desasignandoInspector = true;
         if (this.activity == 'ALIMENTOS Y BEBIDAS') {
            this.registerStateABDataService.post(newRegisterState).then( r1 => {
               this.desasignandoInspector = false;
            }).catch( e => { console.log(e); });
         }
      }).catch( e => { console.log(e); });
   }
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

  asignarFinanciero() {
   this.asignandoFinanciero = true;
   this.isAssignedFinancial = true;
   this.registerApprovalFinanciero.id_user = this.financialSelectedId;
   this.registerApprovalFinanciero.date_assigment = new Date();
   this.registerApprovalFinanciero.notes = '';
   if (this.activity == 'ALOJAMIENTO') {
      this.approvalStateDataService.put(this.registerApprovalFinanciero).then( r => {
         const newRegisterState = new RegisterState();
         newRegisterState.justification = 'Técnico Financiero asignado en la fecha ' + this.registerApprovalFinanciero.date_assigment.toDateString();
         newRegisterState.register_id =  this.idRegister;
         newRegisterState.state_id = this.stateTramiteId - 3;
         this.asignandoFinanciero = false;
         this.registerStateDataService.post(newRegisterState).then( r1 => {
         }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });
   }
   if (this.activity == 'ALIMENTOS Y BEBIDAS') {
      this.approvalStateABDataService.put(this.registerApprovalFinanciero).then( r => {
         const newRegisterState = new RegisterState();
         newRegisterState.justification = 'Técnico Financiero asignado en la fecha ' + this.registerApprovalFinanciero.date_assigment.toDateString();
         newRegisterState.register_id =  this.idRegister;
         newRegisterState.state_id = this.stateTramiteId - 3;
         this.asignandoFinanciero = false;
         this.registerStateABDataService.post(newRegisterState).then( r1 => {
         }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });
   }
   
   const today = new Date();
   let clasificacion: String = '';
   let categoria: String = '';
   let category: any = null;
   if (this.activity == 'ALOJAMIENTO') {
      category = new RegisterType();
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
      category = new RegisterTypeAB();
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
   const actividad = this.registerMinturSelected.activity.toUpperCase();
   let provincia = new Ubication();
   let canton = new Ubication();
   let parroquia = new Ubication();
   let zonal = new Ubication();
   this.ubications.forEach(element => {
      if (element.id == this.registerMinturSelected.establishment.ubication_id) {
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
   let financiero = new User();
   this.financieros.forEach(element => {
      if (element.id == this.financialSelectedId) {
         financiero = element;
      }
   });
   let iniciales_cordinacion_zonal = '';
   const zonalName = zonal.name.split(' ');
   const estado = this.stateTramiteId.toString();
   this.refreshMotivoTramite(estado);
   iniciales_cordinacion_zonal = zonalName[zonalName.length - 1].toUpperCase();
   let qr_value = 'MT-CZ' + iniciales_cordinacion_zonal + '-' + this.ruc_registro_selected.ruc.number + '-SOLICITUD-ALOJAMIENTO-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
   const params = [{tipo_tramite: this.tipo_tramite.toUpperCase()},
      {fecha: today.toLocaleDateString().toUpperCase()},
      {representante_legal: this.user.name.toUpperCase()},
      {nombre_comercial: this.registerMinturSelected.establishment.commercially_known_name.toUpperCase()},
      {ruc: this.ruc_registro_selected.ruc.number},
      {fecha_solicitud: today.toLocaleDateString().toUpperCase()},
      {actividad: actividad},
      {clasificacion: clasificacion.toUpperCase()},
      {categoria: categoria.toUpperCase()},
      {provincia: provincia.name.toUpperCase()},
      {canton: canton.name.toUpperCase()},
      {parroquia: parroquia.name.toUpperCase()},
      {calle_principal: this.registerMinturSelected.establishment.address_main_street.toUpperCase()},
      {numeracion: this.registerMinturSelected.establishment.address_number.toUpperCase()},
      {calle_secundaria: this.registerMinturSelected.establishment.address_secondary_street.toUpperCase()}];
      this.exporterDataService.template(10, true, qr_value, params).then( r => {
         let pdfBase64 = r;
         const information = {
            para: financiero.name,
            tramite: this.tipo_tramite.toUpperCase(),
            ruc: this.ruc_registro_selected.ruc.number,
            nombreComercial: this.registerMinturSelected.establishment.commercially_known_name.toUpperCase(),
            fechaSolicitud: today.toLocaleString(),
            actividad: this.registerMinturSelected.activity.toUpperCase(),
            clasificacion: clasificacion.toUpperCase(),
            categoria: categoria.toUpperCase(),
            tipoSolicitud: this.tipo_tramite.toUpperCase(),
            provincia: provincia.name.toUpperCase(),
            canton: canton.name.toUpperCase(),
            parroquia: parroquia.name.toUpperCase(),
            callePrincipal: this.registerMinturSelected.establishment.address_main_street.toUpperCase(),
            calleInterseccion: this.registerMinturSelected.establishment.address_secondary_street.toUpperCase(),
            numeracion: this.registerMinturSelected.establishment.address_number.toUpperCase(),
            thisYear:today.getFullYear(),
            pdfBase64: pdfBase64,
         };
         this.mailerDataService.sendMail('asignacion', financiero.email.toString(), 'Asignación de trámite para su revisión', information).then( r => {
            this.toastr.successToastr('Técnico Financiero Asignado Satisfactoriamente.', 'Asignación de Técnico Financiero');
            this.refresh();
         }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });
   }

  desasignarFinanciero() {
   this.desasignandoFinanciero = true;
   const today = new Date();
   let clasificacion: String = '';
   let categoria: String = '';
   let category: any = null;
   if (this.activity == 'ALOJAMIENTO') {
      category = new RegisterType();
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
      category = new RegisterTypeAB();
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
   this.ubications.forEach(element => {
      if (element.code == canton.father_code) {
         provinciaName = element.name;
      }
   });
   const estado = this.stateTramiteId.toString();
   this.refreshMotivoTramite(estado);
   let financiero = new User();
   this.financieros.forEach(element => {
      if (element.id == this.financialSelectedId) {
         financiero = element;
      }
   });
   const information = {
      para: financiero.name.toUpperCase(),
      tramite: this.tipo_tramite.toUpperCase(),
      ruc: this.ruc_registro_selected.ruc.number,
      nombreComercial: this.registerMinturSelected.establishment.commercially_known_name.toUpperCase(),
      fechaSolicitud: today.toLocaleString(),
      actividad: this.registerMinturSelected.activity.toUpperCase(),
      clasificacion: clasificacion.toUpperCase(),
      categoria: categoria.toUpperCase(),
      tipoSolicitud: this.tipo_tramite.toUpperCase(),
      provincia: provinciaName.toUpperCase(),
      canton: cantonName.toUpperCase(),
      parroquia: parroquiaName.toUpperCase(),
      callePrincipal: this.registerMinturSelected.establishment.address_main_street.toUpperCase(),
      calleInterseccion: this.registerMinturSelected.establishment.address_secondary_street.toUpperCase(),
      numeracion: this.registerMinturSelected.establishment.address_number.toUpperCase(),
      thisYear:today.getFullYear()
   };
   this.mailerDataService.sendMail('desasignacion', financiero.email.toString(), 'Desasignación de trámite', information).then( r => {
      this.toastr.warningToastr('Técnico Financiero Desasignado Satisfactoriamente.', 'Desasignación de Técnico Financiero');
      this.refresh();
   }).catch( e => { console.log(e); });
   this.isAssignedFinancial = false;
   this.financialSelectedId = 0;
   this.registerApprovalFinanciero.id_user = 0;
   this.registerApprovalFinanciero.date_assigment = null;
   if (this.activity == 'ALOJAMIENTO') {
      this.approvalStateDataService.put(this.registerApprovalFinanciero).then( r => {
         const newRegisterState = new RegisterState();
         newRegisterState.justification = 'Técnico Financiero removido en la fecha ' + today.toDateString();
         newRegisterState.register_id =  this.idRegister;
         newRegisterState.state_id = this.stateTramiteId + 3;
         this.desasignandoFinanciero = false;
         this.registerStateDataService.post(newRegisterState).then( r1 => {
         }).catch( e => { console.log(e); });
        }).catch( e => { console.log(e); });
   }  
   if (this.activity == 'ALIMENTOS Y BEBIDAS') {
      this.approvalStateABDataService.put(this.registerApprovalFinanciero).then( r => {
         const newRegisterState = new RegisterState();
         newRegisterState.justification = 'Técnico Financiero removido en la fecha ' + today.toDateString();
         newRegisterState.register_id =  this.idRegister;
         newRegisterState.state_id = this.stateTramiteId + 3;
         this.desasignandoFinanciero = false;
            this.registerStateABDataService.post(newRegisterState).then( r1 => {
            }).catch( e => { console.log(e); });
           
        }).catch( e => { console.log(e); });
   } 
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

  checkRegistroSupercias() {
   this.ruc_registro_selected.ruc.group_given.register_code = this.ruc_registro_selected.ruc.group_given.register_code.replace(/[^\d]/, '');
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

  getNameTypeInfo() {
   this.ruc_name_types.forEach(element => {
      if (element.id == this.establishment_selected.ruc_name_type_id) {
         this.selectedNameType = element;
      }
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
         this.selectEstablishmentRegister(element.register, false);
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

  onChangeTable(config: any, event?): any {
   const page: any = {page: this.currentPageMinturRegisters, itemsPerPage: this.recordsByPageRegisterMintur};
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
   this.consultorDataService.get_registers(1).then( r => {
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
     ];
     const data = [];
     this.registers_mintur.forEach(item => {
        let addRegister = false;
         this.myAbleUbications.forEach( ub => {
            if (ub.id == item.establishment.ubication_id) {
               addRegister = true;
            }
         });
         if (addRegister) {
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
            const creacion = new Date(item.register.created_at.toString());
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
            data.push({
               selected: '',
               date_assigment_alert: date_assigment_alert,
               number: item.ruc.number,
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

  refreshMotivoTramite(estado: String) {
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
  }

  onCellClick(event) {
   this.register_code = event.row.code;
   let estado = '';
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
      if (element.register.id == this.idRegister && element.activity == this.activity) {
         this.selectRegisterMintur(element);
         const registerState = this.getRegisterState(element.states.state_id);
         this.stateTramiteId = element.states.state_id;
         estado = this.stateTramiteId.toString();
         this.digito = estado.substring(estado.length-1, estado.length);
         this.stateTramite = 0;
         this.estadoOrigen = 0;
         this.canSave = true;
         const primerDigito = estado.substring(0, estado.length-1);
         if ((primerDigito == '5' || estado == '60') && (estado !== '50')) {
            this.tipo_tramite_seleccionado = 'inactivation';
         }
         if (registerState.search('Solicitud Aprobada') == 0) {
            this.stateTramite = 1;
            this.hasRegisterReady = true;
            this.canSave = false;
            this.estadoOrigen = 1;
         }
         if (registerState.search('Solicitud Rechazada') == 0) {
            this.stateTramite = 2;
            this.hasRegisterReady = false;
            this.canSave = false;
            this.estadoOrigen = 2;
         }
         if (registerState.search('Documentación Entregada') == 0) {
            this.stateTramite = 3;
            this.hasRegisterReady = false;
            this.canSave = false;
            this.estadoOrigen = 3;
         }
      }
   });
   this.checkMotivoTramite(estado);
   this.getApprovalStates();
  }

  checkIfIsAssigned() {
   if (this.inspectorSelectedId !== 0) {
      this.isAssigned = true;
   } else {
      this.isAssigned = false;
   }
  }

  checkAttachments() {
   this.hasRequisites = false;
   this.hasInform = false;
   this.hasActaNotificacion = false;
   if (this.registerMinturSelected.states.state_id == 11 ||
      this.registerMinturSelected.states.state_id == 21 ||
      this.registerMinturSelected.states.state_id == 31 ||
      this.registerMinturSelected.states.state_id == 41 ||
      this.registerMinturSelected.states.state_id == 51 ||
      this.registerMinturSelected.states.state_id == 61
      ) {
      this.hasRequisites = false;
      return;
   }
   if (this.activity == 'ALOJAMIENTO') {
      this.approvalStateAttachmentDataService.get_by_register_id(this.idRegister).then( r => {
         r.forEach(approvalStateAttachment => {
            if (approvalStateAttachment.approval_state_attachment_file_name.search('Informe') == 0) {
               this.informeApprovalStateAttachment = approvalStateAttachment;
               this.hasInform = true;
            }
            if ((approvalStateAttachment.approval_state_attachment_file_name.search('Formulario') == 0) && (approvalStateAttachment.approval_state_attachment_file !== '')) {
               this.requisitosApprovalStateAttachment = approvalStateAttachment;
               this.hasRequisites = true;
            }
            if (approvalStateAttachment.approval_state_attachment_file_name.search('Acta') == 0) {
               this.actaNotificacionApprovalStateAttachment = approvalStateAttachment;
               this.hasActaNotificacion = true;
            }
            if (approvalStateAttachment.approval_state_attachment_file_name.search('Registro') == 0) {
               this.registroApprovalStateAttachment = approvalStateAttachment;
            }
            if (approvalStateAttachment.approval_state_attachment_file_name.search('Tarifario') == 0) {
               this.tarifarioRackApprovalStateAttachment = approvalStateAttachment;
            }
         });
      }).catch( e => { console.log(e); });
   }
   if (this.activity == 'ALIMENTOS Y BEBIDAS') {
      this.approvalStateAttachmentABDataService.get_by_register_id(this.idRegister).then( r => {
         r.forEach(approvalStateAttachment => {
            if (approvalStateAttachment.approval_state_attachment_file_name.search('Informe') == 0) {
               this.informeApprovalStateAttachment = approvalStateAttachment;
               this.hasInform = true;
            }
            if (approvalStateAttachment.approval_state_attachment_file_name.search('Formulario') == 0) {
               this.requisitosApprovalStateAttachment = approvalStateAttachment;
               this.hasRequisites = true;
            }
            if (approvalStateAttachment.approval_state_attachment_file_name.search('Acta') == 0) {
               this.actaNotificacionApprovalStateAttachment = approvalStateAttachment;
               this.hasActaNotificacion = true;
            }
            if (approvalStateAttachment.approval_state_attachment_file_name.search('Registro') == 0) {
               this.registroApprovalStateAttachment = approvalStateAttachment;
            }
            if (approvalStateAttachment.approval_state_attachment_file_name.search('Tarifario') == 0) {
               this.tarifarioRackApprovalStateAttachment = approvalStateAttachment;
            }
         });
      }).catch( e => { console.log(e); });
   }
  }

  checkIfIsAssignedFinanciero() {
   if (this.financialSelectedId !== 0) {
      this.isAssignedFinancial = true;
   } else {
      this.isAssignedFinancial = false;
   }
  }

  checkAttachmentsFinanciero(){

  }

  getApprovalStates() {
   this.isAssigned = false;
   this.hasIspectionDate  = false;
   this.hasInform  = false;
   this.hasRequisites = false;
   this.registerApprovalInspector = new ApprovalState();
   this.registerApprovalFinanciero = new ApprovalState();
   this.registerApprovalCoordinador = new ApprovalState();
   if (this.activity == 'ALOJAMIENTO') {
      this.approvalStateDataService.get_by_register_id(this.idRegister).then( r => {
         this.registerApprovals = r;
         this.registerApprovals.forEach(element => {
            if(element.approval_id == 1){
               this.registerApprovalInspector = element;
               if (typeof this.registerApprovalInspector.notes == 'undefined' || this.registerApprovalInspector.notes == null) {
                  this.registerApprovalInspector.notes = '';
               }
               this.inspectorSelectedId = this.registerApprovalInspector.id_user;
               this.checkIfIsAssigned();
               this.checkAttachments();
            }
            if(element.approval_id == 2){
               this.registerApprovalFinanciero = element;
               if (typeof this.registerApprovalFinanciero.notes == 'undefined' || this.registerApprovalFinanciero.notes == null) {
                  this.registerApprovalFinanciero.notes = '';
               }
               this.financialSelectedId = this.registerApprovalFinanciero.id_user;
               if (this.registerApprovalFinanciero.notes.search('Devuelto: ') == 0) {
                  this.registerApprovalFinanciero.id_user = 0;
                  this.financialSelectedId = 0;
               }
               this.checkIfIsAssignedFinanciero();
               this.checkAttachmentsFinanciero();
            }
            if(element.approval_id == 3){
               this.registerApprovalCoordinador = element;
               if (typeof this.registerApprovalCoordinador.notes == 'undefined' || this.registerApprovalFinanciero.notes == null) {
                  this.registerApprovalCoordinador.notes = '';
               }
            }
         });
      }).catch( e => { console.log(e); });
   }
   if (this.activity == "ALIMENTOS Y BEBIDAS") {
      this.approvalStateABDataService.get_by_register_id(this.idRegister).then( r => {
         this.registerApprovals = r;
         this.registerApprovals.forEach(element => {
            if(element.approval_id == 1){
               this.registerApprovalInspector = element;
               if (typeof this.registerApprovalInspector.notes == 'undefined' || this.registerApprovalInspector.notes == null) {
                  this.registerApprovalInspector.notes = '';
               }
               this.inspectorSelectedId = this.registerApprovalInspector.id_user;
               this.checkIfIsAssigned();
               this.checkAttachments();
            }
            if(element.approval_id == 2){
               this.registerApprovalFinanciero = element;
               if (typeof this.registerApprovalFinanciero.notes == 'undefined' || this.registerApprovalFinanciero.notes == null) {
                  this.registerApprovalFinanciero.notes = '';
               }
               this.financialSelectedId = this.registerApprovalFinanciero.id_user;
               if (this.registerApprovalFinanciero.notes.search('Devuelto: ') == 0) {
                  this.registerApprovalFinanciero.id_user = 0;
                  this.financialSelectedId = 0;
               }
               this.checkIfIsAssignedFinanciero();
               this.checkAttachmentsFinanciero();
            }
            if(element.approval_id == 3){
               this.registerApprovalCoordinador = element;
               if (typeof this.registerApprovalCoordinador.notes == 'undefined' || this.registerApprovalFinanciero.notes == null) {
                  this.registerApprovalCoordinador.notes = '';
               }
            }
         });
      }).catch( e => { console.log(e); });
   }
  }
  
  entregarDocumentos() {
   Swal.fire({
      title: 'Confirmación',
      text: '¿Está seguro de enviar los documentos al cliente?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
         Swal.fire(
            'Documentos Enviados!',
            'Los documentos fueron enviados por correo electrónico al cliente.',
            'success'
          );
          this.doEntregarDocumentos();
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

  doEntregarDocumentos() {
   this.stateTramite = 3;
   const estado: String = this.stateTramiteId.toString();
   const digito = estado.substring(estado.length-1, estado.length);
   const newRegisterState = new RegisterState();
   let establishmentId = 0;
   let countRegisters = 1;
   this.ruc_registro_selected.registers.forEach(element => {
      if (element.register.id == this.idRegister) {
         establishmentId = element.establishment.id;
      }
   });
   this.ruc_registro_selected.registers.forEach(element => {
    if (establishmentId == element.establishment.id && element.status_register.state_id == 9) {
       countRegisters++;
    }
   });
   if( this.stateTramite == 1 ){
      this.registerApprovalCoordinador.value = true;
       if (digito == '0') {
          newRegisterState.state_id = this.stateTramiteId - 8;
       }
       if (digito == '2') {
          newRegisterState.state_id = this.stateTramiteId;
       }
       if (digito == '3') {
          newRegisterState.state_id = this.stateTramiteId - 1;
       }
       if (digito == '9') {
          newRegisterState.state_id = this.stateTramiteId - 7;
       }
   }
   if( this.stateTramite == 2 ){
    this.registerApprovalCoordinador.value = false;
    if (digito == '0') {
       newRegisterState.state_id = this.stateTramiteId - 7;
    }
    if (digito == '2') {
       newRegisterState.state_id = this.stateTramiteId + 1;
    }
    if (digito == '3') {
       newRegisterState.state_id = this.stateTramiteId;
    }
    if (digito == '9') {
       newRegisterState.state_id = this.stateTramiteId - 6;
    }
   }
   if( this.stateTramite == 3 ){
    this.registerApprovalCoordinador.value = true;
    if (digito == '0') {
       newRegisterState.state_id = this.stateTramiteId - 1;
    }
    if (digito == '2') {
       newRegisterState.state_id = this.stateTramiteId + 7;
    }
    if (digito == '3') {
       newRegisterState.state_id = this.stateTramiteId + 6;
    }
    if (digito == '9') {
       newRegisterState.state_id = this.stateTramiteId;
    }
   }
   newRegisterState.justification = this.registerApprovalCoordinador.notes;
   newRegisterState.register_id = this.idRegister;
   this.registroApprovalStateAttachment.approval_state_id = this.registerApprovalCoordinador.id;
   this.tarifarioRackApprovalStateAttachment.approval_state_id = this.registerApprovalCoordinador.id;
   this.certificadoInactivacionApprovalStateAttachment.approval_state_id = this.registerApprovalCoordinador.id;
   const today = new Date();
   this.registroApprovalStateAttachment.approval_state_attachment_file_name = 'Registro_' + this.registerMinturSelected.register.code + '_' + today.getFullYear().toString() + '_' + (today.getMonth() + 1).toString() + '_' + today.getDate().toString()+'.pdf';
   this.certificadoInactivacionApprovalStateAttachment.approval_state_attachment_file_name = 'Certificado_Inactivación_' + this.registerMinturSelected.register.code + '_' + today.getFullYear().toString() + '_' + (today.getMonth() + 1).toString() + '_' + today.getDate().toString()+'.pdf';
   if (this.tipo_tramite_seleccionado !== 'inactivation') {
    if (this.activity == 'ALOJAMIENTO') {
       this.tarifarioRackApprovalStateAttachment.approval_state_attachment_file_name = 'Tarifario_Rack_' + this.registerMinturSelected.register.code + '_' + today.getFullYear().toString() + '_' + (today.getMonth() + 1).toString() + '_' + today.getDate().toString()+'.pdf';
       this.registerStateDataService.post(newRegisterState).then( r1 => {
       }).catch( e => { console.log(e); });
       this.approvalStateAttachmentDataService.post(this.tarifarioRackApprovalStateAttachment).then( r2 => {
          this.approvalStateAttachmentDataService.post(this.registroApprovalStateAttachment).then( r3 => {
             this.catastrarRegistro(this.tarifarioRackApprovalStateAttachment.approval_state_attachment_file, this.registroApprovalStateAttachment.approval_state_attachment_file);
          }).catch( e => { console.log(e); });
         }).catch( e => { console.log(e); });      
    }
    if (this.activity == 'ALIMENTOS Y BEBIDAS') {
       this.registerStateABDataService.post(newRegisterState).then( r1 => {
       }).catch( e => { console.log(e); });
       this.approvalStateAttachmentABDataService.post(this.tarifarioRackApprovalStateAttachment).then( r2 => {
          this.approvalStateAttachmentABDataService.post(this.registroApprovalStateAttachment).then( r3 => {
             this.catastrarRegistro(null, this.registroApprovalStateAttachment.approval_state_attachment_file);
          }).catch( e => { console.log(e); });
       }).catch( e => { console.log(e); });    
    }
   } else {
    if (this.activity == 'ALOJAMIENTO') {
       this.registerStateDataService.post(newRegisterState).then( r1 => {
       }).catch( e => { console.log(e); });
       this.approvalStateAttachmentDataService.post(this.certificadoInactivacionApprovalStateAttachment).then( r2 => {
          this.inactivar_into_catastro(this.certificadoInactivacionApprovalStateAttachment.approval_state_attachment_file);
       }).catch( e => { console.log(e); });      
    }
    if (this.activity == 'ALIMENTOS Y BEBIDAS') {
       this.registerStateABDataService.post(newRegisterState).then( r1 => {
       }).catch( e => { console.log(e); });
       this.approvalStateAttachmentABDataService.post(this.certificadoInactivacionApprovalStateAttachment).then( r2 => {
          this.inactivar_into_catastro(this.certificadoInactivacionApprovalStateAttachment.approval_state_attachment_file);
       }).catch( e => { console.log(e); });    
    }
   }
  }
  selectServiceType(serviceType: ServiceType) {
   this.service_type_registerSelectedId = serviceType.id;
}

selectKitchenType(kitchenType: KitchenType) {
   this.kitchen_type_registerSelectedId = kitchenType.id;
}

  guardarTramite() {
     this.guardandoTramite = true;
     const estado: String = this.stateTramiteId.toString();
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
      
     this.refreshMotivoTramite(estado);
     const digito = estado.substring(estado.length-1, estado.length);
     if ( this.stateTramite == 0) {
       this.toastr.errorToastr('Debe seleccionar un estado de trámite', 'Coordinación');
       return;
     }
     const newRegisterState = new RegisterState();
     let establishmentId = 0;
     let countRegisters = 1;
     this.ruc_registro_selected.registers.forEach(element => {
        if (element.register.id == this.idRegister) {
           establishmentId = element.establishment.id;
        }
     });
     this.ruc_registro_selected.registers.forEach(element => {
      if (establishmentId == element.establishment.id && element.status_register.state_id == 9) {
         countRegisters++;
      }
     });
     this.registerApprovalCoordinador.register_id = this.idRegister;
     this.registerApprovalCoordinador.date_assigment = this.registerApprovalFinanciero.date_fullfill;
     this.registerApprovalCoordinador.id_user = this.user.id;
     this.registerApprovalCoordinador.date_fullfill = new Date();
     if( this.stateTramite == 1 ){
        this.registerApprovalCoordinador.value = true;
         if (digito == '0') {
            newRegisterState.state_id = this.stateTramiteId - 8;
         }
         if (digito == '2') {
            newRegisterState.state_id = this.stateTramiteId;
         }
         if (digito == '3') {
            newRegisterState.state_id = this.stateTramiteId - 1;
         }
         if (digito == '9') {
            newRegisterState.state_id = this.stateTramiteId - 7;
         }
     }
     if( this.stateTramite == 2 ){
      this.registerApprovalCoordinador.value = false;
      if (digito == '0') {
         newRegisterState.state_id = this.stateTramiteId - 7;
      }
      if (digito == '2') {
         newRegisterState.state_id = this.stateTramiteId + 1;
      }
      if (digito == '3') {
         newRegisterState.state_id = this.stateTramiteId;
      }
      if (digito == '9') {
         newRegisterState.state_id = this.stateTramiteId - 6;
      }
     }
     if( this.stateTramite == 3 ){
      this.registerApprovalCoordinador.value = false;
      if (digito == '0') {
         newRegisterState.state_id = this.stateTramiteId - 1;
      }
      if (digito == '2') {
         newRegisterState.state_id = this.stateTramiteId + 7;
      }
      if (digito == '3') {
         newRegisterState.state_id = this.stateTramiteId + 6;
      }
      if (digito == '9') {
         newRegisterState.state_id = this.stateTramiteId;
      }
     }
     let enviarMail = false;
     let estadoTramite = '';
     if (this.stateTramite == 1) {
      enviarMail = true;
      estadoTramite = 'aprobada';
     }
     if (this.stateTramite == 2) {
      enviarMail = true;
      estadoTramite = 'rechazada';
     }
     newRegisterState.justification = this.registerApprovalCoordinador.notes;
     newRegisterState.register_id = this.idRegister;
     if (this.activity == 'ALOJAMIENTO') {
      this.registerStateDataService.post(newRegisterState).then( r1 => {
         if (!enviarMail) {
            this.guardandoTramite = false;
            this.refresh();
            return;
         }
        }).catch( e => { console.log(e); });
     }
      if (this.activity == 'ALIMENTOS Y BEBIDAS') {
         this.registerStateABDataService.post(newRegisterState).then( r1 => {
            if (!enviarMail) {
               this.guardandoTramite = false;
               this.refresh();
               return;
            }
           }).catch( e => { console.log(e); });
     }
     const today = new Date();
      let clasificacion: String = '';
      let categoria: String = '';
      let category: any = null;
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
      const observaciones = this.registerApprovalCoordinador.notes;
      if (!enviarMail) {
         this.refresh();
         return;
      }
      const number_by_ruc = '000'.substr(0, 3 - this.registerMinturSelected.establishment.ruc_code_id.toString().length) + this.registerMinturSelected.establishment.ruc_code_id.toString();
      let numeric_register = '';
      if (this.activity == 'ALOJAMIENTO') {
        numeric_register = '2000000'.substr(0, 6 - this.idRegister.toString().length) + this.idRegister.toString();
      }
      if (this.activity == 'ALIMENTOS Y BEBIDAS') {
        numeric_register = '3000000'.substr(0, 6 - this.idRegister.toString().length) + this.idRegister.toString();
      }
      if (this.registerMinturSelected.establishment.as_turistic_register_date == null) {
         this.as_turistic_date = new Date();  
         this.establishmentDataService.set_register_date(this.registerMinturSelected.establishment.id).then( r => {
         }).catch( e => { console.log(e); }); 
      }
     let code = this.ruc_registro_selected.ruc.number + '.' + number_by_ruc + '.' + numeric_register;
     if (this.tipo_tramite_seleccionado == 'inactivation') {
         clasificacion = this.catastro_classification;
         categoria = this.catastro_category;
         code = this.registerMinturSelected.register_data_on_catastro.register_code.toUpperCase();   
     }
     if (this.activity == 'ALOJAMIENTO') {
      this.approvalStateDataService.put(this.registerApprovalCoordinador).then( r => {
         this.registerDataService.set_register_code(code, this.idRegister).then( r => {
         }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); }); 
     }
      if (this.activity == 'ALIMENTOS Y BEBIDAS') {
       this.approvalStateABDataService.put(this.registerApprovalCoordinador).then( r => {
          this.registerABDataService.set_register_code(code, this.idRegister).then( r => {
          }).catch( e => { console.log(e); });
       }).catch( e => { console.log(e); });
      }
      this.userDataService.get(this.registerMinturSelected.establishment.contact_user_id).then( r => {
         if (this.activity == 'ALOJAMIENTO') {
            this.registerDataService.get_register_data(this.registerMinturSelected.register.id).then( r2 => {
               this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r3 => {
                  this.establishment_selected = r3.establishment as Establishment;
                  this.establishment_selected.workers_on_establishment = r3.workers_on_establishment as Worker[];
                  let max_spaces = 0;
                  let max_beds = 0;
                  let max_areas = 0;
                  const capacities_on_register = r2.capacities_on_register;
                  capacities_on_register.forEach(capacity => {
                     this.capacity_types.forEach(capacityType => {
                        if (capacityType.id == capacity.capacity_type_id) {
                           if (capacityType.editable_spaces) {
                              capacity.max_spaces = 0;
                           } else {
                              capacity.max_spaces = capacityType.spaces * capacity.quantity;
                           }
                           if (capacity.max_beds > capacityType.bed_quantity){
                              capacity.max_beds = capacityType.bed_quantity;
                           }
                           if (capacity.max_beds == 0){
                              capacity.max_beds = 1;
                           }
                        }
                     });   
                  });
                  capacities_on_register.forEach(capacity => {
                     max_areas += capacity.quantity;
                     max_spaces += capacity.max_spaces;
                     if (capacity.max_beds != null || typeof capacity.max_beds != 'undefined') {
                        max_beds += capacity.max_beds;
                     }
                  });
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
                  this.establishment_selected.workers_on_establishment.forEach(element => {
                     if (element.is_max) {
                        if (element.gender_id == 1) {
                           this.total_male = element.count;
                        }
                        if (element.gender_id == 2) {
                           this.total_female = element.count;
                        }
                        this.total_workers += element.count;
                     }
                  });
                  this.rucEstablishmentRegisterSelected = r2.register as Register;
                  const information = {
                     para: r.name,
                     tramite: this.tipo_tramite.toUpperCase(),
                     estadoTramite: estadoTramite,
                     ruc: this.ruc_registro_selected.ruc.number,
                     nombreComercial: this.registerMinturSelected.establishment.commercially_known_name.toUpperCase(),
                     fechaSolicitud: today.toLocaleString(),
                     actividad: this.registerMinturSelected.activity.toUpperCase(),
                     clasificacion: clasificacion.toUpperCase(),
                     categoria: categoria.toUpperCase(),
                     tipoSolicitud: this.tipo_tramite.toUpperCase(),
                     provincia: provinciaName,
                     canton: cantonName,
                     parroquia: parroquiaName,
                     callePrincipal: this.registerMinturSelected.establishment.address_main_street.toUpperCase(),
                     calleInterseccion: this.registerMinturSelected.establishment.address_secondary_street.toUpperCase(),
                     numeracion: this.registerMinturSelected.establishment.address_number.toUpperCase(),
                     czDireccion: czDireccion,
                     czTelefono: czTelefono,
                     observaciones: decodeURIComponent(escape(observaciones.toString())),
                     thisYear:today.getFullYear()
                  };
                  this.mailerDataService.sendMail('fin_tramite_cz', r.email.toString(), 'Trámite Atendido', information).then( r => {
                     this.toastr.successToastr('Datos Guardados Satisfactoriamente', 'Coordinación');
                     this.guardandoTramite = false;
                     this.refresh();
                  }).catch( e => { console.log(e); });
               }).catch( e => { console.log(e); });
            }).catch( e => { console.log(e); });
         }
         if (this.activity == 'ALIMENTOS Y BEBIDAS') {
            this.registerABDataService.get_register_data(this.registerMinturSelected.register.id).then( r2 => {
               this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r3 => {
                  this.establishment_selected = r3.establishment as Establishment;
                  this.establishment_selected.workers_on_establishment = r3.workers_on_establishment as Worker[];
                  let max_spaces = 0;
                  let max_beds = 0;
                  let max_areas = 0;
                  const capacities_on_register = r2.capacities_on_register;
                  capacities_on_register.forEach(capacity => {
                     this.capacity_types.forEach(capacityType => {
                        if (capacityType.id == capacity.capacity_type_id) {
                           if (capacityType.editable_spaces) {
                              capacity.max_spaces = 0;
                           } else {
                              capacity.max_spaces = capacityType.spaces * capacity.quantity;
                           }
                           if (capacity.max_beds > capacityType.bed_quantity){
                              capacity.max_beds = capacityType.bed_quantity;
                           }
                           if (capacity.max_beds == 0){
                              capacity.max_beds = 1;
                           }
                        }
                     });   
                  });
                  capacities_on_register.forEach(capacity => {
                     max_areas += capacity.quantity;
                     max_spaces += capacity.max_spaces;
                     if (capacity.max_beds != null || typeof capacity.max_beds != 'undefined') {
                        max_beds += capacity.max_beds;
                     }
                  });
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
                  this.establishment_selected.workers_on_establishment.forEach(element => {
                     if (element.is_max) {
                        if (element.gender_id == 1) {
                           this.total_male = element.count;
                        }
                        if (element.gender_id == 2) {
                           this.total_female = element.count;
                        }
                        this.total_workers += element.count;
                     }
                  });
                  this.rucEstablishmentRegisterSelected = r2.register as Register;
                  const information = {
                     para: r.name,
                     tramite: this.tipo_tramite.toUpperCase(),
                     estadoTramite: estadoTramite,
                     ruc: this.ruc_registro_selected.ruc.number,
                     nombreComercial: this.registerMinturSelected.establishment.commercially_known_name.toUpperCase(),
                     fechaSolicitud: today.toLocaleString(),
                     actividad: this.registerMinturSelected.activity.toUpperCase(),
                     clasificacion: clasificacion.toUpperCase(),
                     categoria: categoria.toUpperCase(),
                     tipoSolicitud: this.tipo_tramite.toUpperCase(),
                     provincia: provinciaName,
                     canton: cantonName,
                     parroquia: parroquiaName,
                     callePrincipal: this.registerMinturSelected.establishment.address_main_street.toUpperCase(),
                     calleInterseccion: this.registerMinturSelected.establishment.address_secondary_street.toUpperCase(),
                     numeracion: this.registerMinturSelected.establishment.address_number.toUpperCase(),
                     czDireccion: czDireccion,
                     czTelefono: czTelefono,
                     observaciones: decodeURIComponent(escape(observaciones.toString())),
                     thisYear:today.getFullYear()
                  };
                  this.mailerDataService.sendMail('fin_tramite_cz', r.email.toString(), 'Trámite Atendido', information).then( r => {
                     this.toastr.successToastr('Datos Guardados Satisfactoriamente', 'Coordinación');
                     this.guardandoTramite = false;
                     this.refresh();
                  }).catch( e => { console.log(e); });
               }).catch( e => { console.log(e); });
            }).catch( e => { console.log(e); });
         }
      }).catch( e => { console.log(e); });
  }

  inactivar_into_catastro(pdfCertificadoInactivation) {
   let provincia = new Ubication();
   let canton = new Ubication();
   let parroquia = new Ubication();
   let zonal = new Ubication();
   this.userDataService.get(this.registerMinturSelected.establishment.contact_user_id).then( r => {
      this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r2 => {
         const actividad = this.registerMinturSelected.activity.toUpperCase();
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
         let iniciales_cordinador_zonal = '';
         this.user.name.split(' ').forEach(element => {
            iniciales_cordinador_zonal += element.substring(0, 1).toUpperCase();
         });
         let iniciales_cordinacion_zonal = '';
         const zonalName = zonal.name.split(' ');
         iniciales_cordinacion_zonal = zonalName[zonalName.length - 1].toUpperCase();
         const today = new Date();
         const information = {para: this.representante_legal.toUpperCase(),
            pdfBase64_certificado: pdfCertificadoInactivation,
            activity: actividad,
            tramite: this.tipo_tramite.toUpperCase(),
            ruc: this.ruc_registro_selected.ruc.number,         
            provincia: provincia.name.toUpperCase(),
            nombreComercial: r2.establishment.commercially_known_name.toUpperCase(),
            canton: canton.name.toUpperCase(),
            parroquia: parroquia.name.toUpperCase(),
            actividad: actividad,         
            callePrincipal: r2.establishment.address_main_street.toUpperCase(),
            calleInterseccion: r2.establishment.address_secondary_street.toUpperCase(),
            numeracion: r2.establishment.address_number.toUpperCase(),
            clasificacion: this.catastro_classification.toUpperCase(),
            categoria: this.catastro_category.toUpperCase(),
            tipoSolicitud: this.tipo_tramite.toUpperCase(),
            thisYear: today.getFullYear()};
            this.registerCatastroDataService.inactivate_register(this.registerMinturSelected.register_data_on_catastro.register_code.toUpperCase()).then(res_inac => {
            }).catch( e => { console.log(e); });
            this.mailerDataService.inactivar_email(r.email, 'Inactivación de Registro Turístico', information).then( respMail => {
               Swal.fire(
                  'Confirmado!',
                  'La solicitud de trámite, ha sido atendida satisfactoriamente.',
                  'success'
               );
               this.toastr.successToastr('Datos guardados satisfactoriamente', 'Coordinador');
               this.mostrarDataRegisterMintur = false;
               this.refresh();
            }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });
   }).catch( e => { console.log(e); });
  }

  catastrarRegistro(pdfTarifarioRack, pdfRegistro) {
   this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r2 => {
      const workers_on_establishment = r2.workers_on_establishment as Worker[];
      if (r2.establishment.as_turistic_register_date == null) {
         this.as_turistic_date = new Date();  
         this.establishmentDataService.set_register_date(this.registerMinturSelected.establishment.id).then( r => {

         }).catch( e => { console.log(e); }); 
      } else {
         this.as_turistic_date = new Date(r2.establishment.as_turistic_register_date.toString());
      }
      workers_on_establishment.forEach(worker => {
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
      workers_on_establishment.forEach(element => {
         if (element.is_max) {
            if (element.gender_id == 1) {
               this.total_male = element.count;
            }
            if (element.gender_id == 2) {
               this.total_female = element.count;
            }
         }
      });
      const today = new Date();
      const number_by_ruc = '000'.substr(0, 3 - this.registerMinturSelected.establishment.ruc_code_id.toString().length) + this.registerMinturSelected.establishment.ruc_code_id.toString();
      let numeric_register = '';
      if (this.activity == 'ALOJAMIENTO') {
         numeric_register = '2000000'.substr(0, 6 - this.idRegister.toString().length) + this.idRegister.toString();
      }
      if (this.activity == 'ALIMENTOS Y BEBIDAS') {
         numeric_register = '3000000'.substr(0, 6 - this.idRegister.toString().length) + this.idRegister.toString();
      }
      const code = this.ruc_registro_selected.ruc.number + '.' + number_by_ruc + '.' + numeric_register;
      let clasificacion: String = '';
      let categoria: String = '';
      let category: RegisterType = new RegisterType();
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
               if (element.name == 'Pendiente') {
                  clasificacion = 'NO TURÍSTICO';
                  categoria = 'NO TURÍSTICO';
               }
            }
         });
         if (categoria !== 'NO TURÍSTICO'){
            this.register_types_AB.forEach(element => {
               if (category.father_code == element.code) {
                  clasificacion = element.name;
               }
            });
         }
      }
      const czDireccion = datosZonal.address;
      const czTelefono = datosZonal.phone_number;
      const estado = this.stateTramiteId.toString();
      this.refreshMotivoTramite(estado);
      const newRegistroCatastro = new RegistroCatastro();
      this.userDataService.get(this.registerMinturSelected.establishment.contact_user_id).then( r => {
         if (this.activity == 'ALOJAMIENTO') {
            this.registerDataService.get_register_data(this.registerMinturSelected.register.id).then( r20 => {
               let max_spaces = 0;
               let max_beds = 0;
               let max_areas = 0;
               const capacities_on_register = r20.capacities_on_register;
               capacities_on_register.forEach(capacity => {
                  this.capacity_types.forEach(capacityType => {
                     if (capacityType.id == capacity.capacity_type_id) {
                        if (capacityType.editable_spaces) {
                           capacity.max_spaces = 0;
                        } else {
                           capacity.max_spaces = capacityType.spaces * capacity.quantity;
                        }
                        if (capacity.max_beds > capacityType.bed_quantity) {
                           capacity.max_beds = capacityType.bed_quantity;
                        }
                        if (capacity.max_beds == 0) {
                           capacity.max_beds = 1;
                        }
                     }
                  });
               });
               capacities_on_register.forEach(capacity => {
                  max_areas += capacity.quantity;
                  max_spaces += capacity.max_spaces;
                  if (capacity.max_beds != null || typeof capacity.max_beds != 'undefined') {
                     max_beds += capacity.max_beds;
                  }
               });
               newRegistroCatastro.activity = this.registerMinturSelected.activity.toUpperCase();
               newRegistroCatastro.address = this.registerMinturSelected.establishment.address_main_street + ' ' + this.registerMinturSelected.establishment.address_number + ' ' + this.registerMinturSelected.establishment.address_secondary_street;
               newRegistroCatastro.comercial_name = this.registerMinturSelected.establishment.commercially_known_name.toUpperCase();
               newRegistroCatastro.web = this.registerMinturSelected.establishment.url_web;
               newRegistroCatastro.ubication_main = provinciaName;
               newRegistroCatastro.ubication_sencond = cantonName;
               newRegistroCatastro.ubication_third = parroquiaName;
               newRegistroCatastro.as_turistic_date = this.as_turistic_date;
               newRegistroCatastro.category = categoria;
               newRegistroCatastro.classification = clasificacion;
               newRegistroCatastro.email = r.email;
               newRegistroCatastro.establishment_ruc_code = this.registerMinturSelected.establishment.ruc_code_id;
               newRegistroCatastro.establishment_state = 'ABIERTO';
               newRegistroCatastro.georeference_latitude = this.registerMinturSelected.establishment.address_map_latitude;
               newRegistroCatastro.georeference_longitude = this.registerMinturSelected.establishment.address_map_longitude;
               newRegistroCatastro.main_phone_number = r.main_phone_number;
               newRegistroCatastro.max_areas = max_areas;
               newRegistroCatastro.max_beds = max_beds;
               newRegistroCatastro.max_capacity = max_spaces;
               newRegistroCatastro.organization_type = this.organization_type;
               newRegistroCatastro.register_code = code;
               newRegistroCatastro.ruc = this.ruc_registro_selected.ruc.number;
               newRegistroCatastro.ruc_state = 'ABIERTO';
               newRegistroCatastro.secondary_phone_number = r.secondary_phone_number;
               newRegistroCatastro.system_source = 'SITURIN';
               newRegistroCatastro.total_female = this.total_female;
               newRegistroCatastro.total_male = this.total_male;
               this.establishment_property_types.forEach(element => {
                  if (element.id == this.registerMinturSelected.establishment.establishment_property_type_id) {
                     newRegistroCatastro.establishment_property_type = element.name;
                  }
               });
               newRegistroCatastro.legal_representant_identification = this.representante_legal;
               newRegistroCatastro.legal_representant_name = this.representante_legal;
               this.registerCatastroDataService.post(newRegistroCatastro).then( r5 => {
                  const information = {para: r.name.toUpperCase(),
                     pdfBase64_certificado: pdfRegistro,
                     pdfBase64_tarifario: pdfTarifarioRack,
                     activity: this.activity,
                     tramite: this.tipo_tramite.toUpperCase(),
                     ruc: newRegistroCatastro.ruc,
                     provincia: provinciaName.toUpperCase(),
                     nombreComercial: newRegistroCatastro.comercial_name,
                     canton: cantonName.toUpperCase(),
                     fechaRegistro: this.as_turistic_date.toLocaleDateString(),
                     parroquia: parroquiaName.toUpperCase(),
                     actividad: this.registerMinturSelected.activity.toUpperCase(),
                     callePrincipal: this.registerMinturSelected.establishment.address_main_street.toUpperCase(),
                     clasificacion: clasificacion.toUpperCase(),
                     calleInterseccion: this.registerMinturSelected.establishment.address_secondary_street.toUpperCase(),
                     categoria: categoria.toUpperCase(),
                     numeracion: this.registerMinturSelected.establishment.address_number.toUpperCase(),
                     tipoSolicitud: this.tipo_tramite.toUpperCase(),
                     thisYear: today.getFullYear()};
                  this.mailerDataService.entregar_documentos(r.email, 'Entrega de Documentos', information).then( respMail => {
                     Swal.fire(
                        'Confirmado!',
                        'La solicitud de trámite, ha sido atendida satisfactoriamente.',
                        'success'
                     );
                     this.toastr.successToastr('Datos guardados satisfactoriamente', 'Coordinador');
                     this.mostrarDataRegisterMintur = false;
                     this.refresh();
                  }).catch( e => { console.log(e); });
               }).catch( e => { console.log(e); });
            }).catch( e => { console.log(e); });
         }
         if (this.activity == 'ALIMENTOS Y BEBIDAS') {
            this.registerABDataService.get_register_data(this.registerMinturSelected.register.id).then( r20 => {
               const capacities_on_register = r20.capacities_on_register;
               let mesas = 0;
               let plazas = 0;
               capacities_on_register.forEach(capacity => {
                  mesas += capacity.quantity_tables;   
                  plazas += capacity.quantity_spaces;
               });
               newRegistroCatastro.activity = this.registerMinturSelected.activity.toUpperCase();
               newRegistroCatastro.address = this.registerMinturSelected.establishment.address_main_street + ' ' + this.registerMinturSelected.establishment.address_number + ' ' + this.registerMinturSelected.establishment.address_secondary_street;
               newRegistroCatastro.comercial_name = this.registerMinturSelected.establishment.commercially_known_name.toUpperCase();
               newRegistroCatastro.web = this.registerMinturSelected.establishment.url_web;
               newRegistroCatastro.ubication_main = provinciaName;
               newRegistroCatastro.ubication_sencond = cantonName;
               newRegistroCatastro.ubication_third = parroquiaName;
               newRegistroCatastro.as_turistic_date = this.as_turistic_date;
               newRegistroCatastro.category = categoria;
               newRegistroCatastro.classification = clasificacion;
               newRegistroCatastro.email = r.email;
               newRegistroCatastro.establishment_ruc_code = this.registerMinturSelected.establishment.ruc_code_id;
               newRegistroCatastro.establishment_state = 'ABIERTO';
               newRegistroCatastro.georeference_latitude = this.registerMinturSelected.establishment.address_map_latitude;
               newRegistroCatastro.georeference_longitude = this.registerMinturSelected.establishment.address_map_longitude;
               newRegistroCatastro.main_phone_number = r.main_phone_number;
               newRegistroCatastro.max_areas = 0;
               newRegistroCatastro.max_beds = mesas;
               newRegistroCatastro.max_capacity = plazas;
               newRegistroCatastro.organization_type = this.organization_type;
               newRegistroCatastro.register_code = code;
               newRegistroCatastro.ruc = this.ruc_registro_selected.ruc.number;
               newRegistroCatastro.ruc_state = 'ABIERTO';
               newRegistroCatastro.secondary_phone_number = r.secondary_phone_number;
               newRegistroCatastro.system_source = 'SITURIN';
               newRegistroCatastro.total_female = this.total_female;
               newRegistroCatastro.total_male = this.total_male;
               this.establishment_property_types.forEach(element => {
                  if (element.id == this.registerMinturSelected.establishment.establishment_property_type_id) {
                     newRegistroCatastro.establishment_property_type = element.name;
                  }
               });
               newRegistroCatastro.legal_representant_identification = this.representante_legal;
               newRegistroCatastro.legal_representant_name = this.representante_legal;
               this.registerCatastroDataService.post(newRegistroCatastro).then( r5 => {
                  const information = {para: r.name.toUpperCase(),
                     pdfBase64_certificado: pdfRegistro,
                     activity: this.activity,
                     tramite: this.tipo_tramite.toUpperCase(),
                     ruc: newRegistroCatastro.ruc,
                     provincia: provinciaName.toUpperCase(),
                     nombreComercial: newRegistroCatastro.comercial_name,
                     canton: cantonName.toUpperCase(),
                     fechaRegistro: this.as_turistic_date.toLocaleDateString(),
                     parroquia: parroquiaName.toUpperCase(),
                     actividad: this.registerMinturSelected.activity.toUpperCase(),
                     callePrincipal: this.registerMinturSelected.establishment.address_main_street.toUpperCase(),
                     clasificacion: clasificacion.toUpperCase(),
                     calleInterseccion: this.registerMinturSelected.establishment.address_secondary_street.toUpperCase(),
                     categoria: categoria.toUpperCase(),
                     numeracion: this.registerMinturSelected.establishment.address_number.toUpperCase(),
                     tipoSolicitud: this.tipo_tramite.toUpperCase(),
                     thisYear: today.getFullYear()};
                  this.mailerDataService.entregar_documentos(r.email, 'Entrega de Documentos', information).then( respMail => {
                     Swal.fire(
                        'Confirmado!',
                        'La solicitud de trámite, ha sido atendida satisfactoriamente.',
                        'success'
                     );
                     this.toastr.successToastr('Datos guardados satisfactoriamente', 'Coordinador');
                     this.mostrarDataRegisterMintur = false;
                     this.refresh();
                  }).catch( e => { console.log(e); });
               }).catch( e => { console.log(e); });
            }).catch( e => { console.log(e); });  
         }
      }).catch( e => { console.log(e); });
   }).catch( e => { console.log(e); });
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

  imprimirCertificadoInactivacion() {
   this.imprimiendo_certificado_inactivacion = true;
   let provincia = new Ubication();
   let canton = new Ubication();
   let parroquia = new Ubication();
   let zonal = new Ubication();
   this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r2 => {
      const actividad = this.registerMinturSelected.activity.toUpperCase();
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
      let iniciales_cordinador_zonal = '';
      this.user.name.split(' ').forEach(element => {
         iniciales_cordinador_zonal += element.substring(0, 1).toUpperCase();
      });
      let iniciales_cordinacion_zonal = '';
      const zonalName = zonal.name.split(' ');
      iniciales_cordinacion_zonal = zonalName[zonalName.length - 1].toUpperCase();
      const today = new Date();
      let qr_value = 'MT-CZ' + iniciales_cordinacion_zonal + '-' + this.ruc_registro_selected.ruc.number + '-' + r2.establishment.ruc_code_id + '-' + this.tipo_tramite + '-' + this.registerMinturSelected.activity.toUpperCase()  + '-' + iniciales_cordinador_zonal + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();   
      const params = [{canton: canton.name.toUpperCase()},
         {fecha: today.toLocaleDateString().toUpperCase()},
         {numero_registro: this.registerMinturSelected.register_data_on_catastro.register_code.toUpperCase()},
         {razon_social: this.razon_social.toUpperCase()},
         {nombre_comercial: r2.establishment.commercially_known_name.toUpperCase()},
         {representante_legal: this.representante_legal.toUpperCase()},
         {numero_establecimiento: this.registerMinturSelected.establishment.ruc_code_id.toUpperCase()},
         {ruc: this.ruc_registro_selected.ruc.number},
         {zonal: iniciales_cordinacion_zonal.toUpperCase()},
         {provincia: provincia.name.toUpperCase()},
         {parroquia: parroquia.name.toUpperCase()},
         {dirección: r2.establishment.address_main_street.toUpperCase() + ' ' + r2.establishment.address_number.toUpperCase() + ' ' + r2.establishment.address_secondary_street.toUpperCase()},
         {coordinador_zonal: this.user.name.toUpperCase()},
         {nombre_coordinador_zonal: this.user.name.toUpperCase()}];
      let document = new Documento();
      document.activity = actividad;
      document.code = qr_value;
      document.document_type = 'CERTIFICADO DE INACTIVACIÓN';
      let paramsToBuild = {
         template: 19, qr: true, qr_value: qr_value, params: params
      };
      document.procedure_id = this.tipo_tramite.toUpperCase();
      document.zonal = zonal.name;
      document.user = iniciales_cordinador_zonal;
      document.params = JSON.stringify(paramsToBuild);
      this.documentDataService.post(document).then().catch( e => { console.log(e); });
      this.exporterDataService.template(19, true, qr_value, params).then( r => {
         const byteCharacters = atob(r);
         const byteNumbers = new Array(byteCharacters.length);
         for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
         }
         const byteArray = new Uint8Array(byteNumbers);
         const blob = new Blob([byteArray], { type: 'application/pdf'});
         saveAs(blob, qr_value + '.pdf');
         this.imprimiendo_certificado_inactivacion = false;
      }).catch( e => { console.log(e); });
   }).catch( e => { console.log(e); });
  }

  imprimirRegistro() {
   this.imprimiendo_registro = true;
   if (this.activity == 'ALOJAMIENTO') {
      this.registerDataService.get_register_data(this.registerMinturSelected.register.id).then( registerDataIncomming => {
         this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r2 => {
            const capacities = [];
            const capacities_on_register = registerDataIncomming.capacities_on_register;
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
            let iniciales_cordinador_zonal = '';
            this.user.name.split(' ').forEach(element => {
               iniciales_cordinador_zonal += element.substring(0, 1).toUpperCase();
            });
            let iniciales_cordinacion_zonal = '';
            const zonalName = zonal.name.split(' ');
            iniciales_cordinacion_zonal = zonalName[zonalName.length - 1].toUpperCase();
            const today = new Date();
            let qr_value = 'MT-CZ' + iniciales_cordinacion_zonal + '-' + this.ruc_registro_selected.ruc.number + '-' + r2.establishment.ruc_code_id + '-' + this.tipo_tramite + '-' + this.registerMinturSelected.activity.toUpperCase()  + '-' + iniciales_cordinador_zonal + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
            const actividad = this.registerMinturSelected.activity.toUpperCase();
            let clasificacion = '';
            this.register_types.forEach(element => {
               if (element.id == registerDataIncomming.register.register_type_id) {
                  clasificacion = element.name.toString();
               }
            });
            capacities_on_register.forEach(capacity => {
               this.capacity_types.forEach(capacityType => {
                  if (capacityType.id == capacity.capacity_type_id) {
                     if (capacityType.editable_spaces) {
                     
                     } else {
                        capacity.max_spaces = capacityType.spaces * capacity.quantity;
                     }
                     if (capacity.max_beds > capacityType.bed_quantity){
                        capacity.max_beds = capacityType.bed_quantity;
                     }
                     if (capacity.max_beds == 0){
                        capacity.max_beds = 1;
                     }
                  }
               });   
            });
            let habitaciones = 0;
            let plazas = 0;
            capacities_on_register.forEach(capacity => {
               const newCapacity = {type: '', spaces: 0, habitaciones: 0};
               newCapacity.habitaciones = capacity.quantity;
               newCapacity.spaces = capacity.max_spaces;
               this.capacity_types.forEach(element => {
                     if (element.id == capacity.capacity_type_id) {
                        newCapacity.type = element.name.toString();
                     }
               });
               capacities.push(newCapacity);
            });
            capacities.forEach(capacity => {
               habitaciones += capacity.habitaciones;
               plazas += capacity.spaces;
            });
            const params = [{canton: canton.name.toUpperCase()},
               {fecha: today.toLocaleDateString().toUpperCase()},
               {fecha_registro: new Date(r2.establishment.as_turistic_register_date.toString()).toLocaleDateString().toUpperCase()},
               {numero_registro: registerDataIncomming.register.code.toUpperCase()},
               {razon_social: this.razon_social.toUpperCase()},
               {nombre_comercial: r2.establishment.commercially_known_name.toUpperCase()},
               {actividad: actividad},
               {categoria: clasificacion.toUpperCase()},
               {clasificacion: registerDataIncomming.register_category.name.toUpperCase()},
               {representant_legal: this.representante_legal.toUpperCase()},
               {ruc: this.ruc_registro_selected.ruc.number},
               {zonal: iniciales_cordinacion_zonal.toUpperCase()},
               {provincia: provincia.name.toUpperCase()},
               {parroquia: parroquia.name.toUpperCase()},
               {dirección: r2.establishment.address_main_street.toUpperCase() + ' ' + r2.establishment.address_number.toUpperCase() + ' ' + r2.establishment.address_secondary_street.toUpperCase()},
               {habitaciones: habitaciones},
               {plazas: plazas},
               {coordinador_zonal: this.user.name.toUpperCase()},
               {nombre_coordinador_zonal: this.user.name.toUpperCase()}];
            let document = new Documento();
            document.activity =actividad;
            document.code = qr_value;
            document.document_type = 'REGISTRO TURÍSTICO';
            let paramsToBuild = {
               template: 1, qr: true, qr_value: qr_value, params: params
            };
            document.procedure_id = this.tipo_tramite.toUpperCase();
            document.zonal = zonal.name;
            document.user = iniciales_cordinador_zonal;
            document.params = JSON.stringify(paramsToBuild);
            this.documentDataService.post(document).then().catch( e => { console.log(e); });
            this.exporterDataService.template(4, true, qr_value, params).then( r => {
               const byteCharacters = atob(r);
               const byteNumbers = new Array(byteCharacters.length);
               for (let i = 0; i < byteCharacters.length; i++) {
                  byteNumbers[i] = byteCharacters.charCodeAt(i);
               }
               const byteArray = new Uint8Array(byteNumbers);
               const blob = new Blob([byteArray], { type: 'application/pdf'});
               saveAs(blob, qr_value + '.pdf');
               this.imprimiendo_registro = false;
            }).catch( e => { console.log(e); });
         }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });   
   }
   if (this.activity == 'ALIMENTOS Y BEBIDAS') {
      this.registerABDataService.get_register_data(this.registerMinturSelected.register.id).then( registerDataIncomming => {
         this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r2 => {
            const capacities_on_register = registerDataIncomming.capacities_on_register;
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
            let iniciales_cordinador_zonal = '';
            this.user.name.split(' ').forEach(element => {
               iniciales_cordinador_zonal += element.substring(0, 1).toUpperCase();
            });
            let iniciales_cordinacion_zonal = '';
            const zonalName = zonal.name.split(' ');
            iniciales_cordinacion_zonal = zonalName[zonalName.length - 1].toUpperCase();
            const today = new Date();
            let qr_value = 'MT-CZ' + iniciales_cordinacion_zonal + '-' + this.ruc_registro_selected.ruc.number + '-' + r2.establishment.ruc_code_id + '-' + this.tipo_tramite + '-' + this.registerMinturSelected.activity.toUpperCase()  + '-' + iniciales_cordinador_zonal + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
            const actividad = this.registerMinturSelected.activity.toUpperCase();
            let clasificacion = '';
            let template_id = 15;
            this.register_types_AB.forEach(element => {
               if (element.id == registerDataIncomming.register.register_type_id) {
                  clasificacion = element.name.toString();
                  if (element.name == 'Pendiente') {
                     clasificacion = 'NO TURÍSTICO';
                     template_id = 16;
                  }
               }
            });
            let mesas = 0;
            let plazas = 0;
            capacities_on_register.forEach(capacity => {
               mesas += capacity.quantity_tables;   
               plazas += capacity.quantity_spaces;
            });
            let myClassificationID = 0;
            let muClassificationCode = '';
            let cuantos = 0;
            let cat_unica = false;
            this.register_types_AB.forEach(element => {
               if (element.id == registerDataIncomming.register.register_type_id) {
                  muClassificationCode = element.father_code.toString();
                  if (element.name.toLowerCase() == 'categoría única' || element.name.toLowerCase() == 'pendiente') {
                     cuantos = 0;
                     if (element.name.toLowerCase() == 'categoría única') {
                        cat_unica = true;
                     }
                  } else {
                     cuantos = Number(element.name.split('(')[1].split(')')[0]);
                  }
               }
            });
            this.register_types_AB.forEach(element => {
               if (element.code == muClassificationCode) {
                  myClassificationID = element.id;
               }
            });
            this.registerTypeImageDataService.get_by_register_type(myClassificationID).then( rti => {
               const nada = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAADGXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7ZdbkuQoDEX/WcUsAUkIieVgHhGzg1n+XDCZXVn9mOror4lIEwYssCR0JGdVGP/8PcNfuDhKDEnNc8k54kolFa6YeLyvunuKaff7StdZo1d5eC4wRIJR7kfPRz4gZ+znI29HT4VcPygq4yxcrwv1KGI/Bo78YUjoNhD7UVSPIuFjOd3P17Gci9vHI5z31vHpjPsOq0tinDWTJfSJo1kumDvHZIhbX47OxmW9pycUn5/DYysizzyEJO4+3V7KfVfchB7yRUgcc1hHL3LHNwYggwvwvJzYjviM5ktsHuNPrvCVY510eMH9nJ00CN8tfEqDPI5cPtHLz3HLw+cF0h/j3kw/eGTpaZhfPDJ52ogfsa57zu5zjvt0NWUcOZ9DPU5CYaOc/VpJsF/LaIZbMbfdCpqjXBpyrMcWL7RGhRiIJyXqVGkGGnvSqMHHxIMNI3Nj2TIHi8Jt40+r0WSTIh0pwNKQKgIpzxmOL7Ttlm2vkcNyJ2xlgjLCK//Zwlc2/arNuWqJKJyaoRswrzKEG4vc6rENRGieoOoO8KO9JuQBK0CoO8yOA9Z43SoupW+5JRu0YJ9ivIubrN/vL0UJthXOkABBzCRKmaIxGxEC6QBUKTqj0C4QIFXucJKTSAYbFAFMB7xjtPey8i3HVxIkVDLK0kGoAlZKivyx5MihqqJJVbOauhatWXIKqLCcLa/PbTWxZGrZzNyKVRdPrp7d3L14LVwEX2MtKMfipZRaYbNCc82hYn+F5OJLrnTplS+7/CpXbUiflpq23Kx5K6127tJRxz13695Lr4MGUmmkoWHkYcNHGXUi16bMNHXmadNnmfVJ7VD9rv0GNTrUeJNa++xJDVKzeww7X6BkMQMxTgTitgggoXkxi04p8SK3mMXCqAplOKmLTadYKXMKkgaxTnqy+0but7iFnH7Jjb9KLix0f0hucwtDP3D7AbW+frbbJnZX4YppFFQf1odX9rp+RWt4TP50fCt6K3oreit6K3oreiv6Hyua+OMB/1GGfwG0z7wIXV+vKgAAAYVpQ0NQSUNDIHByb2ZpbGUAAHicfZE9SMNQFIVPU0WRVgc7iHTIUJ2siIo4ShWLYKG0FVp1MHnpHzRpSFJcHAXXgoM/i1UHF2ddHVwFQfAHxMnRSdFFSrwvKbSI8cLjfZx3z+G9+wChUWGq2TUBqJplpOIxMZtbFXte4UM/ghhHWGKmnkgvZuBZX/fUTXUX5VnefX9WUMmbDPCJxHNMNyziDeKZTUvnvE8cYiVJIT4nHjPogsSPXJddfuNcdFjgmSEjk5onDhGLxQ6WO5iVDJV4mjiiqBrlC1mXFc5bnNVKjbXuyV8YyGsraa7TCiOOJSSQhAgZNZRRgYUo7RopJlJ0HvPwDzv+JLlkcpXByLGAKlRIjh/8D37P1ixMTbpJgRjQ/WLbHyNAzy7QrNv297FtN08A/zNwpbX91QYw+0l6va1FjoCBbeDiuq3Je8DlDjD0pEuG5Eh+WkKhALyf0TflgMFboG/NnVvrHKcPQIZmtXwDHBwCo0XKXvd4d2/n3P7tac3vB4jqcrCUFuZ/AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AEODS8gvRQmQQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAtSURBVHja7cExAQAAAMKg9U9tDB+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAgLMBWC8AAQZF06oAAAAASUVORK5CYII=';
               const unica = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAA1CAYAAAAeaETXAAAO0XpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarZlpclyxDYT/8xQ5AjeA5HG4gFW5QY6fD29GsiXbiVMVT0nz9BYuQKO78RzsX/+84R/8K61qqNK6DtXIvzrqyJODHl//xvM7xfr8fv7t+r6Wvp4PRd4XMqcK3+X1Z5vv+yfn5ccDH3Ok9fV86O8rub8Hel/4GLD4zJmD8/MiOZ9f59N7hWHY60BHbz8vdeVvW+k/fvLrTl/VaxH8HX4+URtROsJEJWcrqcTnd32toLx+Jj+J35zPfuTHueTwnMrvlRCQL9v7+I7x5wB9CfLHUfge/fqH4Of5vqN8i6W+Y8TBby8k+X3wnxD/NHH5XFH+ekH3R35+DfK9p99rr93NqkRU34iK4SM6/gw3EvZanseUT+NHOG7PZ/DpccZNyk/ccfHZaaRMVm5INZ000032fO+0WWLNlhvfOe9cnnO9tDzyfjJW/ZNubmWUUzo529lCKZzOn2tJz7zjmW+nzswncWtODJY8zX/6hP908X/5hHu3hyh5MKs8sWJd2ZHFMjxz/pu7SEi677zJE+CPzzv98SdgAVUyKE+YOxuccb2GWJJ+YKs8eS7cJ3y/SiiFdt4DsCDmFhYD7GuKmookTbHl3FIijp0ETVaeqY1FBpJIPiwy11I0h5Z79rl5pqXn3ixZs5+Gm0iEFC2N3IwySVatAn5a7WBoSpEqIipNepAhU4tWFVVt6iQ3G5TXpGlrrbfRZi+9dunaW+999DnyKHCgDB1t9DHGnDlMJpqMNbl/cmblVVZdsnS11ddYcwOfXbds3W33PfY8+ZQDTRw97fQzzrQUDKawamJqzboNmxes3XLrlau33X7HnZ9Ze2f1l8//kLX0zlp+MuX3tc+scTa09jFEcjoRzxkZyzWR8eYZANDZcxZ7qjV75jxncWSKQjKLFM9NOMkzRgqrpSw3febuR+b+Km9B+l/lLf+3zAVP3f8jc4HU/Zq332TtuM7tJ2OvKvSYxkL1cQ9rCWsJN2WWqat3JxyQvqQatRC9QJwwpRzQW1Y71McderMJiyScd++rSawQ7NYHKW7TWp91nylrdxZV1DmgGbFMtnjgtLltNeOveMkwCZQ7d7feGytKWolRsbWFVBHaVe08aJC+WdJKd4x9md4Ioa9uwYpiEF/vctcmRoXth721xDUmuzkj19pHZEU7CVnL9VRh3cLgd+U8TjrrpGraUdeZ2QGs3HMdO4Z0DNXXPudeEyisFUXWIMXlRLW5XGglMeDzLYktJqIe01AQhdlIWhgxdLWcVt93lDyXlWmnjI1K1uUP75EF/Pgq7WOVJMv67JrXWm2cpVucs1cjAWODiS9T174N/sgb8WlzMCkw1lWmC99Sz8io9y6eSg6/QPyU1bVG6cRDxO6t+n1DkHnteAhAIe5kKIo0QSHjp1bI173BK5vagPo9eLikYm3dVNplM9LuBXICPtmYgaDkf+d4FxNOq8Birh2BTzgXyAx5Hjht39ulLZPuAxU769oayF6eMEN/5hqdgAN4Bq/1nFrugbpJvxCwtvPxoSj7/RqSDd8KG5iPSLUx8prlUq63TGZbvgAZvq7ocQokSYB/foaJejYPdJ0HQB9WbjWtlq6ZW6c7HExiaUAc/fS50Pg50qlphtsovHL7TJR3mgKES2EekrOWgpPbAfcWsXwxIMMaM4i6NTyr7kkSGpLUwp0iG9YYbBZ5t1zO5qgVWQu2SYWMX+IA/w5IG3kCTqXqkXkWPwUU2tIWIpCLVttt9dZcCMC6lTwU4rnKK0fqB5Na81lZIrHjPMU7hyPpyWSwzUKLZWK8+zvUzx02REh6ItjtGcQu03F1uTVvPiSBhWg8ebbCvjuTk2k8BT64kSSdNkhMdJ24cXrIcWeOhE7cm9heMNDXS+HHNccwk1gGj5PEUoXl5lEdHXMX9D7aMauXnOabsq48qIneIPi9Q9WLGcCX2dyNQWHetV1TVlpPJIhJd1nSNpCHc3LtByvEvKmc40xHZBPIhl+QAlPxKK2EykQgPSPoGUe4kaUtAz8DTdru3FhTI4PlAhluWDNbT4Hqi3D2pm7jnAOR2MbcxN8UPqP2drLLLxIinqCTUz4wGks1mTVlgkqeguk0BiT8FO+hIgSKrwJzTwimdJh77N3X7WCR8F5d0wgHx9WoqMU+Uxs51IIgdFgLBVgGW0CMzDBZiiJJyzr1Az+jHJGQSJ0AFZ3fwB1WBZC5j5x6GJr7gf9z33l2g+PuR/qIpW7tx9IeYBUq6Av/DdUnRHEDMnTkeOfIzAEm0IomGrZBT1xqXQ8yrYS7UngOTbnDQYXemSL9ma4DnYaJtCzYYBLHHABzPLp2GegzWlOgbnrSVg7rt8iGWxpOYSALu9MXunYQoUGwp8qElwYrrAF3YuqZ1gLGLyJl2/FnUMZyXRiSccMUSCfYw7m0QCAPxzmxGOzo5Bj+ih3J0M/sywCf7AtWt7EMp1rZg7mE3mO/+H5HErypN6/9jLg5s/VrCBCibUm9wI82L74iKCXEG74y7y/E+yyrP/W+MDHfWRPsveh1hE92fTC89qvCcmk6nsHkQAnWKdHzxKz1uqla/ByqWWnfjvfbQ4PT7EGA7LVnyiq+V7Nc8TmaYNK/K5V1a6JfxxrYa+aCFjE8oQnxIqgUDzHu8MLApYFiIzVYlLMNwwl5dFsZ3TSGGPg/mo1DELpbXmiJYGqAGJax1D4bZElXgTXAbFXQcLjDaw97TUHJsoZzwY+ZcxT3XwoFt3NZi92AsRMAwd3J00CTqe0VG3S4zunHwNALhhr2vxrydg9WE6aQ8ZKxIoGj546DFwGRj771+wzDjh7MqDr0GPQ3dNwQlb1csmEYNAf5hCKgfUKXxJG34TGmIBdA51A/W/90yaO+A0zphIkdclKG3Nh6x8hcSb5K14aGY6Ilhj/QZsr7YtHa5pGrTP6IEfYYB+NjOQT1rjSWtzTDixfzkd1osw4u12GpwzkRkq8kFlpUogFzn+1sHdI3I8Q3ptcgKQgfzMcMx5RGmxu9caRwF0XdDEFi7JgRg0cAQmPRgAqzRyJxuHjCwg3sq1GtR3AFCPNwSWfhEKAmkwPd2ijcRDK7v5toAaDAPLtM1kdbYenIgl13vd6G6KO8reGsj5tHLlh3bBJyiAt/7wSJpo+gpTT8MojIeRO8zgouzgBFGoO6qc6A5MzY7lQABfeWyXSZ3he7rWfBmF4ibm8cHs2aR44yGBPo4nAJJ4qSFlSCDwbh7HAmSBDlYecUGDR/FH1ZtQVKpzVfzXVRtEmV1/xmAmfuq8g8x+pizMDD3cqDcAP2GoGfYgdncI1XsFILo7mTBsj0QI3CgXnpEgx7fFrG/dBH4M3cXHuLAp7msHNfGdQAedAO42CIlNpxj3MupbeR7pIwXFDifoj6umfJepBcOEQweNQs3YvW7U2NVFqvi0+tBUXAwx9ih9c0AOHdAm1op2OAtyn+4w0B7H1pAGjPIvZmYNLGoKfdXmG3Q1vwIGlkqyidMtz0eMI5wLnS9uBTPLprKEF8+IH5my4lB9i+UHanxWnJzXA6LiOVWluuR2DqJMmHhgmignmRbrPDNrGAMbof+sHh4TuJ/z2HW4c0hhuV9eja647nOpv8uANSyle3cdNChI8aoUStJxbb8ZkaJDshjuacdE8PfeMgVuReVmg0i252HlF0QHsRevPZlz9XNo6sRRcQmYk2aLIMJz2MC9VPT0spgFiIeg9aPhw2dZIXJgD9RtrhKMdGewj0TZ9wkBMo3xDoLTEsXOiYW42Gk01GGslEJljwbH+m3vrpj/19iHN9gE2+O+RPQn56d77FG5hcX8HGzHtbgxHB/L4uejLCc/25Sof5XCfk2LiMw7QzJ8idLLmkQRiLv2zpXpTE1xWv+VtsrHK2QIY26WhuR4+HEi806MGJJLxFCW/alj1pbHfPL/ohTlYgQzhN9h74PAgaXUMGWGzB8Jj4+4mdHwtE38/8KmV4Jw1NXiogesfnG0xwMD3owdNh4IFh2C7lNEwwDGkUqhaVAs6RBsr1OZuiDlY0esfj1dZgf1QUmz/T6HghhKmc4LF26XEv2KgSrEw77lY30lkp9UpFEHx2Yt5x+Y0YvmQ04BgRt3t4ki5uj11T0B6hoLHYNGwZRGCznd5714KVZ8twqNPElJOHUq4VXgIVPjP1APlDca3uB1pzrleblScSs3DPzeGKr46uiXgt9XZlPO6xzIZRR03mKHUk7PEtlboG8QwztuBLDDXJtHe0UQrheQnivJv3Vd4wu0rQZcmgeuCiDnkMcz7iDpgQasBnuMfzLlXhdG/2qEnaZ60nU6UHU/NQGhReC9tyBqP/8NcFoVhD91gg0CiObH8b1qqCBZieq3BmS09bgbzQEJkzAQ+cnP3Nlb/PAyUp9IthoNfzl2uIfkEL8V2An44Z5RgYHow3fVycdA1dDsR52KE2X6hyVSZC5a2ooNM4FCDqpDsRZ7RqJ1gDF7hVBiNU2gDKDwJPZAifa0zt3sHb1UObsSE2toybVOQplZQw1EixDqf2uadtfyPiFnuWOTugIpjvEZrvgSjVeaIEcF7US5++AUKS7iZPUarnjUt8JMjfctJmwe12InJJA/XqIMwRx1ii+CNao0EzjWqUQrtKf4R98f/v8L7Ty3bN11P53X+YSxouuvg7u3S8sVx1hws5wOgURZq9uM8XKDnTpNXuHQA+atbib7L8fziY9mJ6U98UlFthL3BKep+Ap6koGb+hATdmULqMMmG6PT6M1/AGM2bqmZDgpJyLoa6xcSLbfQcxwke/7VqsFLhT6CuUmHieQzrKkeF4waKzBejbUkL8YD+PHwu8vRUNlE/hSYpVNQ3P2Wu9UjyM4q9taAkKo+AV0ZZWD9Xq71zobU++uMNCSHvAniI64tPAPxoXHAcHXAZ6tjXx0QDK3T/2io3Bu2iqlxo+Iw+8K/hWf8NO6NJ+Q0OdjQYS1qTXhz/AIgVxxN/ffXGsw30kWYaNZ90rKN4zY5l6ThsvQPtH8WEVQEyxdKvL46lgEo/Hao5zYpxUb8FcIwSOSgdF8LYi/BsydsjzSvqsggAAAYZpQ0NQSUNDIHByb2ZpbGUAAHicfZE7SMNQFIb/pooP6gPsIOKQoTpZkCriKFUsgoXSVmjVweSmL2jSkKS4OAquBQcfi1UHF2ddHVwFQfAB4uTopOgiJZ6bFFrEeOByP/57/p97zwWEepmpZsckoGqWkYxFxUx2Vex6hQ/9GEQPIhIz9XhqMQ3P+rqnbqq7MM/y7vuz+pScyQCfSDzHdMMi3iCe2bR0zvvEQVaUFOJz4gmDLkj8yHXZ5TfOBYcFnhk00sl54iCxWGhjuY1Z0VCJp4lDiqpRvpBxWeG8xVktV1nznvyFgZy2kuI6rVHEsIQ4EhAho4oSyrAQpl0jxUSSzqMe/hHHnyCXTK4SGDkWUIEKyfGD/8Hv2Zr5qYibFIgCnS+2/TEGdO0CjZptfx/bduME8D8DV1rLX6kDs5+k11pa6AgY2AYurluavAdc7gDDT7pkSI7kpyXk88D7GX1TFhi6BXrX3Lk1z3H6AKRpVss3wMEhMF6g7HWPd3e3z+3fnub8fgBq0HKkSlC+YgAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAPYQAAD2EBqD+naQAAAAd0SU1FB+QBDhAWDJW29zsAAA/kSURBVHja7V1pVJRH1n6q6W5otBk2CSKLjNK2ibhBAiIGECFx4+SIEh0zSXRQDDlj4vLNkIBJNGKCW2bOuIFLJuZE54jHLaODsihicAFUNkXCokCDLd0u7EI39f1wMkd4q1mkG7uhn5+3+n273qp66ta9t+oWoZRCm6iqqqKZmZkIDAyMs7GxiYIRRhgQiDYJUV9fj/Xrv6IKhQI8Hg8eHp54661gjB7tRoxNbcSgIoRarcbmzXH0zp07nDJXV1csXboUTk7ORmIYodfgaetFBw8eZJKBEAJ3d3c4OjoZyWCE3oOvjZekpCTT9PQLHLlIJMKyZcsxefJkIxmMGByEKCwspIcPH+bIHRwcsHLlJ7C3tzeSwYjBQQi5XE537doJtVrdQe7p6Ynw8GXEzMzM2MJGDA5CUEpx8uRJEEI62Avz58/H7NlzjFrBCIOEVrxMLS0tUCgUFAAcHR2NZDBicBPCCCMGCnjGJjDCiOdsCLVajQcPHnDUhKWlJRGJRDr508ePH/++ubm5tENF+PycYcOGefb2Xa2trVAqlf1a/4cPHy5/+vRp/PMyoVD4QltVNNXfxsaGCIXCfhkEarUaNTU1tKamBk1NjWhqaoJKpYKpqRnEYjHs7Ozg4OCgs/bsDe7fr+EsaoRCQaKNjW2YVpZMtbW1R9auXbOgc0F4eDh8fafpxB7YseMfNDs7u4NsxIgRiI3d1Ov/KywspFu2bObIJRIJoqI+Izye9pXgd99tp7m5uR1kUqkUUVGfaa3+UVGfQSqV6sweq62tzc7OzvLIycnB3bt3oVKpuh4ohMDZ2Rnjxo2Dl5c3nJ37f9dBfn4+3bZtK0cuFAqxfft3ZOjQoX3XEANV9RUXF+P48eM0NDTUaOQ/hzt37tCffz6FgoKCXj1HKcW9e/dw7949nD59Gk5OznTmzJnw8vIiJiYm/VL3s2eTNGrZ8+fT6Ny5IX3u6wFtQ/z73z/j1q1bRq8BnsWM4uLi6DffbOo1GViorKxAQkI8oqOjaX5+vs7bWCaT0a7qnZqayomHGQnBmNXi4/egrq5u0BKBUor//OcMjYmJxu3bt3Sxpse2bVuxf/9++vTpUx1qh7Pd2aW4cuVKn4nJH+gD4smTJ0hIiKdr1qwlzwcRBwPa2tqwd28CvXbtWrf2gYODA1xcXGBvbw9z8yEQCARobm6GQqFAVVUlSkpKurQzMjIuoqyslK5ZszbC2to6QZvfUVdXh8uXM3u0pJo6daqREN2hoKAAZ86cpoMpgt7S0oKtW7fQkpISjb+xtrZGYOAMeHt7deulefr0KXJycuiFC+dRXFysaVmDrVu3xsfGxiZoc/JJS0ulbW1tHQcun88haEVFBYqKimhfnBH8wTJAjh07hjFjpHT06NEDnhRqtRo7dvxDIxnMzMwQGjofAQEBhM/v2RAwNTWFj48P8fHxQVFRET18+BDu3bvH0TRhYWHQJhna2tqQlpbGkS9atAjHjh1DY2NjB3lSUhKkUqnRhujJINm9ezenAQciDh78QaMBKpFIEBsbmxgUFNRjMnSGVColX375FZk3L7TD4A8LC8PEiRO1OuFcvpxJO9uAYrEYb77pR/z8/Dm/z829CblcTo2E6AGUSgUOHNg/oL1ON27coOnp6cwyLy8v/OUvfyXaCGLxeDyEhISQ1avXQCgUwtfXFzNnztK69mUZ0/7+/hAIBAgMDIzrHGeilOLcuXNGDdEZQUFBTHlOTg5SUlIGJCkaGxvx/fcHmGWTJ0/GihUfvbBW0AR3d3cSHR2DDz9conUy5OfnU5lM1kFmYmKCgIDpEQBgY2MT5eHB3dxw6VLGC68EBiwhPDw8MWPGDGbZv/51GBUVFQOOFElJSZTlYnZ0dMSKFR/pzMvm4uKidaL95jXiEtsDz3uxgoODmQ6ACxcuUCMhOmHhwkXE2dmZI1epVNi1aydaWloGzLc2NDQgOZm7VDAxMcGyZcvQX/uitAVNgbjOmt/NzY24urpyfpeamvJCgboBTQg+n4/IyI/BOrl3//59HDz4w4DREpcuZVAWwf38/ODiMtLgPGss28HFZSQkEgnhkoSrJR4+fIisrGvUSIhOsLe3J++//z6zLDMzE5cuZQwIUly9epU5IcyZMzfC0L5FUyAuKGiGJmcBsbS07BGpBj0hAMDHZyrx9fVllv3444+oqakxaFIolYoj5eXlHPn48eOh7ahxf4AViBOLxfD2nsLUdCYmJpg+fTpHXl5ejuLiO9RICAb++Mf3ib39cKYBtmvXTnTuAENCaWnZApb8jTfeMLhvUalUzECcv38AujLcAwKmMw373mqJQUMIU1NTfPxxJAQCAaessrIShw4dMlgtcffuXabczU0SZ2jfkpn5C8dT9l8NENTVc2KxGFOmTOHIr1+/jtra2mwjIRhwcnImixb9gVl2/nwasrKyDJIUcvl9jmzIkCEwxGTTrBndw8MDVlZWKd09y3LBPgvUnfUwEkIDpk+fTjw92SdVDxzY36vZRF/ACkKxjEx9BysQ98yYDu7xhMfax5SRkYHm5mYjITRh6dI/EVtbW468ubkZe/bs9tDGQZP+BKuzRSJzg+uXc+fYrlY3t55njw8Ofosja2lpQXp6zwJ1g5IQ5ubm+OijSLCOPpaWluLo0USDWjqxzo2r1SqD6pPqahnNz89naIegXr1n0qRJZNiwYRx5cnIK2tvbjYTQhFGjRpHQ0FBmWVJSEvLy8qjhEHwIR9bU1GRQ/ZGUxNUOFhYW8Pb27lVQkRDCJJFSqUB2djY1EqILzJw5i7i7uzMNsb17E/D48ePfG8J3DB06hDEAlN1m0tAXaArE+fv740X2SE2b9iYzr7CmJAUdCKFpv5cuE/qx3v0yjncSQrBs2XJmlLO+vh579uwuNYTMhg4ODhyZSqWCTFZlEFouLS2NE4h75moNHPUi7xOJRJg2bRpzOVxSUtJlm/D4fEEY21DTncplqXNWfKA/YGFhgYiICCYhi4qKcPLkSb0fVC4uI5ny3Nw8vSfDs0BcKkfu6ekJS0vLshd974wZQcw+7S5Qx9eUsr6hoUFnjcB6t6mp6UvrlLFjXyVz54bQU6dOcspOnToJqVRKdZk0TBv2EI/Ho52NxqtXryAkJESvCcEKxAHPgqWbN8f1aTISCARobW3tIMvJyYZSqTii6ZAU39TUFCKRiOO6UygUOlouUTx8qOTIraysXmrHvPPOO6SoqIgWF3e8Fqy9vR3x8XuwYcPXEIvFejmoxGIxpFIpbt3qmGZGJpMhPz+furu76y2ZNc3Y1dXVqK6u1vr/tbe3Izk5ecHChYs0G9V2dq9wClj3xWkDMpmMsgJJr7zyykvtGB6PhxUrVkSw0iE+evQIe/fupfpsT3h5eTHlx48fg77Wu6CggBmI0zXS09M1noXhAYCr60iml+L+/ftUB43AlI8c6frSO8ja2johPDycWZaXl4uzZ5P0lhFTpvgQCwsLjrysrAzJycl6We+eeH10gebmZly8mE41EuLVV1/rlTrri7pKTeVuSTExMWEe/HgZmDhxEmFFOwEgMTER5eXlejm4hEIhZs6cxSw7ejQRd+/e1at6awrE9ReSk5OZmpMPAOPHjydCoZB2NkAyMi5i9uzZR2xttZNq/JdfLtHa2lqOXCodC3Nz/dlqEBYWRoqL79DOu0jVajV27dr50u0dTQgMDCRpaamcNm5tbcX27dsRExPz0M7Ozlrb/3vz5k0qkUhIb/qQFYgTCARYufITrXsc09Mv4PLlyx1ktbW1uH49h3p4eBIOIczMzODl5Y2MjIsdHlKpVNi5c8eC6OgY9PUQeXV1Nf3pp5+YZQEBAXo1sP579PTRF1+ss+q81qytrQWL1PqiJcLDl+Hbb7/hzH51dU+wceNGq9WrV9ORI7VzpLS9vR1Hjx6lZ86chkQioWvX/l+P7rSor69nBuK8vb2hCweApaUlvXLlCqdNkpKS0Dlrx/8i1bNnz2bu7SkvL8fu3bs42qM3kMvl9O9//xvTkHFwGKGX91jb2dlZL1myBIaGMWPGkFmz2Eunuron2LQpFufOne2zg6C6Wka3bNlCz5w5DeDZ9QM7duygPdkYmZrKPREH9HxXa29hb29P3N3Hc+S//vorZwnMe/4hTRXKycnB119/Tauqeh/5vH49h27YsB5yuZxZvnjxH6CLS02047nxJm++6WdwpJg/fwHRdFqutbUVhw4dwoYN62leXm6v+1OpVH67b98+GhMTw8kmnpeXi337uvbGaQrESSRjdHoJC+usBMuw53dsyPmksLCQVlZWcB6srKzAunUx8PR8nfr7+8PNzU2jemxoaEBhYSE9ezYJZWVlXVbytdfG6XVGiPfee4+UlJTQ6mqZwRCCEILlyyNIc3OzRsO1vLwc27dvx/Dhw6mXlxfc3cfDycmJ2acKheLI7du3F2RnZ6GgoKDL9C5CoSkopRq34mgKxPV2V2tvMW7cOOLgMILTj1lZWQgLe3f5b2fP+Z3XzqtWrYqIjd0Yr1Ryg2eUUmRlXUNW1jXw+Xzq7OwMCwsLDB0qRnu7GvX19Xj06BFkMlm3vu8JEybg3XcX6n16FKFQiMjISGzYsB59WTa+DDvo009XkYMHf9CY2hIAampqcOLECZw4cQI8Ho9aW1vD3NwcAoEALS0tUCqVPcpfxePxMG9eKObM6TrDOivNpLW1NTw8PHQ+FoKDg/HPf37PcZSkpKTEh4WFJXRYMj1XuYTPP/88kbVhrLPqKysrw82bN3HpUgYyMzORn5+Pqqqqbsnw+utv4M9/XtlvVzH1FY6OjmTx4sUGt3QyMTHBkiVLyQcffABNW3Q6G8kKhQIVFRUoLS2FTCbrERlsbW0RFRXVLRkKCgpoVVUVyzvWL8tmHx8fMmTIEKYX6rfLXpi1sLGxDVu37gvi6ztN67PWwoWLEBkZqZPUh7qEn58/0RQN1ncEBEwnsbGxiRMmTNC69gwJCcGmTd8QiWRMtzM8KxAnFArh5+ffLysFoVAIf3+uR7OxsREZGc/yc2mkpUgkQnh4OImOjulTvv3fZiofn6mIi4tLfPvttw32Jp8PP1zCPI1lCLCxsQ1btWo1+fLLrzBp0qQ+bbcXi8WYM2cOtm7dRubNC+2Rq1VTIM7bewq0cXtoTxEYGBjBWpkkJ58DpbT7C1Pc3NxIVNRnqK6W0atXryEvLxeVlZXdHj4xMzPDqFGjMGHCRHh7exELi9/B0CESiRAZ+TFiYzcazOGbznB1dSWffPIpnjx5guzsbHrjxnWUl5d3my172LBhGDv2VUyePAnu7uN7vdzVtOtB18Y0yyTw9PSM75zpUC6X48aNG5S8iD9apVJBLpdTpVKJhoYGtLW1gZBnHgaxWAxbW1vY2dkNujvdDBlKpfLbBw/kf21qakJTU/P/JjUrKysMHz6cufYeiPh/fme3TfQhihIAAAAASUVORK5CYII=';
               let c1 = 'data:' + rti.register_type_image_file_type + ';base64,' + rti.register_type_image_file;
               let c2 = 'data:' + rti.register_type_image_file_type + ';base64,' + rti.register_type_image_file;
               let c3 = 'data:' + rti.register_type_image_file_type + ';base64,' + rti.register_type_image_file;
               let c4 = 'data:' + rti.register_type_image_file_type + ';base64,' + rti.register_type_image_file;
               let c5 = 'data:' + rti.register_type_image_file_type + ';base64,' + rti.register_type_image_file;
               if (cuantos == 0) {
                  c2 = nada;
                  c3 = nada;
                  c4 = nada;
                  c5 = nada;
               }
               if (cat_unica) {
                  c5 = unica;
               }
               if (cuantos == 1) {
                  c2 = nada;
                  c3 = nada;
                  c4 = nada;
                  c5 = nada;
               }
               if (cuantos == 2) {
                  c3 = nada;
                  c4 = nada;
                  c5 = nada;
               }
               if (cuantos == 3) {
                  c4 = nada;
                  c5 = nada;
               }
               if (cuantos == 4) {
                  c5 = nada;
               }
               const params = [{canton: canton.name.toUpperCase()},
                  {fecha: today.toLocaleDateString().toUpperCase()},
                  {fecha_registro: new Date(r2.establishment.as_turistic_register_date.toString()).toLocaleDateString().toUpperCase()},
                  {numero_registro: registerDataIncomming.register.code.toUpperCase()},
                  {razon_social: this.razon_social.toUpperCase()},
                  {nombre_comercial: r2.establishment.commercially_known_name.toUpperCase()},
                  {actividad: actividad},
                  {categoria: clasificacion.toUpperCase()},
                  {clasificacion: registerDataIncomming.register_category.name.toUpperCase()},
                  {representant_legal: this.representante_legal.toUpperCase()},
                  {ruc: this.ruc_registro_selected.ruc.number},
                  {zonal: iniciales_cordinacion_zonal.toUpperCase()},
                  {provincia: provincia.name.toUpperCase()},
                  {parroquia: parroquia.name.toUpperCase()},
                  {dirección: r2.establishment.address_main_street.toUpperCase() + ' ' + r2.establishment.address_number.toUpperCase() + ' ' + r2.establishment.address_secondary_street.toUpperCase()},
                  {mesas: mesas},
                  {plazas: plazas},
                  {c1: c1},
                  {c2: c2},
                  {c3: c3},
                  {c4: c4},
                  {c5: c5},
                  {qrcode: '**main_qr_code**'},
                  {coordinador_zonal: this.user.name.toUpperCase()},
                  {nombre_coordinador_zonal: this.user.name.toUpperCase()}];
               let document = new Documento();
               document.activity =actividad;
               document.code = qr_value;
               document.document_type = 'REGISTRO TURÍSTICO';
               let paramsToBuild = {
                  template: 1, qr: true, qr_value: qr_value, params: params
               };
               document.procedure_id = this.tipo_tramite.toUpperCase();
               document.zonal = zonal.name;
               document.user = iniciales_cordinador_zonal;
               document.params = JSON.stringify(paramsToBuild);
               this.documentDataService.post(document).then().catch( e => { console.log(e); });
               this.exporterDataService.template(template_id, true, qr_value, params).then( r => {
                  const byteCharacters = atob(r);
                  const byteNumbers = new Array(byteCharacters.length);
                  for (let i = 0; i < byteCharacters.length; i++) {
                     byteNumbers[i] = byteCharacters.charCodeAt(i);
                  }
                  const byteArray = new Uint8Array(byteNumbers);
                  const blob = new Blob([byteArray], { type: 'application/pdf'});
                  saveAs(blob, qr_value + '.pdf');
                  this.imprimiendo_registro = false;
               }).catch( e => { console.log(e); });
            }).catch( e => {console.log(e);} );
         }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });
   }
  }

  BandejaToCSV() {
   let output = '';
   this.columns.forEach(column => {
      output += column.title + ';';
   });
   output += '\n';
   this.data.forEach(row => {
      output += row.selected + ';' +
      row.number + ';' +
      row.ruc_code_id + ';' +
      row.establishment + ';' +
      row.status + ';' +
      row.actividad + ';' +
      row.provincia + ';' +
      row.canton + ';' +
      row.parroquia + ';' +
      row.address + ';' +
      row.category + ';' +
      row.created_at + ';' +
      row.code + '\n';
   });
   const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
   const fecha = new Date();
   saveAs(blob, fecha.toLocaleDateString() + '_Bandejas.csv');
  }

  imprimirTarifarioRack() {
   this.imprimiendo_tarifario = true;
   this.registerDataService.get_register_data(this.registerMinturSelected.register.id).then( r0 => {
      this.establishmentDataService.get_filtered(this.registerMinturSelected.establishment.id).then( r2 => {
         this.registerDataService.get_tarifario(this.registerMinturSelected.register.id).then( r3 => {
            this.tarifarioResponse = r3 as Tariff[];
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
            let iniciales_cordinador_zonal = '';
            this.user.name.split(' ').forEach(element => {
               iniciales_cordinador_zonal += element.substring(0, 1).toUpperCase();
            });
            let iniciales_cordinacion_zonal = '';
            const zonalName = zonal.name.split(' ');
            iniciales_cordinacion_zonal = zonalName[zonalName.length - 1].toUpperCase();
            const today = new Date();
            let qr_value = 'MT-CZ' + iniciales_cordinacion_zonal + '-' + this.ruc_registro_selected.ruc.number + '-' + r2.establishment.ruc_code_id + '-TARIFARIO-RACK-' + this.registerMinturSelected.activity.toUpperCase() + '-' + iniciales_cordinador_zonal + '-' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
            const actividad = this.registerMinturSelected.activity.toUpperCase();
            let clasificacion = '';
            this.register_types.forEach(element => {
               if (element.id == r0.register.register_type_id) {
                  clasificacion = element.name.toString();
               }
            });
            const params = [{canton: canton.name.toUpperCase()},
               {fecha: today.toLocaleDateString().toUpperCase()},
               {nombre_comercial: r2.establishment.commercially_known_name.toUpperCase()},
               {ruc: this.ruc_registro_selected.ruc.number},
               {razon_social: this.razon_social.toUpperCase()},
               {provincia: provincia.name.toUpperCase()},
               {direccion: r2.establishment.address_main_street.toUpperCase() + ' ' + r2.establishment.address_number.toUpperCase() + ' ' + r2.establishment.address_secondary_street.toUpperCase()},
               {categoria: clasificacion.toUpperCase()},
               {registro: r0.register.code.toUpperCase()},
               {representante_legal: this.representante_legal.toUpperCase()},
               {coordinador_zonal: this.user.name.toUpperCase()},
               {clasificacion: r0.register_category.name.toUpperCase()},
               {nombre_coordinador_zonal: this.user.name.toUpperCase()},
               {zonal: iniciales_cordinacion_zonal.toUpperCase()}];
            let document = new Documento();
            document.activity =actividad;
            document.code = qr_value;
            document.document_type = 'TARIFARIO RACK';
            let paramsToBuild = {
               template: 1, qr: true, qr_value: qr_value, params: params
            }
            const tariffs = [];
            console.log(this.tarifarioResponse);
            const years = [];
            let last_year = 0;
            this.tarifarioResponse.forEach(tariffResponse => {
               let existe = false;
               years.forEach(year => {
                  if (year == tariffResponse.year) {
                     existe = true;
                     if (year > last_year) {
                        last_year = year;
                     }
                  }
               });
               if (!existe) {
                  years.push(tariffResponse.year);
               }
            });
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
                        element.year = tariff.year;
                     }
                  }
               });
            });
            document.procedure_id = this.tipo_tramite.toUpperCase();
            document.zonal = zonal.name;
            document.user = iniciales_cordinacion_zonal;
            document.params = JSON.stringify(paramsToBuild);
            this.documentDataService.post(document).then().catch( e => { console.log(e); });
            this.exporterDataService.getPDFTarifarioRack(tariffs, true, qr_value, params).then( r => {
               const byteCharacters = atob(r);
               const byteNumbers = new Array(byteCharacters.length);
               for (let i = 0; i < byteCharacters.length; i++) {
                  byteNumbers[i] = byteCharacters.charCodeAt(i);
               }
               const byteArray = new Uint8Array(byteNumbers);
               const blob = new Blob([byteArray], { type: 'application/pdf'});
               saveAs(blob, qr_value + '.pdf');
               this.imprimiendo_tarifario = false;
            }).catch( e => { console.log(e); });
         }).catch( e => { console.log(e); });
      }).catch( e => { console.log(e); });
   }).catch( e => { console.log(e); });
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
         if ((element.father_code == '-') && (element.name != 'Documentación Entregada')) {
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
   this.mostrarMotivoTramite = false;
   this.fechasNombramiento();
   this.pays = [];
   this.guardandoTramite = false;
   this.consumoCedula = false;
   this.consumoCedulaEstablishmentContact = false;
   this.consumoRuc = false;
   this.consumoCedulaRepresentanteLegal = false;
   this.mostrarDataRegisterMintur = false;
   this.SRIOK = false;
   this.REGCIVILOK = false;
   this.REGCIVILOKEstablishment = false;
   this.REGCIVILREPRESENTANTELEGALOK = false;
   this.guardando = false;
   this.ruc_registro_selected = new RegistroDataCarrier();
   this.registerApprovalFinanciero = new ApprovalState();
   this.registerApprovalInspector = new ApprovalState();
   this.registerApprovalCoordinador = new ApprovalState();
   this.rechazarTramiteFinanciero = false;
   this.getTaxPayerType();
   this.getGroupType();
   this.getCapacityTypes();
   this.getTariffs();
   this.getRucNameTypes();
   this.getZonalesEstablishment();
   this.getAllCapacityTypes();
   this.getEstablishmentPropertyType();
   this.getLanguage();
   this.getComplementaryFoodServiceType();
   this.getSystemNames();
   this.getCertificationTypes();
   this.getWorkerGroups();
   this.getRegiones();
   this.getEstablishmentCertificationTypesCategories();
   this.getComplementaryServiceTypeCategories();
   this.getZonales();
   this.getRegistersMintur();
   this.groupTypeSelected = new GroupType();
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
      this.getStates();
      this.getMyTeam();
   }).catch( e => { console.log(e); });
  }

  getMyTeam() {
   this.authLocationDataService.get_by_user_id(this.user.id).then(r2 => {
      const myAuthLocations = r2 as AuthLocation[];
      this.myAbleUbications = [];
      const cz: Ubication[] = [];
      const provincias: Ubication[] = [];
      myAuthLocations.forEach(element => {
         this.ubications.forEach( u => {
            if (u.id == element.id_ubication) {
               cz.push(u);
            }
         });
      });
      cz.forEach(coordinacion_zonal => {
         this.ubications.forEach( u => {
            if (coordinacion_zonal.code == u.father_code) {
               provincias.push(u);
            }
         });
      });
      const cantones: Ubication[] = [];
      provincias.forEach( p => {
         this.ubications.forEach( u => {
            if (p.code == u.father_code) {
               cantones.push(u);
            }
         });
      });
      const parroquia: Ubication[] = [];
      cantones.forEach( cant => {
         this.ubications.forEach( u => {
            if (cant.code == u.father_code) {
               parroquia.push(u);
            }
         });
      });
      cz.forEach( u => {
         this.myAbleUbications.push(u);
      });
      provincias.forEach( u => {
         this.myAbleUbications.push(u);
      });
      cantones.forEach( u => {
         this.myAbleUbications.push(u);
      });
      parroquia.forEach( u => {
         this.myAbleUbications.push(u);
      });
      this.getInspectores();
      this.getFinancieros();

   }).catch( e => { console.log(e); });
  }

  getInspectores() {
   this.inspectores = [];
   this.userDataService.get_by_rol('5').then( r => {
      const allInspector = r as User[];
      const allInspectorData: User[] = [];
      allInspector.forEach( inspector => {
         this.myAbleUbications.forEach( u => {
            if (inspector.id_ubication == u.id) {
               const newUser = new User();
               newUser.id = inspector.id;
               newUser.name = inspector.name;
               newUser.email = inspector.email;
               newUser.id_ubication = inspector.id_ubication;
               newUser.address = inspector.address;
               newUser.address_map_latitude = inspector.address_map_latitude;
               newUser.address_map_longitude = inspector.address_map_longitude;
               newUser.main_phone_number = inspector.main_phone_number;
               newUser.secondary_phone_number = inspector.secondary_phone_number;
               newUser.identification = inspector.identification;
               newUser.ruc = inspector.ruc;
               newUser.province = u.name;
               allInspectorData.push(newUser);
            }
         });
      });
      const inspectoresDuplicados: User[] = [];
      allInspectorData.forEach(inspector => {
         let existe = false;
         this.inspectores.forEach(i => {
            if (i.id == inspector.id) {
               existe = true;
            }
         });
         if (!existe) {
            this.inspectores.push(inspector);
         } else {
            inspectoresDuplicados.push(inspector);
         }
      });
      inspectoresDuplicados.forEach(inspector => {
         this.inspectores.forEach(i => {
            if (i.id == inspector.id) {
               i.province = i.province + '/' + inspector.province;
            }
         });
      });
   }).catch( e => {console.log(e); });
  }
   
  getFinancieros() {
   this.financieros = [];
   this.userDataService.get_by_rol('6').then( r => {
      const allFinancieros = r as User[];
      const allFinancieroData: User[] = [];
      allFinancieros.forEach( financiero => {
         this.myAbleUbications.forEach( u => {
            if (financiero.id_ubication == u.id) {
               const newUser = new User();
               newUser.id = financiero.id;
               newUser.name = financiero.name;
               newUser.email = financiero.email;
               newUser.id_ubication = financiero.id_ubication;
               newUser.address = financiero.address;
               newUser.address_map_latitude = financiero.address_map_latitude;
               newUser.address_map_longitude = financiero.address_map_longitude;
               newUser.main_phone_number = financiero.main_phone_number;
               newUser.secondary_phone_number = financiero.secondary_phone_number;
               newUser.identification = financiero.identification;
               newUser.ruc = financiero.ruc;
               newUser.province = u.name;
               allFinancieroData.push(newUser);
            }
         });
      });
      const financierosDuplicados: User[] = [];
      allFinancieroData.forEach(financiero => {
         let existe = false;
         this.financieros.forEach(f => {
            if (f.id == financiero.id) {
               existe = true;
            }
         });
         if (!existe) {
            this.financieros.push(financiero);
         } else {
            financierosDuplicados.push(financiero);
         }
      });
      financierosDuplicados.forEach(financiero => {
         this.financieros.forEach(f => {
            if (f.id == financiero.id) {
               f.province = f.province + '/' + financiero.province;
            }
         });
      });
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
     this.getUbications();
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

  CodeFileCertificadoInactivacionAttachment(event) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
         this.certificadoInactivacionApprovalStateAttachment.approval_state_attachment_file_name = file.name;
         this.certificadoInactivacionApprovalStateAttachment.approval_state_attachment_file_type = file.type;
         this.certificadoInactivacionApprovalStateAttachment.approval_state_attachment_file = reader.result.toString().split(',')[1];
      };
   }
  }

  CodeFileRegistroAttachment(event) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
         this.registroApprovalStateAttachment.approval_state_attachment_file_name = file.name;
         this.registroApprovalStateAttachment.approval_state_attachment_file_type = file.type;
         this.registroApprovalStateAttachment.approval_state_attachment_file = reader.result.toString().split(',')[1];
      };
   }
  }

  CodeFileTarifarioRackAttachment(event) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
         this.tarifarioRackApprovalStateAttachment.approval_state_attachment_file_name = file.name;
         this.tarifarioRackApprovalStateAttachment.approval_state_attachment_file_type = file.type;
         this.tarifarioRackApprovalStateAttachment.approval_state_attachment_file = reader.result.toString().split(',')[1];
      };
   }
  }

  borrarNombramiento() {
   this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file = '';
   this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_type = '';
   this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_name = '';
  }

  borrarTarifarioRack() {
   this.tarifarioRackApprovalStateAttachment = new ApprovalStateAttachment();
  }

  borrarRegistro() {
   this.registroApprovalStateAttachment = new ApprovalStateAttachment();
  }

  borrarCertificadoInactivacion() {
     this.certificadoInactivacionApprovalStateAttachment = new ApprovalStateAttachment();
  }

  descargarCertificadoInactivacion() {
   this.downloadFile(
      this.certificadoInactivacionApprovalStateAttachment.approval_state_attachment_file,
      this.certificadoInactivacionApprovalStateAttachment.approval_state_attachment_file_type,
      this.certificadoInactivacionApprovalStateAttachment.approval_state_attachment_file_name);
   }

  descargarRegistro() {
   this.downloadFile(
      this.registroApprovalStateAttachment.approval_state_attachment_file,
      this.registroApprovalStateAttachment.approval_state_attachment_file_type,
      this.registroApprovalStateAttachment.approval_state_attachment_file_name);
  }

  descargarTarifarioRack() {
   this.downloadFile(
      this.tarifarioRackApprovalStateAttachment.approval_state_attachment_file,
      this.tarifarioRackApprovalStateAttachment.approval_state_attachment_file_type,
      this.tarifarioRackApprovalStateAttachment.approval_state_attachment_file_name);
  }

  descargarNombramiento() {
   this.downloadFile(
      this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file,
      this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_type,
      this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_name);
  }

  descargarInforme() {
   this.downloadFile(
      this.informeApprovalStateAttachment.approval_state_attachment_file,
      this.informeApprovalStateAttachment.approval_state_attachment_file_type,
      this.informeApprovalStateAttachment.approval_state_attachment_file_name);
  }

  descargarActa() {
   this.downloadFile(
      this.actaNotificacionApprovalStateAttachment.approval_state_attachment_file,
      this.actaNotificacionApprovalStateAttachment.approval_state_attachment_file_type,
      this.actaNotificacionApprovalStateAttachment.approval_state_attachment_file_name);
  }
  
  descargarPDFTarifario() {
   const tariffs = [];
   this.tarifarioRack.valores.forEach(tariff => {
      const newTariff = {type: '', habitacion_alta: 0, habitacion_baja: 0, persona_alta: 0, persona_baja: 0 };
      this.allowed_capacity_types.forEach(element => {
         if (element.id == tariff.idTipoCapacidad) {
            newTariff.type = element.name.toString();
         }
      });
      tariff.tariffs.forEach(element => {
         if (element.tariff.tariff_type_id == 3) {
            newTariff.habitacion_baja = element.tariff.price;
         }
         if (element.tariff.tariff_type_id == 5) {
            newTariff.habitacion_alta = element.tariff.price;
         }
         if (element.tariff.tariff_type_id == 4) {
            newTariff.persona_baja = element.tariff.price;
         }
         if (element.tariff.tariff_type_id == 6) {
            newTariff.persona_alta = element.tariff.price;
         }
      });
      tariffs.push(newTariff);
   });
   this.exporterDataService.getPDFTarifarioRack(tariffs).then( r => {
    const byteCharacters = atob(r);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
       byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf'});
    saveAs(blob, 'tarifario.pdf');
   }).catch( e => { console.log(e); });
  }

  descargarRequisitos() {
     this.downloadFile(
      this.requisitosApprovalStateAttachment.approval_state_attachment_file,
      this.requisitosApprovalStateAttachment.approval_state_attachment_file_type,
      this.requisitosApprovalStateAttachment.approval_state_attachment_file_name);
  }

  getCapacityTypes() {
   this.allowed_capacity_types = [];
   this.capacityTypeDataService.get_filtered_by_register_type(this.rucEstablishmentRegisterSelected.register_type_id).then( r => {
      this.allowed_capacity_types = r as CapacityType[];
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

calcularUnoxMil() {
   this.totalunoxmil = 0;
   this.declarationItemsToShow.forEach(itemToShow => {
      itemToShow.items.forEach(item => {
         this.totalunoxmil += item.valueItem.value * (item.declarationItem.factor);
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
         newRegisterRequisite.fullfill = true;
         newRegisterRequisite.id = element.id;
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
                    this.representante_legal_identificacion = element.valor;
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
              this.organization_type = element.valor;
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
   this.establishment_declarations_selected = new Establishment();
   this.establishment_selected_picture = new EstablishmentPicture();
   this.establishment_selected.workers_on_establishment = this.getEstablishmentWorkerGroup();
   this.mostrarDataEstablishment = true;
   this.cedulaEstablishmentContactData = '';
   this.rucEstablishmentRegisterSelected.editable = false;
   this.getCantonesEstablishment();
   this.declarations = [];
   this.provinciaEstablishmentSelectedCode = '-';
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
      this.toastr.errorToastr('Seleccione un registro.', 'Error');
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
      this.toastr.errorToastr('Seleccione un registro.', 'Error');
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
         this.calcTotalPoints();
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
     this.toastr.errorToastr('Seleccione un registro.', 'Error');
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
   newCapacity.editable = true;
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
   this.calcSpaces();
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
   if (typeof capacity.beds_on_capacity != 'undefined') {
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
   }
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
