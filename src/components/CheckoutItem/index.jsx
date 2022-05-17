import * as S from "./styles"

export default function ProductItem(props) {
  const format = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  }

  return (
    <S.Product>
      <S.ImageContainer>
        <img src={props.image} alt="" />
      </S.ImageContainer>
      <S.InfoContainer>
        <S.Title className="title">{props.name}</S.Title>
        <S.Quantity>Quantity: {props.quantity}</S.Quantity>
      </S.InfoContainer>
      <S.Price>{props.price.toLocaleString("pt-BR", format)}</S.Price>
    </S.Product>
  )
}
