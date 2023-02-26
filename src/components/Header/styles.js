import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;

  padding: 0 5vw;
  width: 100%;
  height: 11.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};

  > a > h1 {
    font-size: clamp(2rem, 1.6474rem + 0.551vw, 2.4rem);
    color: ${({ theme }) => theme.COLORS.PINK_900};
    font-weight: 700;
  }

  @media (max-width: 640px) {
    grid-template-columns: 2fr 1fr;
    a:first-child {
      display: none;
    }
  }
`;

export const Profile = styled.div``;