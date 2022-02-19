import { memo, useCallback, useState, MouseEvent } from 'react';
import Grid from '@mui/material/Grid';

import ProductCard from '../ProductCard/ProductCard';

import { TProduct } from '../../types';
import AddReviewModal from '../AddReviewModal/AddReviewModal';

export type TProductTypeListProps = {
  products: TProduct[];
};

export const ProductList = ({ products }: TProductTypeListProps) => {
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>();
  const [isModalOpened, setModalOpened] = useState(false);

  const handleModalOpen = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target?.id) {
        return;
      }
      const product = products.find((item) => item._id === target.id);
      setSelectedProduct(product);
      setModalOpened(true);
    },
    [setSelectedProduct, products]
  );

  const handleModalClose = useCallback(() => {
    setSelectedProduct(null);
  }, [setSelectedProduct]);

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
            onAddReviewClick={handleModalOpen}
            {...product}
          />
        </Grid>
      ))}
      {selectedProduct && (
        <AddReviewModal
          isOpen={isModalOpened}
          product={selectedProduct}
          onClose={handleModalClose}
        />
      )}
    </Grid>
  );
};

export default memo(ProductList);
