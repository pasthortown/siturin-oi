import { EstablishmentPictureModule } from './establishmentpicture.module';

describe('EstablishmentPictureModule', () => {
   let blackPageModule: EstablishmentPictureModule;

   beforeEach(() => {
      blackPageModule = new EstablishmentPictureModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});