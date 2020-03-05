import { WorkerModule } from './worker.module';

describe('WorkerModule', () => {
   let blackPageModule: WorkerModule;

   beforeEach(() => {
      blackPageModule = new WorkerModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});