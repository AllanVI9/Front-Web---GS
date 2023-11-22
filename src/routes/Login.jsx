import Forms from "../components/Login/Formulario";

const Login = () => {
  const getUser = sessionStorage.getItem("userData");
  const getSenha = sessionStorage.getItem("senhaData");

  return (
    <>
      {getUser && getSenha ? (
        (window.location = "/")
      ) : (
        <div className="Login">
          <div>
            <h2>Se logue em sua conta</h2>
          </div>
          <Forms />
        </div>
      )}
    </>
  );
};
export default Login;
