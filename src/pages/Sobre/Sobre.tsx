import styles from './sobre.module.css';
import house from '../../assets/sobre/house1.jpeg';
import dishe1 from '../../assets/sobre/dishe1.png';
import dishe2 from '../../assets/sobre/dishe2.png';
import dishe3 from '../../assets/sobre/dishe3.jpg';


const imgs =[dishe1, dishe2, dishe3];

export default function Sobre() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Sobre</h3>
      <div className={styles.sobre}>
        <img src={house} alt="Casa Pizza" className={styles.sobre__img} />
        <div className={styles.sobre__text}>
          <p>
            Na Pizzaria Flavito, nossa missão é proporcionar a melhor experiência em pizza para nossos clientes. Nosso objetivo é ser reconhecidos como a melhor pizzaria da região, oferecendo deliciosas pizzas preparadas com ingredientes frescos e de alta qualidade, combinadas com um serviço excepcional.
          </p>
          <p>
          Nossos valores são fundamentais para guiar nossas ações e garantir que sempre cumpramos nossos compromissos com nossos clientes:
          🌟 Excelência: Buscamos a excelência em tudo o que fazemos, desde a escolha dos ingredientes até o atendimento aos clientes. Nosso objetivo é superar as expectativas e entregar pizzas de qualidade superior em cada pedido.
          🌟 Responsabilidade social e ambiental: Nos preocupamos com o meio ambiente e com a comunidade em que atuamos. Buscamos adotar práticas sustentáveis em nossa operação, desde o uso responsável de recursos até o apoio a iniciativas locais e causas sociais.
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.container__imgs}>
        {imgs.map((img, index) => (
          <div key={index} className={styles.div__img}>
            <img src={img} alt="imagem de massa" className={styles.img}/>
          </div>
        ))
        }
      </div>
    </section>
  );
}
