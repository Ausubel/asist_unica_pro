import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="login__contenedor">
        <div className="login__contenedor__img">
          <img src="" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <form action="" className="login__contenedor__form">
          <div className="login__contenedor__usuario__form">
            <div className="login__contenedor__usuario__form__usuario">
              <label htmlFor="">Usuario</label>
              <input type="text" />
            </div>
            <div className="login__contenedor__usuario__form__contrasena">
              <label htmlFor="">Contraseña</label>
              <input type="password" />
            </div>
          </div>

          <button className="login__contenedor__boton">enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
