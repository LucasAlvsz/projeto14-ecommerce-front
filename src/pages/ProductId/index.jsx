import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import ProductHeader from "../../components/ProductHeader"
import ProductFooter from "../../components/ProductFooter"
import { ReactComponent as BeforeIcon } from "../../assets/icons/before.svg"
import { ReactComponent as NextIcon } from "../../assets/icons/next.svg"

import * as S from "./styles"

export default function ProductId() {
	const { id } = useParams()
	const [product, setProduct] = useState({})
	const [imagesIndice, setImagesIndice] = useState(0)
	const [quantity, setQuantity] = useState(1)
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_URI}/product/${id}`)
			.then(({ data }) => setProduct(data))
			.catch(err => console.log(err))
	}, [id])
	return (
		<>
			<ProductHeader />
			<S.Main>
				<S.ProductImagesContainer>
					<img src={product.images?.[imagesIndice]} alt="poduct" />
					<div className="navigation-container">
						{product.images?.length > 1 && (
							<>
								{imagesIndice > 0 && (
									<div
										className="backback-icon-container"
										onClick={() =>
											setImagesIndice(imagesIndice - 1)
										}>
										<BeforeIcon className="back-icon" />
									</div>
								)}
								{imagesIndice < product.images.length - 1 && (
									<div
										className="next-icon-container"
										onClick={() =>
											setImagesIndice(imagesIndice + 1)
										}>
										<NextIcon className="next-icon" />
									</div>
								)}
							</>
						)}
					</div>
					<div className="images-caption">
						{imagesIndice + 1}/{product.images?.length}
					</div>
				</S.ProductImagesContainer>
				<S.ProductContainer>
					<S.ProductName>{product.name}</S.ProductName>
					<S.ProductPrice>
						{product.price?.toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						})}
					</S.ProductPrice>
					<S.ProductQuantity>
						<h5>Quantidade</h5>
						<div className="quantity-container">
							<p
								onClick={() =>
									quantity > 1 && setQuantity(quantity - 1)
								}>
								-
							</p>
							<input
								type="number"
								placeholder={parseInt(quantity)}
								min="1"
								max={product.available}
								onChange={e => {
									if (e.target.value.match(/^[0-9]+$/)) {
										if (
											e.target.value > product.available
										) {
											e.target.value = product.available
											setQuantity(product.available)
										} else if (e.target.value < 1)
											setQuantity(1)
										else setQuantity(e.target.value)
									} else setQuantity(1)
								}}
							/>
							<p
								onClick={() =>
									quantity < 9999 && setQuantity(quantity + 1)
								}>
								+
							</p>
						</div>
						<p className="available-quantity">
							{product.available} disponíveis
						</p>
					</S.ProductQuantity>
					<S.ProductInfos>
						<h5>Informações do Produto</h5>
						<p>{product.info}</p>
					</S.ProductInfos>
					<S.ProductDescriptions>
						<h5>Detalhes do Produto</h5>
						<div className="description-container">
							{product.description &&
								Object.keys(product.description).map(
									(key, i) => (
										<div key={i}>
											<h6>{key}</h6>
											<p>{product.description[key]}</p>
										</div>
									)
								)}
						</div>
					</S.ProductDescriptions>
				</S.ProductContainer>
			</S.Main>
			<ProductFooter />
		</>
	)
}
