import styles from '../styles/Home.module.css';


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
    case "name": state.name = e.target.value; 
    case "lastname": state.lastname = e.target.value
    case "teacher": state.teacher = e.target.value
    case "student": state.student = e.target.value
    case "username": state.username = e.target.value
    case "password": state.username = e.target.value
  }
}

const SignUp = () => {
    return (
        <form className={styles.main} >
        <h1 className={styles.title}>
          Sign <a>Up</a>
        </h1>

        <div className={styles.grid}>
            <input placeholder="Name" className={styles.card} name="name"></input>
            <input placeholder="Lastname" className={styles.card} name="lastname"></input>
        </div>
        <p>Role</p>
        <div className={styles.grid}>
            Teacher<input type="radio" className={styles.card} name="role" id="teacher"></input>
            Student<input type="radio" className={styles.card} name="role" id="student"></input>
        </div>

        <div className={styles.grid}>
                <input placeholder="Username" className={styles.card} name="username"></input>
                <input placeholder="password" className={styles.card} name="password"></input>
        </div>
        <input type="submit" value="register"/>
      </form>
    )
}

export default SignUp