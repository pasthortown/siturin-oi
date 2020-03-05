import { FoodDrinkAttachmentService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/fooddrinkattachment.service';
import { RucService } from 'src/app/services/CRUD/BASE/ruc.service';
import { ReceptionRoomService } from './../../../services/CRUD/ALOJAMIENTO/receptionroom.service';
import { MailerService } from './../../../services/negocio/mailer.service';
import { DeclarationAttachmentService } from './../../../services/CRUD/FINANCIERO/declarationattachment.service';
import { FloorAuthorizationCertificateService } from './../../../services/CRUD/BASE/floorauthorizationcertificate.service';
import { PayService } from './../../../services/CRUD/FINANCIERO/pay.service';
import { RequisiteService as RequisiteABService} from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/requisite.service';
import { RegisterService } from 'src/app/services/CRUD/ALOJAMIENTO/register.service';
import { EstablishmentPictureService } from 'src/app/services/CRUD/BASE/establishmentpicture.service';
import { UserService } from 'src/app/services/profile/user.service';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PersonRepresentativeAttachmentService } from 'src/app/services/CRUD/BASE/personrepresentativeattachment.service';
import { PropertyTitleAttachmentService } from 'src/app/services/CRUD/ALOJAMIENTO/propertytitleattachment.service';
import { AuthorizationAttachmentService } from 'src/app/services/CRUD/ALOJAMIENTO/authorizationattachment.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceTypeService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/servicetype.service';
import { KitchenTypeService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/kitchentype.service';
import { RegisterTypeService as RegisterTypeAlimentosBebidasService} from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/registertype.service';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { AgmCoreModule } from '@agm/core';
import { CKEditorModule } from 'ngx-ckeditor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxBarcodeModule } from 'ngx-barcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { RegisterStateService } from 'src/app/services/CRUD/ALOJAMIENTO/registerstate.service';
import { WorkerService } from 'src/app/services/CRUD/BASE/worker.service';
import { TaxPayerTypeService } from 'src/app/services/CRUD/BASE/taxpayertype.service';
import { EstablishmentService } from 'src/app/services/CRUD/BASE/establishment.service';
import { EstablishmentCertificationService } from 'src/app/services/CRUD/BASE/establishmentcertification.service';
import { EstablishmentPropertyTypeService } from 'src/app/services/CRUD/BASE/establishmentpropertytype.service';
import { RequisiteService } from 'src/app/services/CRUD/ALOJAMIENTO/requisite.service';
import { LanguageService } from 'src/app/services/CRUD/BASE/language.service';
import { PreviewRegisterCodeService } from 'src/app/services/CRUD/BASE/previewregistercode.service';
import { UbicationService } from 'src/app/services/CRUD/BASE/ubication.service';
import { GroupTypeService } from 'src/app/services/CRUD/BASE/grouptype.service';
import { SystemNameService } from 'src/app/services/CRUD/BASE/systemname.service';
import { WorkerGroupService } from 'src/app/services/CRUD/BASE/workergroup.service';
import { GenderService } from 'src/app/services/CRUD/BASE/gender.service';
import { EstablishmentCertificationTypeService } from 'src/app/services/CRUD/BASE/establishmentcertificationtype.service';
import { RegisterTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/registertype.service';
import { ComplementaryServiceTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/complementaryservicetype.service';
import { BedTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/bedtype.service';
import { TariffTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/tarifftype.service';
import { RucNameTypeService } from 'src/app/services/CRUD/BASE/rucnametype.service';
import { StateService } from 'src/app/services/CRUD/ALOJAMIENTO/state.service';
import { CapacityTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/capacitytype.service';
import { DinardapService } from 'src/app/services/negocio/dinardap.service';
import { EstablishmentCertificationAttachmentService } from 'src/app/services/CRUD/BASE/establishmentcertificationattachment.service';
import { ComplementaryServiceFoodTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/complementaryservicefoodtype.service';
import { DeclarationItemService } from 'src/app/services/CRUD/FINANCIERO/declarationitem.service';
import { DeclarationItemCategoryService } from 'src/app/services/CRUD/FINANCIERO/declarationitemcategory.service';
import { DeclarationService } from 'src/app/services/CRUD/FINANCIERO/declaration.service';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { ExporterService } from 'src/app/services/negocio/exporter.service';
import { DocumentService } from 'src/app/services/CRUD/EXPORTER/document.service';
import { ApprovalStateService } from './../../../services/CRUD/ALOJAMIENTO/approvalstate.service';
import { ConsultorService } from 'src/app/services/negocio/consultor.service';
import { ApprovalStateAttachmentService } from './../../../services/CRUD/ALOJAMIENTO/approvalstateattachment.service';
import { ProcedureJustificationService } from 'src/app/services/CRUD/ALOJAMIENTO/procedurejustification.service';
import { RegisterService as CatastroRegisterService } from 'src/app/services/CRUD/CATASTRO/register.service';
import { RegisterProcedureService } from 'src/app/services/CRUD/ALOJAMIENTO/registerprocedure.service';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { RegisterService as RegisterABService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/register.service';
import { CapacityTypeService as CapacityTypeABService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/capacitytype.service';
import { RegisterProcedureService as RegisterProcedureABService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/registerprocedure.service';
import { AgreementService } from 'src/app/services/CRUD/BASE/agreement.service';
import { Agreement } from 'src/app/models/BASE/Agreement';

@NgModule({
  imports: [CommonModule,
    NgxBarcodeModule,
    CKEditorModule,
    AgmCoreModule.forRoot({apiKey: environment.gmapapiKey}),
    DashboardRoutingModule,
    NgxQRCodeModule,
    NgbModule,
    Ng2TableModule,
    ScrollToModule.forRoot(),
    FormsModule],   
  declarations: [DashboardComponent],
  providers: [NgbModal,
    UserService,
    DinardapService,
    DeclarationItemService,
    AgreementService,
    ApprovalStateService,
    ProcedureJustificationService,
    RegisterProcedureABService,
    CatastroRegisterService,
    RegisterProcedureService,
    RegisterABService,
    ApprovalStateAttachmentService,
    ConsultorService,
    RegisterTypeAlimentosBebidasService,
    ReceptionRoomService,
    ServiceTypeService,
    KitchenTypeService,
    PropertyTitleAttachmentService,
    AuthorizationAttachmentService,
    CapacityTypeABService,
    DeclarationItemCategoryService,
    DeclarationService,
    TaxPayerTypeService,
    RegisterStateService,
    PersonRepresentativeAttachmentService,
    EstablishmentCertificationService,
    ComplementaryServiceFoodTypeService,
    EstablishmentPropertyTypeService,
    RequisiteService,
    FoodDrinkAttachmentService,
    MailerService,
    UbicationService,
    RegisterService,
    ExporterService,
    DocumentService,
    CapacityTypeService,
    RequisiteABService,
    EstablishmentCertificationAttachmentService,
    EstablishmentPictureService,
    StateService,
    RucNameTypeService,
    ComplementaryServiceTypeService,
    GenderService,
    GroupTypeService,
    RegisterTypeService,
    WorkerGroupService,
    PayService,
    TariffTypeService,
    PreviewRegisterCodeService,
    EstablishmentCertificationTypeService,
    DeclarationAttachmentService,
    LanguageService,
    EstablishmentService,
    WorkerService,
    FloorAuthorizationCertificateService,
    BedTypeService,
    SystemNameService,
    RucService]
})
export class DashboardModule {}
