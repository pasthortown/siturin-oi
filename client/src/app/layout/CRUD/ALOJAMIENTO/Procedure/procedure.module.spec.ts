import { ProcedureModule } from './procedure.module';

describe('ProcedureModule', () => {
   let blackPageModule: ProcedureModule;

   beforeEach(() => {
      blackPageModule = new ProcedureModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});