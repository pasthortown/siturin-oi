import { RegistroModule } from './registro.module';

describe('RegistroModule', () => {
  let blackPageModule: RegistroModule;

  beforeEach(() => {
    blackPageModule = new RegistroModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
