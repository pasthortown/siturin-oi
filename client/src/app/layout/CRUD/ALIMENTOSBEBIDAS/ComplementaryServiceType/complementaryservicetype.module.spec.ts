import { ComplementaryServiceTypeModule } from './complementaryservicetype.module';

describe('ComplementaryServiceTypeModule', () => {
   let blackPageModule: ComplementaryServiceTypeModule;

   beforeEach(() => {
      blackPageModule = new ComplementaryServiceTypeModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});