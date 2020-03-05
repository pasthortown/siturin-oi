import { ProfilePicture } from './../profile/ProfilePicture';
import { Establishment } from './../BASE/Establishment';
import { Ruc } from './../BASE/Ruc';
export class RegistroDataCarrier {
    establishments: Establishment[];
    userProfileImage: ProfilePicture;
    ruc: Ruc;
    registers: any[];
    esNuevo: Boolean;
    constructor() {
        this.establishments = [];
        this.ruc = new Ruc();
        this.userProfileImage = new ProfilePicture();
        this.esNuevo = true;
        this.registers = [];
    }
}
