"use client"

import { sportsItemType } from "@/types/sportsItem";
import styles from "./productcard.module.css"


export default function ProductCard(sportsItem: sportsItemType) {


    return (
        <div className={styles.productCard}>
            <img src={sportsItem.image} alt={sportsItem.name} className={styles.productImage} />

            <div className={styles.productOverlay}>
                <div className={styles.productInfo}>

                    <div className={styles.leftInfo}>
                        <h3 className={styles.productName}>{sportsItem.name}</h3>
                        <p className={styles.productPrice}>R${sportsItem.price}</p>
                    </div>

                    <div className={styles.rightInfo}>
                        <h3 className={styles.productAmount}>{sportsItem.amount}x</h3>
                        <p className={styles.productDiscount}>10% off</p>
                    </div>

                </div>

                <button className={styles.buyButton}>Comprar</button>
            </div>
        </div>
    );
}