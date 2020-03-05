export class RegisterState {
   id: number;
   justification: String;
   register_id: number;
   state_id: number;

   constructor() {
      this.justification = '';
      this.register_id = 0;
      this.state_id = 0;
      this.id = 0;
   }
}