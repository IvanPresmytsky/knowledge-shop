import { render } from '@testing-library/react';

import { ErrorBoundary } from './ErrorBoundary';

type TExceptionProps = {
  shouldThrow?: boolean;
};

describe('ErrorBoundary component', () => {
  const ERROR = new Error();
  const placeholder = 'Error placeholder';

  function ExceptionComponent(props: TExceptionProps): JSX.Element | null {
    const { shouldThrow = false } = props;

    if (shouldThrow) {
      throw ERROR;
    } else {
      return null;
    }
  }

  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders component children if no errors were caught', () => {
    const component = (
      <ErrorBoundary>
        <p>Rendered children</p>
      </ErrorBoundary>
    );

    const { container } = render(component);

    expect(container.innerHTML).toMatchInlineSnapshot(
      '"<p>Rendered children</p>"'
    );
  });

  it('renders `null` in case if any exception was raised in children', () => {
    const component = (
      <ErrorBoundary errorPlaceholder={null}>
        <ExceptionComponent />
      </ErrorBoundary>
    );

    const { rerender } = render(component);

    let exception;
    try {
      rerender(
        <ErrorBoundary errorPlaceholder={null}>
          <ExceptionComponent shouldThrow />
        </ErrorBoundary>
      );
    } catch (err) {
      exception = err;
    }

    expect(exception).toEqual(ERROR);
  });

  it('renders original children in case if any exception raised', () => {
    const component = (
      <ErrorBoundary>
        <ExceptionComponent />
      </ErrorBoundary>
    );

    const { rerender } = render(component);

    let exception;
    try {
      rerender(
        <ErrorBoundary>
          <ExceptionComponent shouldThrow />
        </ErrorBoundary>
      );
    } catch (err) {
      exception = err;
    }

    expect(exception).toEqual(ERROR);
  });

  it('renders errorPlaceholder in case if any exception raised and placeholder provided', () => {
    const component = (
      <ErrorBoundary errorPlaceholder={placeholder} logErrors={false}>
        <ExceptionComponent shouldThrow />
      </ErrorBoundary>
    );

    const { container } = render(component);
    expect(container.innerHTML).toBe(placeholder);
  });

  it('logs an error in case if any exception raised if logErrors is enabled', () => {
    const component = (
      <ErrorBoundary errorPlaceholder={placeholder} logErrors>
        <ExceptionComponent shouldThrow />
      </ErrorBoundary>
    );

    const { error } = console;

    render(component);
    expect(error).toHaveBeenCalled();
  });

  it('logs an error by default in case if any exception raised', () => {
    const component = (
      <ErrorBoundary errorPlaceholder={placeholder}>
        <ExceptionComponent shouldThrow />
      </ErrorBoundary>
    );
    const { error } = console;

    render(component);
    expect(error).toHaveBeenCalled();
  });
});
