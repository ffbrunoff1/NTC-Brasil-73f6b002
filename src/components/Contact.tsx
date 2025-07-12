import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    
    try {
      // Simula envio do formulário
      await new Promise(resolve => setTimeout(resolve, 1500))
      setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender suas necessidades e transformar seus projetos em realidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#59b1e3] text-white rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Telefone</h3>
                  <p className="text-gray-600">+55 44 99104-0774</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#59b1e3] text-white rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">E-mail</h3>
                  <p className="text-gray-600">ffbrunoff@yahoo.com.br</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#59b1e3] text-white rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Endereço</h3>
                  <p className="text-gray-600">Padre Lebret 801 G05 Bloco 03</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#59b1e3] focus:ring-2 focus:ring-[#59b1e3] focus:ring-opacity-50"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#59b1e3] focus:ring-2 focus:ring-[#59b1e3] focus:ring-opacity-50"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#59b1e3] focus:ring-2 focus:ring-[#59b1e3] focus:ring-opacity-50"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full bg-[#59b1e3] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#4a90c2] transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>
                  {formStatus === 'sending'
                    ? 'Enviando...'
                    : formStatus === 'success'
                    ? 'Mensagem enviada!'
                    : formStatus === 'error'
                    ? 'Erro ao enviar'
                    : 'Enviar mensagem'}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}