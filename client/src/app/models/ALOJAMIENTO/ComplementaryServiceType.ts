export class ComplementaryServiceType {
   id: number;
   name: String;
   code: String;
   father_code: String;
   description: String;
   complementary_service_type_fatherCode: String;
   constructor() {
      this.complementary_service_type_fatherCode = '-';
   }
}