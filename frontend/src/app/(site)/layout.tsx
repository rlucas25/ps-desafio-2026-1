import Header from './_components/Header.tsx'
import CurvedSection from './_components/CurvedSection.tsx'
import Home from './page.jsx'

export default function SiteLayout() {
    // Variáveis para facilitar o ajuste do triângulo
    const triangleSize = 300;

    return (
        <div>
            <Header />
            <div id='home' style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '70vh',
                width: '40%',
                background: 'linear-gradient(0deg, hsl(145 64% 11%), hsl(0, 0%, 0%))',
            }}>
            </div>


            <div style={{
                display: 'flex',
                position: 'relative',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                background: '',
            }}>
                <CurvedSection
                    //color="hsl(145 64% 11%)"
                    width="5.7vw"
                    height="6.7vh"
                    style={{
                        position: "absolute",
                        top: "-6vh",
                        left: "38vw"
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
                background: 'linear-gradient(90deg, black, rgb(43, 43, 43)',
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
                backgroundColor: 'red',
            }}>
            </div>
        </div >
    )
}