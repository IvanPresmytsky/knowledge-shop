import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  reviewerName: {
    type: String,
    trim: true,
    required: [true, 'The reviewer name for review is required!'],
  },
  reviewText: {
    type: String,
    required: false,
    default: '',
  },
  rating: {
    type: Number,
    required: [true, 'The rating for review is required!'],
    max: 5,
    min: 0,
  },
});

export const Review = mongoose.model('reviews', reviewSchema);

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'The name for product is required!'],
  },
  description: {
    type: String,
    required: [true, 'The description for product is required!'],
    trim: true,
  },
  thumbnailImage: {
    type: String,
    required: false,
    lowercase: true,
  },
  overallRating: {
    type: Number,
    required: [true, 'The overall rating for product is required!'],
    max: 5,
    min: 0,
  },
  reviews: [reviewSchema],
  lastModifiedDate: {
    type: Date,
  },
});

export default mongoose.model('products', productSchema);
