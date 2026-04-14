import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, X, Camera, Play } from 'lucide-react';

const Home = () => {
  const stats = [
    { value: '+12', label: 'AÑOS DE\nEXPERIENCIA' },
    { value: '+46', label: 'PROYECTOS\nCOMPLETADOS' },
    { value: '+20', label: 'CLIENTES\nWORLDWIDE' }
  ];

  const skills = [
    {
      category: 'DYNAMIC ANIMATION,\nMOTION DESIGN',
      icon: '✨',
      bg: 'bg-orange-500'
    },
    {
      category: 'FRAMER, FIGMA,\nWORDPRESS, REACTJS',
      icon: '⚛️',
      bg: 'bg-green-400'
    }
  ];

  const socialIcons = [
    { icon: Globe, href: '#' },
    { icon: X, href: '#' },
    { icon: Camera, href: '#' },
    { icon: Play, href: '#' }
  ];

  return (
    <div className="min-h-screen pt-32 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Tarjeta de Perfil Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end w-full md:w-1/3"
          >
            <div className="bg-white rounded-3xl p-8 w-full md:w-80 shadow-2xl">
              {/* Foto de Perfil */}
              <div className="relative mb-6">
                <div className="w-52 h-64 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  {/* <div className="text-5xl">👤</div> */}
                  <img src="" alt="" />
                </div>
            
              </div>

              {/* Nombre */}
              <h2 className="text-2xl font-bold text-center text-black mb-1">
                Cristopher Muñoz
              </h2>

              {/* Línea decorativa */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex-1 h-px bg-orange-500"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1 h-px bg-orange-500"></div>
              </div>
              {/* <h2 className="text-2xl font-bold text-center mb-4">
                <span className="text-blue-500">Carlos</span>
              </h2> */}

              {/* Descripción */}
              <p className="text-center text-gray-700 text-sm mb-8 leading-relaxed">
                A Software Engineer who has developed countless innovative solutions
              </p>

              {/* Redes Sociales */}
              <div className="flex justify-center gap-4">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contenido Derecha */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 w-full md:w-2/3"
          >
            {/* Título */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-2">
                <span className="text-white">SOFTWARE</span>
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-600 mb-6">
                ENGINEER
              </h1>
            </div>

            {/* Descripción */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas
              into beautifully crafted products.
            </p>

            {/* Skills Boxes 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`${skill.bg} rounded-2xl p-6 cursor-pointer group`}
                >
                  <div className="flex items-start justify-between">
                    <div className="text-white font-bold whitespace-pre-line leading-tight">
                      {skill.category}
                    </div>
                    <div className="text-3xl group-hover:translate-x-2 transition-transform">
                      →
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>*
            /}

            {/* CTA Button */}
            <Link to="/contacto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(56, 189, 248, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-primary px-8 py-3 rounded-full font-bold transition-all hover:bg-accent/90"
              >
                Contáctame
              </motion.button>
            </Link>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;