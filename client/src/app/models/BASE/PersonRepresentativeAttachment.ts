export class PersonRepresentativeAttachment {
   id: number;
   person_representative_attachment_file_type: String;
   person_representative_attachment_file_name: String;
   person_representative_attachment_file: String;
   ruc: String;
   assignment_date: Date;
   person_representative_id: number;
   constructor() {
      this.person_representative_attachment_file_type = '';
      this.person_representative_attachment_file_name = '';
      this.person_representative_attachment_file = '';
      this.assignment_date = new Date();
      this.ruc = '';
      this.person_representative_id = 0;
   }
}