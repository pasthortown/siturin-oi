import { RegisterTypeImageModule } from './registertypeimage.module';

describe('RegisterTypeImageModule', () => {
   let blackPageModule: RegisterTypeImageModule;

   beforeEach(() => {
      blackPageModule = new RegisterTypeImageModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});