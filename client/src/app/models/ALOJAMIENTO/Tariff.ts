export class Tariff {
   id: number;
   price: number;
   tariff_type_id: number;
   tariff_name: string;
   tariff_father_name: string;
   year: number;
   register_id: number;
   capacity_type_id: number;
   state_id: number;
   isNewTariff: Boolean;
   constructor() {
      this.id = 0;
      this.price = 0;
      this.tariff_type_id = 0;
      this.tariff_father_name = '';
      this.tariff_name = '';
      this.state_id = 0;
      this.register_id = 0;
      this.capacity_type_id = 0;
      const today = new Date();
      this.isNewTariff = false;
      this.year = today.getFullYear();
   }
}