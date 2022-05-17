import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Player } from "@lottiefiles/react-lottie-player"
import logoAnimation from "../../assets/animations/logoAnimation.json"
import axios from "axios"

import ProductHeader from "../../components/ProductHeader"
import BackgroundContainer from "../../components/Container"
import Button from "../../components/Button"
import StepsNavigation from "./../../components/StepsNavigation"

import FirstStep from "./FirstStep"
import SecondStep from "./SecondStep"
import ThirdStep from "./ThirdStep"

import { ReactComponent as Success } from "./../../assets/icons/success.svg"

import * as S from "./styles"

import { getItem, removeItem } from "./../../utils"

export default function Checkout() {
  const [products, setProducts] = useState(null)
  const [infoProduct, setInfoProducts] = useState([])
  const [amount, setAmount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: "",
    contact: "",
    address: "",
    paymentType: "credit",
    parcel: 1,
  })
  const [finallyCheckout, setFinallyCheckout] = useState(false)

  const navigate = useNavigate()
  const auth = getItem("auth")
  const labelArray = ["Step 1", "Step 2", "Step 3"]

  useEffect(() => {
    if (!auth?.token) {
      navigate("/sign-in", { replace: true })
    }
  }, [navigate, auth])

  useEffect(() => {
    if (auth?.token) {
      ;(async function () {
        try {
          await getCart(auth.token)
        } catch (e) {
          console.log(e.response.data)
        }
      })()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // useEffect(() => {
  //   console.log(checkoutInfo)
  // }, [checkoutInfo])

  const getCart = async (token) => {
    let timeoutId = null
    if (token) {
      setLoading(true)
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_URI}/cart`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        setProducts(data)
        getAllInfoAboutProducts(data)
      } catch (e) {
        console.log(e.response.data)
        if (e.response.status === 401) {
          removeItem("auth")
          navigate("/sign-in", { replace: true })
        }
      } finally {
        setTimeout(() => {
          timeoutId = setLoading(false)
        }, 2000)
      }
    }

    return timeoutId && (() => clearTimeout(timeoutId))
  }

  const getAllInfoAboutProducts = async (data) => {
    let amountProducts = 0

    if (data?.length) {
      let products = data.map((product) => {
        amountProducts += product?.product?.price * product?.quantity

        const { name, price } = product?.product
        const firstImage = product?.product?.images[0]
        const quantity = product?.quantity

        return { name, price, image: firstImage, quantity }
      })

      setInfoProducts(products)
      setAmount(amountProducts)
    }
  }

  const updateStep = (step) => {
    setCurrentStep(step)
  }

  const changeCheckoutInfo = (e, val) => {
    if (e === "parcel" || e === "paymentType") {
      let newCheckoutInfo = {}

      if (e === "paymentType")
        newCheckoutInfo = {
          ...checkoutInfo,
          paymentType: val,
        }
      else
        newCheckoutInfo = {
          ...checkoutInfo,
          parcel: val,
        }

      setCheckoutInfo(newCheckoutInfo)

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

  const handleCheckout = async (loading) => {
    const { address, contact, paymentType, parcel } = checkoutInfo
    const newCheckoutInfo = { address, contact, paymentType, parcel }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URI}/checkout`,
        newCheckoutInfo,
        {
          headers: { Authorization: `Bearer ${auth.token}` },
        },
      )

      if (response.status === 201) {
        updateStep(4)
        setFinallyCheckout(true)
      }
    } catch (e) {
      alert(e.response?.data.split(", ")[1])
    } finally {
      loading(false)
    }
  }

  const content = () => {
    return (
      <>
        {!finallyCheckout && (
          <StepsNavigation
            labelArray={labelArray}
            currentStep={currentStep}
            updateStep={updateStep}
            info={checkoutInfo}
          />
        )}

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
            products={infoProduct}
            handleCheckout={handleCheckout}
          />
        )}

        {currentStep === 4 && finallyCheckout && (
          <S.Notice>
            <Success title="Sucesso" height={60} />
            <br />
            <p className="message">Compra feita com sucesso!</p>
            <Button onClick={() => navigate("/home")}>
              Comprar outros produtos
            </Button>
          </S.Notice>
        )}
      </>
    )
  }

  return (
    <>
      <ProductHeader className="overlap" />
      <BackgroundContainer>
        <S.CheckoutContainer>
          <S.Header onClick={() => navigate(-1)}>
            <h1>Checkout</h1>
          </S.Header>

          {loading && (
            <S.LoaderContainer>
              <Player
                src={logoAnimation}
                style={S.cart}
                autoplay={true}
                loop={true}
              ></Player>
            </S.LoaderContainer>
          )}

          {!loading && !products?.length && (
            <S.Notice>
              <span>😢</span>
              Não existe produtos em seu carrinho!
              <Button onClick={() => navigate("/home")}>
                Escolher produtos
              </Button>
            </S.Notice>
          )}

          {products?.length > 0 && !loading && content()}
        </S.CheckoutContainer>
      </BackgroundContainer>
    </>
  )
}
