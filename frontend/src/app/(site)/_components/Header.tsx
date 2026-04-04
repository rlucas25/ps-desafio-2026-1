"use client"
import "./styleHeader.css"
import { useState, useEffect, useRef } from "react"

export default function Header() {

    const alpha = 0.5

    // Links para cada secao
    const links = [
        { name: "Inicio", id: "home" },
        { name: "Coleções", id: "collections" },
        { name: "Loja", id: "store" },
        { name: "Sobre", id: "about" },
        { name: "Contato", id: "contact" }
    ]

    const [active, setActive] = useState("home")

    const [selectorStyle, setSelectorStyle] = useState({
        left: 0,
        width: 0
    })

    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
    const navRef = useRef<HTMLDivElement | null>(null)

    // Atualiza posição do seletor
    const updateSelector = (index: number) => {

        const el = linkRefs.current[index]
        const nav = navRef.current

        if (!el || !nav) return

        const linkRect = el.getBoundingClientRect()
        const navRect = nav.getBoundingClientRect()

        setSelectorStyle({
            left: linkRect.left - navRect.left,
            width: linkRect.width
        })
    }

    // posição inicial
    useEffect(() => {

        const index = links.findIndex(l => l.id === active)
        updateSelector(index)

    }, [])

    // Scroll spy
    useEffect(() => {

        const handleScroll = () => {

            links.forEach((link, index) => {

                const section = document.getElementById(link.id)
                if (!section) return

                const rect = section.getBoundingClientRect()

                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActive(link.id)
                    updateSelector(index)
                }

            })

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (
        <header style={{
            position: 'sticky',
            top: '3dvh',
            padding: 'calc((2vh + 2vw) / 2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '5dvh',
            width: '100%',
            zIndex: 1000,
        }}>

            <nav
                ref={navRef}
                style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: "center",
                    height: '4dvh',
                    width: 'clamp(250px, 30vw, 600px)',
                    backgroundColor: `hsl(var(--secondary) / ${alpha})`,
                    borderRadius: '60px',
                    padding: '0 1.5vw',
                    overflow: 'hidden',
                }}
            >

                <div style={{
                    display: 'flex',
                    gap: '1vw',
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    justifyContent: 'space-between'
                }}>

                    {links.map((link, index) => (

                        <a
                            ref={(el) => linkRefs.current[index] = el}
                            className="nav-link"
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={() => {
                                setActive(link.id)
                                updateSelector(index)
                            }}
                            style={{
                                fontSize: 'clamp(0.8rem, 1.2vw, 1.2rem)',
                                fontWeight: active === link.id ? 'bold' : 'normal',
                                color: active === link.id ? "hsl(var(--primary))" : "white",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                textDecoration: 'none',
                                padding: '0 0.6vw',
                                cursor: "pointer"
                            }}
                        >
                            {link.name}
                        </a>

                    ))}

                </div>

                <div
                    style={{
                        position: 'absolute',
                        left: selectorStyle.left,
                        width: selectorStyle.width,
                        height: 'clamp(20px, 3vh, 60px)',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'white',
                        borderRadius: '60px',
                        transition: 'all 0.3s ease',
                        zIndex: 1
                    }}
                />

            </nav>

        </header>
    )
}