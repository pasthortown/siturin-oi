import { TecnicoFinancieroModule } from './tecnico-financiero.module';

describe('TecnicoFinancieroModule', () => {
  let blackPageModule: TecnicoFinancieroModule;

  beforeEach(() => {
    blackPageModule = new TecnicoFinancieroModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
