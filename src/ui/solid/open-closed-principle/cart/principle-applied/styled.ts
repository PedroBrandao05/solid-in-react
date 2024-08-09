import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10rem;

  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  overflow-x: hidden;
  overflow-y: auto;

  background-color: #F3E3DF;

  ::-webkit-scrollbar {
    width: .1rem;
    background-color: #382C29;
  }
  
  gap: 3rem;

  .section-left {
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    height: 100%;
  }
`