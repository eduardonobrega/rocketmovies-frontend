import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  height: 14.4rem;
  background-color: ${({ theme }) => theme.COLORS.PINK_800};

  display: flex;
  align-items: center;
  padding-left: 5vw;
`;

export const Form = styled.form`
  width: min(90%, 34rem);
  margin: -9.2rem auto 2.4rem;

  > div:not(div:first-child) {
    &:nth-child(odd) {
      margin-bottom: 2.4rem;
    }
    &:nth-child(even) {
      margin-bottom: 0.8rem;
    }
  }
`;

export const Avatar = styled.div`
  position: relative;

  width: clamp(15.6rem, 12.6rem + 9.375vw, 18.6rem);
  height: clamp(15.6rem, 12.6rem + 9.375vw, 18.6rem);
  margin: 0 auto 6.4rem;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  > label {
    background-color: ${({ theme }) => theme.COLORS.PINK_900};
    cursor: pointer;

    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.4rem;
    right: 1rem;
  }
`;
