import { SystemNameModule } from './systemname.module';

describe('SystemNameModule', () => {
   let blackPageModule: SystemNameModule;

   beforeEach(() => {
      blackPageModule = new SystemNameModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});