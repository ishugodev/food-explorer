import { Swiper } from "swiper/react";

import 'swiper/css';

export function SwiperComp({ children }: { children: React.ReactNode }) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation
    >
      {children}
    </Swiper>
  )
}