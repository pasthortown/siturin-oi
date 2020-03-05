import { InnerAccountAdminModule } from './inner-account-admin.module';

describe('InnerAccountAdminModule', () => {
  let blackPageModule: InnerAccountAdminModule;

  beforeEach(() => {
    blackPageModule = new InnerAccountAdminModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
