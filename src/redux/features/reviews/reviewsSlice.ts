import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for the state
type Amenity = {
  value: string;
  label: string;
};

type ReviewState = {
  amenities: Amenity[];
  rating: number;
  reviewText: string;
  isAnonymous: boolean;
};

type InitialState = {
  reviews: ReviewState[];
};

// Define the initial state
const initialState: InitialState = {
  reviews: [],
};

// Create a slice
const reviews = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    // Define the reducer to add a review
    addReview: (state, action: PayloadAction<ReviewState>) => {
      state.reviews.push(action.payload); // Push the new review into the reviews array
    },
  },
});

// Export the action creator
export const { addReview } = reviews.actions;

// Export the reducer
export default reviews.reducer;
