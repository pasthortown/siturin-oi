import { DeclarationModule } from './declaration.module';

describe('DeclarationModule', () => {
   let blackPageModule: DeclarationModule;

   beforeEach(() => {
      blackPageModule = new DeclarationModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});