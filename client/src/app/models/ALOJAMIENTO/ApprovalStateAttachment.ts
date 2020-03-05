export class ApprovalStateAttachment {
   id: number;
   approval_state_attachment_file_type: String;
   approval_state_attachment_file_name: String;
   approval_state_attachment_file: String;
   approval_state_id: number;
   constructor() {
      this.approval_state_attachment_file = '';
      this.approval_state_attachment_file_name = '';
      this.approval_state_attachment_file_type = '';
      this.id = 0;
   }
}