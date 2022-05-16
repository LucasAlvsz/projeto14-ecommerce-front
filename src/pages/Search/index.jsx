import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

import HomeHeader from "../../components/HomeHeader"
import Product from "../../components/Product"

import * as S from "./styles"

export default function Search() {
	const { keyword } = useParams()
	const [products, setProducts] = useState([])
	useEffect(() => {
		axios
			.get(
				`${process.env.REACT_APP_URI}/products/search?keyword=${keyword}`
			)
			.then(({ data }) => {
				setProducts(data)
				console.log(data)
			})
			.catch(error => console.log(error))
	}, [])
	return (
		<>
			<HomeHeader />
			<S.Main>
				<S.SearchResultsContainer>
					<h3>Resultados para "{keyword}"</h3>
					{products.length > 0 &&
						products.map(({ _id, name, price, images }) => (
							<Link key={_id} to={`/product/${_id}`}>
								<Product
									name={name}
									price={price}
									images={images}
								/>
							</Link>
						))}
				</S.SearchResultsContainer>
			</S.Main>
		</>
	)
}
