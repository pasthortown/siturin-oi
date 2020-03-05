import { DeclarationItemModule } from './declarationitem.module';

describe('DeclarationItemModule', () => {
   let blackPageModule: DeclarationItemModule;

   beforeEach(() => {
      blackPageModule = new DeclarationItemModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});