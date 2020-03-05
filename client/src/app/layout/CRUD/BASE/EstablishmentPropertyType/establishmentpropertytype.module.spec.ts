import { EstablishmentPropertyTypeModule } from './establishmentpropertytype.module';

describe('EstablishmentPropertyTypeModule', () => {
   let blackPageModule: EstablishmentPropertyTypeModule;

   beforeEach(() => {
      blackPageModule = new EstablishmentPropertyTypeModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});