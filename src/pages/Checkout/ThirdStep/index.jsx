import Accordion from "../../../components/Accordion"
import ProductItem from "../../../components/ProductItem"
import * as S from "./../styles"

function contactDetails(props) {
  const { name, contact, address, paymentType } = props.checkoutInfo

  const format = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  }

  return (
    <div className="conclusion">
      <div>
        <h3>Contact Details</h3>
        <div className="item-container">
          <p className="item">Name</p>
          <p className="value">{name}</p>
        </div>
        <div className="item-container">
          <p className="item">Contact</p>
          <p className="value">{contact}</p>
        </div>
        <div className="item-container">
          <p className="item">Address</p>
          <p className="value">{address}</p>
        </div>
      </div>
      <div>
        <h3>Payment Details</h3>
        <div>
          <div className="item-container">
            <p className="item">Type</p>
            <p className="value">{paymentType}</p>
          </div>
          <div className="item-container">
            <p className="item">Amount</p>
            <p className="value">
              {paymentType === "ticket" || paymentType === "cash"
                ? Number(props.amount * 0.9).toLocaleString("pt-BR", format)
                : Number(props.amount).toLocaleString("pt-BR", format)}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>Product Details</h3>
        <div>
          {props.products.map((product, index) => (
            <ProductItem
              key={product.product._id}
              image={product.product.image}
              name={product.product.name}
              quantity={product.quantity}
              price={product.product.price}
            />
          ))}

          {console.log(props.products[0])}
        </div>
      </div>
    </div>
  )
}

export default function ThirdStep(props) {
  return (
    <S.Step>
      <Accordion
        title="Conclusion"
        content={contactDetails(props)}
        step="step-three"
      />
    </S.Step>
  )
}
