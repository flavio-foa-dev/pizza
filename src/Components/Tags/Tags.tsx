import { Dishes } from '../../types/dishes';
import styles from './tags.module.css';
import classNames from 'classnames';


export default function Tags(props: Dishes) {
  return (
    <div className={styles.item__tags}>
      <div className={classNames({
        [styles.item__tipo]:true,
        [styles[`item__tipo__${props.category.label.toLowerCase()}`]]: true,
      })}
      >{props.category.label}</div>
      <div className={styles.item__porcao}>{props.size}g</div>
      <div className={styles.item__qtdpessoas}>
        serve {props.serving} pessoa{props.serving < 2 ? '' : 's'}
      </div>
      <div className={styles.item__valor}>R$ {props.price.toFixed(2)}</div>
    </div>
  );
}
