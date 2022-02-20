import StatusCodes, { BAD_REQUEST } from 'http-status-codes';
import { Router, Request, Response } from 'express';

import productsMock from '@mocks/products.json';
import { getOverallRating } from 'src/utils/getOverallRating/getOverallRating';
import { TProduct, TReview } from 'src/types';

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
  if (!products || products.length === 0) {
    return res.sendStatus(NOT_FOUND);
  }
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

  const review = body as TReview;

  if(!params.id || !Object.values(review)) {
    return res.status(BAD_REQUEST);
  }

  const product = db.find((item) => item._id === params.id) as TProduct;

  if (!product) {
    return res.status(NOT_FOUND);
  }

  if (!review.reviewText) {
    review.reviewText = '';
  }

  product.reviews.push(review);
  const newOverallRating = getOverallRating(product.reviews) || product.overallRating;
  product.overallRating = newOverallRating;

  return res.status(CREATED).json(body);
});

router.use('/products', router);

export default router;
