import styled from "styled-components";
import { Button } from "../../components/Button";

interface ContainerProps {
  $menuVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 100vh;

  ${props => props.$menuVisible && `
    overflow: hidden;
  `}

  h1 {
    font: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
    color: ${({ theme }) => theme.COLOR.LIGHT_400};
  }

  button {
    cursor: pointer;
  }

  main {
    display: grid;
    gap: 2.4rem;

    padding: 1rem 1.6rem 5.4rem;

    form {
      display: grid;
      gap: 1.6rem;
    }
  }
`;

export const DishImage = styled.img`
  width: 20rem;
  height: 20rem;

  margin: 0 auto;

  object-fit: cover;
  border-radius: 50%;
`;

export const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media (min-width: 1024px) {
    flex-direction: row;

    width: 100%;

  }
`;

export const InputWrapper = styled.div`
  display: grid;
  gap: 1.6rem;

  & * {
    border: none;
    border-radius: .5rem;
  }

  & *::placeholder {
    color: ${({ theme }) => theme.COLOR.LIGHT_500};
  }

  &.name {
    flex: 1;
  }

  &.category {
    flex: 1;
  }

  &.ingredients {
    flex: 1;
  }

  &.price {
    align-content: center;
  }

  span {
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    color: ${({ theme }) => theme.COLOR.LIGHT_400};
  }

  label {
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    color: ${({ theme }) => theme.COLOR.LIGHT_400};

    height: fit-content;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .8rem;

      background: ${({ theme }) => theme.COLOR.DARK_800};
      color: ${({ theme }) => theme.COLOR.LIGHT_100};

      font: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
      text-align: start;

      width: 100%;

      padding: 1.2rem  3.2rem;
    }
  }

  label div img {
    width: 2.4rem;
    height: 2.4rem;
    object-fit: contain;
  }

  button {
    display: block;

    background: ${({ theme }) => theme.COLOR.DARK_800};
    color: ${({ theme }) => theme.COLOR.LIGHT_100};

    font: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
    text-align: start;

    width: 100%;

    padding: 1.2rem 3.2rem;
  }

  input {
    background: ${({ theme }) => theme.COLOR.DARK_800};
    color: ${({ theme }) => theme.COLOR.LIGHT_100};
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    padding: 1.2rem 1.4rem;
  }

  select {
    background: ${({ theme }) => theme.COLOR.DARK_900};
    color: ${({ theme }) => theme.COLOR.LIGHT_400};
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};
    padding: 1.6rem;
    cursor: pointer;
  }

  textarea {
    background: ${({ theme }) => theme.COLOR.DARK_800};
    color: ${({ theme }) => theme.COLOR.LIGHT_100};
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};

    height: 17rem;

    padding: 1.4rem;

    resize: none;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;

  background: ${({ theme }) => theme.COLOR.DARK_800};

  padding: .4rem .8rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 3.2rem;

  button {
    width: 100%;
  }
`;

export const DeleteButton = styled(Button)`
  background: ${({ theme }) => theme.COLOR.DARK_800};
`;


