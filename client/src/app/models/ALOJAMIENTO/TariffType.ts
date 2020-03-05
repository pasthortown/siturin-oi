export class TariffType {
   id: number;
   name: String;
   code: String;
   father_code: String;
   is_reference: Boolean;
   factor: number;
   constructor() {
      this.father_code = '-';
      this.factor = 1;
      this.is_reference = false;
   }
}
