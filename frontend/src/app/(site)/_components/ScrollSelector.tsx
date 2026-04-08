"use client"
import styles from "./scrollselector.module.css"
import { useRef, useState } from "react";
import Link from "next/link";
import { useEffect } from "react";

const IMAGES = [
    "assets/img/people/woman.jpeg",
    "assets/img/people/man.jpg",
    "assets/img/people/girl.jpg",
    "assets/img/people/boy.jpg",
    "assets/img/people/teen.jpg",
    "assets/img/people/all.png",
]


export default function ScrollSelector() {
    const scrollRef = useRef(null);

    const [progress, setProgress] = useState(0);
    // Booleano para verificar qual se precisa ou nao de scroll
    const [showBar, setShowBar] = useState(false);

    const items = ["Mulher", "Homem", "Meninas", "Meninos", "Adolescentes", "Ver tudo"];

    const handleScroll = () => {
        const el = scrollRef.current;

        const maxScroll = el.scrollWidth - el.clientWidth;
        const percent = maxScroll > 0
            ? (el.scrollLeft / maxScroll) * 100
            : 0;

        setProgress(percent);
    };

    // Verifica se precisa de scroll
    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;

        const hasScroll = el.scrollWidth > el.clientWidth;
        setShowBar(hasScroll);
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);

        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    return (
        <div style={{ width: "80%" }}>
            <div className={styles.container}>

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className={styles.scroll}
                >
                    {items.map((item, i) => (
                        <Link
                            key={i}
                            href={`/${item.toLowerCase()}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div className={styles.item}>
                                <div className={styles.circle}
                                    style={{
                                        backgroundImage: `url(${IMAGES[i]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />

                                <span>{item}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {showBar && (
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={(e) => {
                            const el = scrollRef.current;
                            const maxScroll = el.scrollWidth - el.clientWidth;

                            const value = Number(e.target.value);
                            const scrollTo = (value / 100) * maxScroll;

                            el.scrollLeft = scrollTo;
                            setProgress(value);
                        }}
                        className={styles.range}
                    />
                )}

            </div>
        </div >
    );
}