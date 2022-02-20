import { StatusCodes } from 'http-status-codes';

import { TAPIErrorsMap } from './types';

export const PRODUCTS_API_ERRORS: TAPIErrorsMap = {
  [StatusCodes.NOT_FOUND]: 'Users not found.',
  [StatusCodes.BAD_REQUEST]: 'Bad request to users API.',
  [StatusCodes.INTERNAL_SERVER_ERROR]: 'Internal Server Error.',
};

export const REVIEWS_API_ERRORS: TAPIErrorsMap = {
  [StatusCodes.NOT_FOUND]: 'Reviews not found.',
  [StatusCodes.BAD_REQUEST]: 'Bad request to reviews API.',
  [StatusCodes.INTERNAL_SERVER_ERROR]: 'Internal Server Error.',
};
