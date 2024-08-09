import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.div`
  width: 25.9rem;
  height: 3.9rem;
  cursor: pointer;
  padding-inline: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: .6rem;

  span {
    font-weight: 500;
    font-size: 1.3rem;
    color: #382C29;
  }

  background-color: #645656;
`

export const Dropdown = styled.div<{ open: boolean }>`
  width: 24.9rem;
  padding: 1rem 1.5rem;

  height: max-content;
  max-height: ${props => props.open ? '15rem' : '0rem'};

  border-radius: 0rem 0rem .6rem .6rem;

  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: #FFF4F1;

  .item {
    padding: .5rem;
    cursor: pointer;
    width: 100%;

    span {
      font-weight: 500;
      font-size: 1.3rem;
      color: #382C29;
    }

    border-bottom: .1rem solid #382C29;
  }
`