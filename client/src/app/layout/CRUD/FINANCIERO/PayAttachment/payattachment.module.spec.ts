import { PayAttachmentModule } from './payattachment.module';

describe('PayAttachmentModule', () => {
   let blackPageModule: PayAttachmentModule;

   beforeEach(() => {
      blackPageModule = new PayAttachmentModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});