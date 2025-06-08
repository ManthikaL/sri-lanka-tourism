"use client"

import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useState, useRef, useEffect } from "react"

export function Header() {
  const { items } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const navigation = [
    { name: "Home", href: "#home" },
    {
      name: "Discover",
      dropdown: [
        { name: "Amazing Places", href: "#places", description: "Explore iconic destinations", icon: "🏛️" },
        { name: "Activities", href: "#activities", description: "Adventures & experiences", icon: "🎯" },
        { name: "Events & Festivals", href: "#events", description: "Cultural celebrations", icon: "🎭" },
      ],
    },
    {
      name: "Plan Your Trip",
      dropdown: [
        { name: "Transport & Travel", href: "#transport", description: "Getting around Sri Lanka", icon: "🚂" },
        { name: "Local Guides", href: "#guides", description: "Expert local assistance", icon: "👥" },
        { name: "Photo Gallery", href: "#gallery", description: "Visual inspiration", icon: "📸" },
      ],
    },
    {
      name: "Learn",
      dropdown: [
        { name: "History & Culture", href: "#history", description: "2,500 years of heritage", icon: "📜" },
        { name: "About Sri Lanka", href: "#about", description: "Current status & info", icon: "🇱🇰" },
        { name: "Travel Blogs", href: "#blog", description: "Stories from travelers", icon: "✍️" },
      ],
    },
    { name: "Shop", href: "#shop" },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-amber-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-10 bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <div className="absolute inset-1 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-md"></div>
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Visit Sri Lanka
              </span>
              <div className="text-xs text-emerald-600 font-medium -mt-1">Pearl of the Indian Ocean</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2" ref={dropdownRef}>
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center px-6 py-3 text-gray-700 hover:text-amber-600 font-medium transition-all duration-200 rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 group"
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 ml-2 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-amber-100 py-3 animate-in slide-in-from-top-2 duration-300"
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-6 py-4 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-200 group/item mx-2 rounded-xl"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{dropdownItem.icon}</span>
                              <div>
                                <div className="font-semibold text-gray-800 group-hover/item:text-amber-600 transition-colors">
                                  {dropdownItem.name}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">{dropdownItem.description}</div>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="px-6 py-3 text-gray-700 hover:text-amber-600 font-medium transition-all duration-200 rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <a href="#cart" className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className="relative p-3 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 rounded-full transition-all duration-200"
              >
                <ShoppingCart className="h-6 w-6 text-gray-700 group-hover:text-amber-600 transition-colors" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-bounce">
                    {itemCount}
                  </span>
                )}
              </Button>
            </a>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-3 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 rounded-full transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-amber-100 bg-white/95 backdrop-blur-md">
            <nav className="py-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        className="w-full flex items-center justify-between px-6 py-4 text-gray-700 hover:text-amber-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 rounded-xl transition-all duration-200 mx-2"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                        />
                      </button>

                      {activeDropdown === item.name && (
                        <div className="ml-6 mt-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center space-x-3 px-6 py-3 text-gray-600 hover:text-amber-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 rounded-xl transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="text-lg">{dropdownItem.icon}</span>
                              <span>{dropdownItem.name}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-6 py-4 text-gray-700 hover:text-amber-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 rounded-xl font-medium transition-all duration-200 mx-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
