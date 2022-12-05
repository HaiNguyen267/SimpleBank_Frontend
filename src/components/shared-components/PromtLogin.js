import { Link } from 'react-router-dom'
export default function PromtLogin() {
    return (
        <div className='PromtLogin'>
            <div>
                <Link to='/login' className="nav-link">Login</Link>
                <Link to='/register' className="nav-link">Register new account</Link>     
            </div>  
        </div>
    )
}