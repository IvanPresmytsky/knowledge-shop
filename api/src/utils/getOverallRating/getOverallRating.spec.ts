import { getOverallRating } from "./getOverallRating";

describe('getOverallRating util', () => {
  it('returns null if no reviews are provided', () => {
    expect(getOverallRating()).toBeNull();
    expect(getOverallRating([])).toBeNull();
  });

  it('returns overall rating between reviews', () => {
    expect(getOverallRating([
      {
        _id: '1',
        rating: 5,
        reviewerName: 'First Reviewer',
      },
      {
        _id: '2',
        rating: 10,
        reviewerName: 'Second Reviewer',
      },
      {
        _id: '3',
        rating: 15,
        reviewerName: 'Third Reviewer',
      },
    ])).toBe(10);
  });
});
