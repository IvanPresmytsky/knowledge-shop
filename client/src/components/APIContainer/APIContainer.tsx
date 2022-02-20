import { memo, useCallback, useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ProductList from '../ProductList/ProductList';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import productsAPI from '../../api/productsAPI';
import reviewsAPI from '../../api/reviewsAPI';
import { TProduct, TReview } from '../../types';

import './APIContainer.css';

export const APIContainer = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [createdReview, setCreatedReview] = useState<TReview | null>(null);

  useEffect(() => {
    setLoading(true);
    productsAPI.getProducts(
      (data: TProduct[]) => setProducts(data),
      (APIError: Error) => setError(APIError),
      () => setLoading(false)
    );
  }, [createdReview]);

  const handleAddReview = useCallback(
    (productId: string, reviewData: TReview) => {
      reviewsAPI.createReview(
        productId,
        reviewData,
        (data: TReview) => setCreatedReview(data),
        (APIError: Error) => setError(APIError),
        () => setLoading(false)
      );
    },
    [setCreatedReview, setError, setLoading]
  );

  if (loading) {
    return (
      <Box display="flex" className="loadingContainer">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" className="loadingContainer">
        <Alert severity="error">
          <AlertTitle>API Error</AlertTitle>
          {error}
        </Alert>
      </Box>
    );
  }

  if (!products.length) {
    return (
      <Box display="flex" className="loadingContainer">
        <Alert severity="warning">
          <AlertTitle>No Products</AlertTitle>
          Sorry, there are no products for now!
        </Alert>
      </Box>
    );
  }

  return (
    <Container component="main" className="main">
      <ProductList products={products} onAddReview={handleAddReview} />
    </Container>
  );
};

export default memo(APIContainer);
