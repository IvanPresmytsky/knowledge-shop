import StatusCodes from 'http-status-codes';
import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import { TReview } from 'src/types';
import { ParamsInvalidError } from '@errors/APIErrors';
import { addReview, getAllProducts, getProductById } from '@services/products';

const { OK } = StatusCodes;

export enum ERoutes {
  API = '/api',
  Product = '/products/:id',
  Products = '/products/',
}

const router = Router();

router.get('', (_req: Request, res: Response) => {
  return res.status(OK).send('Welcome to ProductAPI!');
});

router.get(ERoutes.Products, async (_req: Request, res: Response) => {
  const products = await getAllProducts();

  return res.status(OK).json(products);
});

router.get(
  ERoutes.Product,
  async (req: Request, res: Response) => {
    const { params } = req;

    const product = await getProductById(params.id)

    return res.status(OK).json(product);
  }
);

router.patch(
  ERoutes.Product,
  body('reviewerName').not().isEmpty().trim().escape(),
  body('rating').custom(value => {
    if (value < 0 || value > 5) {
      throw new Error('Rating value is out of range');
    }
    return true;
  }),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new ParamsInvalidError(errors.array());
    }

    const { params, body } = req;

    const newProduct = await addReview(params.id, body as TReview);

    return res.status(OK).json(newProduct);
  }
);

router.use(ERoutes.API, router);

export default router;
