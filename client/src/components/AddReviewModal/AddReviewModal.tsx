import { memo, useCallback } from 'react';

import Image from 'material-ui-image';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { TProduct } from '../../types';

export type TReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: TProduct;
};

export const AddReviewModal = ({
  isOpen,
  onClose,
  product,
}: TReviewModalProps) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add Review</DialogTitle>
      <DialogContent>
        <DialogContentText marginBottom={6}>
          <Typography component="h4">{product.name}</Typography>
          <Image
            src={product.thumbnailImage || ''}
            style={{ height: '140px', paddingTop: 0 }}
            imageStyle={{
              height: '140px',
              'object-fit': 'cover',
              'background-size': 'cover',
            }}
          />
          <Typography paragraph>{product.description}</Typography>
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="reviewer-name"
          label="Your name"
          type="name"
          fullWidth
          helperText="Please enter your name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          required
        />
        <Box marginBottom={3} marginTop={3}>
          <InputLabel htmlFor="overall-rating" margin="dense">
            Please rate the course:
          </InputLabel>
          <Rating
            id="overall-rating"
            name="overall-rating"
            defaultValue={product.overallRating}
            precision={0.1}
          />
        </Box>
        <TextField
          margin="dense"
          id="review-text"
          label="Your review"
          type="text"
          fullWidth
          multiline
          helperText="Please enter a feedback about our course"
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Add Review</Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(AddReviewModal);
