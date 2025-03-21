import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;

  padding: 0 1.6rem;
  margin-top: 16rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    min-width: 28rem;
    max-width: 31.6rem;

    margin-top: 7.2rem;

    h1 {
      display: none;
      font: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
      text-align: center;
    }
  }

  label {
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    color: ${({ theme }) => theme.COLOR.LIGHT_500};
  }

  input {
    background: ${({ theme }) => theme.COLOR.DARK_900};
    color: ${({ theme }) => theme.COLOR.LIGHT_100};

    padding: 1.2rem 1.4rem;

    border: none;
    border-radius: .8rem;
  
    &::placeholder {
      font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
      color: ${({ theme }) => theme.COLOR.LIGHT_500};
    }
  };

  a {
    font: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
    color: ${({ theme }) => theme.COLOR.LIGHT_100};
    text-decoration: none;

    margin: auto;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    
    max-width: 110rem;
    
    padding: 0 8rem;
    margin: 0 auto;

    form {
      background: ${({ theme }) => theme.COLOR.DARK_700};

      min-width: 47.6rem;

      padding: 6.4rem;

      border-radius: 1.6rem;

      h1 {
        display: block;
      }
    }
  }
`;

export const InputWrapper = styled.div`
  display: grid;
  gap: .8rem;
`;