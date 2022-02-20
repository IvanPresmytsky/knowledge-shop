import StatusCodes from 'http-status-codes';
import { Router, Request, Response } from 'express';

import productsMock from '@mocks/products.json';

const { CREATED, OK, NOT_FOUND } = StatusCodes;

export enum ERoutes {
  Products = '/products/',
  Product = '/products/:id',
  Reviews = '/products/:id/reviews',
}

const router = Router();

const db = [
  ...productsMock,
];

router.get(ERoutes.Products, (_req: Request, res: Response) => {
  const products = db;
  return res.status(OK).json(products);
});

router.get(ERoutes.Reviews, (req: Request, res: Response) => {
  const { params } = req;
  const product = db.find((item) => item._id === params.id);

  if (!product) {
    return res.status(NOT_FOUND);
  }

  return res.status(OK).json(product.reviews);
})

router.post(ERoutes.Reviews, (req: Request, res: Response) => {
  const { params, body } = req;
  const product = db.find((item) => item._id === params.id);
  product?.reviews.push(body);
  return res.status(CREATED).json(body);
});

router.use('/products', router);

export default router;
