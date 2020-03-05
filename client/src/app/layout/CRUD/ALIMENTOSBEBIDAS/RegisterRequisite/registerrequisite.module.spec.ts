import { RegisterRequisiteModule } from './registerrequisite.module';

describe('RegisterRequisiteModule', () => {
   let blackPageModule: RegisterRequisiteModule;

   beforeEach(() => {
      blackPageModule = new RegisterRequisiteModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});