import { v4 as uuid } from 'uuid';

class ZipCode {
  id: string;

  store_code: string;

  start_track: number;

  end_track: number;


  constructor({ store_code, start_track ,end_track }: Omit<ZipCode, 'id'>) {
    this.id = uuid();
    this.store_code = store_code;
    this.start_track = start_track;
    this.end_track = end_track;
  }

}

export default ZipCode;
