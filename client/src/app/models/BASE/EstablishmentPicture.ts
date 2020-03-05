export class EstablishmentPicture {
   id: number;
   establishment_picture_file_type: String;
   establishment_picture_file_name: String;
   establishment_picture_file: String;
   establishment_id: number;

   constructor() {
      this.establishment_picture_file = '';
      this.establishment_picture_file_name = '';
      this.establishment_picture_file_type = '';
   }
}