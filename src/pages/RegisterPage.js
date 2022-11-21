import { useContext, useState } from "react"
import { UserContext } from "../components/UserContext"

import AlreadyLoggedInMessage from "../components/AlreadyLoggedInMessage"
import axios from "axios"
import Modal from "../components/Modal"
import Message from "./Message";
import { useNavigate } from 'react-router-dom'

function RegisterForm() {
    const navigate = useNavigate()
    const [user] = useContext(UserContext)
    const BACKEND_URL = 'https://simplebankbackend-production.up.railway.app'
    const [openModal, setOpenModal] = useState(false)
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState(false)
    
    const Form = () => {
        async function handleRegisterClick() {

            if (!validateAlLFields()) {
                setOpenModal(true)
            }

            const data = {
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password
            }

            const response = await axios.post(`${BACKEND_URL}/signup`, data)

            if (response.data.success) {
                navigate('/confirm')
            } else {
                setMessage(response.data.message)
                setSuccess(false)
                setOpenModal(true)
            }

        }

        function validateAlLFields() {
            if (!firstName) {
                setMessage("Invalid firstname");
                return false;
            }

            if (!lastName) {
                setMessage("Invalid lastname");
                return false
            }

            if (!email || !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                setMessage("Invalid email");
                return false
            }

            if (password.length < 8) {
                setMessage("Password must have at least 8 characters");
                return false
            }

            if (password !== repeatPassword) {
                setMessage("Wrong repeat password");
                return false
            }

            return true

        }

        const [firstName, setFirstName] = useState("")
        const [lastName, setlastName] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [repeatPassword, setRepeatPassword] = useState("")

        return (
            <div className="RegisterPage form">
                <p className="page-name">Register new account</p>
                <input
                    required
                    className='form-item'
                    type="text"
                    placeholder="First name"
                    onChange={e => setFirstName(e.target.value)}
                />

                <input
                    required
                    className='form-item'
                    type="text"
                    placeholder="Last name"
                    onChange={e => setlastName(e.target.value)}

                />

                <input
                    required
                    className='form-item'
                    type="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}

                />
                <input
                    required
                    className='form-item'
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}

                />

                <input
                    required
                    className='form-item'
                    type="password"
                    placeholder="Confirm password"
                    onChange={e => setRepeatPassword(e.target.value)}
                />
                <button className='ok-btn' onClick={handleRegisterClick}>Register</button>
            </div>
        )
    }

    const InfoMessage = () => {
        return (
            <Message
                    success={success}
                    message={message}
            />
        )
    }
    return (
            <>
            <Form />
            <Modal 
                child={<InfoMessage />} 
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
            </>   
    )
}
export default function RegisterPage() {
    const [user, setUser] = useContext(UserContext)
    return (
        !user.isAuthenticated ?
            <RegisterForm />
            :
            <AlreadyLoggedInMessage />
    )
}