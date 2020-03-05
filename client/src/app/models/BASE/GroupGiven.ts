export class GroupGiven {
   id: number;
   register_code: String;
   ruc_id: number;
   person_representative_id: number;
   group_type_id: number;

   constructor() {
      this.group_type_id = 0;
      this.register_code = '';
   }
}