import { getAllProducts, getProductById, addReview } from './products';
import { setUp, dropDatabase } from '@utils/prepareMockedDB/prepareMockedDB';
import productsMock from '@mocks/products.json';
import { ProductNotFoundError } from '@errors/APIErrors';

beforeAll(async () => await setUp(productsMock));

afterAll(async () => await dropDatabase());

describe('Products service', () => {
  it('gets all the products', async () => {
    const products =  await getAllProducts();

    expect(products.length).toBe(productsMock.length);
    expect(products[0].description).toBe(productsMock[0].description);
    expect(products[0].name).toBe(productsMock[0].name);
    expect(products[0].overallRating).toBe(productsMock[0].overallRating);
    expect(products[0].thumbnailImage).toBe(productsMock[0].thumbnailImage);
    expect(products[0].reviews[0].reviewerName).toBe(productsMock[0].reviews[0].reviewerName);
  });

  it('gets the product by id', async () => {
    const products =  await getAllProducts();
    const expectedProduct = products[0];

    const resultProduct =  await getProductById(products[0]._id);

    expect(expectedProduct.description).toBe(resultProduct?.description);
    expect(expectedProduct.name).toBe(resultProduct?.name);
    expect(expectedProduct.thumbnailImage).toBe(resultProduct?.thumbnailImage);
    expect(expectedProduct.overallRating).toBe(resultProduct?.overallRating);
    expect(expectedProduct.reviews[0].reviewerName).toBe(resultProduct?.reviews[0].reviewerName);
  });

  it('throw not found error if there is no such product in DB during getting by id', async () => {
    let err;
    try {
      await getProductById('wrong_id');
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(ProductNotFoundError);
    expect(err.message).toBe(ProductNotFoundError.Msg);
  });

  it('adds review to specific product', async () => {
    const products =  await getAllProducts();
    const initialProduct = products[0];
    const newRating = 5;
    const newReview = {
      reviewerName: 'John',
      reviewText: 'Good course',
      rating: newRating,
    };

    await addReview(products[0]._id, newReview);

    const resultProduct = await getProductById(products[0]._id);

    expect(initialProduct.name).toEqual(resultProduct?.name);
    expect((resultProduct?.overallRating)).toBe((initialProduct.overallRating + newRating) / 2)
    expect((resultProduct?.reviews.length)).toBe(initialProduct.reviews.length + 1)
  });

  it('throw not found error if there is no such product in DB during adding new review', async () => {
    let err;
    const newReview = {
      reviewerName: 'John',
      reviewText: 'Good course',
      rating: 5,
    };
    try {
      await addReview('wrong_id', newReview);
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(ProductNotFoundError);
    expect(err.message).toBe(ProductNotFoundError.Msg);
  });
});
