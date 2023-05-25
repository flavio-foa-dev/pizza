import {ReactNode, SetStateAction, createContext, useState} from 'react';

type Contexte = {
  search?:string;
  setSearch?: React.Dispatch<SetStateAction<string>>;
  sort?:string
  setSort?: React.Dispatch<SetStateAction<string>>
}

export const ContextSearch = createContext<Contexte | undefined>(undefined);
ContextSearch.displayName = 'Search';

type Children = { children: ReactNode}

export function ProviderSearch({children}:Children) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState('');

  const value={search, setSearch, filter, setFilter, sort, setSort};
  return <ContextSearch.Provider value={value}>
    {children}
  </ContextSearch.Provider>;
}