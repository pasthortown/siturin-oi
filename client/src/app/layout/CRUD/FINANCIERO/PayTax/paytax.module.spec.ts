import { PayTaxModule } from './paytax.module';

describe('PayTaxModule', () => {
   let blackPageModule: PayTaxModule;

   beforeEach(() => {
      blackPageModule = new PayTaxModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});