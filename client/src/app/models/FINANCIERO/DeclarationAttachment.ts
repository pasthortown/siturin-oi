export class DeclarationAttachment {
   id: number;
   declaration_attachment_file_type: String;
   declaration_attachment_file_name: String;
   declaration_attachment_file: String;
   declaration_id: number;
   constructor() {
      this.id = 0;
      this.declaration_attachment_file_type = '';
      this.declaration_attachment_file_name = '';
      this.declaration_attachment_file = '';
      this.declaration_id = 0;
   }
}
