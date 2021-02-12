import { Router } from 'express';

import ZipCodeRepository from '../repositories/ZipCodeRepository';
import CreateZipCodeServices from '../services/CreateZipCodeServices';

const zipcodeRouter = Router();
const zipCodeRepository = new ZipCodeRepository();

zipcodeRouter.post('/', async (request, response) => {
  const {
    store_code,
    start_track,
    end_track,
   } = request.body;

   try {
      const createZipCodeServices = new CreateZipCodeServices(zipCodeRepository);

      const zipcode_track = createZipCodeServices.execute({ store_code, start_track, end_track })

      return response.status(200).json(zipcode_track);
   } catch (error) {
    return response.status(400).json({error: error.message});
   }

});

export default zipcodeRouter;
