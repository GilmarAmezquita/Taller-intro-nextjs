import Container from "../../components/Container";
import {useRouter} from 'next/router'

const Login = () => {
    const router = useRouter();
    let handleClick = async e =>{
        e.preventDefault();
        let config = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        }
        const res = await fetch ("/api/users/"+document.getElementById(usernameLogin), config)
        const data = await res.json();
        if(res.status === 200){
            if(document.getElementById(passwordLogin) === data.password){
                if(data.student === true){
                    await router.push('/teacher/'+username, config);
                }else{
                    await router.push('/student/'+username, config);
                }
            }
        }else{
            window.alert('Parece que las credenciales son incorrectas');
        }
    };

    let unChange = async =>{
        let i = document.createElement('i');
        if(document.getElementById(usernameLogin) == 0){
            i.className = 'fa-solid fa-circle-xmark';
        }else i.className = 'fa-solid fa-circle-check';
        document.getElementById("usernameMark").replaceChildren(i);
    };
    let psChange = async =>{
        let i = document.createElement('i');
        if(document.getElementById(passwordLogin) === ''){
            i.className = 'fa-solid fa-circle-xmark';
        }else i.className = 'fa-solid fa-circle-check';
        document.getElementById("passwordMark").replaceChildren(i);
    };


    return(
        <div>
            <Container title="Anamanaguchi Exams - Login"/>
            <section className="section">
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" id="usernameLogin" type="username" placeholder="Enter your username" onInput={unChange}/>
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
                        <input className="input" id="passwordLogin" type="password" placeholder="Enter your password" onInput={psChange}/>
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
                        <button className="button is-primary" id="login_submit_btn" onClick={handleClick}>
                        Login
                        </button>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Login;