import { ComplementaryServiceType } from './ComplementaryServiceType';

import { Capacity } from './Capacity';

import { KitchenType } from './KitchenType';

import { ServiceType } from './ServiceType';

export class Register {
   id: number;
   code: String;
   autorized_complementary_capacities: Boolean;
   establishment_id: number;
   autorized_complementary_food_capacities: Boolean;
   complementary_service_types_on_register: ComplementaryServiceType[];
   register_type_id: number;
   capacities_on_register: Capacity[];
   kitchen_types_on_register: KitchenType[];
   service_types_on_register: ServiceType[];
   constructor() {
      this.complementary_service_types_on_register = [];
      this.capacities_on_register = [];
      this.kitchen_types_on_register = [];
      this.service_types_on_register = [];
   }
}