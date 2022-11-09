
export default function LoginPage() {
    return (
        <div className="LoginPage form">
            <p className='page-name'>Login</p>
            <div>
                <input 
                    className="form-item username-password-login" 
                    type="text" 
                    placeholder="Username"
                />
                <input 
                    className="form-item username-password-login" 
                    type="text" 
                    placeholder="Password"
                />
            </div>
            <button className="ok-btn">Login</button>


            <div>
                <div className="form-item oauth2-login">
                    <img className="oauth2-icon" src="https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png" alt="" />
                    <p>Login with Google</p>
                </div>
                
                <div className="form-item oauth2-login">
                    <img className="oauth2-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                    <p>Login with Facebook</p>
                </div>
            </div>
        </div>
    )
}