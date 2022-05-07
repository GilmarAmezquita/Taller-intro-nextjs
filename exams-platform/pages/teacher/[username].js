import {useRouter} from 'next/router'
import Container from "../../components/Container";
import styles from '../../styles/Home.module.css'

let state = {
    createdBy: "",
    idCode: "",
    accesCode: "",
    questionA: "",
    questionB: "",
    questionC: "",
    questionD: "",
    answer: ""
}

let handleChange = e => {
    switch (e.target.name) {
        case "createdBy": state.createdBy = e.target.value
        case "idCode": state.idCode = e.target.value
        case "accesCode": state.accesCode = e.target.value
        case "questionA": state.questionA = e.target.value
        case "questionB": state.questionB = e.target.value
        case "questionC": state.questionC = e.target.value
        case "questionD": state.questionD = e.target.value
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
                        <b>A</b> <input placeholder='Type the question' name='questionA' onChange={handleChange}></input>
                    </div>
                    <div>
                        <b>B</b> <input placeholder='Type the question' name='questionB' onChange={handleChange}></input>
                    </div>
                    <div>
                        <b>C</b> <input placeholder='Type the question' name='questionC' onChange={handleChange}></input>
                    </div>
                    <div>
                        <b>D</b> <input placeholder='Type the question' name='questionD' onChange={handleChange}></input>
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