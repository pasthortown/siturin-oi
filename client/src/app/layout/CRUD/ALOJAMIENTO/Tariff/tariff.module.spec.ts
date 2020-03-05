import { TariffModule } from './tariff.module';

describe('TariffModule', () => {
   let blackPageModule: TariffModule;

   beforeEach(() => {
      blackPageModule = new TariffModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});