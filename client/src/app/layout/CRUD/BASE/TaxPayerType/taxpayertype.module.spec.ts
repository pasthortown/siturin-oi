import { TaxPayerTypeModule } from './taxpayertype.module';

describe('TaxPayerTypeModule', () => {
   let blackPageModule: TaxPayerTypeModule;

   beforeEach(() => {
      blackPageModule = new TaxPayerTypeModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});