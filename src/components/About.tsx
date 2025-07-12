import { motion } from 'framer-motion'
import { Building2, Shield, Users, Clock } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: <Building2 size={32} />,
      title: "Expertise em Construção",
      description: "Anos de experiência no mercado de construção civil"
    },
    {
      icon: <Shield size={32} />,
      title: "Qualidade Garantida",
      description: "Compromisso com excelência em cada projeto"
    },
    {
      icon: <Users size={32} />,
      title: "Equipe Qualificada",
      description: "Profissionais especializados e dedicados"
    },
    {
      icon: <Clock size={32} />,
      title: "Pontualidade",
      description: "Comprometimento com prazos e cronogramas"
    }
  ]

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a NTC Brasil?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Somos uma empresa comprometida com a excelência em construção civil,
            entregando qualidade e confiança em cada projeto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center h-full flex flex-col justify-between"
            >
              <div>
                <div className="inline-block p-3 bg-[#59b1e3] text-white rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}