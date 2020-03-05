export class ReceptionRoom {
   id: number;
   quantity: number;
   fullfill: Boolean;
   register_id: number;
   constructor() {
      this.quantity = 0;
      this.fullfill = false;
      this.id = 0;
      this.register_id = 0;
   }
}