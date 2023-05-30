import { useNavigate, useParams } from 'react-router-dom';
import styles from './post.module.css';
import  data from '../../data/products.json';
import NotFound from '../Notfound/NotFound';
import Tags from '../../Components/Tags/Tags';

export default function Post() {
  const navegation = useNavigate();
  const {id} = useParams();
  const item = data.find(p => p.id === Number(id));

  if (!item){
    return <NotFound/>;
  }

  return (
    <div className={styles.section}>
      <button
        className={styles.btn__prev}
        onClick={()=> navegation(-1)}
      >
        {'< voltar'}</button>
      <section className={styles.container}>
        <h1 className={styles.title}>{item.title}</h1>
        <div  className={styles.image}>
          <img src={item.photo} alt={item.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>{item.description}</p>
        </div>
        <Tags {...item}/>
      </section>
    </div>
  );
}
