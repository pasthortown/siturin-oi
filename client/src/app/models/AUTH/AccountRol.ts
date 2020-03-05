export class AccountRol {
   id: number;
   name: String;
   description: String;
   code: String;
   father_code: String;
   constructor() {
      this.father_code = '-';
   }
}
