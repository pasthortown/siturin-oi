import { PayModule } from './pay.module';

describe('PayModule', () => {
   let blackPageModule: PayModule;

   beforeEach(() => {
      blackPageModule = new PayModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});