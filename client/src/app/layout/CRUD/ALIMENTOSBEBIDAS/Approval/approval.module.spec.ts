import { ApprovalModule } from './approval.module';

describe('ApprovalModule', () => {
   let blackPageModule: ApprovalModule;

   beforeEach(() => {
      blackPageModule = new ApprovalModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});