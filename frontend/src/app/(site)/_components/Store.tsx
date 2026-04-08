"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./store.module.css"
import { sportsItemType } from "@/types/sportsItem";
import { api } from "@/services/api";

export default function Store() {
    const [product, setSportItem] = useState<sportsItemType[]>([]);

    useEffect(() => {
        async function getSportItem() {
            const { response, error } = await api('GET', '/products')

            if (response) {
                setSportItem(response as sportsItemType[])
            } else {
                console.error(error?.message)
            }
        }

        getSportItem()
    }, [])
    return (

        <section className={styles.products} id="products">
            <div className={styles.container}>

                <h1 className={styles.title}>LOJA</h1>
                <div className={styles.filterBar} />

                <div className={styles.productsList}>
                    {product.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                </div>
            </div>


        </section>


    )

}