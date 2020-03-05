import { RegisterTypeModule } from './registertype.module';

describe('RegisterTypeModule', () => {
   let blackPageModule: RegisterTypeModule;

   beforeEach(() => {
      blackPageModule = new RegisterTypeModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});