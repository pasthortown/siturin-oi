import { RucNameTypeModule } from './rucnametype.module';

describe('RucNameTypeModule', () => {
   let blackPageModule: RucNameTypeModule;

   beforeEach(() => {
      blackPageModule = new RucNameTypeModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});