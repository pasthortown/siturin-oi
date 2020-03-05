import { RucModule } from './ruc.module';

describe('RucModule', () => {
   let blackPageModule: RucModule;

   beforeEach(() => {
      blackPageModule = new RucModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});