import { ParamMissingError, ProductNotFoundError } from '@errors/APIErrors';
import Products from '@models/products';
import { TProduct, TReview } from 'src/types';
import { getOverallRating } from '@utils/getOverallRating/getOverallRating';

export const getAllProducts = async (): Promise<TProduct[]> => {
  try {
    return await Products.find({})
  } catch (err) {
    throw new ProductNotFoundError();
  }
}

export const getProductById = async (id: string): Promise<TProduct | null> => {
  try {
    return await Products.findOne({ _id: id })
  } catch (err) {
    throw new ProductNotFoundError();
  }
};

export const addReview = async (id: string, review: TReview) => {
  const product = await getProductById(id);

  if (!product) {
    throw new ProductNotFoundError();
  }

  try {
    const newReview = {
      ...review,
      reviewText: review.reviewText || '',
    }

    const newReviews = product.reviews.concat([newReview]);
    const newOverallRating = getOverallRating(newReviews) || product.overallRating;
    const newLastModifiedDate = new Date().toString();
    const newProduct = {
      overallRating: newOverallRating,
      reviews: newReviews,
      lastModified: newLastModifiedDate
    };

    return Products.updateOne({ _id: id }, newProduct);
  } catch (err) {
    throw new ParamMissingError();
  }
};

export const importData = async (mockData: object[]) => {
  try {
    await Products.collection.insertMany(mockData)
  } catch (err) {
    console.error('Error with inserting data', err);
  }
};
