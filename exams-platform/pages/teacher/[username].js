import {useRouter} from 'next/router'

const teacherHome = () =>{
    const router = useRouter();
    const userName = router.query.username;
    return(
        <div>
            <div>
                <h1>Hello teacher {userName}</h1>
            </div>
        </div>
    )

    
}

export default teacherHome