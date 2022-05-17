import { useState, useRef, useEffect } from "react"
import * as S from "./styles"

import { FaChevronRight as Icon } from "react-icons/fa"

const Chevron = (props) => {
  return (
    <Icon
      className={props.className}
      height={props.height}
      width={props.width}
      fill={props.fill}
    />
  )
}

export default function Accordion(props) {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState("accordion__icon")

  const content = useRef(null)

  useEffect(() => {
    const condition =
      props.paymentType === "credit" ||
      props.paymentType === "cash" ||
      props.paymentType === "ticket" ||
      props.step === "step-one" ||
      props.step === "step-three"

    setHeightState(condition ? `${content.current.scrollHeight}px` : "0px")
    setRotateState(condition ? "accordion__icon rotate" : "accordion__icon")
  }, [props.paymentType, props.step])

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`,
    )
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate",
    )
  }

  return (
    <S.AccordionSection>
      <S.Accordion
        className={`accordion ${setActive}`}
        onClick={toggleAccordion}
      >
        <S.AccordionTitle>{props.title}</S.AccordionTitle>
        <Chevron className={setRotate} width={15} fill="#333" />
      </S.Accordion>
      <S.AccordionContent ref={content} style={{ maxHeight: `${setHeight}` }}>
        <S.AccordionText>{props.content}</S.AccordionText>
      </S.AccordionContent>
    </S.AccordionSection>
  )
}
