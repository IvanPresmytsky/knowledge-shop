import { memo, useCallback, useState } from 'react';

import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { TProduct } from '../../types';
import { TAddReviewHandler } from '../ProductList/ProductList';
import { DEFAULT_RATING_PRECISION } from '../../consts';

export type TReviewFormProps = {
  onClose: () => void;
  onAddReview: TAddReviewHandler;
  product: TProduct;
};

export const ReviewForm = ({
  onClose,
  onAddReview,
  product,
}: TReviewFormProps) => {
  const [reviewerName, setReviewerName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(product.overallRating);
  const [isRatingChanged, setIsRatingChanged] = useState(false);
  const [hasRatingValidationError, setHasRatingValidationError] =
    useState(false);
  const [hasReviewerNameValidationError, setHasReviewerNameValidationError] =
    useState(false);

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

  const handleRatingChange = useCallback(
    (e) => {
      setRating(+e.target.value);
      setIsRatingChanged(true);
    },
    [setRating, setIsRatingChanged]
  );

  const handleAddReview = useCallback(() => {
    if (!isRatingChanged) {
      setHasRatingValidationError(true);
    } else {
      setHasRatingValidationError(false);
    }

    if (!reviewerName?.trim()) {
      setHasReviewerNameValidationError(true);
    }

    if (!(isRatingChanged && reviewerName?.trim())) {
      return;
    }

    const reviewData = {
      reviewerName: reviewerName.trim(),
      reviewText: reviewText.trim(),
      rating,
    };

    onAddReview(product._id, reviewData);
    onClose();
  }, [
    onAddReview,
    onClose,
    setHasRatingValidationError,
    setHasReviewerNameValidationError,
    isRatingChanged,
    reviewText,
    reviewerName,
    rating,
    product._id,
  ]);

  return (
    <Box>
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
          error={hasReviewerNameValidationError}
        />
        <InputLabel
          htmlFor="overall-rating"
          margin="dense"
          error={hasRatingValidationError}
        >
          Please rate the course:
        </InputLabel>
        <Rating
          size="large"
          id="overall-rating"
          name="overall-rating"
          defaultValue={product.overallRating}
          precision={DEFAULT_RATING_PRECISION}
          onChange={handleRatingChange}
          value={rating}
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
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAddReview}>Add Review</Button>
      </DialogActions>
    </Box>
  );
};

export default memo(ReviewForm);
