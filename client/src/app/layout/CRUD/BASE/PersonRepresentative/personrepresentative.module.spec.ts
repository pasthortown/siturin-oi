import { PersonRepresentativeModule } from './personrepresentative.module';

describe('PersonRepresentativeModule', () => {
   let blackPageModule: PersonRepresentativeModule;

   beforeEach(() => {
      blackPageModule = new PersonRepresentativeModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});