import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Header = styled.header`
  margin: 60px auto 20px;

  display: flex;
  justify-content: center;

  font-size: 21px;
  line-height: 25px;
  font-weight: 500;
  color: #333;
  text-transform: uppercase;

  h2 {
    cursor: pointer;
  }

  h2:not(.active) {
    color: #b0b0b0;
  }

  h2.active {
    position: relative;
    transition: after 5s ease;
  }

  h2.active::after {
    content: "";
    display: inline-block;
    width: 78px;
    height: 3px;
    background-color: #b57efb;

    position: absolute;
    left: 0;
    bottom: -5px;
  }

  & h2:last-child {
    margin-left: 53px;
  }
`
