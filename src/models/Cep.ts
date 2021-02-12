class Plans {
  id: string;

  store_code: string;

  start_track: number;

  end_track: number;


  constructor(store_code: string, start_track: number,end_track: number) {
    this.store_code = store_code;
    this.start_track = start_track;
    this.end_track = end_track;
  }
}

export default Plans;
