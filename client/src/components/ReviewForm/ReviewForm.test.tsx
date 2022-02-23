import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';
import { productsMock } from '../../mocks/products';

describe('ReviewForm component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <ReviewForm
        product={productsMock[0]}
        onClose={jest.fn()}
        onAddReview={jest.fn()}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
