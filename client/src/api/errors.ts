import { StatusCodes } from 'http-status-codes';

import { TAPIErrorsMap } from './types';

export const PRODUCTS_API_ERRORS: TAPIErrorsMap = {
  [StatusCodes.NOT_FOUND]: 'Products not found.',
  [StatusCodes.BAD_REQUEST]: 'Bad request to products API.',
  [StatusCodes.INTERNAL_SERVER_ERROR]: 'Internal Server Error.',
};
