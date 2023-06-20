import {createContext} from "react";

export const YoutubeApiContext = createContext();


export function YoutubeApiProvider({children}) {
  return (
    <YoutubeApiProvider value={{youtube}}>{children}</YoutubeApiProvider>
  )
}
