"use client";

import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

interface SliderProps {
  images: string[];
}

const ScreenshotSlider = ({ images }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Close the modal only if the clicked area is the backdrop
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          width={800}
          height={450}
          className="object-cover w-full h-full cursor-pointer"
          onClick={handleImageClick}
        />
      </div>
      <button
        onClick={handlePrevClick}
        className="absolute top-1/2 left-2 transform -translate-y-1/2  text-white rounded-full p-2"
        style={{ fontSize: "32px", width: "60px", height: "60px" }}
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-2 transform -translate-y-1/2  text-white rounded-full p-2"
        style={{ fontSize: "32px", width: "60px", height: "60px" }}
      >
        <MdKeyboardArrowRight />
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleBackdropClick}
        >
          <div className="relative">
            <Image
              src={images[currentIndex]}
              alt={`Screenshot ${currentIndex + 1}`}
              width={1200}
              height={675}
              className="object-cover"
            />
            <button
              onClick={handlePrevClick}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white rounded-full p-2"
              style={{ fontSize: "32px", width: "60px", height: "60px" }}
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              onClick={handleNextClick}
              className="absolute top-1/2 right-2 transform -translate-y-1/2  text-white rounded-full p-2"
              style={{ fontSize: "32px", width: "60px", height: "60px" }}
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenshotSlider;
