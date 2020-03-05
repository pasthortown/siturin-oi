import { EstablishmentCertificationModule } from './establishmentcertification.module';

describe('EstablishmentCertificationModule', () => {
   let blackPageModule: EstablishmentCertificationModule;

   beforeEach(() => {
      blackPageModule = new EstablishmentCertificationModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});