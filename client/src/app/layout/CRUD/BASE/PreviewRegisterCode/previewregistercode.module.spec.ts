import { PreviewRegisterCodeModule } from './previewregistercode.module';

describe('PreviewRegisterCodeModule', () => {
   let blackPageModule: PreviewRegisterCodeModule;

   beforeEach(() => {
      blackPageModule = new PreviewRegisterCodeModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});