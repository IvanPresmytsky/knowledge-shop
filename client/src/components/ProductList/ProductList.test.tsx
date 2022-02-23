import { render } from '@testing-library/react';

import ProductList, { TProductListProps } from './ProductList';
import { productsMock } from '../../mocks/products';

describe('ProductList component', () => {
  const product = productsMock[0];
  const getComponent = (props?: Partial<TProductListProps>) => (
    <ProductList
      products={productsMock}
      onAddReview={jest.fn()}
      {...props}
    />
  );

  it('renders all the cards correctly', () => {
    const { getByText } = render(getComponent());
    Object.values(productsMock).forEach((item) => {
      expect(getByText(item.name)).toBeInTheDocument();
    });
  });
});
