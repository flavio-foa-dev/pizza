import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './post.module.css';
import  data from '../../data/products.json';
import NotFound from '../Notfound/NotFound';
import Tags from '../../Components/Tags/Tags';
import {ImShare2} from 'react-icons/im';

export default function Post() {
  const navegation = useNavigate();
  const location = useLocation();

  const {id} = useParams();
  const item = data.find(p => p.id === Number(id));

  if (!item){
    return <NotFound/>;
  }

  const handleShare = () => {
    const title = item.title;
    const description = item.description;
    const currentURL = window.location.origin + location.pathname;
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${title}: ${description}\n${currentURL}`
    )}`;
    window.open(whatsappURL, '_blank');
  };



  return (
    <div className={styles.section}>
      <button
        className={styles.btn__prev}
        onClick={()=> navegation(-1)}
      >
        {'< voltar'}</button>
      <section className={styles.container}>
        <h1 className={styles.title}>{item.title}</h1>
        <div  className={styles.images}>
          <img src={item.photo} alt={item.title} className={styles.image} />
          <ImShare2 onClick={()=> handleShare()} size={25} color="firebrick" className={styles.share}/>
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>{item.description}</p>
        </div>
        <Tags {...item}/>
      </section>
    </div>
  );
}
