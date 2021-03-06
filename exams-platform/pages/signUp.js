import styles from '../styles/Home.module.css';
import Container from "../components/Container";

let state = {
  name: "",
  lastname: "",
  teacher: false,
  student: false,
  username: "",
  password: ""
}

let handleChage = e => {
  switch (e.target.name) {
    case "name": state.name = e.target.value
    case "lastname": state.lastname = e.target.value
    case "username": state.username = e.target.value
    case "password": state.password = e.target.value
  }

  if(document.getElementById("teacher").checked){
    state.teacher = true
  }
  if(document.getElementById("student").checked){
    state.student = true
  }

}

let handleSubmit = async e =>{
  e.preventDefault();
  if(state.name != "" &&
     state.lastname != "" &&
     state.username != "" &&
     state.password != ""
  ) {
    if(state.teacher == false && state.student == true) {
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
      }
     let r = await fetch ("http://localhost:3000/api/insertUser",config)
    }
    else if(state.teacher == true && state.student == false) {
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
      }
     let r = await fetch ("http://localhost:3000/api/insertUser",config)
    }
    else {
      window.alert("Please fill each blank")
    }
  }
  else {
    window.alert("Please fill each blank")
  }

  //console.log(r);
}

const SignUp = () => {
    return (
      <div>
        <Container title="Anamanaguchi Exams - Sign Up"/>
        <form className={styles.main} onSubmit={handleSubmit}>
          <h1 className={styles.title}>
            Sign <a>Up</a>
          </h1>
          <div className={styles.grid}>
            <input placeholder="Name" className={styles.card} name="name" onChange={handleChage}></input>
            <input placeholder="Lastname" className={styles.card} name="lastname" onChange={handleChage}></input>
          </div>
          <p>Role</p>
          <div className={styles.grid}>
            Teacher<input type="radio" className={styles.card} name="role" id="teacher" onChange={handleChage}></input>
            Student<input type="radio" className={styles.card} name="role" id="student" onChange={handleChage}></input>
          </div>
          <div className={styles.grid}>
            <input placeholder="Username" className={styles.card} name="username" onChange={handleChage}></input>
            <input placeholder="password" className={styles.card} name="password" onChange={handleChage}></input>
          </div>
          <input type="submit" className="button is-primary"value="register"/>
        </form>
      </div>
    )
}

export default SignUp