import { BaseAPI } from './baseAPI';
import { REVIEWS_API_ERRORS } from './errors';
import { TProduct, TReview } from '../types';

class ReviewsAPI extends BaseAPI {
  getReviews(
    productId: string,
    onData: (data: TProduct[]) => void,
    onError = (error: Error) => {
      console.error(error);
    },
    onFinally = () => {}
  ) {
    this.get(`/products/${productId}/reviews`)
      .then((result) => {
        BaseAPI.handleError(result, REVIEWS_API_ERRORS);
        return result.json();
      })
      .then((data) => onData(data))
      .catch((error) => onError(error))
      .finally(() => onFinally());
  }

  createReview(
    productId: string,
    reviewData: TReview,
    onData: (data: TReview) => void,
    onError = (error: Error) => {
      console.error(error);
    },
    onFinally = () => {}
  ) {
    this.post(`products/${productId}/reviews`, reviewData)
      .then((result) => {
        BaseAPI.handleError(result, REVIEWS_API_ERRORS);
        return result.json();
      })
      .then((data) => onData(data))
      .catch((error) => onError(error))
      .finally(() => onFinally());
  }
}

export default new ReviewsAPI();
