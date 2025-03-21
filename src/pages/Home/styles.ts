
import styled from "styled-components";

interface ContainerProps {
  $menuVisible: boolean;
}


export const Container = styled.div<ContainerProps>`
  height: 100vh;

  ${props => props.$menuVisible && `
    overflow: hidden;
  `}

  main {
    background: ${({ theme }) => theme.COLOR.DARK_400};
    padding: 4.4rem 0 2.5rem;

    strong {
      font: 500 1.8rem/140% Poppins, sans-serif;
      margin: 0 1.6rem;
    }
  }
`;

export const Hero = styled.div`
  position: relative;

  background: ${({ theme }) => theme.COLOR.GRADIENT_200};
  color: ${({ theme }) => theme.COLOR.LIGHT_300};
  
  height: 12rem;

  margin: 0 1.6rem;

  .text {
    width: 21.5rem;

    position: absolute;
    right: 0;
    bottom: 2.2rem;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 140%;

    z-index: 2;
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 140%;
  }

  @media (min-width: 1024px) {
    max-width: 112rem;
    height: 26rem;

    margin: 0 auto;
    margin-top: 12rem;

    .text {
      width: 42.2rem;

      top: 50%;
      left: 75%;
      bottom: 0;
      transform: translate(-50%, -30%);
    }

    p {
      font: ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM};
    }

    span {
      font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    }
  }
`;

export const MobileHeroImg = styled.img`
  position: absolute;
  bottom: 0;
  left: -2rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const DesktopHeroImg = styled.img`
  position: absolute;
  bottom: 0;
  left: -5.6rem;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const CarouselWrapper = styled.div`
  margin-top: 6.2rem;

  @media (min-width: 1024px) {
    max-width: 112rem;
    margin-inline: auto;

    strong {
      display: block;
    }
  }
`;