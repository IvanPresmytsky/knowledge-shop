import { render, within } from '@testing-library/react';

import ErrorMessageModal from './ErrorMessageModal';

describe('ErrorMessageModal component', () => {
  it('renders correctly in open state', () => {
    render(<ErrorMessageModal />);

    expect(
      within(document.body).getByTestId('error-modal-title')
    ).toHaveTextContent('App Error');
  });
});
