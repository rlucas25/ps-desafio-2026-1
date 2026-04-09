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
            <Button2 text="Ache o seu estilo" id='#collections' />
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

      <div id="about" className={styles.aboutSection}>
        <div className={styles.aboutOverlay}>
          <div className={styles.aboutCard}>
            <h3 className={styles.aboutTitle}>“A dedicação vê os sonhos tornarem-se realidade"</h3>
            <h4 className={styles.aboutTitle2}>Kobe Bryant</h4>
            <div className={styles.aboutUnderline}></div>
            <p className={styles.aboutText}>
              O esporte nos fortalece. Mantém nosso foco e conecta pessoas através de objetivos em comum. Com histórias inspiradoras, inovação constante e sua dedicação, o movimento tem o poder de transformar vidas.
              Oferecemos roupas e equipamentos de alta performance desenvolvidos com tecnologias modernas para ajudar você a evoluir. Seja correndo, jogando ou apenas mantendo um estilo de vida ativo, nossa loja está ao seu lado para apoiar cada conquista.
              Aqui, desempenho e conforto caminham juntos. Criamos produtos pensados para acompanhar seus movimentos, incentivar sua confiança e impulsionar seu progresso. Independentemente do seu nível, estamos prontos para ajudar você a ir mais longe e alcançar o seu melhor.
            </p>
          </div>
        </div>
      </div>

      <div id="contact" className={styles.contactSection}>
        <div className={styles.contactContent}>
          <h2 className={styles.contactTitle}>Contatos</h2>

          <div className={styles.contactInfoTop}>
            <div className={styles.contactInfoItem}>
              <span className={styles.contactIcon}>◷</span>
              <p>
                Horário de serviço: 7:00 - 17:00 Segunda a Sexta
              </p>
            </div>

            <div className={styles.contactInfoItem}>
              <span className={styles.contactIcon}>⌂</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisque sit amet ex. Maecenas felis nisi.
              </p>
            </div>
          </div>

          <div className={styles.contactPhones}>
            <div className={styles.contactPhoneItem}>
              <span className={styles.contactIcon}>⌕</span>
              <p>+12 (12) 1234-5678</p>
            </div>

            <div className={styles.contactPhoneItem}>
              <span className={styles.contactIcon}>⌕</span>
              <p>+12 (12) 1234-5678</p>
            </div>

            <div className={styles.contactPhoneItem}>
              <span className={styles.contactIcon}>⌕</span>
              <p>+12 (12) 1234-5678</p>
            </div>
          </div>

          <div className={styles.contactFormWrapper}>
            <h3 className={styles.formTitle}>Envie um email:</h3>

            <form className={styles.contactForm}>
              <div className={styles.formRow}>
                <label className={styles.formLabel}>EMAIL</label>
                <input
                  type="email"
                  placeholder="seuemail@gmail.com"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formRow}>
                <label className={styles.formLabel}>MENSAGEM</label>
                <textarea
                  placeholder="Digite aqui a sua mensagem"
                  className={styles.formTextarea}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                ENVIAR
              </button>
            </form>
          </div>

          <p className={styles.footerText}>
            © 2026 <span>Lucas Rebouças</span>
          </p>
        </div>
      </div>
    </div >
  );
}