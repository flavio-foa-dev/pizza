import { useContext } from 'react';
import styles from './Search.module.css';
import { ContextSearch } from '../../context/Search';
import {CgSearch} from 'react-icons/cg';
import Filters from './filters/Filters';
import Sort from '../Sort/Sort';
import ListCard from '../Listcard/ListCard';

export default function Search() {
  const { search, setSearch } = useContext<any>(ContextSearch);

  return (
    <>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardapio</h3>
        <div className={styles.container__search}>

          <input
            className={styles.input}
            id="search"
            name="search"
            onChange={(e)=> setSearch(e.target.value)}
            type='text'
            required
            value={search}
            placeholder="Busca . ."
          />
          <CgSearch
            className={styles.icon}
            size={25}
            color="#4C4D5E"
          ></CgSearch>
        </div>
        <div className={styles.menu__filters}>
          <Filters />
          <Sort />
        </div>
        <ListCard />
      </section>
    </>
  );
}
