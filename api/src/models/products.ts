import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  reviewerName: {
    type: String,
    required: true,
  },
  reviewText: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  thumbnailImage: {
    type: String,
    required: false,
    lowercase: true,
  },
  overallRating: {
    type: Number,
    required: true,
  },
  reviews: [reviewSchema],
  lastModifiedDate: {
    type: Date,
  },
});

export default mongoose.model('products', productSchema);
