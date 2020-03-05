export class AuthorizationAttachment {
   id: number;
   authorization_attachment_file_type: String;
   authorization_attachment_file_name: String;
   authorization_attachment_file: String;
   register_id: number;
   constructor() {
      this.id = 0;
      this.authorization_attachment_file_type = '';
      this.authorization_attachment_file_name = '';
      this.authorization_attachment_file = '';
      this.register_id = 0;
   }
}
