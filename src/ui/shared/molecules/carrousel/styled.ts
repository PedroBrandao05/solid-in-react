import styled from 'styled-components'

export const Wrapper = styled.div`
  width: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  .base-carrousel {
    position: relative;
    z-index: 1;
  }
`

export const Items = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  z-index: 2;

  gap: 3rem;

  .item {
    scale: 0.5;
  }

  .item .current {
    scale: 1
  }
`