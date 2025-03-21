import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;

  background: ${({ theme }) => theme.COLOR.DARK_1000};

  font: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
  
  padding: .4rem .8rem;

  border-radius: .5rem;
`;

export const DeletableTagContainer = styled(Container)`
  display: flex;
  align-items: center;
  gap: .8rem;

  background: ${({ theme }) => theme.COLOR.LIGHT_600};
  font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};

  padding: .8rem 1.6rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLOR.LIGHT_100};
    cursor: pointer;
    padding: 0;
  }

  button img {
    width: .8rem;
    height: .8rem;
  }
`;

export const AddTagContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;

  background: transparent;

  padding: .8rem 1.6rem;

  border: 2px dashed ${({ theme }) => theme.COLOR.LIGHT_500};
  border-radius: .8rem;
  
  input {
    background: none;
    color: ${({ theme }) => theme.COLOR.LIGHT_100};
    
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    
    width: 7rem;

    padding: 0;
    
    border: none;
    
    &::placeholder {
      color: ${({ theme }) => theme.COLOR.LIGHT_500};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLOR.LIGHT_100};
    cursor: pointer;
    padding: 0;
  }

  button img {
    width: .8rem;
    height: .8rem;
  }
`;