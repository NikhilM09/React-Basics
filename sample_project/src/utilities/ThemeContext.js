import { createContext } from "react"

const ThemeContext = createContext({
    theme :{isDark : false}
})

export default ThemeContext;