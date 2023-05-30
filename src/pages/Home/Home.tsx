import styles from './styles.module.css';
import data from '../../data/products.json';
import nossacasa from '../../assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const suggestionOfDishes = [...data].sort(()=> 0.5 - Math.random()).slice(0,3);
  const navegate = useNavigate();

  function getDetails(id: number){
    navegate(`/product/${id}`);
  }

  return (
    <section className={styles.container}>
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
            <button
              className={styles.recomendado__botao}
              onClick={()=> getDetails(item.id)}
            >
              ver mais</button>
          </div>
        ))}
      </div>
      <h3 className={styles.title}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossacasa} alt="imagem da pizzaria"/>
        <div className={styles.nossaCasa__end}>
          Rua do Arpuador 1875 Barra - RJ <br/><br />Tel: (21) 7956 - 8877
        </div>
      </div>
    </section>
  );
}
