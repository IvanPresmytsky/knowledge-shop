import { memo } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { DEFAULT_RATING_PRECISION } from '../../consts';
import { TReview } from '../../types';

export type TFeedbackCardProps = {
  review: TReview;
};

const FeedbackCard = ({ review }: TFeedbackCardProps) => {
  return (
    <Card key={review.reviewerName}>
      <CardHeader component="h4" title={review.reviewerName} />
      <CardContent>
        <Typography paragraph>{review.reviewText || ''}</Typography>
        <Rating
          size="large"
          defaultValue={review.rating}
          precision={DEFAULT_RATING_PRECISION}
          readOnly
        />
      </CardContent>
    </Card>
  );
};

export default memo(FeedbackCard);
