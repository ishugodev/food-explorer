import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  
  font: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};

  background: ${({ theme }) => theme.COLOR.TOMATO_100};
  color: ${({ theme }) => theme.COLOR.LIGHT_100};

  padding: 1.2rem;

  border: none;
  border-radius: .5rem;

  &:disabled {
    background: ${({ theme }) => theme.COLOR.TOMATO_400};
  }
`;