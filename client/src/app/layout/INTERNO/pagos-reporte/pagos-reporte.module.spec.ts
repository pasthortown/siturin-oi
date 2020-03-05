import { PagosReporteModule } from './pagos-reporte.module';

describe('PagosModule', () => {
  let blackPageModule: PagosReporteModule;

  beforeEach(() => {
    blackPageModule = new PagosReporteModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
