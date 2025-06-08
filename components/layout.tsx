import type { ReactNode } from "react"
import { Header } from "./header"
import { Footer } from "./footer"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
