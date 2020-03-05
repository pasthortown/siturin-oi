import { BitacoraModule } from './bitacora.module';

describe('BitacoraModule', () => {
  let blackPageModule: BitacoraModule;

  beforeEach(() => {
    blackPageModule = new BitacoraModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
