import { useState } from "react"
import Accordion from "../../../components/Accordion"
import * as S from "./../styles"

import { ReactComponent as CreditIcon } from "./../../../assets/icons/credit-card.svg"
import { ReactComponent as MoneyIcon } from "./../../../assets/icons/money.svg"
import { ReactComponent as InvoiceIcon } from "./../../../assets/icons/Invoice.svg"

export default function SecondStep(props) {
  const [payment, setPayment] = useState("credit")
  const format = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  }

  function makeParcels(amount) {
    const parcels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const parcelDetails = parcels.map((parcel, index) => ({
      parcel: parcel,
      value: parseFloat(parseFloat(amount) / parseFloat(index + 1)),
    }))

    return (
      <select name="parcel">
        {parcelDetails.map((detail, index) => (
          <option
            key={index.toString()}
            name="parcel"
            value={`${index + 1}`}
          >{`${detail.parcel}x ${detail.value.toLocaleString(
            "pt-BR",
            format,
          )}`}</option>
        ))}
      </select>
    )
  }

  function paymentDetails() {
    const handleSelected = (e) => {
      e.preventDefault()

      if (e.currentTarget) {
        setPayment(e.currentTarget.name)

        if (e.currentTarget.name !== "credit") {
          props.handleCheckoutInfo("parcel", 1)
        }
      }
    }

    const handleForm = (e) => {
      if (e.target.name === "parcel") {
        props.handleCheckoutInfo("parcel", parseInt(e.target.value))
      }
    }

    return (
      <form autoComplete="off" onChange={(e) => handleForm(e)}>
        <div>
          <label>
            Opções de pagamento<span>*</span>
          </label>
          <S.PaymentContainer>
            <S.PaymentButton
              className={payment === "credit" ? "selected" : ""}
              name="credit"
              onClick={(e) => handleSelected(e)}
            >
              <CreditIcon title="credit" />
            </S.PaymentButton>
            <S.PaymentButton
              className={payment === "cash" ? "selected" : ""}
              name="cash"
              onClick={(e) => handleSelected(e)}
            >
              <MoneyIcon title="cash" />
            </S.PaymentButton>
            <S.PaymentButton
              className={payment === "ticket" ? "selected" : ""}
              name="ticket"
              onClick={(e) => handleSelected(e)}
            >
              <InvoiceIcon title="ticket" />
            </S.PaymentButton>
          </S.PaymentContainer>
        </div>
        <div className="details">
          <h2>Detalhes</h2>
          <div>
            {payment === "credit" && (
              <div className="credit-details">
                {makeParcels(props.amount || 10)}
              </div>
            )}
            <h3>
              Total
              <span>
                <span className="green">
                  {payment === "ticket" || payment === "cash" ? -10 + "%" : ""}
                </span>
                <span className="amount-text">
                  {payment === "ticket" || payment === "cash"
                    ? Number(props.amount * 0.9 || 10 * 0.9).toLocaleString(
                        "pt-BR",
                        format,
                      )
                    : Number(props.amount || 10).toLocaleString(
                        "pt-BR",
                        format,
                      )}
                </span>
              </span>
            </h3>
          </div>
        </div>
      </form>
    )
  }

  return (
    <S.Step>
      <Accordion
        title="Payment"
        content={paymentDetails()}
        paymentType={payment}
      />
    </S.Step>
  )
}
