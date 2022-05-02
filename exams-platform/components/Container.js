import Head from 'next/head'
import Navigation from './Navbar'

const Container = (props) => {
    return(
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"/>
            </Head>
            <Navigation/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Container;