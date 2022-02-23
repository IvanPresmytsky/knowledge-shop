import { render } from '@testing-library/react';

import FeedbackCard from './FeedbackCard';
import { productsMock } from '../../mocks/products';

describe('FeedbackCard component', () => {
  const review = productsMock[0].reviews[0];
  it('renders correctly', () => {
    const { getByText } = render(<FeedbackCard review={review} />);

    expect(getByText(review.reviewerName)).toBeInTheDocument();
    expect(getByText(review.reviewText)).toBeInTheDocument();
  });
});
