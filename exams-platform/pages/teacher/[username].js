import {useRouter} from 'next/router'
import Container from "../../components/Container";
import styles from '../../styles/Home.module.css'

let state = {
    createdBy: "",
    idCode: "",
    accesCode: "",
    title: "",
    description: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    answer: ""
}

let handleChange = e => {
    const router = useRouter();
    const userName = router.query.username;

    state.createdBy = {userName}

    switch (e.target.name) {
        case "idCode": state.idCode = e.target.value
        case "accesCode": state.accesCode = e.target.value
        case "title": state.title = e.target.value
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
        state.ananswer = "D"
    }
    
}

let handleSubmit = async e => {
    e.preventDefault();

    let config = {
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
    }
    
    let r = await fetch("http://localhost:3000/api/insertExam",config)
}

const teacherHome = () =>{
    const router = useRouter();
    const userName = router.query.username;
    return(
        <div>
            <Container title="Anamanaguchi Exams - Teacher"/>
            <div className={styles.title}>
                <h1>Hello teacher <a>{userName}</a></h1>
            </div>
            <div>
                <h2>Welcome to the exams creation module</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input placeholder='Type the title of this exam' name='title'></input>
                    </div>
                    <div>
                        <input placeholder='Type a description for it' name='description'></input>
                    </div>
                    <div>
                        <h2>Question</h2>
                        <input placeholder='Type the question'></input>
                    </div>
                    <div>
                        <h2>Answer Options</h2>
                        <b>A</b> <input placeholder='Type the question' name='answerA' onChange={handleChange}></input>
                    </div>
                    <div>
                        <b>B</b> <input placeholder='Type the question' name='answerB' onChange={handleChange}></input>
                    </div>
                    <div>
                        <b>C</b> <input placeholder='Type the question' name='answerC' onChange={handleChange}></input>
                    </div>
                    <div>
                        <b>D</b> <input placeholder='Type the question' name='answerD' onChange={handleChange}></input>
                    </div>
                    <div>
                        <b>Select the answer</b>
                        <br></br> 
                        A <input type="radio" name="answer" id='A'></input>
                        B <input type="radio" name="answer" id='B'></input>
                        C <input type="radio" name="answer" id='C'></input>
                        D <input type="radio" name="answer" id='D'></input>
                    </div>
                    <div>
                        <input className="button is-primary" type="submit" value="Save"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default teacherHome