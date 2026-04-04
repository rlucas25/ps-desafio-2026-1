export default function ShoeVideo({
    src = "/assets/vid/SHOE.mp4",
}) {
    return (
        <div
            style={{
                position: "absolute",
                left: "35%",
                right: "0%",
                top: "40.8%",
                width: "65%",
                height: "70%",
                transform: "translateY(-50%)",
                borderRadius: "100px",
                overflow: "hidden",
                background: "black",
                zIndex: 4,
            }}
        >
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                }}
            >
                <source src={src} type="video/mp4" />
            </video>
        </div>
    )
}