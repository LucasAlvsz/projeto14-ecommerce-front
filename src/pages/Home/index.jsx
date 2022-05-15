import { useState, useEffect } from "react"
import axios from "axios"

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
						{products.map(({ id, images, name, price }, i) => (
							<Product
								key={i}
								id={id}
								images={images}
								name={name}
								price={price}
							/>
						))}
					</S.ProductsContainer>
				</S.CategoriesContainer>
			</S.Main>
			<HomeFooter />
		</>
	)
}
