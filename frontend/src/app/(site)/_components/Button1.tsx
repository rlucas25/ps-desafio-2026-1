import "./Button1.css";


export default function Button1({
    id = "#home",
    text = "TEXT"
}) {

    return (

        <div>
            <a
                href={id}
                style={{
                    textDecoration: 'none',
                    color: 'inherit',
                }}>

                <button className="btn1">

                    <div className="Icon" />

                    <h3>{text}</h3>
                </button>
            </a>
        </div >


    )

}