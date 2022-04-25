import styles from '../styles/Home.module.css';

const SignUp = () => {
    return (
        <main className={styles.main} >
        <h1 className={styles.title}>
          Sign <a>Up</a>
        </h1>

        <div className={styles.grid}>
            <input placeholder="Name" className={styles.card}></input>
            <input placeholder="Lastname" className={styles.card}></input>
        </div>
        <p>Role</p>
        <div className={styles.grid}>
            Teacher<input type="radio" name="role" className={styles.card}></input>
            Student<input type="radio" name="role" className={styles.card}></input>
        </div>

        <div className={styles.grid}>
                <input placeholder="Username" className={styles.card}></input>
                <input placeholder="password" className={styles.card}></input>
        </div>
        <button className={styles.card}>Register</button>
      </main>
    )
}

export default SignUp