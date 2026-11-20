import { useEffect, useState } from "react"

const NavBar = () => {
  // null until mounted, so server and first client render match
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    let stored = null
    try {
      stored = window.localStorage.getItem("theme")
    } catch (e) {}
    const initial =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    setTheme(initial)
  }, [])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    document.documentElement.dataset.theme = next
    try {
      window.localStorage.setItem("theme", next)
    } catch (e) {}
  }

  return (
    <div className="nav">
      <div className="logo"></div>
      <button
        type="button"
        className="theme-toggle"
        aria-label="Toggle dark mode"
        aria-pressed={theme === "dark"}
        onClick={toggleTheme}
        disabled={theme === null}
      >
        {theme === null ? "" : theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  )
}

export default NavBar
