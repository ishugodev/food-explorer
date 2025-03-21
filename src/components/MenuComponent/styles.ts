import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: 5;
  
  header {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    background: ${({ theme }) => theme.COLOR.DARK_700};
    
    padding: 6rem 1.6rem 3rem;
    
    strong {
      font: 400 2.1rem/140% Roboto, sans-serif;
    }
  }
  
  main {
    background: ${({ theme }) => theme.COLOR.DARK_400};
    
    height: calc(100vh - 11.2rem - 9.2rem);

    padding: 3.6rem 1.6rem;

    ul {
      list-style: none;
      margin-block: 3.6rem;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 1rem;
    left: 1.4rem;
    z-index: 1;
  }

  input {
    background: ${({ theme }) => theme.COLOR.DARK_900};
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    color: ${({ theme }) => theme.COLOR.LIGHT_300};

    width: 100%;

    padding: 1.2rem 1.4rem 1.2rem 5.4rem;

    border: none;
    border-radius: .5rem;
  }
`;

export const LogOut = styled.button`
  display: block;

  background: none;

  font: 300 2.4rem/140% Poppins, sans-serif;
  color: ${({ theme }) => theme.COLOR.LIGHT_400};

  text-align: start;
  
  width: 100%;

  padding: 1rem;

  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.DARK_1000};
`;

export const NewDish = styled.button`
  display: block;

  background: none;
  
  font: 300 2.4rem/140% Poppins, sans-serif;
  color: ${({ theme }) => theme.COLOR.LIGHT_400};

  text-align: start;
  
  width: 100%;

  padding: 1rem;

  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.DARK_1000};
`;
