import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .6rem;

  font: ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR};
  color: ${({ theme }) => theme.COLOR.LIGHT_300};
`;