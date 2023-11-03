import React, {useState} from 'react';
import '../Login.css'

function LogIn(props) {
    let [userId, setUserId] = useState([])
    let [password, setPassword] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        // TODO: Login Auth API
    }

    return (
        <div className='container dark'>
            <div className='app'>
                <div className='app-header'>
                    <h1>Smarter University System</h1>
                </div>
                <div className='login-header'>
                    <h2 className='login-title'>Log in</h2>
                </div>
                <form onSubmit={handleSubmit} id='loginForm'>
                    {/*<div className='login-column' >*/}
                        <div>
                            <label>User ID:</label>
                            <input
                                type = 'email'
                                value = {userId}
                                onChange={e=>setUserId(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type = 'password'
                                value = {password}
                                onChange = { e => setPassword(e.target.value )}
                                required
                            />
                        </div>
                        <button type='submit'>Login</button>
                    {/*</div>*/}
                </form>
            </div>
        </div>

    );
}

export default LogIn;