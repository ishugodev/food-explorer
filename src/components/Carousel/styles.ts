import styled from "styled-components";

import { Swiper } from "swiper/react";


export const SwiperContainer = styled(Swiper)`
  max-width: 100%;
  display: flex;
  justify-content: center;
  padding: 4rem;

  position: relative;
  overflow: hidden;
  
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 20rem;
    z-index: 2;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, ${({ theme }) => theme.COLOR.DARK_400}, transparent);
    z-index: 3;
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, ${({ theme }) => theme.COLOR.DARK_400}, transparent);
  }

  &.start::before {
    opacity: 0;
  }

  &.end::after {
    opacity: 0;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 20px;
    z-index: 5;
  }

  .swiper-button-prev {
    left: 4rem;
  }

  .swiper-button-next {
    right: 4rem;
  }
`;