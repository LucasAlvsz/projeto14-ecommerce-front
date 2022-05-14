import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Container from "./../../components/Container"
import Input from "./../../components/Input"
import Button from "./../../components/Button"

import * as S from "./styles"

import { SignIn as Login } from "./../../services/api.js"
import {
  setItem as setItemInLocalStorage,
  getItem as getItemInLocalStorage,
} from "./../../utils"

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (getItemInLocalStorage("auth")) {
      navigate("/", { replace: true })
    }
  }, [navigate])

  useEffect(() => {
    const { email, password } = form

    if (email && password) setDisabled(false)
    else setDisabled(true)
  }, [form])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { status, data } = await Login(form)
      setItemInLocalStorage("auth", data)
      if (status === 200) navigate("/", { replace: true })
    } catch (e) {
      if (e.length) console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <S.Header>
        <h2 className="active">SignIn</h2>
        <h2 onClick={() => navigate("/sign-up")}>SignUp</h2>
      </S.Header>
      <S.Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          value={form.email}
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
          placeholder="Senha"
          disabled={loading}
          required
        />
        <Button type="submit" disabled={disabled} isLoading={loading}>
          Entrar
        </Button>
      </S.Form>
    </Container>
  )
}

export default SignIn
