import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import HomeHeader from "../../components/HomeHeader"
import HomeFooter from "../../components/HomeFooter"
import Product from "../../components/Product"

import * as S from "./styles"

export default function Home() {
	const [products, setProducts] = useState([])
	useEffect(() => {
		axios
			.get(
				`${process.env.REACT_APP_URI}/products/search?categories=notebooks%2Bheadsets`
			)
			.then(({ data }) => {
				data.map(({ price }) => {
					price = price.toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL",
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					})
				})
				setProducts(data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			<HomeHeader />
			<S.Main>
				<S.CategoriesContainer>
					<p className="categorie">Notebooks</p>
					<S.ProductsContainer>
						{products.map(
							({ _id, images, name, price, categories }) =>
								categories.includes("notebooks") ? (
									<Link to={`/product/${_id}`} key={_id}>
										<Product
											id={_id}
											images={images}
											name={name}
											price={price}
										/>
									</Link>
								) : null
						)}
					</S.ProductsContainer>
				</S.CategoriesContainer>
				<S.CategoriesContainer>
					<p className="categorie">Headsets</p>
					<S.ProductsContainer>
						{products.map(
							({ _id, images, name, price, categories }) =>
								categories.includes("headsets") ? (
									<Link to={`/product/${_id}`} key={_id}>
										<Product
											key={_id}
											id={_id}
											images={images}
											name={name}
											price={price}
										/>
									</Link>
								) : null
						)}
					</S.ProductsContainer>
				</S.CategoriesContainer>
				<S.CategoriesContainer>
					<p className="categorie">Destaques</p>
					<S.HighlightsContainer>
						{products.map(({ _id, images, name, price }) => (
							<Link to={`/product/${_id}`} key={_id}>
								<Product
									type="highlight-product"
									id={_id}
									images={images}
									name={name}
									price={price}
								/>
							</Link>
						))}
					</S.HighlightsContainer>
				</S.CategoriesContainer>
			</S.Main>
			<HomeFooter />
		</>
	)
}
