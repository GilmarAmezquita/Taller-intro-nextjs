import {useRouter} from 'next/router'

function studentHome ({data}) {
    const router = useRouter();
    const userName = router.query.username;
    return(
        <div>
            <div>
                <h1>Hello student {userName}</h1>
            </div>
        </div>
    )
}

/**studentHome.getInitialProps = async (req, res) => {
    let config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }
    const response = await fetch('http://localhost:3000/api/users/' + req.query.usernameLogin, config);
    const data = await response.json();
    return { data };
}**/

export default studentHome