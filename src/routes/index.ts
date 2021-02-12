import { Router } from 'express';

import calculateValueConnection from './calculateValueConnection.routes';

const routes = Router();

routes.use('/calculate', calculateValueConnection);

export default routes;
