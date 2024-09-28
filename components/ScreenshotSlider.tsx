"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useCallback } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import ReactDOM from "react-dom";
import { useSwipeable } from "react-swipeable";

interface SliderProps {
  images: (string | StaticImageData)[];
  showArrows?: boolean;
  showInicators?: boolean;
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
        isLeft ? "left-6" : "right-6"
      } transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2`}
      style={{ fontSize: "32px", width: "48px", height: "48px" }}
      aria-label={isLeft ? "Previous Image" : "Next Image"}
    >
      {isLeft ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
    </button>
  );
};

const ScreenshotSlider = ({
  images,
  showArrows = true,
  showInicators = true,
}: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [canOpenModal, setCanOpenModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isTabletOrLarger = window.matchMedia("(min-width: 768px)").matches;
      setCanOpenModal(isTabletOrLarger);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeImage = useCallback(
    (step: number) => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + step + images.length) % images.length
      );
    },
    [images.length]
  );

  const handleImageClick = () => {
    if (canOpenModal) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleCloseModal();
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => changeImage(1),
    onSwipedRight: () => changeImage(-1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={handleBackdropClick}
      {...swipeHandlers}
    >
      <div className="relative max-w-fit w-full p-4">
        <div className="overflow-hidden relative w-full">
          <Image
            src={images[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            width={1200}
            height={675}
            className="object-contain w-full h-full max-h-[80vh] cursor-pointer"
          />
        </div>
        {showArrows && (
          <>
            <ArrowButton direction="left" onClick={() => changeImage(-1)} />
            <ArrowButton direction="right" onClick={() => changeImage(1)} />
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="relative mx-auto" {...swipeHandlers}>
      <div className="overflow-hidden rounded-lg">
        <div className="relative w-full">
          <div
            className="whitespace-nowrap transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Screenshot ${index + 1}`}
                width={800}
                height={450}
                className="inline-block object-contain w-full h-full max-h-[500px] cursor-pointer"
                onClick={handleImageClick}
              />
            ))}
          </div>
          {/* Arrow Buttons */}
          {showArrows && (
            <>
              <ArrowButton direction="left" onClick={() => changeImage(-1)} />
              <ArrowButton direction="right" onClick={() => changeImage(1)} />
            </>
          )}
        </div>
      </div>

      {/* Indicator Dots */}
      {showInicators && (
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 mx-1 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      )}

      {/* Modal Content */}
      {isModalOpen && ReactDOM.createPortal(modalContent, document.body)}
    </div>
  );
};

export default ScreenshotSlider;
