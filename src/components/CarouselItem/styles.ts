import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-items: center;
  gap: 1.2rem;
  
  position: relative;

  min-width: 21rem;

  padding: 2.4rem;

  background: ${({ theme }) => theme.COLOR.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLOR.DARK_300};

  button {
    width: 100%;
  }
`;

export const DishImage = styled.img`
  width: 8.8rem;
  height: 8.8rem;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto;
`;

export const AdminContainer = styled.div`
  display: grid;
  justify-items: center;
  gap: 1.2rem;
  
  position: relative;

  min-width: 21rem;

  padding: 7rem 2.4rem;

  background: ${({ theme }) => theme.COLOR.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLOR.DARK_300};
`;

export const Favorite = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  background: none;
  border: none;
`;

export const NameWrapper = styled.div`
  font: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
  cursor: pointer;
`;

export const PriceWrapper = styled.div`
  font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
  color: ${({ theme }) => theme.COLOR.CAKE_200};
`;

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
  color: ${({ theme }) => theme.COLOR.LIGHT_300};
`;

