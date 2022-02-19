import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ProductList from './components/ProductList/ProductList';
import { productsMock } from './mocks/products';
import './App.css';

function App() {
  return (
    <Box className="app">
      <AppBar className="header" component="header" position="static">
        <Typography variant="h3" component="h1">
          Knowledge Shop
        </Typography>
      </AppBar>
      <Container component="main" className="main">
        <ProductList products={productsMock} />
      </Container>
      <Box component="footer" className="footer" textAlign="end">
        <Typography paragraph fontWeight={700} textAlign="end">
          &copy; Ivan Presmytsky
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
