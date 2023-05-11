
function LoginForm({onChange,handleLogin}){
    return(
        <form>
            <input name="email" onInput={onChange}/>
            <input name="password" type="password" onInput={onChange}/>
            <input name="remmeber" type="checkbox" onInput={onChange}/>
            <button onClick={handleLogin}> Login</button>
        </form>
    )
}

export default LoginForm;