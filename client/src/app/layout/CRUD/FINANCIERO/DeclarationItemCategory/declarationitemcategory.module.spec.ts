import { DeclarationItemCategoryModule } from './declarationitemcategory.module';

describe('DeclarationItemCategoryModule', () => {
   let blackPageModule: DeclarationItemCategoryModule;

   beforeEach(() => {
      blackPageModule = new DeclarationItemCategoryModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});