import { useNavigate } from 'react-router-dom';
import styles from './notfound.module.css';


export default function NotFound() {
  const navigation = useNavigate();
  return (
    <div className={styles.notFound}>
      <h3 className={styles.title}>
        Pagina nao encontrada
      </h3>
      <button className={styles.btn__prev} onClick={()=> { navigation(-1);}}>{'< Voltar'}</button>
    </div>
  );
}
