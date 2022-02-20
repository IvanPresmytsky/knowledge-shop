import { BaseAPI } from './baseAPI';
import { PRODUCTS_API_ERRORS } from './errors';
import { TProduct } from '../types';

class ProductsAPI extends BaseAPI {
  getProducts(
    onData: (data: TProduct[]) => void,
    onError = (error: Error) => {
      console.error(error);
    },
    onFinally = () => {}
  ) {
    this.get('/products')
      .then((result) => {
        BaseAPI.handleError(result, PRODUCTS_API_ERRORS);
        return result.json();
      })
      .then((data) => onData(data))
      .catch((error) => onError(error))
      .finally(() => onFinally());
  }

  getWord(
    wordId: string,
    onData: (data: TProduct) => void,
    onError = (error: Error) => {
      console.error(error);
    },
    onFinally = () => {}
  ) {
    this.get(`products/${wordId}`)
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
