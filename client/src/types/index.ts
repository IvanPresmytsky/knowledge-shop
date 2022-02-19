export type TReview = {
  reviewerName: string;
  reviewText?: string;
  overallRating: number;
};

export type TProduct = {
  _id: string;
  name: string;
  description: string;
  thumbnailImage?: string;
  overallRating: number;
  reviews: TReview[];
};
