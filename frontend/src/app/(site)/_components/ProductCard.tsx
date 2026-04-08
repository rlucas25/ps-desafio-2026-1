import { sportsItemType } from "@/types/sportsItem";
import styles from "./productcard.module.css"
import { api } from "@/services/api";


export default function ProductCard(product: sportsItemType) {


    return (
        <div className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />

            <div className={styles.productOverlay}>
                <div className={styles.productInfo}>

                    <div className={styles.leftInfo}>
                        <h3 className={styles.productName}>{product.name}</h3>
                        <p className={styles.productPrice}>R${product.price}</p>
                    </div>

                    <div className={styles.rightInfo}>
                        <h3 className={styles.productAmount}>{product.amount}x</h3>
                    </div>

                </div>
                {product.amount > 0 ? (
                    <button
                        className={styles.buyButton}
                        onClick={async () => {
                            await api('PUT', `/products/${product.id}/purchase`)
                            window.location.reload()
                        }}

                    >Comprar</button>
                ) : (
                    <button className={styles.buyButton} disabled>Esgotado</button>
                )}
            </div>
        </div >
    );
}