import React, {createContext} from 'react'

const RoutesContext = createContext({})

const RoutesContextProvider = (props) => {
  const routes = {
    home: "/",
    login: "/login",
    signup: "/create-account",
  }
  return (
    <RoutesContext.Provider
      value={{routes}}
    >
      {props.children}
    </RoutesContext.Provider>
  )
}

export {RoutesContext, RoutesContextProvider}

