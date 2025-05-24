"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="container mx-auto py-6 px-4 flex items-center justify-between">
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
          href="/blog"
          className={`transition-colors text-sm uppercase tracking-wide ${
            isActive("/blog") ? "text-[#8A3B08] font-medium" : "text-[#2E4365] hover:text-[#8A3B08]"
          }`}
        >
          Blog
        </Link>
        <Link
          href="/#contato"
          className="text-[#2E4365] hover:text-[#8A3B08] transition-colors text-sm uppercase tracking-wide"
        >
          Contato
        </Link>
      </nav>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-6 w-6 text-[#2E4365]" />
        <span className="sr-only">Menu</span>
      </Button>
    </header>
  )
}
