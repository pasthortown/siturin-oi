import { FoodDrinkAttachmentModule } from './fooddrinkattachment.module';

describe('FoodDrinkAttachmentModule', () => {
   let blackPageModule: FoodDrinkAttachmentModule;

   beforeEach(() => {
      blackPageModule = new FoodDrinkAttachmentModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});