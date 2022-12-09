import React, { useState, createContext, useContext } from 'react'



type SearchContextType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

type UserContextProviderProps = {
  children: React.ReactNode
}

export const SearchContext = createContext({} as SearchContextType)

export const SearchContextProvider = ({ children }: UserContextProviderProps) => {
  const [search, setSearch] = useState<string>('user')
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export function UseSearchContext() {
  return useContext(SearchContext);
}