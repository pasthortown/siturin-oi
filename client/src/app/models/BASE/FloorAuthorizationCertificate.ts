export class FloorAuthorizationCertificate {
   id: number;
   floor_authorization_certificate_file_type: String;
   floor_authorization_certificate_file_name: String;
   floor_authorization_certificate_file: String;
   register_id: number;
   constructor() {
      this.id = 0;
      this.floor_authorization_certificate_file = '';
      this.floor_authorization_certificate_file_name = '';
      this.floor_authorization_certificate_file_type = '';
      this.register_id= 0;
   }
}
