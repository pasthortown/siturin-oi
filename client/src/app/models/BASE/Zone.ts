export class Zone {
   id: number;
   name: String;
   address: String;
   acronym: String;
   phone_number: String;
   location_latitude: number;
   location_longitude: number;
   email: String;
   id_coordinator: number;
   ubication_id: number;
   constructor() {
      this.location_latitude = 0;
      this.location_longitude = 0;
   }
}