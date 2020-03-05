import { ComplementaryServiceFoodTypeModule } from './complementaryservicefoodtype.module';

describe('ComplementaryServiceFoodTypeModule', () => {
   let blackPageModule: ComplementaryServiceFoodTypeModule;

   beforeEach(() => {
      blackPageModule = new ComplementaryServiceFoodTypeModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});