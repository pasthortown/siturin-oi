import { ApprovalStateReportModule } from './approvalstatereport.module';

describe('ApprovalStateReportModule', () => {
   let blackPageModule: ApprovalStateReportModule;

   beforeEach(() => {
      blackPageModule = new ApprovalStateReportModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});