"use client";

import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

interface SliderProps {
  images: string[];
}

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const ArrowButton = ({ direction, onClick }: ArrowButtonProps) => {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 ${
        isLeft ? "left-[-40px]" : "right-[-50px]"
      } transform -translate-y-1/2 text-white rounded-full p-2`}
      style={{ fontSize: "32px", width: "60px", height: "60px" }}
    >
      {isLeft ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
    </button>
  );
};

const ScreenshotSlider = ({ images }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeImage = (step: number) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + step + images.length) % images.length
    );
  };

  const handleImageClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleCloseModal();
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          width={800}
          height={450}
          className="relative object-contain w-full h-full cursor-pointer"
          onClick={handleImageClick}
        />
      </div>
      <ArrowButton direction="left" onClick={() => changeImage(-1)} />
      <ArrowButton direction="right" onClick={() => changeImage(1)} />

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
              className="relative object-contain w-full h-full cursor-pointer"
            />
            <ArrowButton direction="left" onClick={() => changeImage(-1)} />
            <ArrowButton direction="right" onClick={() => changeImage(1)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenshotSlider;
