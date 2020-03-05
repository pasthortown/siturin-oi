import { ServiceTypeModule } from './servicetype.module';

describe('ServiceTypeModule', () => {
   let blackPageModule: ServiceTypeModule;

   beforeEach(() => {
      blackPageModule = new ServiceTypeModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});