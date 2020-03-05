import { LanguageModule } from './language.module';

describe('LanguageModule', () => {
   let blackPageModule: LanguageModule;

   beforeEach(() => {
      blackPageModule = new LanguageModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});