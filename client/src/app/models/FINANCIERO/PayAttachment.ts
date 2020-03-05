export class PayAttachment {
   id: number;
   pay_attachment_file_type: String;
   pay_attachment_file_name: String;
   pay_attachment_file: String;
   pay_id: number;

   constructor() {
      this.pay_attachment_file = '';
      this.pay_attachment_file_name = '';
      this.pay_attachment_file_type = ''
      this.pay_id = 0;
      this.id = 0;
   }
}