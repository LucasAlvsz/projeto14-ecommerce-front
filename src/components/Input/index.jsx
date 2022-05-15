import { useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

import * as S from "./styles"

export default function Input(props) {
  const [focus, setFocus] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const { errorMessage, pattern, InputType, ...otherProps } = props

  const handleFocus = (e) => {
    setFocus("focused")
  }

  const handleBlur = (e) => {
    if (e.target.value) handleFocus()
  }

  const handleShow = () => {
    setShowPassword(!showPassword)
  }

  if (InputType === "password") {
    return (
      <S.InputContainer focused={focus.toString()}>
        <S.InputPasswordContainer>
          <S.InputPassword
            {...otherProps}
            type={showPassword ? "text" : "password"}
            pattern={pattern}
            onBlur={handleFocus}
            onFocus={handleBlur}
            className={focus}
            disabled={props.disabled}
          />
          <span className="icon" onClick={handleShow}>
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </S.InputPasswordContainer>
        <span className="error">{errorMessage}</span>
      </S.InputContainer>
    )
  }

  return (
    <S.InputContainer>
      <S.Input
        {...otherProps}
        pattern={pattern}
        onBlur={handleFocus}
        className={focus}
      />
      <span className="error"></span>
    </S.InputContainer>
  )
}
