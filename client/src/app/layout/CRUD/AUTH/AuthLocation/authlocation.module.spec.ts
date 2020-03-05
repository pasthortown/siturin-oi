import { AuthLocationModule } from './authlocation.module';

describe('AuthLocationModule', () => {
   let blackPageModule: AuthLocationModule;

   beforeEach(() => {
      blackPageModule = new AuthLocationModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});