import styled from 'styled-components'

export const Card = styled.div`
  width: 31.5rem;
  height: 43.5rem;

  display: flex;
  flex-direction: column;

  background-color: #FFF9F8;
  border-radius: .8rem;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 2rem 1.5rem 8rem 1.5rem;

    h1 {
      font-weight: 700;
      font-size: 2.4rem;
      color: #382C29;
    }
  }

  .section-items {
    display: flex;
    flex-direction: column;
    width: 100%;

    padding-inline: 1.5rem;

    align-items: center;

    border-bottom: .1rem solid #382C29;

    .item {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      width: 100%;

      span {
        width: 20rem;

        color: #382C29;
        font-size: 1.4rem;
      }
    }
  }

  .total-price {
    width: 100%;
    padding: 1rem 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-weight: 700;
      font-size: 2rem;
      color: #382C29;
    }
  }

  .price-variables {
    width: 100%;
    display: flex;
    flex-direction: column;

    display: flex;
    padding: 2rem;

    span {
      font-size: 1.4rem;
      color: #382C29;
      font-weight: 400;
    }

    .item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-block: .5rem;

      border-bottom: .1rem solid #382C29;

      span {
        font-size: 1.4rem;
        color: #382C29;
        font-weight: 400;
      }
    }
  }
`