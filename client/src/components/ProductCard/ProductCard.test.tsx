import { render } from '@testing-library/react';

import ProductCard, { TProductCardProps } from './ProductCard';
import { productsMock } from '../../mocks/products';

describe('ProductCard component', () => {
  const product = productsMock[0];
  const getComponent = (props?: Partial<TProductCardProps>) => (
    <ProductCard
      id={product._id}
      name={product.name}
      description={product.description}
      thumbnailImage={product.thumbnailImage}
      overallRating={product.overallRating}
      reviews={product.reviews}
      onAddReviewClick={jest.fn()}
      onFeedbacksModalOpen={jest.fn()}
      {...props}
    />
  );

  it('renders correctly', () => {
    const { getByTestId, getByText } = render(getComponent());

    expect(getByText(product.name)).toBeInTheDocument();
    expect(getByText(product.description)).toBeInTheDocument();
    expect(getByTestId('see-feedback-button')).toBeInTheDocument();
  });

  it('renders correctly without "See feedback" button if there are no reviews', () => {
    const { queryByTestId } = render(getComponent({ reviews: [] }));
    const button = queryByTestId('see-feedback-button');
    expect(button).toBeFalsy();
  });
});
