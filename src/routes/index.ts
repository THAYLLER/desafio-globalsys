import { Router } from 'express';

import zipcodeRouter from './zipcode.routes';

const routes = Router();

routes.use('/zipcode', zipcodeRouter);

export default routes;
