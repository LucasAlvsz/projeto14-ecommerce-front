import Input from "../../../components/Input"
import Accordion from "../../../components/Accordion"
import * as S from "./../styles"

function StepOne(props) {
  return (
    <form autoComplete="off">
      <div>
        <label>
          Nome<span>*</span>
          <Input
            type="text"
            name="name"
            value={props.info.name}
            onChange={(e) => props.changeForm(e)}
          />
        </label>
        <label>
          Telefone<span>*</span>
          <Input
            type="text"
            name="contact"
            value={props.info.contact}
            onChange={(e) => props.changeForm(e)}
            pattern="[0-9]{8,11}"
          />
        </label>
        <label>
          Endereço<span>*</span>
          <Input
            type="text"
            name="address"
            value={props.info.address}
            onChange={(e) => props.changeForm(e)}
          />
        </label>
      </div>
    </form>
  )
}

export default function FirstStep(props) {
  const infoDetails = (
    <StepOne info={props.checkoutInfo} changeForm={props.handleCheckoutInfo} />
  )

  return (
    <S.Step>
      <Accordion
        title="Contact Details"
        content={infoDetails}
        step="step-one"
      />
    </S.Step>
  )
}
