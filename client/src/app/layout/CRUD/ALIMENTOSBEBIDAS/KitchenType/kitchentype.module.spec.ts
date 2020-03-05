import { KitchenTypeModule } from './kitchentype.module';

describe('KitchenTypeModule', () => {
   let blackPageModule: KitchenTypeModule;

   beforeEach(() => {
      blackPageModule = new KitchenTypeModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});