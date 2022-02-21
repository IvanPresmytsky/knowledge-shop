import { BaseAPI } from './baseAPI';
import { PRODUCTS_API_ERRORS } from './errors';
import { TProduct, TReview } from '../types';
import { TReviewBody } from './types';

class ProductsAPI extends BaseAPI {
  getProducts(
    onData: (data: TProduct[]) => void,
    onError = (error: Error) => {
      console.error(error);
    },
    onFinally = () => {}
  ) {
    this.get('products')
      .then((result) => {
        BaseAPI.handleError(result, PRODUCTS_API_ERRORS);
        return result.json();
      })
      .then((data) => onData(data))
      .catch((error) => onError(error))
      .finally(() => onFinally());
  }

  getProduct(
    productId: string,
    onData: (data: TProduct) => void,
    onError = (error: Error) => {
      console.error(error);
    },
    onFinally = () => {}
  ) {
    this.get(`products/${productId}`)
      .then((result) => {
        BaseAPI.handleError(result, PRODUCTS_API_ERRORS);
        return result.json();
      })
      .then((data) => onData(data))
      .catch((error) => onError(error))
      .finally(() => onFinally());
  }

  createReview(
    productId: string,
    reviewData: TReviewBody,
    onData: (data: TReview) => void,
    onError = (error: Error) => {
      console.error(error);
    },
    onFinally = () => {}
  ) {
    this.patch(`products/${productId}`, reviewData)
      .then((result) => {
        BaseAPI.handleError(result, PRODUCTS_API_ERRORS);
        return result.json();
      })
      .then((data) => onData(data))
      .catch((error) => onError(error))
      .finally(() => onFinally());
  }
}

export default new ProductsAPI();
