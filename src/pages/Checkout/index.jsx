import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import * as S from "./styles"

import Header from "../../components/Header"
import Container from "./../../components/Container"
import StepsNavigation from "../../components/StepsNavigation"
import Button from "./../../components/Button"

import FirstStep from "./FirstStep"
import SecondStep from "./SecondStep"
import ThirdStep from "./ThirdStep"

import { getItem } from "./../../utils/index"

import {
  getCheckoutByID,
  getCheckout,
  getProductById,
  getCart,
} from "./../../services/api.js"

const initialValue = {
  name: "",
  contact: "",
  address: "",
  paymentType: "credit",
  parcel: 1,
}

export default function Checkout(props) {
  const [checkoutInfo, setCheckoutInfo] = useState(initialValue)
  const [currentStep, setCurrentStep] = useState(1)
  const [show, setShow] = useState(false)
  const [amount, setAmount] = useState(0)
  const labelArray = ["Step 1", "Step 2", "Step 3"]
  const [products, setProducts] = useState(null)
  const { name, token } = getItem("auth")

  const params = useParams()

  useEffect(() => {
    ;(async function () {
      if (token) {
        const { data } = await getCart(token)
        setProducts(data)
        let aux = 0
        data.forEach((product) => {
          aux += product.quantity
          console.log(product.price)
        })
        const amountData = data.filter((acc, next) => {
          console.log(next.quantity)

          return acc + next.quantity * next.product.price
        }, 0)
        console.log(amountData)

        setAmount(amountData)
        console.log(data)
      }
    })()
  }, [name, params, token])

  async function getData(id) {
    if (id) {
      try {
        const { data } = await getProductById(id, token)

        return data
      } catch (e) {
        console.error(e)
      }
    } else {
      try {
        const { data } = await getCheckout(token)
        console.log(data)
        return data
      } catch (e) {
        console.error(e)
      }
    }
  }

  function updateStep(step) {
    setCurrentStep(step)
  }

  function changeCheckoutInfo(e, val) {
    if (e === "parcel" || e === "paymentType") {
      setCheckoutInfo({ ...checkoutInfo, [e]: val })
      return
    }

    const name = e.target.name
    let value = e.target.value

    if (name === "contact") {
      value = value.replace(/[a-zA-Z]/g, "")

      if (value.length > 11) return
    }

    if (name === "name") value = value.replace(/\d/g, "")
    setCheckoutInfo({ ...checkoutInfo, [name]: value })
  }

  function handleOrder() {}

  return (
    <Container>
      {products ? (
        <S.Container>
          <Header />
          <StepsNavigation
            labelArray={labelArray}
            currentStep={currentStep}
            updateStep={updateStep}
            info={checkoutInfo}
          />
          {currentStep === 1 && (
            <FirstStep
              checkoutInfo={checkoutInfo}
              handleCheckoutInfo={changeCheckoutInfo}
            />
          )}
          {currentStep === 2 && (
            <SecondStep
              checkoutInfo={checkoutInfo}
              handleCheckoutInfo={changeCheckoutInfo}
              amount={amount}
              changeAmount={setAmount}
            />
          )}
          {currentStep === 3 && (
            <ThirdStep
              checkoutInfo={checkoutInfo}
              handleCheckoutInfo={changeCheckoutInfo}
              amount={amount}
              products={products}
            />
          )}
          {currentStep === 3 && (
            <Button onClick={handleOrder}>Finalizar Pedido</Button>
          )}
        </S.Container>
      ) : (
        <p>Não há produtos no carrinho</p>
      )}
    </Container>
  )
}
