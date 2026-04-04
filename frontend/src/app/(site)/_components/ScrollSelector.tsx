"use client"
import "./styleScrollSelector.css"
import { useRef, useState } from "react";
import Link from "next/link";
import { useEffect } from "react";



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
            <div className="container">

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="scroll"
                >
                    {items.map((item, i) => (
                        <Link
                            key={i}
                            href={`/${item.toLowerCase()}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div className="item">
                                <div className="circle" />
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
                        className="range"
                    />
                )}

            </div>
        </div>
    );
}