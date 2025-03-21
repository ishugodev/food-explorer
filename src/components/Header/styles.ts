import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.COLOR.DARK_700};
  
  width: 100%;

  padding-inline: 1.6rem;
  padding-top: 6rem;
  padding-bottom: 2.8rem;


  #logo img {
    width: 2.4rem;
  }

  @media (min-width: 1024px) {
    gap: 3.2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;

  width: 100%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 108.8rem;
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;

  @media (min-width: 1024px) {
    display: none;
  }
  `;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  flex: 1;

  p {
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR};
    color: ${({ theme }) => theme.COLOR.CAKE_200};
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: end;
    gap: 0;

    flex: none;
  }
`;

export const SearchInputWrapper = styled.div`
  display: none;

  position: relative;
  flex: 1;

  img {
    position: absolute;
    top: 50%;
    left: 1.4rem;
    transform: translateY(-50%);
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const SearchInput = styled.input`
  background: ${({ theme }) => theme.COLOR.DARK_900};
  color: ${({ theme }) => theme.COLOR.LIGHT_100};
  
  width: 100%;
  
  padding: 1.6rem 2rem 1.6rem 4.8rem;
  
  border: none;
  border-radius: .8rem;

  &::placeholder {
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    color: ${({ theme }) => theme.COLOR.LIGHT_500};
  }

`;

export const Order = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  background: ${({ theme }) => theme.COLOR.TOMATO_100};
  color: ${({ theme }) => theme.COLOR.LIGHT_100};

  font: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};

  padding: 1.2rem 6.4rem;

  border: none;
  border-radius: 0.5rem;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const SignOutImg = styled.img`
  display: none;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: flex;
  }
`;
