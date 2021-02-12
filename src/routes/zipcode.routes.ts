import { Router } from 'express';

import ZipCodeRepository from '../repositories/ZipCodeRepository';

import Zipcode from '../models/ZipCode';

const zipcodeRouter = Router();
const zipCodeRepository = new ZipCodeRepository();


zipcodeRouter.post('/', async (request, response) => {
  const {
    store_code,
    start_track,
    end_track,
   } = request.body;

   const veryZipCode = zipCodeRepository.findZipCodeTrack(start_track, end_track);

   if(veryZipCode) {
    return response.status(400).json({error: 'The starting or ending range of the zip already exists'});
   }

   const zipcode_track = zipCodeRepository.create({ store_code, start_track, end_track });

  return response.status(200).json(zipcode_track);
});

export default zipcodeRouter;
