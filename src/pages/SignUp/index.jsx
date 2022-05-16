import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Joi from "joi"

import Container from "./../../components/Container"
import Input from "./../../components/Input"
import Button from "./../../components/Button"

import { SignUp as Register } from "./../../services/api.js"
import {
  getItem as getItemInLocalStorage,
  removeItem as removeItemInLocalStorage,
} from "./../../utils"

import * as S from "./styles"

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUp = () => {
  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const { name, email, password, confirmPassword } = form

    if (name && email && password && confirmPassword) {
      const { error: errorName } = Joi.string()
        .pattern(/[a-zA-Z0-9]{3,}/)
        .required()
        .validate(name, { abortEarly: false })
      const { error: errorEmail } = Joi.string()
        .email({ tlds: { allow: false } })
        .validate(email, { abortEarly: false })
      const { error: errorPassword } = Joi.string()
        .pattern(/[a-zA-Z0-9]{3,}/)
        .validate(password, {
          abortEarly: false,
        })
      const { error: errorConfirmPassword } = Joi.string().validate(
        confirmPassword,
        {
          abortEarly: false,
        },
      )

      if (errorName || errorEmail || errorPassword || errorConfirmPassword)
        setDisabled(true)
      else setDisabled(false)
    }
  }, [form])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    const { password, confirmPassword } = form

    if (password !== confirmPassword) {
      e.target.reportValidity()
      setLoading(false)
      return
    }

    if (getItemInLocalStorage("auth")) {
      removeItemInLocalStorage("auth")
    }

    try {
      const { status } = await Register(form)
      if (status === 201) navigate("/sign-in")
    } catch (e) {
      console.log(e.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <S.Header>
        <h2 onClick={() => navigate("/sign-in")}>SignIn</h2>
        <h2 className="active">SignUp</h2>
      </S.Header>
      <S.Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          value={form.name}
          pattern="[a-zA-Z0-9]{3,}"
          placeholder="Digite seu primeiro nome"
          disabled={loading}
          required
        />
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          value={form.email}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          errorMessage="Insira um e-mail válido."
          placeholder="E-mail"
          disabled={loading}
          required
        />
        <Input
          type="password"
          InputType="password"
          name="password"
          onChange={handleChange}
          value={form.password}
          errorMessage="Deve iniciar com um número"
          placeholder="Senha"
          pattern="[a-zA-Z0-9]{3,}"
          disabled={loading}
          required
        />
        <Input
          type="password"
          InputType="password"
          name="confirmPassword"
          onChange={handleChange}
          value={form.confirmPassword}
          errorMessage="A senha deve ser igual a primeira"
          placeholder="Confirme a senha"
          pattern={form.password}
          disabled={loading}
          required
        />
        <Button
          type="submit"
          disabled={disabled || loading}
          isLoading={loading}
        >
          Cadastrar-se
        </Button>
      </S.Form>
    </Container>
  )
}

export default SignUp
