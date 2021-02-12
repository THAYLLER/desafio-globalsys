import ZipCode from '../models/ZipCode';

interface CreateZipCodeDTO {
  store_code: string,
  start_track: number,
  end_track: number
}

class ZipCodeRepository {
  private zipCode: ZipCode[];

  constructor() {
    this.zipCode = [];
  }

  public findZipCodeTrack(start_track: number, end_track: number): ZipCode {
    return this.zipCode.find((zipcodes) => {

      if(start_track >= zipcodes.start_track || end_track <= zipcodes.end_track) {
        return zipcodes;
      }
    });
  }

  public create({ store_code,start_track,end_track }: CreateZipCodeDTO): ZipCode {
    const zipcode_track = new ZipCode({ store_code,start_track,end_track });

    this.zipCode.push(zipcode_track);

    return zipcode_track;
  }
}

export default ZipCodeRepository;
