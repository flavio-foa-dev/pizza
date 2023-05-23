import {ReactNode, SetStateAction, createContext, useState} from "react"

type Contexte = {
  search:string;
  setSearch?: React.Dispatch<SetStateAction<string>>
}

export const ContextSearch = createContext<Contexte | undefined>(undefined)
ContextSearch.displayName = "Search"

type Children = { children: ReactNode}

export function ProviderSearch({children}:Children) {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState(null)

  const value={search, setSearch, filter, setFilter}
  return <ContextSearch.Provider value={value}>
    {children}
  </ContextSearch.Provider>
}