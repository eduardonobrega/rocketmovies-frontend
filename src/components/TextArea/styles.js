import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  padding: 1.9rem 1.6rem;

  border: none;
  outline: none;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  resize: none;

  font-size: clamp(1.4rem, 1.2rem + 0.625vw, 1.6rem);
  &::placeholder {
    font-size: clamp(1rem, 0.4rem + 1.875vw, 1.6rem);
    color: ${({ theme }) => theme.COLORS.GRAY_800};
  }
`;
