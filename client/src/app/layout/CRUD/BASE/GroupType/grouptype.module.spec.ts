import { GroupTypeModule } from './grouptype.module';

describe('GroupTypeModule', () => {
   let blackPageModule: GroupTypeModule;

   beforeEach(() => {
      blackPageModule = new GroupTypeModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});