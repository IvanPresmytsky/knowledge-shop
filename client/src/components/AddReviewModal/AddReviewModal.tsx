import { memo, useCallback, useState } from 'react';

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
import Typography from '@mui/material/Typography';

import { TProduct, TReview } from '../../types';

export type TReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (productId: string, reviewData: TReview) => void;
  product: TProduct;
};

export const AddReviewModal = ({
  isOpen,
  onClose,
  onAddReview,
  product,
}: TReviewModalProps) => {
  const [reviewerName, setReviewerName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [overallRating, setOverallRating] = useState(product.overallRating);

  const handleReviewerNameChange = useCallback(
    (e) => {
      setReviewerName(e.target.value);
    },
    [setReviewerName]
  );

  const handleReviewTextChange = useCallback(
    (e) => {
      setReviewText(e.target.value);
    },
    [setReviewText]
  );

  const handleOverallRatingChange = useCallback(
    (e) => {
      setOverallRating(+e.target.value);
    },
    [setOverallRating]
  );

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleAddReview = useCallback(() => {
    const reviewData = {
      reviewerName,
      reviewText,
      overallRating,
    };
    onAddReview(product._id, reviewData);
    onClose();
  }, [
    onAddReview,
    onClose,
    reviewText,
    reviewerName,
    overallRating,
    product._id,
  ]);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle
        style={{
          backgroundColor: '#1976d2',
          color: '#fff',
          marginBottom: '10px',
        }}
      >
        Add Review
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography component="h4" fontWeight="bold">
            {product.name}
          </Typography>
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
      </DialogContent>
      <DialogContent>
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
          onChange={handleReviewerNameChange}
          value={reviewerName}
        />
        <InputLabel htmlFor="overall-rating" margin="dense">
          Please rate the course:
        </InputLabel>
        <Rating
          size="large"
          id="overall-rating"
          name="overall-rating"
          defaultValue={product.overallRating}
          precision={0.1}
          onChange={handleOverallRatingChange}
          value={overallRating}
        />
        <TextField
          margin="dense"
          id="review-text"
          label="Your review"
          type="text"
          fullWidth
          multiline
          rows={4}
          helperText="Please enter a feedback about our course"
          variant="outlined"
          onChange={handleReviewTextChange}
          value={reviewText}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAddReview}>Add Review</Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(AddReviewModal);
