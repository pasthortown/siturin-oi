import { PreviewRegisterCode } from './PreviewRegisterCode';

import { Language } from './Language';

import { Worker } from './Worker';

import { EstablishmentCertification } from './EstablishmentCertification';
import { User } from '../profile/User';

export class Establishment {
   id: number;
   ruc_code_id: String;
   commercially_known_name: String;
   address_main_street: String;
   address_secondary_street: String;
   address_number: String;
   franchise_chain_name: String;
   address_map_latitude: number;
   address_map_longitude: number;
   url_web: String;
   as_turistic_register_date: Date;
   address_reference: String;
   contact_user_id: number;
   contact_user: User;
   ruc_id: number;
   preview_register_codes_on_establishment: PreviewRegisterCode[];
   languages_on_establishment: Language[];
   ubication_id: number;
   workers_on_establishment: Worker[];
   establishment_property_type_id: number;
   establishment_certifications_on_establishment: EstablishmentCertification[];
   ruc_name_type_id: number;
   sri_state: String;
   constructor() {
      this.id = 0;
      this.ruc_id = 0;
      this.commercially_known_name = '';
      this.contact_user = new User();
      this.preview_register_codes_on_establishment = [];
      this.languages_on_establishment = [];
      this.workers_on_establishment = [];
      this.establishment_certifications_on_establishment = [];
      this.address_map_latitude = -0.2153676;
      this.address_map_longitude = -78.5036064;
      this.ruc_code_id = '-';
      this.establishment_property_type_id = 0;
      this.address_reference = '';
      this.address_main_street = '';
      this.address_secondary_street = '';
      this.address_number = '';
      this.franchise_chain_name = '';
      this.ruc_name_type_id = 0;
      this.url_web = '';
      this.contact_user_id = 0;
      this.ubication_id = 0;
      this.sri_state = '';
   }
}