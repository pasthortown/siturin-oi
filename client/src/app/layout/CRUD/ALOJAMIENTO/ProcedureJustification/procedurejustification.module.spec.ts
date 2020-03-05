import { ProcedureJustificationModule } from './procedurejustification.module';

describe('ProcedureJustificationModule', () => {
   let blackPageModule: ProcedureJustificationModule;

   beforeEach(() => {
      blackPageModule = new ProcedureJustificationModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});