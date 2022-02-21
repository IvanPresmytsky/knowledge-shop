import { memo } from 'react';

import Image from 'material-ui-image';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ReviewForm from '../ReviewForm/ReviewForm';
import { TProduct } from '../../types';
import { DEFAULT_PREVIEW_HEIGHT, DEFAULT_THUMBNAIL_IMG } from '../../consts';
import { TAddReviewHandler } from '../ProductList/ProductList';
import './AddReviewModal.css';

export type TAddReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: TAddReviewHandler;
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
      <DialogTitle className="addReviewModalTitle">Add Review</DialogTitle>
      <DialogContent className="addReviewModalContent">
        <Box>
          <Typography component="h4" fontWeight="bold">
            {product.name}
          </Typography>
          <Image
            src={product.thumbnailImage || DEFAULT_THUMBNAIL_IMG}
            style={{ height: DEFAULT_PREVIEW_HEIGHT, paddingTop: 0 }}
            imageStyle={{
              height: DEFAULT_PREVIEW_HEIGHT,
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
