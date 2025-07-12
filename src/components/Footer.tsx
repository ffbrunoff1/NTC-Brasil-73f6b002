import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1752290244708_0.png"
              alt="NTC Brasil"
              className="h-12 mb-4 md:mb-0"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400 mb-2">
              © {new Date().getFullYear()} NTC Brasil. Todos os direitos reservados.
            </p>
            <p className="text-gray-400">
              Padre Lebret 801 G05 Bloco 03
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}