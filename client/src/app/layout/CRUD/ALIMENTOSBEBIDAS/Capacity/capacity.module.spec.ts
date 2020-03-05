import { CapacityModule } from './capacity.module';

describe('CapacityModule', () => {
   let blackPageModule: CapacityModule;

   beforeEach(() => {
      blackPageModule = new CapacityModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});