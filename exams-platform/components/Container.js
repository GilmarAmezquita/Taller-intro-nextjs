import Head from 'next/head'
import Navigation from './Navbar'
import ScriptFontAwesome from './ScriptFontAwesome'

const Container = (props) => {
    return(
        <div>
            <ScriptFontAwesome/>
            <Head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"></link>
            </Head>
            <Navigation login={props.login}/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Container;