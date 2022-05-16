import * as S from "./styles"

export default function Product({ images, name, price, type }) {
	if (type === "highlight-product")
		return (
			<S.HighlightProduct className={type}>
				<img src={images[0]} alt="" />
				<S.ProductName>{name}</S.ProductName>
				<div className="line"></div>
				<S.ProductPrice>R$ {price}</S.ProductPrice>
			</S.HighlightProduct>
		)
	return (
		<S.Product className={type}>
			<img src={images[0]} alt="" />
			<S.ProductName>{name}</S.ProductName>
			<div className="line"></div>
			<S.ProductPrice>R$ {price}</S.ProductPrice>
		</S.Product>
	)
}
