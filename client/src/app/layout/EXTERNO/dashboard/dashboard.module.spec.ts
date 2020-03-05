import { DashboardModule } from './registro.module';

describe('DashboardModule', () => {
  let blackPageModule: DashboardModule;

  beforeEach(() => {
    blackPageModule = new DashboardModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
