export type TReview = {
  _id: string;
  reviewerName: string;
  reviewText?: string;
  rating: number;
};

export type TProduct = {
  _id: string;
  name: string;
  description: string;
  thumbnailImage?: string;
  overallRating: number;
  reviews: TReview[];
};
