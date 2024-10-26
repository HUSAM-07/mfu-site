"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div 
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-[40px] h-[24px] rounded-full bg-foreground/10 dark:bg-foreground/20 p-[2px] relative cursor-pointer"
    >
      <div className={`w-[20px] h-[20px] rounded-full bg-foreground transition-transform duration-200 ${theme === "dark" ? "translate-x-[16px]" : "translate-x-0"}`} />
    </div>
  )
}
