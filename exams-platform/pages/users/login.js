import Container from "../../components/Container";

const Login = () => {
    return(
        <div>
            <Container title="Anamanaguchi Exams - Login"/>
            <section className="section">
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" id="usernameLogin" type="username" placeholder="Enter your username"/>
                        <span className="icon is-small is-left">
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <span className="icon is-small is-right" id="usernameMark">
                            <i className="fa-solid fa-circle-xmark" ></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" id="passwordLogin" type="password" placeholder="Enter your password"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                        <span className="icon is-small is-right" id="passwordMark">
                            <i className="fa-solid fa-circle-xmark"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <button className="button is-primary" id="login_submit_btn">
                        Login
                        </button>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Login;