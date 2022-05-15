import axios from "axios"

const URL_BASE = "http://localhost:5000"

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
