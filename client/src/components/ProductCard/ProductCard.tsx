import { memo, MouseEvent } from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import './ProductCard.css';

export type TProductCardProps = {
  id: string;
  name: string;
  description: string;
  overallRating: number;
  onAddReviewClick: (e: MouseEvent) => void;
  thumbnailImage?: string;
};

const ProductCard = ({
  id,
  name,
  description,
  thumbnailImage,
  overallRating,
  onAddReviewClick,
}: TProductCardProps) => {
  return (
    <Card id={id} className="productCard">
      <CardHeader component="h4" title={name} />
      <CardMedia
        component="img"
        height="140"
        image={thumbnailImage}
        alt={name}
      />
      <CardContent>
        <Typography paragraph>{description}</Typography>
        <Rating
          size="large"
          defaultValue={overallRating}
          precision={0.1}
          readOnly
        />
      </CardContent>
      <CardActions>
        <Button onClick={onAddReviewClick} id={id}>
          Add Review
        </Button>
      </CardActions>
    </Card>
  );
};

export default memo(ProductCard);
