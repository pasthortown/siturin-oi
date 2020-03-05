import { AgreementModule } from './agreement.module';

describe('AgreementModule', () => {
   let blackPageModule: AgreementModule;

   beforeEach(() => {
      blackPageModule = new AgreementModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});