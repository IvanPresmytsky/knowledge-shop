import { render, within } from '@testing-library/react';

import FeedbacksModal, { TFeedbacksModalProps } from './FeedbacksModal';
import { productsMock } from '../../mocks/products';

describe('FeedbackModal component', () => {
  const getComponent = (props?: Partial<TFeedbacksModalProps>) => (
    <FeedbacksModal
      isOpen
      onClose={jest.fn()}
      reviews={[productsMock[0].reviews[0], productsMock[2].reviews[0]]}
      {...props}
    />
  );

  it('renders correctly in closed state', () => {
    const { asFragment } = render(getComponent({ isOpen: false }));

    expect(asFragment()).toMatchInlineSnapshot('<DocumentFragment />');
  });

  it('renders correctly in open state', () => {
    render(getComponent());

    expect(
      within(document.body).getByTestId('feedbacks-modal-title')
    ).toHaveTextContent('Feedbacks');
  });
});
