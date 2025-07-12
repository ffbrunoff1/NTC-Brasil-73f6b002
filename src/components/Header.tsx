import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  scrollY: number
}

export default function Header({ scrollY }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1752290244708_0.png"
            alt="NTC Brasil"
            className="h-12"
          />

          <nav className="hidden md:flex space-x-8">
            {['sobre', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-gray-700 hover:text-[#59b1e3] capitalize transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-4"
          >
            {['sobre', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 capitalize"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}