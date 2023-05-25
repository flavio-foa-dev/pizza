import styles from './listCard.module.css';
import data from '../../data/products.json';
import Card from '../Card/Card';
import { useContext, useEffect, useState } from 'react';
import { ContextSearch } from '../../context/Search';

export interface Props {
  search: string
  filter: string
  sort: string
}

export default function ListCard() {
  const {search, filter, sort} = useContext<any>(ContextSearch);
  const [products,  setProducts] = useState(data);

  function verifySerch(criteriaSearch: string){
    const regex = new RegExp(search, 'i');
    return regex.test(criteriaSearch);
  }

  function verifyFilter(id: number ) {
    if(filter !== null) return filter==id;
    return true;
  }

  function sorting(dataFiltered: typeof data){
    switch(sort) {
    case 'porcao':
      return dataFiltered.sort((a,b) => a.size > b.size ? 1 : -1);
    case 'qtd_pessoas':
      return dataFiltered.sort((a,b) => a.serving > b.serving ? 1 : -1);
    case 'preco' :
      return dataFiltered.sort((a,b) => a.price > b.price ? 1 : -1);
    default:
      return dataFiltered;
    }
  }

  useEffect(()=>{
    const dataFiltered = data.filter((item)=> verifySerch(item.title) && verifyFilter(item.category.id));
    setProducts(sorting(dataFiltered));

  },[search, filter, sort]);
  return (
    <section
      className={styles.listCards}
    >
      {products.map((item) => <Card {...item} key={item.id}/>)}
    </section>
  );
}
