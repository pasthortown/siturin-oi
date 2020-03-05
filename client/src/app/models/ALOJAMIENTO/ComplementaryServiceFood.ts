export class ComplementaryServiceFood {
   id: number;
   quantity_tables: number;
   quantity_chairs: number;
   complementary_service_food_type_id: number;
   type_of_complementary_service_food: any[];
   constructor() {
      this.type_of_complementary_service_food = [];
      this.quantity_tables = 0;
      this.quantity_chairs = 0;
      this.complementary_service_food_type_id = 0;
   }
}