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

  public findAll() {
    return this.zipCode;
  }

  public findZipCodeTrack(start_track: number, end_track: number): ZipCode {
    return this.zipCode.find((zipcodes) => {

      if(start_track == zipcodes.start_track || end_track == zipcodes.end_track) {
        return zipcodes;
      }
    });
  }

  public findZipCode(zipCode: number): ZipCode {
    return this.zipCode.find((zipcodes) => {

      if(zipCode >= zipcodes.start_track || zipCode <= zipcodes.end_track) {
        return zipcodes;
      }
    });
  }

  public create({ store_code,start_track,end_track }: CreateZipCodeDTO): ZipCode {
    const zipcode_track = new ZipCode({ store_code,start_track,end_track });

    this.zipCode.push(zipcode_track);

    return zipcode_track;
  }

  public update(id: string,{ store_code,start_track,end_track }: CreateZipCodeDTO): ZipCode {

    var i = this.zipCode.findIndex((zipCode) => zipCode.id === id);

    this.zipCode[i].store_code = store_code;
    this.zipCode[i].start_track = start_track;
    this.zipCode[i].end_track = end_track;

    return this.zipCode[i];
  }

  public delete(id: string): ZipCode[] {
    var i = this.zipCode.findIndex((zipCode) => zipCode.id === id);

    this.zipCode.splice(i, 1);

    return this.zipCode;
  }
}

export default ZipCodeRepository;
