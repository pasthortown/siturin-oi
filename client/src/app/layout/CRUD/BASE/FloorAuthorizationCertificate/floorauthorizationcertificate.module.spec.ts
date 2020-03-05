import { FloorAuthorizationCertificateModule } from './floorauthorizationcertificate.module';

describe('FloorAuthorizationCertificateModule', () => {
   let blackPageModule: FloorAuthorizationCertificateModule;

   beforeEach(() => {
      blackPageModule = new FloorAuthorizationCertificateModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});