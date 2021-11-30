import React from "react";

const Login=(props)=>{

    const{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError}=props;

    return(
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>
                    <label>Password</label>
                    <input
                        type="password"
                        requiered
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">
                        {hasAccount?(
                            <>
                            <button onClick={handleLogin}>Ingresar</button>
                            <p>No tienes unas cuenta?
                                <span onClick={() => setHasAccount(!hasAccount)}>Registrate</span>
                            </p>
                            </>
                        ):(
                            <>
                            <button onClick={handleSignup}>Registrarse</button>
                            <p>Tienes una cuenta? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Ingresa</span>
                            </p>
                            </>
                        )}
                    </div>
            </div>           
            
        </section>
    )
}

export default Login;