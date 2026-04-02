export default function ShoeVideo({
    src = "/assets/vid/SHOE.mp4",
    top = "10%",
    left = "18%",
    width = "100%",
    height = "65%",
    fit = "contain"
}) {

    return (

        <video
            autoPlay
            muted
            loop
            playsInline
            style={{
                position: "absolute",

                top,
                left,
                width,
                height,

                objectFit: fit
            }}
        >

            <source src={src} type="video/mp4" />

        </video>

    )
}