export default function SloganText() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "50vw",
                color: "white",
                gap: "10px",
            }}
        >
            {/*     TITULO      */}
            <h1
                style={{
                    margin: 0,
                    fontSize: "clamp(60px, 6vw, 120px)",
                    fontWeight: 800,
                    lineHeight: 0.9,
                    background: "linear-gradient(0deg, #00ff88, #00ff88, #b7ffe1)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",

                }}
            >
                DOMINIO
            </h1>

            {/*     SUBTITULO      */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0px",
                    marginTop: "7px",

                    width: "100%",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <p
                    style={{
                        margin: 0,
                        fontSize: "clamp(16px, 2vw, 70px)",
                        lineHeight: 1.05,
                        color: "#e5e5e5",
                        fontWeight: 500,
                    }}
                >
                    <span style={{ color: "#00ff88" }}>É</span> NO SUOR QUE
                </p>

                <p
                    style={{
                        margin: 0,
                        fontSize: "clamp(16px, 2vw, 70px)",
                        lineHeight: 1.05,
                        color: "#e5e5e5",
                        fontWeight: 500,
                    }}
                >
                    SE <span style={{ color: "#00ff88" }}>CONQUISTA</span>
                </p>
            </div>
        </div>
    )
}