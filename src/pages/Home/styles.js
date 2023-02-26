import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-areas:
    'header'
    'div'
    'content';

  grid-template-rows: 11.6rem 13.2rem auto;
  > div:first-of-type {
    grid-area: div;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 4rem auto;

    width: min(90%, 113.7rem);

    > h1 {
      font-weight: 400;
      font-size: clamp(2.2rem, 1.2rem + 3.125vw, 3.2rem);
    }

    > select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: none;
      outline: none;
      font-size: 1.4rem;

      color: ${({ theme }) => theme.COLORS.WHITE};
      border: 1px solid ${({ theme }) => theme.COLORS.PINK_900};
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='20' width='20'%3E%3Cpath d='M10 13.354 4.75 8.083l1.375-1.375L10 10.583l3.875-3.875 1.375 1.375Z' fill='%23F4EDE8'/%3E%3C/svg%3E")
        no-repeat center right 0.3rem;

      cursor: pointer;
      border-radius: 1rem;
      padding: 1rem 2.5rem 1rem 2rem;

      > option {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        border: none;
        outline: none;
      }
    }

    > a > button {
      width: fit-content;
    }
  }

  > main {
    overflow-y: auto;
    width: min(90%, 113.7rem);
    margin: 0 auto;
    padding-right: 0.8rem;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 640px) {
    .mobile {
      display: flex;
    }

    .desktop {
      display: none;
    }

    > div:first-of-type {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'h1 btn'
        'select btn';
      justify-items: start;

      h1 {
        grid-area: h1;
        margin-top: -1rem;
        margin-bottom: 1rem;
      }
      > select {
        font-size: 1rem;
        grid-area: select;
      }

      > a {
        grid-area: btn;
        justify-self: end;
      }
    }
  }
`;

export const Content = styled.div`
  grid-area: content;
`;
