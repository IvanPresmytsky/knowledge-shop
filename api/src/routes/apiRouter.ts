import StatusCodes from 'http-status-codes';
import { Router, Request, Response } from 'express';

import productsMock from '@mocks/products.json';

const { OK } = StatusCodes;

export enum ERoutes {
  Products = '/products/',
}

const router = Router();

router.get(ERoutes.Products, (_: Request, res: Response) => {
  const products = productsMock;
  return res.status(OK).json(products);
});

router.use('/products', router);

export default router;
