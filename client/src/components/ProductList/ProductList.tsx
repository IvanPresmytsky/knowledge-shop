import { memo, useCallback, useState, MouseEvent } from 'react';
import Grid from '@mui/material/Grid';

import ProductCard from '../ProductCard/ProductCard';
import FeedbacksModal from '../FeedbacksModal/FeedbacksModal';

import { TProduct, TReview } from '../../types';
import AddReviewModal from '../AddReviewModal/AddReviewModal';

export type TProductTypeListProps = {
  products: TProduct[];
  onAddReview: (productId: string, reviewData: TReview) => void;
};

export const ProductList = ({
  products,
  onAddReview,
}: TProductTypeListProps) => {
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>();
  const [isAddReviewModalOpened, setAddReviewModalOpened] = useState(false);
  const [isFeedbacksModalOpened, setIsFeedbacksModalOpened] = useState(false);

  const handleAddReviewModalOpen = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target?.id) {
        return;
      }
      const product = products.find((item) => item._id === target.id);
      setSelectedProduct(product);
      setAddReviewModalOpened(true);
    },
    [setSelectedProduct, products]
  );

  const handleAddReviewModalClose = useCallback(() => {
    setSelectedProduct(null);
    setAddReviewModalOpened(false);
  }, [setSelectedProduct, setAddReviewModalOpened]);

  const handleFeedbacksModalOpen = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target?.id) {
        return;
      }
      const product = products.find((item) => item._id === target.id);
      setSelectedProduct(product);
      setIsFeedbacksModalOpened(true);
    },
    [setSelectedProduct, setIsFeedbacksModalOpened, products]
  );

  const handleFeedbacksModalClose = useCallback(() => {
    setSelectedProduct(null);
    setIsFeedbacksModalOpened(false);
  }, [setSelectedProduct, setIsFeedbacksModalOpened]);

  return (
    <Grid
      container
      justifyContent="center"
      spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
    >
      {products.map((product: TProduct) => (
        <Grid item display="flex" key={product._id}>
          <ProductCard
            id={product._id}
            onAddReviewClick={handleAddReviewModalOpen}
            onFeedbacksModalOpen={handleFeedbacksModalOpen}
            {...product}
          />
        </Grid>
      ))}
      {selectedProduct && (
        <AddReviewModal
          isOpen={isAddReviewModalOpened}
          product={selectedProduct}
          onClose={handleAddReviewModalClose}
          onAddReview={onAddReview}
        />
      )}
      {selectedProduct && selectedProduct.reviews.length !== 0 && (
        <FeedbacksModal
          isOpen={isFeedbacksModalOpened}
          onClose={handleFeedbacksModalClose}
          reviews={selectedProduct?.reviews}
        />
      )}
    </Grid>
  );
};

export default memo(ProductList);
