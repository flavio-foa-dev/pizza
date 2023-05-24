import styles from './sort.module.css';
import sorting from '../../data/sorting.json';
import { useContext, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { ContextSearch } from "../../context/Search";

export default function Sort() {
  const {sort, setSort} = useContext<any>(ContextSearch);
  const [toggle, setToggle] = useState(false);
  const orderName = sort && sorting.find(s => s.value === sort)?.nome;

  return (
    <button
    className={`${styles.sorting} ${sort !== "" ? styles.sorting__ativo : "" }`}
    onClick={()=> setToggle(!toggle)}
    onBlur={()=> setToggle(false)}
    >
      <span>{orderName || "Ordenar por"} </span>
      {toggle ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
      <div className={`${styles.sorting__options} ${toggle ? styles.sorting__options__ativo : ""}`}>
        {sorting.map((opcao)=>(
          <div
            className={styles.sorting__option}
            key={opcao.value}
            onClick={()=> setSort(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  )
}
