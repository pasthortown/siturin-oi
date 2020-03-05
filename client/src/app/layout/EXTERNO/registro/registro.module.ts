import { DeclarationAttachmentService } from './../../../services/CRUD/FINANCIERO/declarationattachment.service';
import { FloorAuthorizationCertificateService } from './../../../services/CRUD/BASE/floorauthorizationcertificate.service';
import { PayService } from './../../../services/CRUD/FINANCIERO/pay.service';
import { RegisterService } from 'src/app/services/CRUD/ALOJAMIENTO/register.service';
import { EstablishmentPictureService } from 'src/app/services/CRUD/BASE/establishmentpicture.service';
import { AgreementService } from 'src/app/services/CRUD/BASE/agreement.service';
import { UserService } from 'src/app/services/profile/user.service';
import { ReceptionRoomService } from './../../../services/CRUD/ALOJAMIENTO/receptionroom.service';
import { RegistroComponent } from './registro.component';
import { RegistroRoutingModule } from './registro-routing.module';
import { PersonRepresentativeAttachmentService } from 'src/app/services/CRUD/BASE/personrepresentativeattachment.service';
import { PropertyTitleAttachmentService } from 'src/app/services/CRUD/ALOJAMIENTO/propertytitleattachment.service';
import { AuthorizationAttachmentService } from 'src/app/services/CRUD/ALOJAMIENTO/authorizationattachment.service';
import { CapacityTypeService as CapacityTypeABService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/capacitytype.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxBarcodeModule } from 'ngx-barcode';
import { MailerService } from './../../../services/negocio/mailer.service';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { WorkerService } from 'src/app/services/CRUD/BASE/worker.service';
import { TaxPayerTypeService } from 'src/app/services/CRUD/BASE/taxpayertype.service';
import { RucService } from 'src/app/services/CRUD/BASE/ruc.service';
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
import { RequisiteService as RequisiteABService} from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/requisite.service';
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
import { RegisterTypeService as RegisterTypeAlimentosBebidasService} from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/registertype.service';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { DocumentService } from 'src/app/services/CRUD/EXPORTER/document.service';
import { ExporterService } from 'src/app/services/negocio/exporter.service';
import { RegisterStateService } from 'src/app/services/CRUD/ALOJAMIENTO/registerstate.service';
import { FoodDrinkAttachmentService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/fooddrinkattachment.service';
import { ServiceTypeService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/servicetype.service';
import { KitchenTypeService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/kitchentype.service';
import { RegisterService as RegisterABService } from 'src/app/services/CRUD/ALIMENTOSBEBIDAS/register.service';

@NgModule({
  imports: [CommonModule,
    CKEditorModule,
    NgxBarcodeModule,
    AgmCoreModule.forRoot({apiKey: environment.gmapapiKey}),
    RegistroRoutingModule,
    NgxQRCodeModule,
    NgbModule,
    ScrollToModule.forRoot(),
    Ng2TableModule,
    FormsModule],
  declarations: [RegistroComponent],
  providers: [NgbModal,
    UserService,
    DinardapService,
    DeclarationItemService,
    RegisterABService,
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
    AgreementService,
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
export class RegistroModule {}
