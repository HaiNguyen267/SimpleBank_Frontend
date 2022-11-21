import { useContext, useEffect, useState } from "react"
import { UserContext } from '../components/UserContext'
import Transaction from "../components/Transaction"
import UserInfo from "../components/UserInfo"
import PromtLogin from "../components/PromtLogin"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import PaginationItems from "./PaginattionItems"
export default function UserProfilePage() {
    const navigate = useNavigate()
    const [user, setUser, jwtToken, setJwtToken] = useContext(UserContext)
    const BACKEND_URL = 'http://localhost:8080'


    function UserPage() {
        const [transactions, setTransactions] = useState([])

        useEffect(() => {
            const fetchUserTransactions = async () => {
                const options = {
                    headers: {
                        "Authorization": `Bearer ${jwtToken}`,
                        'Content-Type': 'application/json'
                    }
                }

                const response = await axios.get(`${BACKEND_URL}/transactions`, options)
                console.log("TRANSFER RESPONSE: ");
                console.log(response.data);
                setTransactions(response.data)
            }

            fetchUserTransactions()
        }, [])

        const transactionHistory = transactions.length ?
            <PaginationItems transactions={transactions}/>
            :
            "No transactions";
        
        return (
            <div className='UserProfilePage'>
                <UserInfo
                    profileImage={user.profileImage}
                    accountNo={user.accountNo}
                    name={user.name}
                    balance={user.balance}
                />
                <div className='transaction-container'>
                    <p className='page-name'>Transaction History</p>
                    {transactionHistory}
                </div>
            </div>
        )
    }

    return (
        user.isAuthenticated ?
            <UserPage /> :
            <PromtLogin />
    )
}