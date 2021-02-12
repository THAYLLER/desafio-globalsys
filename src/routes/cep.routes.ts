import { Router } from 'express';

import PlanRepository from '../repositories/PlanRepository';

const calculateValueConnectionRouter = Router();
const planRepository = new PlanRepository();

calculateValueConnectionRouter.post('/', (request, response) => {
  const { origin, destination, time, planType } = request.body;

  return response.json(
    planRepository.calculate(origin, destination, time, planType),
  );
});

export default calculateValueConnectionRouter;
