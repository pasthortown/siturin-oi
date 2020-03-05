export class Register {
   id: number;
   ruc: String;
   comercial_name: String;
   register_code: String;
   as_turistic_date: Date;
   activity: String;
   category: String;
   classification: String;
   legal_representant_name: String;
   legal_representant_identification: String;
   establishment_property_type: String;
   organization_type: String;
   ubication_main: String;
   ubication_sencond: String;
   ubication_third: String;
   address: String;
   main_phone_number: String;
   secondary_phone_number: String;
   email: String;
   web: String;
   system_source: String;
   georeference_latitude: number;
   georeference_longitude: number;
   establishment_ruc_code: String;
   max_capacity: number;
   max_areas: number;
   total_male: number;
   total_female: number;
   ruc_state: String;
   max_beds: number;
   establishment_state: String;
   constructor() {
      this.georeference_latitude = 0;
      this.georeference_longitude = 0;
   }
}