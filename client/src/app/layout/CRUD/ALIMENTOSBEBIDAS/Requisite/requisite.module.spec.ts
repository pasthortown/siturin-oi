import { RequisiteModule } from './requisite.module';

describe('RequisiteModule', () => {
   let blackPageModule: RequisiteModule;

   beforeEach(() => {
      blackPageModule = new RequisiteModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});