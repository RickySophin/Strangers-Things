import React from "react";

const Login = ({setIsLoggedIn, isLoggedIn, history, username, setusername, password, setpassword, baseURL, token, setToken}) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("username:", username)
        console.log("password:", password)
        try {
            const response = await fetch(`${baseURL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: username,
                        password: password
                    }
                })
            })
            console.log(response)
            const data = await response.json();
            console.log('data:', data)
            console.log('token:', data.data.token)
            if (data.data.token) {
                setIsLoggedIn(true)
            }
            setToken(data.data.token)
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
            localStorage.setItem("token", token)

            console.log('this is our new localstorage:', localStorage)
            history.push('/')
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='login-body'>
            <div>
                <h1>User Login</h1>
            </div>
            <form className='login-form' onSubmit={handleSubmit}>
                <input type="text" placeholder="username" value={username} onChange=
                {(e) => setusername(e.target.value)}></input> 
                <input type="text" placeholder="password" value={password} onChange=
                {(e) => setpassword(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;