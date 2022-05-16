import * as S from "./styles"

export default function ProductItem(props) {
  return (
    <S.Product>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <p>Quantity: {props.quantity}</p>
      <p>{props.price}</p>
    </S.Product>
  )
}
