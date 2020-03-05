import { UbicationModule } from './ubication.module';

describe('UbicationModule', () => {
   let blackPageModule: UbicationModule;

   beforeEach(() => {
      blackPageModule = new UbicationModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});