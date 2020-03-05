export class CapacityType {
   id: number;
   name: String;
   description: String;
   bed_quantity: number;
   register_type_id: number;
   is_island: Boolean;
   spaces: number;
   editable_beds: Boolean;
   editable_spaces: Boolean;
   constructor() {
      this.bed_quantity = 0;
      this.is_island = false;
      this.spaces = 0;
      this.register_type_id = 0;
      this.editable_beds = true;
      this.editable_spaces = true;
   }
}
