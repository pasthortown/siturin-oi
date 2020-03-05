import { PagosModule } from './pagos.module';

describe('PagosModule', () => {
  let blackPageModule: PagosModule;

  beforeEach(() => {
    blackPageModule = new PagosModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
