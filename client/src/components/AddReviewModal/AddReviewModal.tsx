import { memo } from 'react';

import Image from 'material-ui-image';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ReviewForm from '../ReviewForm/ReviewForm';
import { TProduct, TReview } from '../../types';
import './AddReviewModal.css';

export type TAddReviewModalProps = {
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
}: TAddReviewModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle className="modalTitle">Add Review</DialogTitle>
      <DialogContent>
        <Box>
          <Typography component="h4" fontWeight="bold">
            {product.name}
          </Typography>
          <Image
            src={product.thumbnailImage || ''}
            style={{ height: '140px', paddingTop: 0 }}
            imageStyle={{
              height: '140px',
              objectFit: 'cover',
              backgroundSize: 'cover',
            }}
          />
          <Typography paragraph>{product.description}</Typography>
        </Box>
      </DialogContent>
      <ReviewForm
        product={product}
        onAddReview={onAddReview}
        onClose={onClose}
      />
    </Dialog>
  );
};

export default memo(AddReviewModal);
