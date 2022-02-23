import { render } from '@testing-library/react';
import App, { APP_TITLE } from './App';

describe('App component', () => {
  it('renders correctly', () => {
    const { asFragment, getByText } = render(<App />);

    expect(getByText(APP_TITLE)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
