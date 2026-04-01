import { motion } from 'framer-motion';
import { Terminal, User, Code, Mail } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'Inicio', icon: <Terminal size={20} />, href: '#' },
    { name: 'Proyectos', icon: <Code size={20} />, href: '#proyectos' },
    { name: 'Sobre mí', icon: <User size={20} />, href: '#sobre-mi' },
    { name: 'Contacto', icon: <Mail size={20} />, href: '#contacto' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 flex justify-between items-center shadow-2xl ring-1 ring-white/20 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
        <div className="text-accent font-bold text-xl tracking-tighter">
          CRISTOPHER<span className="text-white">.DEV</span>
        </div>
        
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href={item.href} className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                {item.icon}
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;