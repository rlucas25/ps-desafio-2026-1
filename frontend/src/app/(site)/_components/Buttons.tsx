import styles from "./buttons.module.css";


export default function Button1({
    id = "#home",
    text = "TEXT"
}) {

    return (

        <div className={styles.container1}>
            <a
                href={id}
                style={{
                    textDecoration: 'none',
                    color: 'inherit',
                }}>

                <button className={styles.btn1}>

                    <div className={styles.Icon} />

                    <h3>{text}</h3>
                </button>
            </a>
        </div >


    )

}


export function Button2({
    id = "#home",
    text = "TEXT"
}) {

    return (

        <div className={styles.container2}>
            <a href={id}
                style={{
                    textDecoration: 'none',
                    color: 'inherit',
                }}>

                <button className={styles.btn2}>

                    <h1>{text}</h1>

                </button>
            </a>
        </div >


    )

}