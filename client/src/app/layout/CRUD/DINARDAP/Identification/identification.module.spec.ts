import { IdentificationModule } from './identification.module';

describe('IdentificationModule', () => {
   let blackPageModule: IdentificationModule;

   beforeEach(() => {
      blackPageModule = new IdentificationModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});