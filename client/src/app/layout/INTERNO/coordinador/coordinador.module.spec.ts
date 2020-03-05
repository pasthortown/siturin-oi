import { CoordinadorModule } from './coordinador.module';

describe('CoordinadorModule', () => {
  let blackPageModule: CoordinadorModule;

  beforeEach(() => {
    blackPageModule = new CoordinadorModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
