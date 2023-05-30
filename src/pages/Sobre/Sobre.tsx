import styles from './sobre.module.css';
import house from '../../assets/sobre/house.png';
import dishe1 from '../../assets/sobre/dishe1.png';
import dishe2 from '../../assets/sobre/dishe2.png';

const imgs =[dishe1, dishe2];

export default function Sobre() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Sobre</h3>
      <div className={styles.sobre}>
        <img src={house} alt="Casa Pizza" />
        <div className={styles.sobre__text}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada do Rio de Janeiro! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {imgs.map((img, index) => (
          <div key={index} className={styles.images__img}>
            <img src={img} alt="imagem de massa" />
          </div>
        ))
        }
      </div>
    </section>
  );
}
