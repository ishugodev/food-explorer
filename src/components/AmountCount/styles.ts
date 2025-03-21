import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  font: 700 2.2rem/160% Roboto, sans-serif;
  color: ${({ theme }) => theme.COLOR.LIGHT_300};
`;