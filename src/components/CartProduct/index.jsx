import axios from "axios"
import { useState } from "react"

import { getItem } from "../../utils"
import { ReactComponent as DeleteButton } from "../../assets/icons/delete.svg"

import * as S from "./styles"

export default function CartProduct({
	id,
	image,
	name,
	price,
	quantity,
	available,
	updateCart,
}) {
	const [quantityCart, setQuantityCart] = useState(quantity)
	const deleteProduct = () => {
		if (window.confirm("Deseja remover o produto do carrinho?")) {
			const { token } = getItem("auth")
			axios
				.delete(`${process.env.REACT_APP_URI}/cart/${id}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then(() => updateCart())
				.catch(err => console.log(err))
		}
	}
	const updateQuantity = value => {
		const { token } = getItem("auth")
		let newQuantity
		if (value === "increase") {
			newQuantity = quantityCart + 1
		} else if (value === "decrease") {
			newQuantity = quantityCart - 1
		} else {
			newQuantity = value
		}
		axios
			.put(
				`${process.env.REACT_APP_URI}/cart`,
				{
					productId: id,
					quantity: newQuantity,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then(() => updateCart())
			.catch(err => console.log(err))
	}
	return (
		<S.CartProduct>
			<DeleteButton
				className="delete-button"
				onClick={() => deleteProduct(id)}
			/>
			<S.CartProductImage>
				<img src={image} alt="" />
			</S.CartProductImage>
			<S.CartProductInfo>
				<h4>{name}</h4>
				<p>
					{price.toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL",
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					})}
				</p>
			</S.CartProductInfo>
			<S.CartProductQuantity>
				<div className="cart-quantity-container">
					<p
						onClick={() => {
							if (quantityCart > 1) {
								setQuantityCart(quantityCart - 1)
								updateQuantity("decrease")
							}
						}}>
						-
					</p>
					<input
						type="number"
						placeholder={parseInt(quantityCart)}
						min="1"
						max={quantityCart}
						onChange={e => {
							if (e.target.value.match(/^[0-9]+$/)) {
								if (e.target.value > available) {
									e.target.value = available
									setQuantityCart(available)
								} else if (e.target.value < 1)
									setQuantityCart(1)
								else {
									setQuantityCart(e.target.value)
									updateQuantity(e.target.value)
								}
							} else setQuantityCart(1)
						}}
					/>
					<p
						onClick={() => {
							if (quantityCart < available) {
								setQuantityCart(quantityCart + 1)
								updateQuantity("increase")
							}
						}}>
						+
					</p>
				</div>
				<div className="available-cart-quantity">
					{available} disponíveis
				</div>
			</S.CartProductQuantity>
		</S.CartProduct>
	)
}
