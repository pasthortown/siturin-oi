import { DeclarationAttachmentModule } from './declarationattachment.module';

describe('DeclarationAttachmentModule', () => {
   let blackPageModule: DeclarationAttachmentModule;

   beforeEach(() => {
      blackPageModule = new DeclarationAttachmentModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});