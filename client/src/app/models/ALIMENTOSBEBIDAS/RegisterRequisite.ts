export class RegisterRequisite {
   id: number;
   fullfill: Boolean;
   value: String;
   requisite_id: number;
   register_id: number;
   requisite_name: String;
   requisite_father_code: String;
   requisite_code: String;
   mandatory: Boolean;
   to_approve: number;
   score: number;
   level: number;
   HTMLtype: String;
   constructor() {
      this.requisite_name = '';
      this.requisite_code = '';
      this.mandatory = false;
      this.value = '';
      this.to_approve = 0;
      this.score = 0;
      this.fullfill = true;
      this.level = 0;
      this.HTMLtype = '';
   }
}