import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Rating from "../Rating/Rating";
import Button from "../Buttons/Button";
import MultiSelectDropdown, { Option } from "../Dropdown/Dropdown";
import { addReview } from "../../../redux/features/reviews/reviewsSlice"; // Adjust the path as per your project structure

interface ReviewModalProps {
  modalIsOpen: boolean;
  modalIsClosed: () => void;
}
interface Review {
    rating: number;
    reviewText: string;
    isAnonymous: boolean;
    amenities: Option[];
  }

const ReviewModal: React.FC<ReviewModalProps> = ({ modalIsOpen, modalIsClosed }) => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [selectedAmenities, setSelectedAmenities] = useState<Option[]>([]);

  const handleSubmit = () => {
    const newReview: Review = {
      rating,
      reviewText,
      isAnonymous,
      amenities: selectedAmenities,
    };
    // Dispatch the addReview action with the new review data
    dispatch(addReview(newReview));
    modalIsClosed()
  
  };

  const isFormValid = (): boolean => {
    return (
      rating > 0 && reviewText.trim() !== "" && selectedAmenities.length > 0
    );
  };

  return (
    <>
      {modalIsOpen && (
        <div className="Reviewoverlay w-full h-screen absolute top-0 left-0 z-20 flex justify-center items-center bg-[#1d3045ec]">
          <div className="bg-white p-5  sm:p-10 w-[90%] sm:w-[70%] md:w-[50%] rounded-lg">
            <div className="flex flex-col gap-3">
              <p className="text-center">Review Location</p>
              <h5 className="font-bold sm:text-base text-sm ">
                Bonny and Clyde Street, Ajao Estate, Lagos
              </h5>

              <MultiSelectDropdown
                selectedAmenities={selectedAmenities}
                onChange={setSelectedAmenities}
              />

              <div className="font-bold space-y-2">
                <label htmlFor="rating">Rate Location</label>
                <Rating value={rating} onChange={setRating} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="review" className="">
                  Write Review
                </label>
                <textarea
                  name="review"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="border border-[#D4DCF1] p-3 bg-[#FBFAFC] rounded-lg"
                  cols={30}
                  rows={5}
                ></textarea>
              </div>

              <div className="space-x-1">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                />
                <label htmlFor="anonymous">Post as Anonymous</label>
              </div>

              <div className="flex w-full gap-2">
                <Button
                  onClick={handleSubmit}
                  width="50%"
                  disabled={!isFormValid()}
                >
                  SUBMIT
                </Button>
                <Button fill="white" width="50%" onClick={modalIsClosed}>
                  CANCEL
                </Button>
              </div>
            </div>
          </div>

         
        </div>
      )}
    </>
  );
};

export default ReviewModal;
