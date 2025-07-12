import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#59b1e3] to-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Construindo futuros, concretizando sonhos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8"
          >
            Com a NTC Brasil, transforme suas ideias em realidade
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-x-4"
          >
            <a
              href="#contato"
              className="inline-block bg-white text-[#59b1e3] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Fale Conosco
            </a>
            <a
              href="#sobre"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#59b1e3] transition-colors"
            >
              Saiba Mais
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}