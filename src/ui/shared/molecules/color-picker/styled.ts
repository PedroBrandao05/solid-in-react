import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  background-color: #333030;

  width: 34.9rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: .8rem;

  input {
    width: 100%;
    height: .5rem;

    border-radius: .9rem;

    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(16,49,8,1) 12%, rgba(89,14,6,1) 22%, rgba(9,9,121,1) 35%, rgba(11,89,95,1) 41%, rgba(17,177,5,1) 62%, rgba(185,13,178,1) 71%, rgba(0,212,255,1) 100%);
  }
`