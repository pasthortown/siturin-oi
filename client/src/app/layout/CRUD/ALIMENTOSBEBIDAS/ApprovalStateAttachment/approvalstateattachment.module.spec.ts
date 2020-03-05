import { ApprovalStateAttachmentModule } from './approvalstateattachment.module';

describe('ApprovalStateAttachmentModule', () => {
   let blackPageModule: ApprovalStateAttachmentModule;

   beforeEach(() => {
      blackPageModule = new ApprovalStateAttachmentModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});