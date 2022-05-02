import Head from 'next/head'
import Navigation from './Navbar'

const Container = (props) => {
    return(
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"></link>
                <script src="https://kit.fontawesome.com/e30e4457e3.js" crossorigin="anonymous"></script>
            </Head>
            <Navigation login={props.login}/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Container;