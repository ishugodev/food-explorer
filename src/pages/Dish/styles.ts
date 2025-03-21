import styled from "styled-components";

interface ContainerProps {
  $menuVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 100vh;

  position: relative;

  ${props => props.$menuVisible && `
    overflow: hidden;
  `}

  main {
    background: ${({ theme }) => theme.COLOR.DARK_400};

    text-align: center;

    width: 31.6rem;

    padding: 1.6rem 1.6rem 3.2rem;
    margin: 0 auto;
    

    h1 {
      font: 500 2.8rem/140% Poppins, sans-serif;

      margin-bottom: 2.4rem;
    }

    p {
      font: 400 1.6rem/140% Poppins, sans-serif;

      margin-bottom: 2.4rem;
    }
  }

  @media (min-width: 1024px) {
    main {
      display: flex;
      gap: 4.8rem;

      width: 100%;
      max-width: 112rem;

      text-align: left;

      h1 {
        font: ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM};
      }

      p {
        font: ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR};
      }
    }

    footer {
      position: absolute;
      bottom: 0;
    }
  }
`;

export const GoBackWrapper = styled.div`
  margin: 0 auto;
  
  padding: 1.6rem;

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 112rem;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 2.4rem;

  flex: 1;
`;

export const DishImageWrapper = styled.div`
  margin-top: 1.6rem;

  img {
    width: 26.4rem;
    height: 26.4rem;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    img {
      width: 39rem;
      height: 39rem;
    }
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;

  max-width: 31.6rem;

  margin-bottom: 4.8rem;

  @media (min-width: 1024px) {
    justify-content: start;
    gap: 1.2rem;

    margin-bottom: 0;
  }
`;

export const PurchaseWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;

  width: 100%;

  button {
    display: flex;
    align-items: center;
    gap: .8rem;

    width: 60%;

    font: 500 1rem/1.6rem Poppins, sans-serif;

    img {
      width: 2.2rem;
      height: 2.2rem;
    }

    p {
      font: 500 1rem/1.6rem Poppins, sans-serif;
      margin: 0;
    }
  }
`;

export const AdminButton = styled.button`
  background: ${({ theme }) => theme.COLOR.TOMATO_100};
  color: ${({ theme }) => theme.COLOR.LIGHT_100};

  font: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
  
  width: fit-content;
  margin: 0 auto;

  padding: 1.2rem 2.4rem;
  
  border: none;
  border-radius: 0.5rem;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;