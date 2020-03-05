export class Capacity {
   id: number;
   quantity_tables: number;
   quantity_spaces: number;
   capacity_type_id: number;
   year: number;
   constructor() {
      this.quantity_tables = 0;
      this.quantity_spaces = 0;
      this.capacity_type_id = 0;
      this.id = 0;
      const today = new Date();
      this.year = today.getFullYear();
   }
}