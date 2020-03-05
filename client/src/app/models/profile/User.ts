export class User {
   id: number;
   name: String;
   email: String;
   password: String;
   id_ubication: number;
   api_token: String;
   address: String;
   address_map_latitude: number;
   address_map_longitude: number;
   main_phone_number: String;
   secondary_phone_number: String;
   identification: String;
   ruc: String;
   province: String;
   constructor() {
      this.id = 0;
      this.id_ubication = 0;
      this.email = '';
      this.name = '';
      this.ruc = '';
      this.province = '';
      this.identification = '';
      this.main_phone_number = '';
      this.secondary_phone_number = '0000000000';
      this.address = '';
      this.address_map_latitude = -0.2153676;
      this.address_map_longitude = -78.5036064;
   }
}