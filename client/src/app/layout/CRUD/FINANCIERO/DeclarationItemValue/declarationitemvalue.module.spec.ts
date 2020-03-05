import { DeclarationItemValueModule } from './declarationitemvalue.module';

describe('DeclarationItemValueModule', () => {
   let blackPageModule: DeclarationItemValueModule;

   beforeEach(() => {
      blackPageModule = new DeclarationItemValueModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});