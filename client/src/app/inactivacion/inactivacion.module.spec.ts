import { InactivacionModule } from './inactivacion.module';

describe('InactivacionModule', () => {
    let blackPageModule: InactivacionModule;

    beforeEach(() => {
        blackPageModule = new InactivacionModule();
    });

    it('should create an instance', () => {
        expect(blackPageModule).toBeTruthy();
    });
});
