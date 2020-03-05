import { ReceptionRoomModule } from './receptionroom.module';

describe('ReceptionRoomModule', () => {
   let blackPageModule: ReceptionRoomModule;

   beforeEach(() => {
      blackPageModule = new ReceptionRoomModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});