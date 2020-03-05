import { TariffTypeModule } from './tarifftype.module';

describe('TariffTypeModule', () => {
   let blackPageModule: TariffTypeModule;

   beforeEach(() => {
      blackPageModule = new TariffTypeModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});