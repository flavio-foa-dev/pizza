import styles from './card.module.css'
import products from '../../data/products.json'

type Props = typeof products[0]

export default function Card(props: Props) {
  const { title, description, category, size, serving, price } = props
  return (
    <div className={styles.item}>

      <div className={styles.item__img}>
        <img src="" alt={title} title={title}/>
      </div>

      <div className={styles.item__description}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={styles.item__tipo}>{category.label}</div>
          <div className={styles.item__porcao}>{size}g</div>
          <div className={styles.item__qtdpessoas}>serve {serving} pessoas</div>
          <div className={styles.item__valor}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}