import {useRouter} from 'next/router'
import Container from "../../components/Container";
import styles from '../../styles/Home.module.css'

let auxUsername = ""
let auxIdCode = 2

let state = {
    createdBy: "",
    idCode: 0,
    accesCode: "",
    title: "",
    description: "",
    question: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    answer: ""
}

let handleChange = e => {
    switch (e.target.name) {
        case "accesCode": state.accesCode = e.target.value
        case "title": state.title = e.target.value
        case "question": state.question = e.target.value
        case "description": state.description = e.target.value
        case "answerA": state.answerA = e.target.value
        case "answerB": state.answerB = e.target.value
        case "answerC": state.answerC = e.target.value
        case "answerD": state.answerD = e.target.value
    }

    if(document.getElementById("A").checked) {
        state.answer = "A"
    }

    if(document.getElementById("B").checked) {
        state.answer = "B"
    }

    if(document.getElementById("C").checked) {
        state.answer = "C"
    }

    if(document.getElementById("D").checked) {
        state.answer = "D"
    } 
}

let handleSubmit = async e => {
    auxIdCode++
    state.idCode = auxIdCode
    state.createdBy = auxUsername
    e.preventDefault();

    if(state.accesCode != "" &&
        state.title != "" &&
        state.description != "" &&
        state.question !="" &&
        state.answerA !="" &&
        state.answerB !="" &&
        state.answerC !="" &&
        state.answerD !="" &&
        state.answer != ""
    ) {
        let config = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        }
        let r = await fetch("http://localhost:3000/api/insertExam",config)
    }
    else {
        window.alert("Please, fill each blank")
    }

}

const teacherHome = () =>{
    const router = useRouter();
    const userName = router.query.username;
    auxUsername = userName;
    return(
        <div>
            <Container title="Anamanaguchi Exams - Teacher"/>
            <div className={styles.title}>
                <h1>Hello teacher <a>{userName}</a></h1>
            </div>
            <div className={styles.examCreate}>
                <h2>Welcome to the exams creation module</h2>
                <form className={styles.examCreate} onSubmit={handleSubmit}>
                    <div>
                        <input className={styles.inputsFormat} placeholder='Type an acces code for this exam' name="accesCode" onChange={handleChange}></input>
                    </div>
                    <div>
                        <input className={styles.inputsFormat} placeholder='Type the title of this exam' name='title' onChange={handleChange}></input>
                    </div>
                    <div>
                        <input className={styles.inputsFormat} placeholder='Type a description for it' name='description' onChange={handleChange}></input>
                    </div>
                    <div className={styles.examCreate}>
                        <h2>Question</h2>
                        <input className={styles.inputsFormat} placeholder='Type the question' name='question' onChange={handleChange}></input>
                    </div>
                    <div className={styles.examCreate}>
                        <h2>Answer Options</h2>
                    </div>
                    <div>
                        <b>A</b> <input className={styles.inputsFormat} placeholder='Type one answer' name='answerA' onChange={handleChange}></input>
                    </div>
                    <div>
                        <b>B</b> <input className={styles.inputsFormat} placeholder='Type one answer' name='answerB' onChange={handleChange}></input>
                    </div>
                    <div>
                        <b>C</b> <input className={styles.inputsFormat} placeholder='Type one answer' name='answerC' onChange={handleChange}></input>
                    </div>
                    <div>
                        <b>D</b> <input className={styles.inputsFormat} placeholder='Type one answer' name='answerD' onChange={handleChange}></input>
                    </div>
                    <div>
                        <b>Select the correct answer</b>
                        
                    </div>
                    <div className={styles.radiosBtnFormat}>
                        <br></br>
                        <br></br>
                        <b className={styles.bSeparator}>A</b> <input  type="radio" name="answer" id='A' onChange={handleChange}></input>
                        <b className={styles.bSeparator}>B</b> <input type="radio" name="answer" id='B' onChange={handleChange}></input>
                        <b className={styles.bSeparator}>C</b> <input type="radio" name="answer" id='C' onChange={handleChange}></input>
                        <b className={styles.bSeparator}>D</b> <input type="radio" name="answer" id='D' onChange={handleChange}></input> 
                    </div>
                    <div>
                    <br></br>
                        <input className="button is-primary" type="submit" value="Save"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default teacherHome