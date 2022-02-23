import { TReview } from '../types';

export type TAPIErrorsMap = {
  [key: number]: string;
};

export type THeaders = { [key: string]: string };

export type TReviewBody = Omit<TReview, '_id'>;
