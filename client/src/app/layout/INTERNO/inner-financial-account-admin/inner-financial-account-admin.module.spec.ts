import { InnerFinancialAccountAdminModule } from './inner-financial-account-admin.module';

describe('InnerFinancialAccountAdminModule', () => {
  let blackPageModule: InnerFinancialAccountAdminModule;

  beforeEach(() => {
    blackPageModule = new InnerFinancialAccountAdminModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
