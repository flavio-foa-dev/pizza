import styles from './filters.module.css';
import filters from '../../../data/filters.json';
import { useContext } from 'react';
import { ContextSearch } from '../../../context/Search';

type IFilter = typeof filters[0]

export default function Filters() {
  const {filter, setFilter} = useContext<any>(ContextSearch);

  function selected (opcao:IFilter) {
    !filter ? setFilter(opcao.id)
      : setFilter(null);
  }

  return (
    <div className={styles.filters}>
      {filters.map((opcao) => (
        <button
          className={`
        ${styles.filters__tag} ${filter == opcao.id ? styles.filters_tag_active: ''}
        `}
          key={opcao.id}
          onClick={()=> selected(opcao)}
        >{opcao.label}</button>
      ))}
    </div>
  );
}
