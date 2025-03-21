import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  span {
    font: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD};
  }
`;