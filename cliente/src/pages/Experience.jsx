import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Asistente de Soporte Técnico",
      company: "CORPORACION EDUCA S.A.C. - Lima",
      period: "Abril 2024 - Actualidad",
      description: "Reparación y mantenimiento de equipos tecnológicos. Capacitación técnica al personal en el uso de herramientas digitales. Desarrollo de módulos internos con C# y .NET. Logros destacados: Implementé un sistema interno de control de mantenimiento, optimizando los tiempos de atención.",
      technologies: ["C#", ".NET", "Soporte Técnico", "Mantenimiento"]
    },
    {
      title: "Asistente de Soporte Técnico",
      company: "Datatronica Global Service S.A.C. - Lima",
      period: "Septiembre 2023 - Febrero 2024",
      description: "Diagnóstico y reparación de equipos tecnológicos. Elaboración de presupuestos de reparación. Atención al cliente y soporte remoto. Logros destacados: Mejoré la eficiencia del servicio técnico mediante la estandarización de procedimientos internos.",
      technologies: ["Diagnóstico Técnico", "Soporte Remoto", "Atención al Cliente"]
    },
    {
      title: "Practicante en la Subgerencia de Informática y Estadística",
      company: "Municipalidad Provincial de Nasca",
      period: "Mayo 2023 - Agosto 2023",
      description: "Desarrollo full stack de aplicaciones internas. Apoyo en soporte técnico y mantenimiento de equipos. Capacitación del personal. Logros destacados: Desarrollé un aplicativo web para la gestión documental, facilitando el acceso a archivos y reportes internos.",
      technologies: ["Full Stack Development", "HTML", "CSS", "JavaScript", "Soporte Técnico"]
    }
  ];

  const education = [
    {
      title: "Ingeniería de Sistemas",
      school: "Universidad San Luis Gonzaga",
      period: "Marzo 2018 - Agosto 2023",
      description: "Estudios universitarios en Ingeniería de Sistemas, adquiriendo conocimientos en desarrollo de software, bases de datos, redes y gestión de proyectos tecnológicos."
    }
  ];

  const profiles = [
    {
      name: "Platzi",
      url: "https://platzi.com/@tu-usuario",
      description: "Visita mi perfil de Platzi para ver mis cursos y certificados."
    },
    {
      name: "Coursera",
      url: "https://www.coursera.org/user/tu-usuario",
      description: "Mi perfil en Coursera con certificaciones y proyectos.",
    },
    {
      name: "Microsoft Learn",
      url: "https://learn.microsoft.com/es-es/users/tu-usuario",
      description: "Perfil de Microsoft Learn con mis certificaciones técnicas.",
    },
    {
      name: "freeCodeCamp",
      url: "https://www.freecodecamp.org/tu-usuario",
      description: "Mi perfil de freeCodeCamp con ejercicios y logros.",
    }
  ];

  const certificates = [
    {
      title: "Diploma Básico JavaScript",
      issuer: "Curso digital",
      date: "2024",
      description: "Diploma de fundamentos de JavaScript.",
      image: "/certificates/diploma-basico-javascript-1.jpg",
      url: "/certificates/diploma-basico-javascript-1.jpg"
    },
    {
      title: "Diploma Frontend Developer",
      issuer: "Curso digital",
      date: "2024",
      description: "Diploma en desarrollo frontend.",
      image: "/certificates/diploma-frontend-developer-1.jpg",
      url: "/certificates/diploma-frontend-developer-1.jpg"
    },
    {
      title: "Diploma Fundamentos de Bases de Datos",
      issuer: "Curso digital",
      date: "2024",
      description: "Diploma en fundamentos de bases de datos.",
      image: "/certificates/diploma-fundamentos-db-1.jpg",
      url: "/certificates/diploma-fundamentos-db-1.jpg"
    },
    {
      title: "Diploma IA, Data y ML",
      issuer: "Curso digital",
      date: "2023",
      description: "Diploma en inteligencia artificial, ciencia de datos y machine learning.",
      image: "/certificates/diploma-ia-data-ml-2023-1.jpg",
      url: "/certificates/diploma-ia-data-ml-2023-1.jpg"
    },
    {
      title: "Diploma PHP",
      issuer: "Curso digital",
      date: "2024",
      description: "Diploma en programación con PHP.",
      image: "/certificates/diploma-php-1.jpg",
      url: "/certificates/diploma-php-1.jpg"
    },
    {
      title: "Diploma Power BI",
      issuer: "Curso digital",
      date: "2024",
      description: "Diploma en análisis de datos con Power BI.",
      image: "/certificates/diploma-powerbi-1.jpg",
      url: "/certificates/diploma-powerbi-1.jpg"
    },
    {
      title: "Diploma Prompt Engineering ChatGPT",
      issuer: "Curso digital",
      date: "2024",
      description: "Diploma en prompt engineering para ChatGPT.",
      image: "/certificates/diploma-prompt-engineering-chatgpt-1.jpg",
      url: "/certificates/diploma-prompt-engineering-chatgpt-1.jpg"
    },
    {
      title: "Microsoft Security Copilot",
      issuer: "Microsoft",
      date: "2025",
      description: "Diploma sobre seguridad con Microsoft Security Copilot.",
      image: "/certificates/Enhance security operations by using Microsoft Security Copilot-1.jpg",
      url: "/certificates/Enhance security operations by using Microsoft Security Copilot-1.jpg"
    },
    {
      title: "Microsoft Security Use Cases",
      issuer: "Microsoft",
      date: "2025",
      description: "Diploma en casos de uso de Microsoft Security.",
      image: "/certificates/Exploración de casos de uso de Microsoft Security 11-2025-1.jpg",
      url: "/certificates/Exploración de casos de uso de Microsoft Security 11-2025-1.jpg"
    },
    {
      title: "Legacy Responsive Web Design",
      issuer: "Curso digital",
      date: "2024",
      description: "Diploma en diseño web responsivo.",
      image: "/certificates/Legacy Responsive Web Design V8 08-2024.png",
      url: "/certificates/Legacy Responsive Web Design V8 08-2024.png"
    },
    {
      title: "Microsoft 365 Administrator",
      issuer: "Microsoft",
      date: "2024",
      description: "Diploma de administración de Microsoft 365.",
      image: "/certificates/Microsoft 365 Administrator-1.jpg",
      url: "/certificates/Microsoft 365 Administrator-1.jpg"
    },
    {
      title: "SUNEDU en línea",
      issuer: "SUNEDU",
      date: "2024",
      description: "Certificado de SUNEDU en línea.",
      image: "/certificates/SUNEDU en línea-1.jpg",
      url: "/certificates/SUNEDU en línea-1.jpg"
    }
  ];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="w-full mx-auto pt-4">
        <div>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Mi <span className="text-accent">Experiencia</span>
            </h1>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <span className="text-accent font-mono text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 mb-2">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 pt-24">
            Mis <span className="text-accent">Certificados</span>
          </h1>

          <div className="space-y-6">
            <div className="hero-carousel hero-carousel--no-padding-top relative overflow-hidden rounded-3xl border border-gray-700 bg-gray-900/80">
              <div className="hero-carousel__row overflow-hidden w-full">
                <div className="hero-carousel__track flex w-full">
                  {[...certificates, ...certificates].map((cert, index) => (
                    <motion.a
                      key={index}
                      href={encodeURI(cert.url)}
                      target="_blank"
                      rel="noreferrer noopener"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="hero-carousel__card hero__carousel-card min-w-[280px] max-w-[320px] flex-shrink-0 rounded-3xl border border-gray-700 bg-gray-950/90 p-4 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-accent"
                    >
                      <div className="hero-carousel__card-image-wrapper mb-4 overflow-hidden rounded-3xl bg-gray-800">
                        <img
                          src={encodeURI(cert.image)}
                          alt={`Certificado ${cert.title}`}
                          className="h-56 w-full object-cover"
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                            <p className="text-gray-400 text-sm">{cert.issuer}</p>
                          </div>
                          <span className="text-accent font-mono text-xs">{cert.date}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{cert.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 pt-24">
            Mi <span className="text-accent">Educación</span>
          </h1>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
                  <span className="text-accent font-mono text-sm">{edu.period}</span>
                </div>
                <p className="text-gray-300 mb-2">{edu.school}</p>
                <p className="text-gray-400 mb-4">{edu.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 pt-4 pb-12">
            {profiles.map((profile, index) => (
              <motion.a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group block rounded-3xl border border-gray-700 bg-gray-800/70 p-6 transition hover:border-accent hover:bg-gray-900"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{profile.name}</h3>
                    <p className="text-gray-400">{profile.description}</p>
                  </div>
                  <span className="text-accent font-mono text-sm">Abrir</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Experience;