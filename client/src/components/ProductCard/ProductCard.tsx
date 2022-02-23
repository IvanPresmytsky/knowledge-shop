import { memo, MouseEvent } from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import {
  DEFAULT_PREVIEW_HEIGHT,
  DEFAULT_RATING_PRECISION,
  DEFAULT_THUMBNAIL_IMG,
} from '../../consts';
import { TReview } from '../../types';
import './ProductCard.css';

export type TProductCardProps = {
  id: string;
  name: string;
  description: string;
  overallRating: number;
  reviews: TReview[];
  onAddReviewClick: (e: MouseEvent) => void;
  onFeedbacksModalOpen: (e: MouseEvent) => void;
  thumbnailImage?: string;
};

const ProductCard = ({
  id,
  name,
  description,
  thumbnailImage = DEFAULT_THUMBNAIL_IMG,
  overallRating,
  reviews,
  onAddReviewClick,
  onFeedbacksModalOpen,
}: TProductCardProps) => {
  return (
    <Card id={id} className="productCard">
      <CardHeader component="h4" title={name} />
      <CardMedia
        component="img"
        height={DEFAULT_PREVIEW_HEIGHT}
        image={thumbnailImage}
        alt={name}
      />
      <CardContent>
        <Typography paragraph>{description}</Typography>
        <Rating
          size="large"
          value={overallRating}
          precision={DEFAULT_RATING_PRECISION}
          readOnly
        />
      </CardContent>
      <CardActions>
        <Button onClick={onAddReviewClick} id={id}>
          Add Review
        </Button>
        {!!reviews.length && (
          <Button
            data-testid="see-feedback-button"
            id={id}
            onClick={onFeedbacksModalOpen}
          >
            See feedbacks
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default memo(ProductCard);
