import { AccountAdminModule } from './account-admin.module';

describe('AccountAdminModule', () => {
  let blackPageModule: AccountAdminModule;

  beforeEach(() => {
    blackPageModule = new AccountAdminModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
