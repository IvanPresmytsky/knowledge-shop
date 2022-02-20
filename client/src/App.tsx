import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import APIContainer from './components/APIContainer/APIContainer';

import './App.css';

function App() {
  return (
    <Box className="app">
      <AppBar className="header" component="header" position="static">
        <Typography variant="h3" component="h1">
          Knowledge Shop
        </Typography>
      </AppBar>
      <APIContainer />
      <Box component="footer" className="footer" textAlign="end">
        <Typography paragraph fontWeight={700} textAlign="end">
          &copy; Ivan Presmytsky
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
