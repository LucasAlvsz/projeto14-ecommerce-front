import axios from "axios"

const URL_BASE = "https://e-letronics.herokuapp.com"
// const URL_BASE = "http://localhost:5000"

export function createConfig(token) {
  return { headers: { authorization: `Bearer ${token}` } }
}

export const SignUp = async (data) => {
  try {
    return await axios.post(`${URL_BASE}/sign-up`, data)
  } catch (e) {
    alert(e.response?.data.split(", ")[1])
  }
}

export const SignIn = async (data) => {
  try {
    return await axios.post(`${URL_BASE}/sign-in`, data)
  } catch (e) {
    alert(e.response?.data.split(", ")[1])
  }
}

export const Checkout = async (data, token) => {
  try {
    return axios.post(`${URL_BASE}/checkout`, data, createConfig(token))
  } catch (e) {
    alert(e.response?.data.split(", ")[1])
  }
}

export const CheckoutByID = async (id, data, token) => {
  try {
    return axios.post(`${URL_BASE}/checkout/${id}`, data, createConfig(token))
  } catch (e) {
    alert(e.response?.data.split(", ")[1])
  }
}

export const getCheckout = async (token) => {
  try {
    return axios.get(`${URL_BASE}/checkout`, createConfig(token))
  } catch (e) {
    alert(e.response?.data.split(", ")[1])
  }
}

export const getCheckoutByID = async (id, token) => {
  try {
    return axios.get(`${URL_BASE}/checkout/${id}`, createConfig(token))
  } catch (e) {
    alert(e.response?.data.split(", ")[1])
  }
}

export const getProductById = async (id, token) => {
  try {
    return axios.get(`${URL_BASE}/checkout/${id}`, createConfig(token))
  } catch (e) {
    alert(e.response?.data.split(", ")[1])
  }
}

export const getCart = async (token) => {
  try {
    return axios.get(`${URL_BASE}/cart`, createConfig(token))
  } catch (e) {
    alert(e.response)
  }
}
