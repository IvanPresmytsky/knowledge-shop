import { memo, useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import ProductList from '../ProductList/ProductList';
import { TProduct } from '../../types';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import './APIContainer.css';

const API_ENDPOINT = 'http://localhost:9000/api/products';

export const APIContainer = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(API_ENDPOINT)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

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
      <ProductList products={products} />
    </Container>
  );
};

export default memo(APIContainer);
