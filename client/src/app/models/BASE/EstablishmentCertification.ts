import { EstablishmentCertificationAttachment } from './EstablishmentCertificationAttachment';

export class EstablishmentCertification {
   id: number;
   establishment_certification_type_id: number;
   establishment_certification_type_fatherCode: string;
   establishment_certification_type_specifics: any[];
   establishment_certification_attachment_id: number;
   establishment_certification_attachment: EstablishmentCertificationAttachment;
   constructor() {
      this.establishment_certification_attachment = new EstablishmentCertificationAttachment();
      this.establishment_certification_type_id = 0;
      this.establishment_certification_type_fatherCode = '-';
      this.establishment_certification_type_specifics = [];
   }
}