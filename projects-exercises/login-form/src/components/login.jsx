//  login form component
function LoginForm(){
  return(
    <div>
      <>
        <input placeholder="Email" type="Email" size="30" />
        <input placeholder="password" type="password" size="30" />
      </>

      <div> 
        <button>Login</button> 
        <button>Sign Up</button> 
      </div>
    </div>
  )
};

export default LoginForm;
