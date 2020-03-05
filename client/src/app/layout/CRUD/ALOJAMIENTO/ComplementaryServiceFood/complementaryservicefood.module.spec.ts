import { ComplementaryServiceFoodModule } from './complementaryservicefood.module';

describe('ComplementaryServiceFoodModule', () => {
   let blackPageModule: ComplementaryServiceFoodModule;

   beforeEach(() => {
      blackPageModule = new ComplementaryServiceFoodModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});