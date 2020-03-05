import { PasswordRecoveryModule } from './password-recovery.module';

describe('password-recoveryModule', () => {
    let blackPageModule: PasswordRecoveryModule;

    beforeEach(() => {
        blackPageModule = new PasswordRecoveryModule();
    });

    it('should create an instance', () => {
        expect(blackPageModule).toBeTruthy();
    });
});
