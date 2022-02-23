import { Component, ReactNode } from 'react';

export type TErrorBoundaryProps = {
  children: ReactNode;
  errorPlaceholder?: ReactNode;
  logErrors?: boolean;
};

export type TErrorBoundaryState = {
  hasError: boolean;
};

// This component uses class form because of `componentDidCatch` lifecycle method
export class ErrorBoundary extends Component<
  TErrorBoundaryProps,
  TErrorBoundaryState
> {
  constructor(props: TErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): TErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: object): void {
    const { logErrors = true } = this.props;

    if (logErrors) {
      console.error(error as unknown as string);
      console.error(errorInfo as unknown as string);
    }
  }

  render(): ReactNode {
    const { hasError } = this.state;

    const { children, errorPlaceholder } = this.props;

    if (hasError && errorPlaceholder) {
      return errorPlaceholder;
    }

    return children;
  }
}
