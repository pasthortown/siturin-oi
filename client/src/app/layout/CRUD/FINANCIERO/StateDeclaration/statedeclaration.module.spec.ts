import { StateDeclarationModule } from './statedeclaration.module';

describe('StateDeclarationModule', () => {
   let blackPageModule: StateDeclarationModule;

   beforeEach(() => {
      blackPageModule = new StateDeclarationModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});