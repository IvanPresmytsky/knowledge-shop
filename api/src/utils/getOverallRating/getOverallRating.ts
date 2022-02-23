import { TReview } from "src/types";

export const getOverallRating = (reviews?: TReview[]) => {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  const reviewsCount = reviews.length;
  const overallRatingSum = reviews.reduce((acc, curr) => acc + curr.rating, 0);

  return overallRatingSum / reviewsCount;
}
