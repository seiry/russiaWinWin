import Head from 'next/head'
import styled from 'styled-components'
const Main = styled.main`
    color: red;
    .device {
        overflow: hidden;
    }
    article {
        overflow: hidden;
        background-color: white;
        height: 100%;
        width: 100%;
        border-radius: 3rem;
        .meme {
            width: 100%;
        }
    }
`
export default function Home() {
    return (
        <Main>
            <Head>
                <title>Win!</title>
            </Head>
            <div className="device device-iphone-14-pro">
                <div className="device-frame">
                    <article>
                        <img src="/meme.JPG" className="meme" />
                    </article>
                </div>
                <div className="device-stripe" />
                <div className="device-header" />
                <div className="device-sensors" />
                <div className="device-btns" />
                <div className="device-power" />
                <div className="device-home" />
            </div>
        </Main>
    )
}
