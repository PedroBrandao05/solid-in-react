import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  background-color: #333030;
  border-radius: .8rem;

  padding: 1rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    gap: 1rem;

    li {
      button {
        border-radius: .6rem;
        background-color: transparent;
        border: .1rem solid #FFF;

        height: 2rem;
      }

      .checked {
        background-color: blue;
      }

      label {
        font-family: Inter, sans-serif;
        font-size: .9rem;
        font-weight: 400;
      }
    }
  }
`