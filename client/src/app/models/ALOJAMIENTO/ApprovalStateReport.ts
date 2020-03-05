export class ApprovalStateReport {
   id: number;
   background: String;
   actions_done: String;
   conclution: String;
   recomendation: String;
   approval_state_id: number;
   constructor() {
      this.background = '';
      this.actions_done = '';
      this.conclution = '';
      this.recomendation = '';
      this.approval_state_id = 0;
      this.id = 0;
   }
}