import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PINK_900};
  color: ${({ theme }) => theme.COLORS.TEXT_BUTTON};

  font-weight: 500;
  line-height: 0;
  font-size: clamp(1.2rem, 0.8rem + 1.25vw, 1.6rem);
  padding: 0 1rem;

  width: 100%;
  height: 4.8rem;

  border: none;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  &:disabled {
    opacity: 0.5;
    filter: none;
    cursor: default;
  }
`;
