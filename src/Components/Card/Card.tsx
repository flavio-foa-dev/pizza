import styles from './card.module.css';
import { useNavigate } from 'react-router-dom';
import Tags from '../Tags/Tags';
import { Dishes } from '../../types/dishes';

export default function Card(props: Dishes) {
  const { title, description, photo,id } = props;
  const navegation = useNavigate();

  return (
    <div className={styles.item} onClick={()=> navegation(`/product/${id}`) }>
      <div className={styles.item__img}>
        <img className={styles.img} src={photo} alt={title} title={title}/>
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Tags {...props}/>
      </div>
    </div>
  );
}
