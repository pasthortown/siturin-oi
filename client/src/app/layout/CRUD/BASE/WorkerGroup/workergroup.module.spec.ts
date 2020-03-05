import { WorkerGroupModule } from './workergroup.module';

describe('WorkerGroupModule', () => {
   let blackPageModule: WorkerGroupModule;

   beforeEach(() => {
      blackPageModule = new WorkerGroupModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});