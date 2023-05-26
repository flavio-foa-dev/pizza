import styles from './styles.module.css';
import data from '../../data/products.json';

export default function Home() {
  const suggestionOfDishes = [...data].sort(()=> 0.5 - Math.random()).slice(0,3);
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Sugestaoes da casa</h3>
      <div className={styles.recomendados}>
        {suggestionOfDishes.map((item) => (
          <div
            className={styles.recomendado}
            key={item.id}
          >
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} className={styles.img} />
            </div>
            <button className={styles.recomendado__botao}>ver mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}
