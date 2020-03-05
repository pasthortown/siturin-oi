import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
   {
      path: '',
      component: LayoutComponent,
      children: [
         {
            path: '',
            redirectTo: 'main'
         },
         {
            path: 'main',
            loadChildren: './main/main.module#MainModule'
         },
         {
            path: 'profile',
            loadChildren: './profile/profile.module#ProfileModule'
         },
         {
            path: 'blank',
            loadChildren: './blank-page/blank-page.module#BlankPageModule'
         },
         {
            path: 'not-found',
            loadChildren: './not-found/not-found.module#NotFoundModule'
         },

         //BASE
         {
            path: 'ruc',
            loadChildren: './CRUD/BASE/Ruc/ruc.module#RucModule'
         },
         {
            path: 'tax_payer_type',
            loadChildren: './CRUD/BASE/TaxPayerType/taxpayertype.module#TaxPayerTypeModule'
         },
         {
            path: 'establishment',
            loadChildren: './CRUD/BASE/Establishment/establishment.module#EstablishmentModule'
         },
         {
            path: 'person_representative',
            loadChildren: './CRUD/BASE/PersonRepresentative/personrepresentative.module#PersonRepresentativeModule'
         },
         {
            path: 'zone',
            loadChildren: './CRUD/BASE/Zone/zone.module#ZoneModule'
         },
         {
            path: 'preview_register_code',
            loadChildren: './CRUD/BASE/PreviewRegisterCode/previewregistercode.module#PreviewRegisterCodeModule'
         },
         {
            path: 'system_name',
            loadChildren: './CRUD/BASE/SystemName/systemname.module#SystemNameModule'
         },
         {
            path: 'language',
            loadChildren: './CRUD/BASE/Language/language.module#LanguageModule'
         },
         {
            path: 'establishment_picture',
            loadChildren: './CRUD/BASE/EstablishmentPicture/establishmentpicture.module#EstablishmentPictureModule'
         },
         {
            path: 'ubication',
            loadChildren: './CRUD/BASE/Ubication/ubication.module#UbicationModule'
         },
         {
            path: 'worker',
            loadChildren: './CRUD/BASE/Worker/worker.module#WorkerModule'
         },
         {
            path: 'gender',
            loadChildren: './CRUD/BASE/Gender/gender.module#GenderModule'
         },
         {
            path: 'worker_group',
            loadChildren: './CRUD/BASE/WorkerGroup/workergroup.module#WorkerGroupModule'
         },
         {
            path: 'establishment_property_type',
            loadChildren: './CRUD/BASE/EstablishmentPropertyType/establishmentpropertytype.module#EstablishmentPropertyTypeModule'
         },
         {
            path: 'group_given',
            loadChildren: './CRUD/BASE/GroupGiven/groupgiven.module#GroupGivenModule'
         },
         {
            path: 'state_base',
            loadChildren: './CRUD/BASE/State/state.module#StateModule'
         },
         {
            path: 'floor_authorization_certificate',
            loadChildren: './CRUD/BASE/FloorAuthorizationCertificate/floorauthorizationcertificate.module#FloorAuthorizationCertificateModule'
         },
         {
            path: 'establishment_state',
            loadChildren: './CRUD/BASE/EstablishmentState/establishmentstate.module#EstablishmentStateModule'
         },
         {
            path: 'establishment_certification',
            loadChildren: './CRUD/BASE/EstablishmentCertification/establishmentcertification.module#EstablishmentCertificationModule'
         },
         {
            path: 'establishment_certification_type',
            loadChildren: './CRUD/BASE/EstablishmentCertificationType/establishmentcertificationtype.module#EstablishmentCertificationTypeModule'
         },
         {
            path: 'establishment_certification_attachment',
            loadChildren: './CRUD/BASE/EstablishmentCertificationAttachment/establishmentcertificationattachment.module#EstablishmentCertificationAttachmentModule'
         },
         {
            path: 'group_type',
            loadChildren: './CRUD/BASE/GroupType/grouptype.module#GroupTypeModule'
         },
         {
            path: 'ruc_name_type',
            loadChildren: './CRUD/BASE/RucNameType/rucnametype.module#RucNameTypeModule'
         },
         {
            path: 'person_representative_attachment',
            loadChildren: './CRUD/BASE/PersonRepresentativeAttachment/personrepresentativeattachment.module#PersonRepresentativeAttachmentModule'
         },
         {
            path: 'agreement',
            loadChildren: './CRUD/BASE/Agreement/agreement.module#AgreementModule'
         },

         //ALIMENTOSBEBIDAS

         {
            path: 'alimentos_register',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/Register/register.module#RegisterModule'
         },
         {
            path: 'alimentos_capacity',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/Capacity/capacity.module#CapacityModule'
         },
         {
            path: 'alimentos_complementary_service_type',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/ComplementaryServiceType/complementaryservicetype.module#ComplementaryServiceTypeModule'
         },
         {
            path: 'alimentos_register_type',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/RegisterType/registertype.module#RegisterTypeModule'
         },
         {
            path: 'alimentos_requisite',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/Requisite/requisite.module#RequisiteModule'
         },
         {
            path: 'alimentos_register_requisite',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/RegisterRequisite/registerrequisite.module#RegisterRequisiteModule'
         },
         {
            path: 'alimentos_state',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/State/state.module#StateModule'
         },
         {
            path: 'alimentos_register_state',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/RegisterState/registerstate.module#RegisterStateModule'
         },
         {
            path: 'alimentos_capacity_type',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/CapacityType/capacitytype.module#CapacityTypeModule'
         },
         {
            path: 'alimentos_capacity_picture',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/CapacityPicture/capacitypicture.module#CapacityPictureModule'
         },
         {
            path: 'alimentos_approval',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/Approval/approval.module#ApprovalModule'
         },
         {
            path: 'alimentos_approval_state',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/ApprovalState/approvalstate.module#ApprovalStateModule'
         },
         {
            path: 'alimentos_approval_state_attachment',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/ApprovalStateAttachment/approvalstateattachment.module#ApprovalStateAttachmentModule'
         },
         {
            path: 'alimentos_approval_state_report',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/ApprovalStateReport/approvalstatereport.module#ApprovalStateReportModule'
         },
         {
            path: 'alimentos_reception_room',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/ReceptionRoom/receptionroom.module#ReceptionRoomModule'
         },
         {
            path: 'alimentos_procedure',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/Procedure/procedure.module#ProcedureModule'
         },
         {
            path: 'alimentos_procedure_justification',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/ProcedureJustification/procedurejustification.module#ProcedureJustificationModule'
         },
         {
            path: 'alimentos_register_procedure',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/RegisterProcedure/registerprocedure.module#RegisterProcedureModule'
         },
         {
            path: 'alimentos_property_title_attachment',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/PropertyTitleAttachment/propertytitleattachment.module#PropertyTitleAttachmentModule'
         },
         {
            path: 'alimentos_authorization_attachment',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/AuthorizationAttachment/authorizationattachment.module#AuthorizationAttachmentModule'
         },
         {
            path: 'alimentos_kitchen_type',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/KitchenType/kitchentype.module#KitchenTypeModule'
         },
         {
            path: 'alimentos_service_type',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/ServiceType/servicetype.module#ServiceTypeModule'
         },
         {
            path: 'alimentos_food_drink_attachment',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/FoodDrinkAttachment/fooddrinkattachment.module#FoodDrinkAttachmentModule'
         },
         {
            path: 'alimentos_register_type_image',
            loadChildren: './CRUD/ALIMENTOSBEBIDAS/RegisterTypeImage/registertypeimage.module#RegisterTypeImageModule'
         },
         
         //ALOJAMIENTO
         {
            path: 'tarifario-rack',
            loadChildren: './EXTERNO/tarifario_rack/tarifario-rack.module#TarifarioRackModule'
         },
         {
            path: 'register-alojamiento',
            loadChildren: './CRUD/ALOJAMIENTO/Register/register.module#RegisterModule'
         },
         {
            path: 'capacity',
            loadChildren: './CRUD/ALOJAMIENTO/Capacity/capacity.module#CapacityModule'
         },
         {
            path: 'capacity_picture',
            loadChildren: './CRUD/ALOJAMIENTO/CapacityPicture/capacitypicture.module#CapacityPictureModule'
         },
         {
            path: 'complementary_service_type',
            loadChildren: './CRUD/ALOJAMIENTO/ComplementaryServiceType/complementaryservicetype.module#ComplementaryServiceTypeModule'
         },
         {
            path: 'register_type',
            loadChildren: './CRUD/ALOJAMIENTO/RegisterType/registertype.module#RegisterTypeModule'
         },
         {
            path: 'register_type_image',
            loadChildren: './CRUD/ALOJAMIENTO/RegisterTypeImage/registertypeimage.module#RegisterTypeImageModule'
         },
         {
            path: 'requisite',
            loadChildren: './CRUD/ALOJAMIENTO/Requisite/requisite.module#RequisiteModule'
         },
         {
            path: 'register_requisite',
            loadChildren: './CRUD/ALOJAMIENTO/RegisterRequisite/registerrequisite.module#RegisterRequisiteModule'
         },
         {
            path: 'state-alojamiento',
            loadChildren: './CRUD/ALOJAMIENTO/State/state.module#StateModule'
         },
         {
            path: 'register_state',
            loadChildren: './CRUD/ALOJAMIENTO/RegisterState/registerstate.module#RegisterStateModule'
         },
         {
            path: 'tariff_type',
            loadChildren: './CRUD/ALOJAMIENTO/TariffType/tarifftype.module#TariffTypeModule'
         },
         {
            path: 'tariff',
            loadChildren: './CRUD/ALOJAMIENTO/Tariff/tariff.module#TariffModule'
         },
         {
            path: 'bed',
            loadChildren: './CRUD/ALOJAMIENTO/Bed/bed.module#BedModule'
         },
         {
            path: 'bed_type',
            loadChildren: './CRUD/ALOJAMIENTO/BedType/bedtype.module#BedTypeModule'
         },
         {
            path: 'capacity_type',
            loadChildren: './CRUD/ALOJAMIENTO/CapacityType/capacitytype.module#CapacityTypeModule'
         },
         {
            path: 'complementary_service_food',
            loadChildren: './CRUD/ALOJAMIENTO/ComplementaryServiceFood/complementaryservicefood.module#ComplementaryServiceFoodModule'
         },
         {
            path: 'complementary_service_food_type',
            loadChildren: './CRUD/ALOJAMIENTO/ComplementaryServiceFoodType/complementaryservicefoodtype.module#ComplementaryServiceFoodTypeModule'
         },
         {
            path: 'approval_register_alojamiento',
            loadChildren: './CRUD/ALOJAMIENTO/Approval/approval.module#ApprovalModule'
         },
         {
            path: 'approval_state_register_alojamiento',
            loadChildren: './CRUD/ALOJAMIENTO/ApprovalState/approvalstate.module#ApprovalStateModule'
         },
         {
            path: 'approval_state_attachment_register_alojamiento',
            loadChildren: './CRUD/ALOJAMIENTO/ApprovalStateAttachment/approvalstateattachment.module#ApprovalStateAttachmentModule'
         },
         {
            path: 'approval_state_report_register_alojamiento',
            loadChildren: './CRUD/ALOJAMIENTO/ApprovalStateReport/approvalstatereport.module#ApprovalStateReportModule'
         },
         {
            path: 'reception_room',
            loadChildren: './CRUD/ALOJAMIENTO/ReceptionRoom/receptionroom.module#ReceptionRoomModule'
         },
         {
            path: 'procedure',
            loadChildren: './CRUD/ALOJAMIENTO/Procedure/procedure.module#ProcedureModule'
         },
         {
            path: 'procedure_justification',
            loadChildren: './CRUD/ALOJAMIENTO/ProcedureJustification/procedurejustification.module#ProcedureJustificationModule'
         },
         {
            path: 'register_procedure',
            loadChildren: './CRUD/ALOJAMIENTO/RegisterProcedure/registerprocedure.module#RegisterProcedureModule'
         },
         {
            path: 'property_title_attachment',
            loadChildren: './CRUD/ALOJAMIENTO/PropertyTitleAttachment/propertytitleattachment.module#PropertyTitleAttachmentModule'
         },
         {
            path: 'authorization_attachment',
            loadChildren: './CRUD/ALOJAMIENTO/AuthorizationAttachment/authorizationattachment.module#AuthorizationAttachmentModule'
         },

         //AUTH
         {
            path: 'auth_location',
            loadChildren: './CRUD/AUTH/AuthLocation/authlocation.module#AuthLocationModule'
         },
         {
            path: 'account_rol',
            loadChildren: './CRUD/AUTH/AccountRol/accountrol.module#AccountRolModule'
         },
         {
            path: 'account_rol_assigment',
            loadChildren: './CRUD/AUTH/AccountRolAssigment/accountrolassigment.module#AccountRolAssigmentModule'
         },

         //FINANCIERO
         {
            path: 'declaration',
            loadChildren: './CRUD/FINANCIERO/Declaration/declaration.module#DeclarationModule'
         },
         {
            path: 'declaration_item',
            loadChildren: './CRUD/FINANCIERO/DeclarationItem/declarationitem.module#DeclarationItemModule'
         },
         {
            path: 'declaration_item_category',
            loadChildren: './CRUD/FINANCIERO/DeclarationItemCategory/declarationitemcategory.module#DeclarationItemCategoryModule'
         },
         {
            path: 'state-financiero',
            loadChildren: './CRUD/FINANCIERO/State/state.module#StateModule'
         },
         {
            path: 'state_declaration',
            loadChildren: './CRUD/FINANCIERO/StateDeclaration/statedeclaration.module#StateDeclarationModule'
         },
         {
            path: 'pay',
            loadChildren: './CRUD/FINANCIERO/Pay/pay.module#PayModule'
         },
         {
            path: 'pay_tax',
            loadChildren: './CRUD/FINANCIERO/PayTax/paytax.module#PayTaxModule'
         },
         {
            path: 'declaration_item_value',
            loadChildren: './CRUD/FINANCIERO/DeclarationItemValue/declarationitemvalue.module#DeclarationItemValueModule'
         },
         {
            path: 'declaration_attachment',
            loadChildren: './CRUD/FINANCIERO/DeclarationAttachment/declarationattachment.module#DeclarationAttachmentModule'
         },
         {
            path: 'pay_attachment',
            loadChildren: './CRUD/FINANCIERO/PayAttachment/payattachment.module#PayAttachmentModule'
         },
         {
            path: 'pay_mass_file_attachment',
            loadChildren: './CRUD/FINANCIERO/PayMassFileAttachment/paymassfileattachment.module#PayMassFileAttachmentModule'
         },

         // INTERNO
         {
            path: 'interno-registro',
            loadChildren: './INTERNO/registro/registro.module#RegistroModule'
         },
         {
            path: 'bitacora',
            loadChildren: './INTERNO/bitacora/bitacora.module#BitacoraModule'
         },
         {
            path: 'coordinador',
            loadChildren: './INTERNO/coordinador/coordinador.module#CoordinadorModule'
         },
         {
            path: 'inspector',
            loadChildren: './INTERNO/inspector/inspector.module#InspectorModule'
         },
         {
            path: 'interno-account-admin',
            loadChildren: './INTERNO/account-admin/account-admin.module#AccountAdminModule'
         },
         {
            path: 'inner-account-admin',
            loadChildren: './INTERNO/inner-account-admin/inner-account-admin.module#InnerAccountAdminModule'
         },
         {
            path: 'inner-financial-account-admin',
            loadChildren: './INTERNO/inner-financial-account-admin/inner-financial-account-admin.module#InnerFinancialAccountAdminModule'
         },
         {
            path: 'tecnico-financiero',
            loadChildren: './INTERNO/tecnico-financiero/tecnico-financiero.module#TecnicoFinancieroModule'
         },
         {
            path: 'pagos',
            loadChildren: './INTERNO/pagos/pagos.module#PagosModule'
         },
         {
            path: 'pagos-reporte',
            loadChildren: './INTERNO/pagos-reporte/pagos-reporte.module#PagosReporteModule'
         },

         // EXTERNO
         {
            path: 'externo-registro',
            loadChildren: './EXTERNO/registro/registro.module#RegistroModule'
         },
         {
            path: 'tarifario-rack',
            loadChildren: './EXTERNO/registro/registro.module#RegistroModule'
         },
         {
            path: 'externo-dashboard',
            loadChildren: './EXTERNO/dashboard/dashboard.module#DashboardModule'
         },

         //DINARDAP

         {
            path: 'dinardap-ruc',
            loadChildren: './CRUD/DINARDAP/Ruc/ruc.module#RucModule'
         },
         {
            path: 'dinardap-identification',
            loadChildren: './CRUD/DINARDAP/Identification/identification.module#IdentificationModule'
         },

         //EXPORTER

         {
            path: 'template',
            loadChildren: './CRUD/EXPORTER/Template/template.module#TemplateModule'
         },
         {
            path: 'document',
            loadChildren: './CRUD/EXPORTER/Document/document.module#DocumentModule'
         },

         //CATASTRO

         {
            path: 'catastro',
            loadChildren: './CRUD/CATASTRO/Register/register.module#RegisterModule'
         },

         //GAD

         {
            path: 'report',
            loadChildren: './CRUD/GAD/Report/report.module#ReportModule'
         },
         {
            path: 'report_attachment',
            loadChildren: './CRUD/GAD/ReportAttachment/reportattachment.module#ReportAttachmentModule'
         },

         //ADMINISTRATORS

         {
            path: 'accounts',
            loadChildren: './INTERNO/administrators/tics/Accounts/accounts.module#AccountsModule'
         },
         {
            path: '**',
            redirectTo: 'not-found'
         }
      ]
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class LayoutRoutingModule {}
