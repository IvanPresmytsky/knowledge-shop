import { render, within } from '@testing-library/react';

import AddReviewModal, { TAddReviewModalProps } from './AddReviewModal';
import { productsMock } from '../../mocks/products';

describe('AddReviewModal component', () => {
  const getComponent = (props?: Partial<TAddReviewModalProps>) => (
    <AddReviewModal
      isOpen
      onClose={jest.fn()}
      onAddReview={jest.fn()}
      product={productsMock[0]}
      {...props}
    />
  );

  it('renders correctly in closed state', () => {
    const { asFragment } = render(getComponent({ isOpen: false }));

    expect(asFragment()).toMatchInlineSnapshot('<DocumentFragment />');
  });

  it('renders correctly in open state', () => {
    render(getComponent());

    expect(within(document.body).getByTestId('modal-title')).toHaveTextContent(
      'Add Review'
    );
  });
});
