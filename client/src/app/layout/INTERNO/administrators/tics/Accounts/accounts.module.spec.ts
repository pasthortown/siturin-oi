import { AccountsModule } from './accounts.module';

describe('AccountsModule', () => {
   let blackPageModule: AccountsModule;

   beforeEach(() => {
      blackPageModule = new AccountsModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});