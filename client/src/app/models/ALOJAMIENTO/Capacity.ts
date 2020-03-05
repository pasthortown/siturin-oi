import { Tariff } from './Tariff';

import { Bed } from './Bed';

export class Capacity {
   id: number;
   quantity: number;
   beds_on_capacity: Bed[];
   capacity_type_id: number;
   total_spaces: number;
   max_bed: number;
   year: number;
   max_bed_ok: boolean;
   max_beds: number;
   max_spaces: number;
   editable: boolean;
   editable_beds: Boolean;
   isNewCapacity: Boolean;
   editable_spaces: Boolean;
   constructor() {
      this.beds_on_capacity = [];
      this.max_bed = 0;
      this.capacity_type_id = 0;
      this.isNewCapacity = false;
      this.editable = false;
      this.max_spaces = 0;
      this.max_beds = 0;
      this.editable_beds = true;
      this.editable_spaces = true;
      const today = new Date();
      this.year = today.getFullYear();
   }
}