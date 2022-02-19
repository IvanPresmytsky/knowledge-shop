import { memo } from 'react';
import Grid from '@mui/material/Grid';

import ProductCard from '../ProductCard/ProductCard';

import { TProduct } from '../../types';

export type TProductTypeListProps = {
  products: TProduct[];
};

export const ProductList = ({ products }: TProductTypeListProps) => {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
    >
      {products.map((product: TProduct) => (
        <Grid item display="flex">
          <ProductCard
            key={product._id}
            id={product._id}
            {...product}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(ProductList);
