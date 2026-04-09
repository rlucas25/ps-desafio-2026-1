'use client'
import styles from "./shoeVideo.module.css"

export default function ShoeVideo({
    src = "/assets/vid/SHOE.mp4",
}) {
    return (
        <div className={styles.container}>
            <video
                className={styles.video}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={src} type="video/mp4" />
            </video>
        </div>
    )
}