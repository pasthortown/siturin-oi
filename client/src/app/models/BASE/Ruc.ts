import { EstablishmentOnRuc } from './../negocio/EstablishmentOnRuc';
import { GroupGiven } from './GroupGiven';
import { PersonRepresentative } from './PersonRepresentative';
import { User } from './../profile/User';
import { Establishment } from './Establishment';
import { PersonRepresentativeAttachment } from './PersonRepresentativeAttachment';

export class Ruc {
   id: number;
   number: String;
   person_representative: PersonRepresentative;
   person_representative_attachment: PersonRepresentativeAttachment;
   group_given: GroupGiven;
   baised_accounting: Boolean;
   contact_user_id: number;
   tax_payer_type_id: number;
   contact_user: User;
   owner_name: String;
   establishments: Establishment[];
   establishmentsSRI: EstablishmentOnRuc[];
   constructor() {
      this.establishmentsSRI = [];
      this.establishments = [];
      this.group_given = new GroupGiven();
      this.person_representative = new PersonRepresentative();
      this.person_representative_attachment = new PersonRepresentativeAttachment();
      this.tax_payer_type_id = 0;
      this.contact_user_id = 0;
      this.contact_user = new User();
      this.number = '';
      this.owner_name = '';
      this.baised_accounting = false;
   }
}
