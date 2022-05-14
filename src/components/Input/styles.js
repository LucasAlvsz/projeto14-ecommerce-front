import styled from "styled-components"

export const Input = styled.input`
  width: 100%;
  max-width: 450px;
  height: 58px;
  margin-top: 20px;
  padding: 0 20px;
  border: 2.5px solid #e5e5e5;
  border-radius: 5px;

  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  line-height: 22px;
  color: #333;

  .error {
    margin-top: 10px;
    color: #ff6347;
    display: none;
  }

  &::placeholder {
    color: #b0b0b0;
  }

  & span {
    display: none;
  }

  &:focus {
    border-color: #b5b5ac;
  }

  &:focus.success {
    border-color: #a0ff73;
  }

  &:focus.error {
    border-color: #ff6347;
  }

  &:invalid[focused="true"] span {
    display: block;
    color: #ff6347;
    margin-top: 10px;
  }

  & .error {
    color: #ff6347;
  }
`

export const InputPassword = styled.input`
  width: 100%;
  max-width: 450px;
  height: 58px;
  margin-top: 20px;
  padding: 0 20px;
  padding-right: 60px;
  border: 2.5px solid #e5e5e5;
  border-radius: 5px;

  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  line-height: 22px;
  color: #333;

  .error {
    margin-top: 10px;
    color: #ff6347;
    display: none;
  }

  &::placeholder {
    color: #b0b0b0;
  }

  & span {
    display: none;
  }

  &:focus {
    border-color: #b5b5ac;
  }

  &:focus.success {
    border-color: #a0ff73;
  }

  &:focus.error {
    border-color: #ff6347;
  }

  &:invalid[focused="true"] span {
    display: block;
    color: #ff6347;
    margin-top: 10px;
  }

  & .error {
    color: #ff6347;
  }
`

export const InputPasswordContainer = styled.div`
  width: 100%;
  max-width: 450px;
  position: relative;

  color: #e5e5e5;

  .icon {
    position: absolute;
    bottom: 13px;
    right: 20px;
    cursor: pointer;

    width: 30px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .error {
    margin-top: 10px;
    color: #ff6347;
    display: none;
  }

  input:invalid.focused {
    border: 2px solid #ff6347;
  }

  input:invalid.focused[type="email"] {
    border: 2px solid #ff6347;
  }

  input:invalid.focused[name="confirmPassword"] {
    border: 2px solid #ff6347;
  }

  input:valid {
    border: 2px solid #a0ff73;
  }

  input:invalid[focused="true"] span {
    display: block;
    color: #ff6347;
    margin-top: 10px;
  }
`
