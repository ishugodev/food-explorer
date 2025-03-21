import { Navigation } from "swiper/modules";

import { SwiperContainer } from "./styles";

import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

interface CarouselProps {
  children: React.ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <SwiperContainer
      className={`${isStart ? "start" : ""} ${isEnd ? "end" : ""}`}
      onSwiper={(swiper) => {
        setIsStart(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
      onSlideChange={(swiper) => {
        setIsStart(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
      slidesPerView={1}
      spaceBetween={10}
      navigation
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 60,
        },
      }}
      modules={[Navigation]}
    >
      {children}
    </SwiperContainer>
  );
}
