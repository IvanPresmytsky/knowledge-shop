import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
  return (
    <Box>
      <AppBar className="header" component="header" position="static">
        <Typography variant="h3" component="h1">
          Knowledge Shop
        </Typography>
      </AppBar>
    </Box>
  );
}

export default App;
