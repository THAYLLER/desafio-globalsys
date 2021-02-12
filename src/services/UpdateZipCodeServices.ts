import ZipCode from '../models/ZipCode';
import ZipCodeRepository from '../repositories/ZipCodeRepository';

interface RequestDTO {
  store_code: string,
  start_track: number,
  end_track: number
}

class UpdateZipCodeServices {
  private zipCodeRepository: ZipCodeRepository;

  constructor(zipCodeRepository: ZipCodeRepository) {
    this.zipCodeRepository = zipCodeRepository;
  }

  public execute(id:string ,{ store_code,start_track,end_track }: RequestDTO): ZipCode {
    const veryZipCode = this.zipCodeRepository.findZipCodeTrack(start_track, end_track);

   if(veryZipCode) {
     throw new Error('The starting or ending range of the zip already exists')

   }

   const zipcode_track = this.zipCodeRepository.update(id ,{ store_code, start_track, end_track });

   return zipcode_track;
  }
}

export default UpdateZipCodeServices;
