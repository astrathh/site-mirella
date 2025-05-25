"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="container mx-auto py-6 px-4 flex items-center justify-between relative">
      <Link href="/" className="flex items-center gap-2">
        <div className="relative w-32 h-8">
          <Image
            src="/placeholder.svg?height=32&width=128"
            alt="JL Media Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link
          href="/"
          className={`transition-colors text-sm uppercase tracking-wide ${
            isActive("/") && pathname === "/" ? "text-[#8A3B08] font-medium" : "text-[#2E4365] hover:text-[#8A3B08]"
          }`}
        >
          Home
        </Link>
        <Link
          href="/sobre"
          className={`transition-colors text-sm uppercase tracking-wide ${
            isActive("/sobre") ? "text-[#8A3B08] font-medium" : "text-[#2E4365] hover:text-[#8A3B08]"
          }`}
        >
          Sobre
        </Link>
        <Link
          href="/trabalhos"
          className={`transition-colors text-sm uppercase tracking-wide ${
            isActive("/trabalhos") ? "text-[#8A3B08] font-medium" : "text-[#2E4365] hover:text-[#8A3B08]"
          }`}
        >
          Trabalhos
        </Link>
        <Link
          href="/#contato"
          className="text-[#2E4365] hover:text-[#8A3B08] transition-colors text-sm uppercase tracking-wide"
        >
          Contato
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <X className="h-6 w-6 text-[#2E4365]" /> : <Menu className="h-6 w-6 text-[#2E4365]" />}
        <span className="sr-only">Menu</span>
      </Button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-[#F3D58D] shadow-lg md:hidden z-50">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              href="/"
              onClick={closeMenu}
              className={`transition-colors text-sm uppercase tracking-wide py-2 ${
                isActive("/") && pathname === "/" ? "text-[#8A3B08] font-medium" : "text-[#2E4365] hover:text-[#8A3B08]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/sobre"
              onClick={closeMenu}
              className={`transition-colors text-sm uppercase tracking-wide py-2 ${
                isActive("/sobre") ? "text-[#8A3B08] font-medium" : "text-[#2E4365] hover:text-[#8A3B08]"
              }`}
            >
              Sobre
            </Link>
            <Link
              href="/trabalhos"
              onClick={closeMenu}
              className={`transition-colors text-sm uppercase tracking-wide py-2 ${
                isActive("/trabalhos") ? "text-[#8A3B08] font-medium" : "text-[#2E4365] hover:text-[#8A3B08]"
              }`}
            >
              Trabalhos
            </Link>
            <Link
              href="/#contato"
              onClick={closeMenu}
              className="text-[#2E4365] hover:text-[#8A3B08] transition-colors text-sm uppercase tracking-wide py-2"
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
