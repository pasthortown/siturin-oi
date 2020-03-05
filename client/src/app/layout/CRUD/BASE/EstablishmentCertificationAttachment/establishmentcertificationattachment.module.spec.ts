import { EstablishmentCertificationAttachmentModule } from './establishmentcertificationattachment.module';

describe('EstablishmentCertificationAttachmentModule', () => {
   let blackPageModule: EstablishmentCertificationAttachmentModule;

   beforeEach(() => {
      blackPageModule = new EstablishmentCertificationAttachmentModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});