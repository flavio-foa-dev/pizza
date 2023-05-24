import styles from './sort.module.css'
import sorting from '../../data/sorting.json'
import { useState } from 'react'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md"

export default function Sort() {
  const [toggle, setToggle] = useState(false)
  return (
    <button
      className={styles.sorting}
      onClick={()=> setToggle(!toggle)}
      onBlur={()=> setToggle(false)}
    >
      <span>Ordena Por</span>
      {toggle ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
      <div className={`${styles.sorting__options} ${toggle ? styles.sorting__options__ativo :""}`}>
        {sorting.map((opcao)=>(
          <div className={styles.sorting__option} key={opcao.value}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  )
}
