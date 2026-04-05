import ProductCard from "./ProductCard";
import styles from "./products.module.css"
import { sportsItemType } from "@/types/sportsItem";

export default function Products() {
    const sportsItem: sportsItemType[] = [
        {
            id: '1',
            name: 'Tênis World Destroyer',
            brand: 'Destroyer',
            price: 399.90,
            year: 2024,
            image: 'assets/img/carousel/1.jpg',
            amount: 21,
            category_id: 'calcados',
        },
        {
            id: '2',
            name: 'Camiseta World Destroyer',
            brand: 'Destroyer',
            price: 99.90,
            year: 2024,
            image: 'assets/img/carousel/2.jpg',
            amount: 15,
            category_id: 'camisas',
        },
        {
            id: '3',
            name: 'Short World Destroyer',
            brand: 'Destroyer',
            price: 59.90,
            year: 2024,
            image: 'assets/img/carousel/3.jpg',
            amount: 5,
            category_id: 'shorts',
        },
        {
            id: '4',
            name: 'Bola World Destroyer',
            brand: 'Destroyer',
            price: 59.90,
            year: 2024,
            image: 'assets/img/carousel/4.jpg',
            amount: 12,
            category_id: 'bolas',
        },
        {
            id: '5',
            name: 'Camisa II infantil',
            brand: 'Destroyer',
            price: 399.90,
            year: 2024,
            image: 'null',
            amount: 15,
            category_id: 'calcados',
        },
        {
            id: '6',
            name: 'Produto Exemplo',
            brand: 'Destroyer',
            price: 99.90,
            year: 2024,
            image: 'null',
            amount: 25,
            category_id: 'camisas',
        },
        {
            id: '7',
            name: 'Short Campus',
            brand: 'Destroyer',
            price: 59.90,
            year: 2024,
            image: 'null',
            amount: 20,
            category_id: 'shorts',
        },
        {
            id: '8',
            name: 'Mais Um Exemplo',
            brand: 'Destroyer',
            price: 59.90,
            year: 2024,
            image: 'null',
            amount: 12,
            category_id: 'bolas',
        },

    ]
    return (

        <section className={styles.products} id="products">
            <div className={styles.container}>

                <h1 className={styles.title}>LOJA</h1>
                <div className={styles.filterBar} />

                <div className={styles.productsList}>
                    {sportsItem.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                </div>
            </div>


        </section>


    )

}