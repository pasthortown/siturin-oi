export class WorkerGroup {
   id: number;
   name: String;
   description: String;
   is_max: Boolean;
   constructor() {
      this.is_max = false;
      this.name = '';
      this.description = '';
   }
}