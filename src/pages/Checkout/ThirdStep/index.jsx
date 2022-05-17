import { useState } from "react"
import Accordion from "../../../components/Accordion"
import CheckoutItem from "../../../components/CheckoutItem"
import Button from "../../../components/Button"
import * as S from "./../styles"

function contactDetails(props) {
  const { name, contact, address, paymentType, parcel } = props.checkoutInfo
  const paymentName = {
    ticket: "boleto",
    credit: "cartão de crédito",
    cash: "à vista",
  }

  const format = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  }

  return (
    <div className="conclusion">
      <div>
        <h3>Detalhes de Contato</h3>
        <div className="item-container">
          <p className="item">Nome</p>
          <p className="value">{name}</p>
        </div>
        <div className="item-container">
          <p className="item">Contato</p>
          <p className="value">{contact}</p>
        </div>
        <div className="item-container">
          <p className="item">Endereço</p>
          <p className="value">{address}</p>
        </div>
      </div>
      <div>
        <h3>Detalhes de pagamento</h3>
        <div>
          <div className="item-container">
            <p className="item">Tipo</p>
            <p className="value">{paymentName[paymentType]}</p>
          </div>
          <div className="item-container">
            <p className="item">Parcela(s)</p>
            <p className="value">{parcel}</p>
          </div>
          <div className="item-container">
            <p className="item">Total</p>
            <p className="value">
              {paymentType === "ticket" || paymentType === "cash"
                ? Number(props.amount * 0.9).toLocaleString("pt-BR", format)
                : Number(props.amount).toLocaleString("pt-BR", format)}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>Lista de produtos</h3>
        <div>
          {props.products.map(({ name, image, quantity, price }, index) => (
            <CheckoutItem
              key={(index + 1).toString()}
              image={image}
              name={name}
              quantity={quantity}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ThirdStep(props) {
  const [loading, setLoading] = useState(false)

  const handleSendCheckout = () => {
    setLoading(true)

    props.handleCheckout(setLoading)
  }

  return (
    <S.Step>
      <Accordion
        title="Conclusão"
        content={contactDetails(props)}
        step="step-three"
      />
      <Button onClick={handleSendCheckout} isLoading={loading}>
        Finalizar compra
      </Button>
    </S.Step>
  )
}
