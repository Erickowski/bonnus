import styled from "@emotion/styled";

export const MoviesContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  h1 {
    margin-bottom: 1rem;
  }
  div {
    padding: 0 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: 768px) {
      justify-content: space-between;
    }
  }
`;
