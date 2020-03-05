import { ApprovalStateModule } from './approvalstate.module';

describe('ApprovalStateModule', () => {
   let blackPageModule: ApprovalStateModule;

   beforeEach(() => {
      blackPageModule = new ApprovalStateModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});