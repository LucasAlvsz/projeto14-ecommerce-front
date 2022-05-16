import axios from "axios"

export const SignUp = async data => {
	try {
		return await axios.post(`${process.env.REACT_APP_URI}/sign-up`, data)
	} catch (e) {
		alert(e.response?.data.split(", ")[1])
	}
}

export const SignIn = async data => {
	try {
		return await axios.post(`${process.env.REACT_APP_URI}/sign-in`, data)
	} catch (e) {
		alert(e.response?.data.split(", ")[1])
	}
}
