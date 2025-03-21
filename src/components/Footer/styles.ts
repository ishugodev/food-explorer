import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;

  width: 100%;

  background: ${({ theme }) => theme.COLOR.DARK_600};
  
  font: 400 1.4rem/160% DM Sans, sans-serif;
  
  padding: 2.4rem 1.6rem;

  img {
    object-fit: contain;
  }
`;