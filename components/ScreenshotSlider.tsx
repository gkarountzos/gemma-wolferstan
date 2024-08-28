"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import ReactDOM from "react-dom";
import { useSwipeable } from "react-swipeable";

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
      className={`absolute top-1/2 hidden tablet:block lg:flex ${
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
  const [isMounted, setIsMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const changeImage = (step: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + step + images.length) % images.length
      );
      setIsTransitioning(false);
    }, 300);
  };

  const handleImageClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleCloseModal();
  };

  const swipeHandlersMain = useSwipeable({
    onSwipedLeft: () => changeImage(1),
    onSwipedRight: () => changeImage(-1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const swipeHandlersModal = useSwipeable({
    onSwipedLeft: () => changeImage(1),
    onSwipedRight: () => changeImage(-1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const modalContent = isModalOpen && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-xl w-full p-4" {...swipeHandlersModal}>
        <div className="overflow-hidden relative w-full">
          <div
            className={`whitespace-nowrap transition-transform duration-300 ${
              isTransitioning
                ? "transform -translate-x-full"
                : "transform translate-x-0"
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Screenshot ${index + 1}`}
                width={1200}
                height={675}
                className="inline-block object-contain w-full h-full max-h-[80vh] cursor-pointer"
              />
            ))}
          </div>
        </div>
        <ArrowButton direction="left" onClick={() => changeImage(-1)} />
        <ArrowButton direction="right" onClick={() => changeImage(1)} />
      </div>
    </div>
  );

  return (
    <div className="relative w-full max-w-lg mx-auto" {...swipeHandlersMain}>
      <div className="overflow-hidden rounded-lg">
        <div className="relative w-full">
          <div
            className={`whitespace-nowrap transition-transform duration-300 ${
              isTransitioning
                ? "transform -translate-x-full"
                : "transform translate-x-0"
            }`}
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
                className="inline-block object-contain w-full h-full max-h-[600px] cursor-pointer"
                onClick={handleImageClick}
              />
            ))}
          </div>
        </div>
      </div>
      <ArrowButton direction="left" onClick={() => changeImage(-1)} />
      <ArrowButton direction="right" onClick={() => changeImage(1)} />
      {isMounted && ReactDOM.createPortal(modalContent, document.body)}
    </div>
  );
};

export default ScreenshotSlider;
