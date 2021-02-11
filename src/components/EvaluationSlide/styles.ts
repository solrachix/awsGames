import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2rem;

  img {
    width: 16rem;
  }

  @media (max-width: 600px) {
    width: 110%;
    margin: 20px 0px;
    column-gap: 1rem;
    row-gap: 20px;

    p:nth-of-type(1) {
      font-size: 1.4rem;
    }
    p:nth-of-type(2) {
      font-size: 1.2rem;
    }
    img {
      width: 10rem;
    }
  } */

  [class^='number-slide'],
  [class*=' number-slide'] {
    background: grey;
    height: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 50px;
    color: #fff;
    font-weight: 500;

    img {
      width: 100%;
    }
  }

  .navigation-wrapper {
    position: relative;
  }

  .dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
  }

  .dot {
    border: none;

    width: 10px;
    height: 10px;
    margin: 0 5px;
    padding: 5px;

    background: #c5c5c5;
    border-radius: 50%;

    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #fff;
  }

  .arrow {
    width: 30px;
    height: 30px;

    position: absolute;
    top: 50%;

    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);

    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: -30px;
  }

  .arrow--right {
    left: auto;
    right: -30px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }
`
