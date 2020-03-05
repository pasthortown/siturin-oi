import { EstablishmentStateModule } from './establishmentstate.module';

describe('EstablishmentStateModule', () => {
   let blackPageModule: EstablishmentStateModule;

   beforeEach(() => {
      blackPageModule = new EstablishmentStateModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});