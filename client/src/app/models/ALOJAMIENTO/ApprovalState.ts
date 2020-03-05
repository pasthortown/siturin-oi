export class ApprovalState {
   id: number;
   value: Boolean;
   date_assigment: Date;
   notes: String;
   id_user: number;
   date_fullfill: Date;
   register_id: number;
   approval_id: number;
   constructor() {
      this.register_id = 0;
      this.approval_id = 0;
      this.id_user = 0;
      this.id = 0;
      this.value = false;
      this.date_fullfill = new Date();
      this.notes = '';
   }
}