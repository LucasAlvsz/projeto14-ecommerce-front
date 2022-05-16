import axios from "axios"
import { useState, useEffect, useRef } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Player } from "@lottiefiles/react-lottie-player"

import { getItem } from "../../utils"
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg"
import emptyCartAnimation from "../../assets/animations/emptyCardAnimation.json"
import cartAnimation from "../../assets/animations/cartAnimation.json"
import ProductHeader from "../../components/ProductHeader"
import CartProduct from "../../components/CartProduct"

import * as S from "./styles"

export default function Cart() {
	const navigate = useNavigate()
	const emptyCartRef = useRef(null)
	const [userCartProducts, setUserCartProducts] = useState([])
	const [total, setTotal] = useState(0)
	const [updateCart, setUpdateCart] = useState(false)
	useEffect(() => {
		if (getItem("auth")) {
			const { token } = getItem("auth")
			axios
				.get(`${process.env.REACT_APP_URI}/cart`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then(({ data }) => {
					let total = data.reduce((acc, cur) => {
						return acc + cur.product.price * cur.quantity
					}, 0)
					setTotal(total)
					setUserCartProducts(data)
				})
				.catch(err => console.log(err))
		}
	}, [updateCart])
	return (
		<>
			<ProductHeader cart={true} />
			<S.Main>
				<S.ProductList>
					<h3>
						{userCartProducts?.length > 0 ? (
							`Carrinho(${userCartProducts.length})`
						) : (
							<div className="empty-cart-container">
								<div className="empty-cart">
									<Player
										ref={emptyCartRef}
										src={emptyCartAnimation}
										style={S.EmptyCart}
										autoplay={true}
										keepLastFrame={true}
										speed={0.4}></Player>
								</div>
								<h3>Seu carrinho está vazio</h3>
								<Link to="/home">Ir para home</Link>
							</div>
						)}
					</h3>
					{userCartProducts.map(
						({
							product: { _id, images, name, price, available },
							quantity,
						}) => (
							<CartProduct
								key={_id}
								id={_id}
								image={images?.[0]}
								name={name}
								price={price}
								quantity={quantity}
								available={available}
								updateCart={() => setUpdateCart(!updateCart)}
							/>
						)
					)}
				</S.ProductList>
			</S.Main>
			{userCartProducts?.length > 0 && (
				<S.CartFooter>
					<HomeIcon
						className="home-icon"
						onClick={() => navigate("/home")}
					/>
					<S.Total>
						<h6>Total</h6>
						<p>
							{total.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</p>
					</S.Total>
					<S.CloseOrder>Fechar Pedido</S.CloseOrder>
				</S.CartFooter>
			)}
		</>
	)
}
