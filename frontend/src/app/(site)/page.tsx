import Header from './_components/Header'
import ShoeVideo from './_components/ShoeVideo';
import SloganText from './_components/SloganText';
import Button1, { Button2 } from './_components/Buttons';
import CollectionsCarousel from './_components/Carousel';
import ScrollSelector from './_components/ScrollSelector';
import Store from './_components/Store';
import styles from './page.module.css';

export default async function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <div id="home" className={styles.home}>
        <div className={styles.leftCol}>
          <div className={styles.sloganContainer}>
            <SloganText />
            <div className={styles.buttonContainer}>
              <Button1 text="Explorar Mais Vendidos" id="#collections" />
              <Button1 text="ir para a Loja" id="#store" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.shoeVideoContainer}>
        <ShoeVideo />
      </div>

      <div className={styles.borderBackground} />
      <div className={styles.borderTransition} />

      <div id="collections" className={styles.collectionsSection}>
        <div className={styles.leftColumn}>
          <CollectionsCarousel />
          <div className={styles.bottomDecoration} />
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.rightContent}>
            <div className={styles.spacerSmall}></div>
            <h2 className={styles.sectionTitle}>
              O melhor para o seu perfil
            </h2>
            <p className={styles.sectionDescription}>
              Nossas coleções foram desenvolvidas para quem exige estilo,
              resistência e conforto em qualquer modalidade esportiva.
            </p>
            <div className={styles.spacerMedium}></div>
            <Button2 text="Ache o seu estilo" />
          </div>
        </div>

        <div className={styles.organicBorder1} />
        <div className={styles.organicBorder2} />
      </div>

      <div id="scroll" className={styles.scrollSection}>
        <h1 className={styles.scrollTitle}>
          Para quem você está comprando?
        </h1>
        <div className={styles.scrollContainer}>
          <ScrollSelector />
        </div>
      </div>

      <div id="store" className={styles.storeSection}>
        <Store />
      </div>

      <div id="about" className={styles.aboutSection}></div>
      <div id="contact" className={styles.contactSection}></div>
    </div>
  );
}