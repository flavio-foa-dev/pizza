import { useNavigate } from 'react-router-dom';
import styles from './notfound.module.css';


export default function NotFound() {
  const navigation = useNavigate();
  return (
    <div className={styles.notFound}>
      <h3>
        NotFound
      </h3>
      <button onClick={()=> { navigation(-1);}}>{'< Voltar'}</button>
    </div>
  );
}
