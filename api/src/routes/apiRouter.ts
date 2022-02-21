import StatusCodes from 'http-status-codes';
import { Router, Request, Response } from 'express';

import productsMock from '@mocks/products.json';
import { getOverallRating } from 'src/utils/getOverallRating/getOverallRating';
import { TProduct, TReview } from 'src/types';
import { ParamMissingError, ProductNotFoundError } from '@errors/APIErrors';

const { CREATED, OK } = StatusCodes;

export enum ERoutes {
  API = '/api',
  Products = '/products/',
  Product = '/products/:id',
  Reviews = '/products/:id/reviews',
}

const router = Router();

const db = [
  ...productsMock,
];

router.get('', (_req: Request, res: Response) => {
  return res.status(OK).send('Welcome to ProductAPI!');
});

router.get(ERoutes.Products, (_req: Request, res: Response) => {
  const products = db;

  if (!products || products.length === 0) {
    throw new ProductNotFoundError();
  }

  return res.status(OK).json(products);
});

router.get(ERoutes.Products, (_req: Request, res: Response) => {
  const products = db;

  if (!products || products.length === 0) {
    throw new ProductNotFoundError();
  }

  return res.status(OK).json(products);
});

router.get(ERoutes.Product, (req: Request, res: Response) => {
  const { params } = req;
  const product = db.find((item) => item._id === params.id);

  if (!product) {
    throw new ProductNotFoundError();
  }

  return res.status(OK).json(product);
});

router.get(ERoutes.Reviews, (req: Request, res: Response) => {
  const { params } = req;
  const product = db.find((item) => item._id === params.id);

  if (!product) {
    throw new ProductNotFoundError();
  }

  return res.status(OK).json(product.reviews);
})

router.post(ERoutes.Reviews, (req: Request, res: Response) => {
  const { params, body } = req;

  const review = body as TReview;

  if(!params.id || !Object.values(review)) {
    throw new ParamMissingError();
  }

  const product = db.find((item) => item._id === params.id) as TProduct;

  if (!product) {
    throw new ProductNotFoundError();
  }

  if (!review.reviewText) {
    review.reviewText = '';
  }

  product.reviews.push(review);
  const newOverallRating = getOverallRating(product.reviews) || product.overallRating;
  product.overallRating = newOverallRating;

  return res.status(CREATED).json(body);
});

router.use(ERoutes.API, router);

export default router;
