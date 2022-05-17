import Input from "../../../components/Input"
import Accordion from "../../../components/Accordion"
import * as S from "./../styles"

function StepOne(props) {
  return (
    <form autoComplete="off">
      <div>
        <label>
          Nome<span>*</span>{" "}
          <span className="notice">Apenas o primeiro nome</span>
          <Input
            type="text"
            name="name"
            value={props.info.name}
            onChange={(e) => props.changeForm(e)}
            placeholder="Seu primeiro nome"
          />
        </label>
        <label>
          Telefone<span>*</span>{" "}
          <span className="notice">(Apenas números DDD + 900000000)</span>
          <Input
            type="text"
            name="contact"
            value={props.info.contact}
            onChange={(e) => props.changeForm(e)}
            pattern="[0-9]{8,11}"
            placeholder="00000000000"
          />
        </label>
        <label>
          Endereço<span>*</span>
          <Input
            type="text"
            name="address"
            value={props.info.address}
            onChange={(e) => props.changeForm(e)}
            placeholder="Rua fulano de tal, 55"
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
        title="Detalhes de contato"
        content={infoDetails}
        step="step-one"
      />
    </S.Step>
  )
}
