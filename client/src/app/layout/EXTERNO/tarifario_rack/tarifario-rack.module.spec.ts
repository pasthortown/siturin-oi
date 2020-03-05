import { TarifarioRackModule } from './tarifario-rack.module';

describe('TarifarioRackModule', () => {
  let blackPageModule: TarifarioRackModule;

  beforeEach(() => {
    blackPageModule = new TarifarioRackModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
