import { EstablishmentCertificationTypeModule } from './establishmentcertificationtype.module';

describe('EstablishmentCertificationTypeModule', () => {
   let blackPageModule: EstablishmentCertificationTypeModule;

   beforeEach(() => {
      blackPageModule = new EstablishmentCertificationTypeModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});