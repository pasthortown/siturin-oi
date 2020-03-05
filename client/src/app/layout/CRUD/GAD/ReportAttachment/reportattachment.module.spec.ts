import { ReportAttachmentModule } from './reportattachment.module';

describe('ReportAttachmentModule', () => {
   let blackPageModule: ReportAttachmentModule;

   beforeEach(() => {
      blackPageModule = new ReportAttachmentModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});