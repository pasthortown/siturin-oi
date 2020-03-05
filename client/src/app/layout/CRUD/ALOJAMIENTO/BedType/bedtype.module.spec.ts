import { BedTypeModule } from './bedtype.module';

describe('BedTypeModule', () => {
   let blackPageModule: BedTypeModule;

   beforeEach(() => {
      blackPageModule = new BedTypeModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});