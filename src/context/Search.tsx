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

  const value={search, setSearch}
  return <ContextSearch.Provider value={value}>
    {children}
  </ContextSearch.Provider>
}