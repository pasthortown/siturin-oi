import { BedModule } from './bed.module';

describe('BedModule', () => {
   let blackPageModule: BedModule;

   beforeEach(() => {
      blackPageModule = new BedModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});