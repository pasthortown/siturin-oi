import { CapacityTypeModule } from './capacitytype.module';

describe('CapacityTypeModule', () => {
   let blackPageModule: CapacityTypeModule;

   beforeEach(() => {
      blackPageModule = new CapacityTypeModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});