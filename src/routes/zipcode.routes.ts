import { Router } from 'express';

import ZipCodeRepository from '../repositories/ZipCodeRepository';
import CreateZipCodeServices from '../services/CreateZipCodeServices';
import UpdateZipCodeServices from '../services/UpdateZipCodeServices';

const zipcodeRouter = Router();
const zipCodeRepository = new ZipCodeRepository();

zipcodeRouter.get('/:zipCode', async (request, response) => {

  return response.status(200).json(zipCodeRepository.findZipCode(Number(request.params.zipCode)));
});

zipcodeRouter.get('/', async (request, response) => {

  return response.status(200).json(zipCodeRepository.findAll());
});

zipcodeRouter.delete('/:id', async (request, response) => {
    const zipcode = zipCodeRepository.delete(request.params.id);

    return response.status(200).json(zipcode);
});

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

zipcodeRouter.put('/:id', async (request, response) => {
  const {
    store_code,
    start_track,
    end_track,
   } = request.body;

   try {
      const updateZipCodeServices = new UpdateZipCodeServices(zipCodeRepository);

      const zipcode_track = updateZipCodeServices.execute(request.params.id,{ store_code, start_track, end_track })

      return response.status(200).json(zipcode_track);
   } catch (error) {
    return response.status(400).json({error: error.message});
   }
});

export default zipcodeRouter;
