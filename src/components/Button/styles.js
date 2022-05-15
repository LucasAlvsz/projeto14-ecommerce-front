import styled from "styled-components"

export const Button = styled.button`
  width: 100%;
  max-width: 450px;
  height: 58px;
  margin-top: 24px;

  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  line-height: 22px;
  color: #fff;
  background-color: #9241f9;
  border: 1px solid transparent;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 0.7s ease;

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`

export const Loader = styled.div`
  background-color: transparent;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`
