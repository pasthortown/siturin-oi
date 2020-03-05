import { DocumentModule } from './document.module';

describe('DocumentModule', () => {
   let blackPageModule: DocumentModule;

   beforeEach(() => {
      blackPageModule = new DocumentModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});