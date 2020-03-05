import { ZoneModule } from './zone.module';

describe('ZoneModule', () => {
   let blackPageModule: ZoneModule;

   beforeEach(() => {
      blackPageModule = new ZoneModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});