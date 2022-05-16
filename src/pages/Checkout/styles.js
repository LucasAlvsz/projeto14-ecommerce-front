import styled from "styled-components"

export const Container = styled.section`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;

    label {
      display: inline-block;
      width: 100%;
    }
  }
`

export const Step = styled.section`
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;

  span {
    color: red;
  }

  label {
    display: inline-block;
    margin-top: 10px;
  }

  input {
    margin-top: 5px;
  }

  input:valid,
  input:invalid,
  input[type="email"]:focus:invalid,
  input[type="email"]:not(:focus):invalid,
  input[type="password"]:focus:invalid,
  input[type="text"]:focus:invalid,
  input[type="password"]:not(:focus):invalid {
    border-color: #e5e5e5;
  }

  .edit {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #b57efb;
    cursor: pointer;
  }

  .details {
    margin-top: 20px;
    font-family: Inter, sans-serif;

    h2 {
      font-size: 16px;
      font-weight: 500;
      color: #333;
    }

    h3 {
      font-size: 14px;
      font-weight: 700;
      margin-top: 20px;
      margin-bottom: 10px;
      color: #b3b3b3;

      display: flex;
      justify-content: space-between;

      span span:nth-child(1) {
        margin-right: 10px;
      }

      span .green {
        color: #a0ff73;
      }

      .amount-text {
        font-weight: 300;
        color: #b0b0b0;
      }
    }
  }

  .credit-details {
    width: 100%;
  }

  select {
    width: 100%;
    height: 45px;
    font-size: 16px;
    padding: 0 10px;
    border-color: #e5e5e5;
    border-radius: 5px;
    margin-top: 10px;
  }

  .conclusion {
    padding-bottom: 20px;

    .edit {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      color: #b57efb;
      cursor: pointer;
    }

    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #333333;
      margin-top: 20px;

      display: flex;
      justify-content: space-between;
    }

    .item-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 11px;
    }

    .item-container .item {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
    }

    .item-container .value {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
    }
  }
`

export const PaymentButton = styled.button`
  width: 86px;
  height: 58px;
  background-color: #f3f3f3;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  opacity: 0.6;
  transition: border-color, opacity 0.3s ease;
  cursor: pointer;

  svg {
    max-height: 33px;
    max-width: 33px;
    width: 100%;
    height: 100%;
  }

  svg.invoice {
    max-height: 33px;
    max-width: 33px;
  }

  &.selected {
    border-color: #b57efb;
    opacity: 1;
  }

  .red {
    color: #ff6347;
  }

  .green {
    color: #a0ff73;
  }

  .amount {
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 300;
    color: #b0b0b0;
  }
`

export const PaymentContainer = styled.div`
  margin-top: 35px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: inline-block;
  }
`

export const Product = styled.div`
  width: ;
`
