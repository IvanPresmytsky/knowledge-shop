import { memo } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

import { TReview } from '../../types';
import './FeedbacksModal.css';

export type TFeedbacksModalProps = {
  isOpen: boolean;
  onClose: () => void;
  reviews: TReview[];
};

export const FeedbacksModal = ({
  isOpen,
  onClose,
  reviews,
}: TFeedbacksModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} scroll="paper">
      <DialogTitle className="feedbacksModalTitle">Add Review</DialogTitle>
      <DialogContent className="feedbacksModalContent">
        <Stack spacing={2}>
          {reviews.map((review) => (
            <FeedbackCard key={review._id} review={review} />
          ))}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(FeedbacksModal);
