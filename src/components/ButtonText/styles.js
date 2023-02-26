import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme.COLORS.PINK_900};
`;
