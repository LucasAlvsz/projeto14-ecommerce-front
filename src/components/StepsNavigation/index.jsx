import * as S from "./styles"

const Step = (props) => {
  const handleUpdate = () => {
    const condition =
      props.index + 1 === 1 || props.index + 1 === 2 || props.index + 1 === 3

    if (condition) {
      if (
        props.info.name?.length &&
        props.info.address?.length &&
        props.info.contact?.length
      ) {
        props.updateStep(props.index + 1)
      }
    }
    return
  }

  return (
    <S.Container
      className={
        "stepBlock" +
        (props.selected ? " selected" : "") +
        (props.checked ? " checked" : "")
      }
    >
      <div className="circleWrapper" onClick={handleUpdate}>
        <div className="circle">{props.index + 1}</div>
      </div>
    </S.Container>
  )
}

export default function StepsIndicator(props) {
  return (
    <S.Container>
      {props.labelArray.map((item, index) => (
        <Step
          key={index.toString()}
          index={index}
          label={item}
          selected={props.currentStep === index + 1}
          checked={props.currentStep > index + 1}
          updateStep={props.updateStep}
          info={props.info}
        />
      ))}
    </S.Container>
  )
}
