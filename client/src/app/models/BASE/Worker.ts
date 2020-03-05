export class Worker {
   id: number;
   count: number;
   gender_id: number;
   gender_name: String;
   worker_group_id: number;
   worker_group_name: String;
   is_max: Boolean;
   constructor() {
      this.count = 0;
      this.gender_id = 0;
      this.worker_group_id = 0;
      this.gender_name = '';
      this.worker_group_name = '';
      this.is_max = false;
   }
}