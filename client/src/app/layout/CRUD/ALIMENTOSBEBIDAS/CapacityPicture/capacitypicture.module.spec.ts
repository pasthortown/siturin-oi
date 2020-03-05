import { CapacityPictureModule } from './capacitypicture.module';

describe('CapacityPictureModule', () => {
   let blackPageModule: CapacityPictureModule;

   beforeEach(() => {
      blackPageModule = new CapacityPictureModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});