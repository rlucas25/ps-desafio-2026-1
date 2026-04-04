import Header from './_components/Header'
import ShoeVideo from './_components/ShoeVideo';
import SloganText from './_components/SloganText';
import Button1, { Button2 } from './_components/Buttons';
import CollectionsCarousel from './_components/Carousel';
import ScrollSelector from './_components/ScrollSelector';

export default function SiteLayout() {

    return (
        <div>
            <Header />

            <div
                id="home"
                style={{
                    width: "100%",
                    height: "70vh",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    background: "black"
                }}
            >
                <div
                    className='leftCol'
                    style={{
                        width: "35%",
                        minWidth: "320px",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "40px",
                        paddingTop: "190px",
                        background: "linear-gradient(0deg, hsl(145 64% 11%), black)",
                        zIndex: 2,
                        position: "relative"
                    }}
                >

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "70px",
                        }}
                    >
                        <SloganText />

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "30px"
                            }}
                        >
                            <Button1 text="Explorar Mais Vendidos" id="#collections" />
                            <Button1 text="ir para a Loja" id="#store" />
                        </div>

                    </div>

                </div>


            </div>


            <ShoeVideo />
            {/* Organic border */}
            <div
                className='borderBackground'
                style={{
                    display: 'flex',
                    position: 'absolute',
                    width: '15%',
                    height: '15%',
                    background: 'green',
                    zIndex: '0',
                    top: '60.8%',
                    backgroundColor: 'hsl(145 64% 11%)',
                    right: '50%',

                }} />
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '30vh',
                    width: '50%',
                    backgroundColor: 'hsl(145 64% 11%)',
                    borderRadius: '0 80px 0 0',
                    zIndex: '1',
                }} />







            <div
                id='collections'
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '120vh',
                    width: '100%',
                    borderRadius: '0 0 80px 0',
                    zIndex: '0',
                }}>
                <div
                    className='Left Column'
                    style={{
                        width: '50%',
                    }}>

                    <CollectionsCarousel />

                    <div
                        style={{
                            display: 'flex',
                            height: '20vh',
                            width: '50%',
                            backgroundColor: 'hsl(152 100% 21%)',
                            borderRadius: '0 0px 80px 0',
                            zIndex: '1',
                        }}>
                    </div>
                </div>

                <div
                    className='Right Column'
                    style={{
                        display: "flex",
                        width: "50%",
                        alignItems: "flex-start",
                        justifyContent: "center",
                    }}>

                    <div
                        style={{
                            display: "flex",
                            maxWidth: "650px",
                            alignItems: 'center',
                            flexDirection: "column",
                            gap: "20px",
                        }}
                    >
                        <div
                            style={{
                                height: '15vh',
                            }}
                        ></div>
                        <h2
                            style={{
                                display: 'flex',
                                fontSize: "clamp(30px, 4vw, 52px)",
                                fontWeight: 800,
                                color: 'white',
                            }}
                        >
                            O melhor para o seu perfil
                        </h2>

                        <p
                            style={{
                                fontSize: "25px",
                                color: "#555",
                                lineHeight: 1.5
                            }}
                        >
                            Nossas coleç~oes foram desenvolvida para quem exige estilo,
                            resistência e conforto em qualquer modalidade esportiva.
                        </p>
                        <div
                            style={{
                                height: '10vh',
                            }}
                        ></div>


                        <Button2
                            text='Ache o seu estilo'
                        ></Button2>
                    </div>

                </div>


                {/* Organic border */}
                <div
                    className='borderBackgroud'
                    style={{
                        display: 'flex',
                        position: 'absolute',
                        top: '204%',
                        right: '70%',
                        height: '5vw',
                        width: '5vw',
                        background: 'hsl(152 100% 21%)',
                        zIndex: '0',
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        position: 'absolute',
                        top: '205.6%',
                        right: '65%',
                        height: '10vw',
                        width: '10vw',
                        background: 'black',
                        zIndex: '10',
                        borderRadius: '100px',
                    }}
                />
            </div>




            <div
                id='scroll'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '40vw',
                    width: '100vw',
                    background: 'black',
                    borderRadius: '100px',
                }}>
                <h1
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: "clamp(30px, 4vw, 52px)",
                        fontWeight: 800,
                        color: 'white',
                    }}>
                    Para quem você está comprando?
                </h1>


                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '50%',
                        width: '100%',
                    }}

                >
                    <ScrollSelector />

                </div>

            </div>


            <div
                id='store'
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100vh',
                    width: '30%',
                    background: '',
                }}>



            </div>

            <div
                id='about'
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100vh',
                    width: '30%',
                    backgroundColor: 'blue',
                }}>
            </div>
            <div
                id='contact'
                style={{
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