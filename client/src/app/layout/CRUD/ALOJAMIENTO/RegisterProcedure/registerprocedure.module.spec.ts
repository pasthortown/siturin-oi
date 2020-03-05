import { RegisterProcedureModule } from './registerprocedure.module';

describe('RegisterProcedureModule', () => {
   let blackPageModule: RegisterProcedureModule;

   beforeEach(() => {
      blackPageModule = new RegisterProcedureModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});