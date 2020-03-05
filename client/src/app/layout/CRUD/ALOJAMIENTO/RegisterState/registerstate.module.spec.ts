import { RegisterStateModule } from './registerstate.module';

describe('RegisterStateModule', () => {
   let blackPageModule: RegisterStateModule;

   beforeEach(() => {
      blackPageModule = new RegisterStateModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});