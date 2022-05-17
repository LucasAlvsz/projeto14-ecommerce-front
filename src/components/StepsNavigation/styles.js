import styled from "styled-components"

export const Container = styled.div`
  --primary-color: #b57efb;
  --text-primary: #333;

  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  padding: 10px 0 17px 0;

  display: flex;
  justify-content: space-between;

  .circle {
    width: 45px;
    height: 45px;
    line-height: 25px;
    background-color: #fff;
    border: 2px solid #d0d0d0;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Inter, sans-serif;
    font-weight: 700;
    color: #d0d0d0;
  }

  .stepBlock {
    width: max-content;
    cursor: pointer;

    &.selected {
      .circle {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }
    }

    &.checked {
      .circle {
        border-color: var(--primary-color);
        background-color: var(--primary-color);
        color: #fff;
      }
    }
  }

  .circle.active {
  }
`
