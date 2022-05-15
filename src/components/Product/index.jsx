import * as S from "./styles"

export default function Product({ id, images, name, price }) {
	return (
		<S.Product>
			<img src={images[0]} alt="" />
			<S.ProductName>{name}</S.ProductName>
			<div className="line"></div>
			<S.ProductPrice>R$ {price}</S.ProductPrice>
		</S.Product>
	)
}
