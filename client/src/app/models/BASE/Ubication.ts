export class Ubication {
   id: number;
   name: String;
   code: String;
   father_code: String;
   acronym: String;
   gmap_reference_latitude: number;
   gmap_reference_longitude: number;
   constructor() {
      this.code = '';
      this.father_code = '';
      this.name = '';
      this.acronym = '';
      this.gmap_reference_latitude = -0.2153676;
      this.gmap_reference_longitude = -78.5036064;
   }
}