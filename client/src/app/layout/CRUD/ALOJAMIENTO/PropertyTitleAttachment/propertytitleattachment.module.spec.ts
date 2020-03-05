import { PropertyTitleAttachmentModule } from './propertytitleattachment.module';

describe('PropertyTitleAttachmentModule', () => {
   let blackPageModule: PropertyTitleAttachmentModule;

   beforeEach(() => {
      blackPageModule = new PropertyTitleAttachmentModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});