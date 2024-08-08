import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 3.9rem;

  background-color: #DDCCC9;
  border-radius: .6rem;
  border: .1rem solid #382C29;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: .5rem;

  input {
    background-color: transparent;
    color: #382C29;
    font-size: 1.6rem;
    font-weight: 400;
    border: none;

    outline: none;

    &::placeholder {
      color: #645656;

      font-size: 1.6rem;
      font-weight: 300;
    }
  }

  svg {
    cursor: pointer;
  }
`