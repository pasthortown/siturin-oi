import { InspectorModule } from './inspector.module';

describe('InspectorModule', () => {
  let blackPageModule: InspectorModule;

  beforeEach(() => {
    blackPageModule = new InspectorModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
