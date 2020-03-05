import { AuthorizationAttachmentModule } from './authorizationattachment.module';

describe('AuthorizationAttachmentModule', () => {
   let blackPageModule: AuthorizationAttachmentModule;

   beforeEach(() => {
      blackPageModule = new AuthorizationAttachmentModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});