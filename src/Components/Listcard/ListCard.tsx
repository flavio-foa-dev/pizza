import styles from './listCard.module.css'
import products from '../../data/products.json'
import Card from '../Card/Card'

export default function ListCard() {
  return (
    <section className={styles.listCards}>
      {products.map((item)=> <Card {...item} key={item.id}/>)}

    </section>
  )
}
