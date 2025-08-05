import { useEffect,useState } from "react";

const useTheme = () => {
    const [theme,setTheme] = useState(()=>
        typeof window !== "undefined" && localStorage.theme === "dark" ? "dark" : "light"
    )

    useEffect(()=> {
        const root= window.document.documentElement
        if (theme === "dark") {
            root.classList.add("dark")
            localStorage.setItem("theme","dark")
        } else {
            root.classList.remove("dark")
            localStorage.setItem("theme","light")
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev)=> (prev === "dark"?"light":"dark"))
    }
    return {theme,toggleTheme}
}

export default useTheme