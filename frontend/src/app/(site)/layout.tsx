import Header from './_components/Header.tsx'
import CurvedSection from './_components/CurvedSection.tsx'
import ShoeVideo from './_components/ShoeVideo.tsx';
import SloganText from './_components/SloganText.tsx';
import Button1 from './_components/Button1.tsx';

import Home from './page.jsx'

export default function SiteLayout() {

    return (
        <div>
            <Header />

            <div id='home'
                style={{
                    width: '35%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: '40px',
                    paddingTop: '190px',
                    height: '70vh',
                    background: 'linear-gradient(0deg, hsl(145 64% 11%), black)'
                }}>


                <ShoeVideo />

                <div className='content'
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '70px',
                    }}>

                    <SloganText />

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '30px'
                        }}

                    >

                        <Button1 text='Explorar Mais Vendidos' id='#collections' />
                        <Button1 text='ir para a Loja' id='#store' />

                    </div>

                </div>

            </div>


            <div style={{
                display: 'flex',
                position: 'relative',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                background: '',
            }}>
                <CurvedSection
                    //color="hsl(145 64% 100%)"
                    color="hsl(145 64% 11%)"
                    width="6dvw"
                    height="7.4vh"
                    style={{
                        position: "absolute",
                        top: "-7vh",
                        left: "34.0vw"
                    }}

                />
            </div>



            <div id='collections' style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100vh',
                width: '50%',
                backgroundColor: 'hsl(145 64% 11%)',
                borderRadius: '0 60px 60px 0',
            }}>
            </div>

            <div id='store' style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100vh',
                width: '30%',
                background: 'green',
            }}>
            </div>

            <div id='about' style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100vh',
                width: '30%',
                backgroundColor: 'blue',
            }}>
            </div>
            <div id='contact' style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100vh',
                width: '30%',
                backgroundColor: 'green',
            }}>
            </div>
        </div >
    )
}