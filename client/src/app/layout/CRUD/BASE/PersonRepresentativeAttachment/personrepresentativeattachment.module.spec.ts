import { PersonRepresentativeAttachmentModule } from './personrepresentativeattachment.module';

describe('PersonRepresentativeAttachmentModule', () => {
   let blackPageModule: PersonRepresentativeAttachmentModule;

   beforeEach(() => {
      blackPageModule = new PersonRepresentativeAttachmentModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});