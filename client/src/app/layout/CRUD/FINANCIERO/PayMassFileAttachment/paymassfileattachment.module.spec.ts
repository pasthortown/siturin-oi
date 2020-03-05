import { PayMassFileAttachmentModule } from './paymassfileattachment.module';

describe('PayMassFileAttachmentModule', () => {
   let blackPageModule: PayMassFileAttachmentModule;

   beforeEach(() => {
      blackPageModule = new PayMassFileAttachmentModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});