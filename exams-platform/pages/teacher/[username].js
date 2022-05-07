import {useRouter} from 'next/router'
import Container from "../../components/Container";

const teacherHome = () =>{
    const router = useRouter();
    const userName = router.query.username;
    return(
        <div>
            <Container title="Anamanaguchi Exams - Teacher"/>
            <div>
                <h1>Hello teacher {userName}</h1>
            </div>
        </div>
    )
}

export default teacherHome