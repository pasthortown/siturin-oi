import { StateDeclaration } from './StateDeclaration';
import { DeclarationItemValue } from './DeclarationItemValue';

export class Declaration {
   id: number;
   establishment_id: number;
   declaration_date: Date;
   year: number;
   editable: boolean;
   bloqued: boolean;
   max_date_to_pay: Date;
   declaration_item_values_on_declaration: DeclarationItemValue[];
   status: StateDeclaration;
   status_name: string;
   constructor() {
      this.id = 0;
      this.bloqued = false;
      this.editable = true;
      this.establishment_id = 0;
      this.declaration_item_values_on_declaration = [];
      this.year = new Date().getFullYear();
      this.status = new StateDeclaration();
   }
}
