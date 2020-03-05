import { GroupGivenModule } from './groupgiven.module';

describe('GroupGivenModule', () => {
   let blackPageModule: GroupGivenModule;

   beforeEach(() => {
      blackPageModule = new GroupGivenModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});