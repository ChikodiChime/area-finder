"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../components/Buttons/Button";
import FilterButtons from "../components/FilterButtons/FilterButtons";
import reviews from "../utils/reviews";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import ReviewModal from "../components/reviewModal/ReviewModal";
import { useAppSelector } from "@/redux/store";

const Reviews = () => {
  const Data = useAppSelector((state) => state.reviewsReducer.reviews);
  const reviewData = Data.slice().reverse();
  const [reviewStates, setReviewStates] = useState(
    reviews.map(() => ({ liked: false, disliked: false }))
  );
  const [showCommentInput, setShowCommentInput] = useState(
    Array(reviews.length).fill(false)
  );
  const [modalisOpen, setModalIsOpen] = useState(false);
  const reviewIdToMap = 1;
  const reviewToMap = reviews.find((review) => review.id === reviewIdToMap);

  const toggleCommentInput = (index: number) => {
    setShowCommentInput((prev) => {
      const updatedStates = [...prev];
      updatedStates[index] = !updatedStates[index]; // Toggle the state for the specified review
      return updatedStates;
    });
  };

  const handleFilter = (filter: string) => {
    console.log(`Filter clicked: ${filter}`);
  };

  const handleLikeClick = (index: number) => {
    setReviewStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index].liked = true;
      updatedStates[index].disliked = false;

      return updatedStates;
    });
  };

  const handleDislikeClick = (index: number) => {
    setReviewStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index].liked = false;
      updatedStates[index].disliked = true;

      return updatedStates;
    });
  };

  const filters: string[] = [
    "Schools",
    " Hospitals",
    " Resort Park",
    " Shopping Malls",
    " Airport",
    " Train Station",
    " Nightlife",
    " Public Wifi",
    " Parking Lot",
    "Public Transport",
    " Bus Station",
    " Traffic",
    " Adult Home",
    " Pet Store",
    "Gym",
    " Quiet",
    " Recreation",
  ];
  const handleLeaveReviewClick = () => {
    setModalIsOpen(true);
    console.log(modalisOpen);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      {/* Navbar */}
      <div className="space-y-3 bg-[#F2F6FD] py-5 px-[20px] sm:px-[50px] md:px-[80px]">
        <nav className="flex justify-between items-center z-10 w-full h-[70px] ">
          <div className=" flex justify-start items-center gap-10 w-[70%]">
            <Image
              width={100}
              height={40}
              layout="fixed"
              src={"/Logo.svg"}
              alt="Logo"
              style={{ objectFit: "contain" }}
            />

            <div className="w-[70%] relative hidden md:block">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Enter Address"
                className="border border-[#D4DCF1] bg-[#fff] rounded-md pl-10 pr-5 py-3 w-full"
              />

              <Image
                src={"/searchIcon.svg"}
                alt="search icon"
                width={12}
                height={12}
                className="absolute top-[38%] left-5"
              />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <span className="font-bold">Welcome!</span>
            <a href="#" className=" text-[#557FF2] font-bold">
              <Image
                src={"/user1.svg"}
                alt="user profile image"
                width={40}
                height={40}
                className="rounded-full"
              />
            </a>
          </div>
        </nav>
        <div className="w-full  relative flex items-center justify-center md:hidden">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Enter Address"
            className=" border border-[#D4DCF1] bg-[#fff] rounded-md pl-10 pr-5 py-3 w-full"
          />

          <Image
            src={"/searchIcon.svg"}
            alt="search icon"
            width={12}
            height={12}
            className="absolute top-[38%] left-5"
          />
        </div>

        {/* Searched Name */}
        <div className="mt-5 flex flex-col md:flex-row justify-between w-full items-center gap-5 md:gap-2   ">
          <div className="w-full md:w-auto text-center md:text-left">
            <h4 className="">Bonny and CLyde Street, Ajao Estate, Lagos</h4>
            <p className=" md:text-[16px]">
              <b> &quot;450&quot; </b>
              <span className=" font-semibold">Reviews</span> (People are raving
              about the selected location)
            </p>
          </div>
          <div className="flex w-full md:w-auto  gap-3 items-center justify-center">
            <Button padding="10px 20px" onClick={handleLeaveReviewClick}>
              LEAVE A REVIEW
            </Button>
            <Button
              fill="rgba(49, 104, 255, 0)"
              width="50px"
              height="50px"
              padding="0"
            >
              <Image
                width={12}
                height={12}
                layout="fixed"
                src={"/saveIcon.svg"}
                alt="save-icon"
              />
            </Button>

            <Button
              fill="rgba(49, 104, 255, 0)"
              width="50px"
              height="50px"
              padding="0"
            >
              <Image
                width={14}
                height={14}
                layout="fixed"
                src={"/shareIcon.svg"}
                alt="share icon"
              />
            </Button>
          </div>
        </div>

        {/* filter Bar */}
        <div className="categories flex gap-2 overflow-x-auto ">
          <FilterButtons filters={filters} handleFilter={handleFilter} />
        </div>
      </div>

      <div className="reviews px-[20px] sm:px-[50px] md:px-[80px]  py-10 flex flex-col-reverse md:flex-row justify-between gap-5  items-start w-full">
        <div className="w-full md:w-[60%]">
          {/* response from Leave-A-Review Form */}
          {reviewData.map((reviewInfo, index) => (
            <div className="" key={index}>
              <div className="space-y-5 pb-3 mb-5 border-b">
                <div className="flex w-full justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Image
                      src={`/${reviews[2].img}`}
                      alt={"profile image"}
                      width={40}
                      height={40}
                    />
                    {reviewInfo.isAnonymous === true ? (
                      <p>Anonymous</p>
                    ) : (
                      <p>{reviews[2].name}</p>
                    )}
                    {reviews[2].userType === "admin" && (
                      <p className="font-bold">(Admin)</p>
                    )}
                    <p className="text-[#1e1e1e60]">
                      {reviews[2].created} months ago
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <Image
                      src={"/Rating.svg"}
                      alt={"Ratings Icon"}
                      width={10}
                      height={10}
                    />
                    <span>{reviewInfo.rating}.0</span>
                  </div>
                </div>
                <p className="text-justify">{reviewInfo.reviewText}</p>
                <div className="flex items-center gap-8 text-[#0D2159]">
                  {/* Your like, dislike, and comment buttons */}
                  <div className="flex items-center">
                    <button
                      onClick={() => handleLikeClick(2)}
                      style={{
                        color: reviewStates[2].liked ? "green" : "#0D2159",
                      }}
                    >
                      <FaRegThumbsUp size="25" />
                    </button>
                    <span>{reviews[2].likes}</span>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDislikeClick(2)}
                      style={{
                        color: reviewStates[2].disliked ? "red" : "#0D2159",
                      }}
                    >
                      <FaRegThumbsDown size="25" />
                    </button>
                    <span>{reviews[2].dislikes}</span>
                  </div>
                  <div className="flex items-center">
                    <button onClick={() => toggleCommentInput(2)}>
                      <Image
                        src={"/commentIcon.svg"}
                        alt={"Thumbs Up Icon"}
                        width={25}
                        height={25}
                      />
                    </button>
                    <span>{reviews[2].comments}</span>
                  </div>
                </div>
                {/* Your comment input section */}
                {showCommentInput[2] && (
                  <div className="border-t">
                    <div className="comment-input flex justify-between  items-center pt-3">
                      <input type="text" placeholder="Add a comment" />
                      <Button padding="5px 10px ">POST</Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* static data */}
          <div className="">
            {reviews.map((review, index) => (
              <div className="space-y-5 pb-3 mb-5 border-b  " key={index}>
                <div className="flex w-full justify-between items-center">
                  <div className=" flex items-center gap-3">
                    <Image
                      src={`/${review.img}`}
                      alt={"profile image"}
                      width={40}
                      height={40}
                    />

                    <p>{review.name}</p>

                    {review.userType === "admin" && (
                      <p className="font-bold">(Admin)</p>
                    )}
                    <p className="text-[#1e1e1e60] ">
                      {review.created} months ago
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <Image
                      src={"/Rating.svg"}
                      alt={"Ratings Icon"}
                      width={10}
                      height={10}
                    />
                    <span>{review.rating}.0</span>
                  </div>
                </div>
                <p className=" text-justify ">{review.review}</p>

                <div className="flex items-center gap-8 text-[#0D2159]">
                  <div className="flex items-center ">
                    <button
                      onClick={() => handleLikeClick(index)}
                      style={{
                        color: reviewStates[index].liked ? "green" : "#0D2159",
                      }}
                    >
                      <FaRegThumbsUp size="25" />
                    </button>

                    <span>{review.likes}</span>
                  </div>

                  <div className="flex items-center">
                    <button
                      onClick={() => handleDislikeClick(index)}
                      style={{
                        color: reviewStates[index].disliked ? "red" : "#0D2159",
                      }}
                    >
                      <FaRegThumbsDown size="25" />
                    </button>

                    <span>{review.dislikes}</span>
                  </div>

                  <div className="flex items-center">
                    <button onClick={() => toggleCommentInput(index)}>
                      <Image
                        src={"/commentIcon.svg"}
                        alt={"Thumbs Up Icon"}
                        width={25}
                        height={25}
                      />
                    </button>

                    <span>{review.comments}</span>
                  </div>
                </div>
                {showCommentInput[index] && (
                  <div className="border-t">
                    <div className="comment-input flex justify-between  items-center pt-3">
                      <input type="text" placeholder="Add a comment" />
                      <Button padding="5px 10px ">POST</Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid-container-wrapper  gap-3  ">
          <div className="grid-container">
            <div className="grid-item grid-item-1">
              <Image
                src={"/img1.svg"}
                alt={"Thumbs Up Icon"}
                width={200}
                height={200}
                className="rounded-lg imageStyle"
              />
            </div>
            <div className="grid-item">
              <Image
                src={"/img2.svg"}
                alt={"Thumbs Up Icon"}
                width={200}
                height={200}
                className="rounded-lg imageStyle "
              />
            </div>
            <div className="grid-item">
              <Image
                src={"/img3.svg"}
                alt={"Thumbs Up Icon"}
                width={200}
                height={200}
                className="rounded-lg imageStyle"
              />
            </div>

            <div className="grid-item block md:hidden">
              <Image
                src={"/img3.svg"}
                alt={"Thumbs Up Icon"}
                width={200}
                height={200}
                className="rounded-lg imageStyle"
              />
            </div>
            <div className="grid-item block md:hidden">
              <Image
                src={"/img2.svg"}
                alt={"Thumbs Up Icon"}
                width={200}
                height={200}
                className="rounded-lg imageStyle "
              />
            </div>
            <div className="hidden relative md:block">
              <Image
                src={"/img4.svg"}
                alt={"Thumbs Up Icon"}
                width={200}
                height={200}
                className="rounded-lg imageStyle"
              />
              <div className="absolute top-0 right-0 w-full h-full rounded-lg bg-[#1e1e1ec2] flex items-center justify-center">
                <span className="text-white  text-lg">VIEW MORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewModal modalIsOpen={modalisOpen} modalIsClosed={closeModal} />
    </>
  );
};

export default Reviews;
