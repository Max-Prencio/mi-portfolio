import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiGithub, FiInstagram, FiMail, FiExternalLink,
  FiCode, FiServer, FiLayout, FiDatabase, FiSmartphone,
  FiArrowRight, FiSend, FiMenu, FiX, FiChevronDown,
  FiBriefcase, FiUser, FiMessageCircle, FiHeart, FiCheck,
  FiShield, FiTrendingUp, FiClock, FiDollarSign, FiStar,
  FiMinus, FiShoppingCart, FiCloud, FiPlus, FiUsers,
  FiMessageSquare
} from 'react-icons/fi'
import { SiWordpress, SiWhatsapp } from 'react-icons/si'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#hero', icon: FiUser },
  { label: 'Sobre mí', href: '#about', icon: FiUser },
  { label: 'Precios', href: '#pricing', icon: FiDollarSign },
  { label: 'Proyectos', href: '#projects', icon: FiBriefcase },
  { label: 'Habilidades', href: '#skills', icon: FiCode },
  { label: 'Contacto', href: '#contact', icon: FiMessageCircle },
]

const PROJECTS = [
  {
    title: 'Javaline',
    description: 'SaaS de gestión empresarial con 13 módulos: Facturación, CRM, RRHH, Compras, Agenda, Reuniones, Ventas Online, Tareas y Seguridad con perfiles.',
    image: '/images/javaline.webp',
    tags: ['React', 'Tailwind', 'React Router'],
    gradient: 'from-teal-500/10 to-cyan-500/10',
    iconColor: 'text-teal-400',
    link: '#',
  },
  {
    title: 'Uno Tax Service',
    description: 'Sitio web corporativo con WordPress para firma de impuestos y contabilidad. Panel administrable, formularios de contacto y diseño responsivo.',
    image: '/images/unotax.webp',
    tags: ['WordPress', 'Elementor', 'PHP'],
    gradient: 'from-cyan-500/10 to-emerald-500/10',
    iconColor: 'text-cyan-400',
    link: 'https://unotax.us/',
  },
  {
    title: 'ClinicFam App',
    description: 'Plataforma de gestión clínica familiar con autenticación, historial médico y módulo de citas.',
    image: null,
    tags: ['Flutter', 'Firebase', 'Dart'],
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-400',
    link: '#',
  },
]

const SKILLS = [
  { name: 'React', level: 90, icon: FiCode, barColor: '#2dd4bf' },
  { name: 'JavaScript', level: 85, icon: FiLayout, barColor: '#06b6d4' },
  { name: 'Tailwind CSS', level: 88, icon: FiLayout, barColor: '#34d399' },
  { name: 'Node.js', level: 75, icon: FiServer, barColor: '#14b8a6' },
  { name: 'Flutter', level: 70, icon: FiSmartphone, barColor: '#2dd4bf' },
  { name: 'Firebase', level: 72, icon: FiDatabase, barColor: '#06b6d4' },
]

const SOCIAL_LINKS = [
  { icon: FiInstagram, href: 'https://instagram.com/maxwel.do', label: 'Instagram' },
  { icon: FiGithub, href: 'https://github.com/Max-Prencio', label: 'GitHub' },
  { icon: SiWhatsapp, href: 'https://wa.me/18294567685', label: 'WhatsApp' },
  { icon: FiMail, href: 'mailto:maxwelgdsng@gmail.com', label: 'Email' },
]

const FLOATING_ELEMENTS = [
  { symbol: '</>', style: { top: '15%', left: '8%', fontSize: '38px', '--duration': '22s', '--delay': '0s' } },
  { symbol: '{}', style: { top: '22%', right: '10%', fontSize: '34px', '--duration': '18s', '--delay': '2s' } },
  { symbol: '/* */', style: { top: '55%', left: '4%', fontSize: '26px', '--duration': '25s', '--delay': '1s' } },
  { symbol: '&&', style: { bottom: '25%', right: '6%', fontSize: '40px', '--duration': '20s', '--delay': '3s' } },
  { symbol: '=>', style: { top: '42%', left: '2%', fontSize: '36px', '--duration': '23s', '--delay': '0.5s' } },
  { symbol: '⌘', style: { top: '8%', right: '3%', fontSize: '44px', '--duration': '19s', '--delay': '1.5s' } },
  { symbol: '||', style: { bottom: '38%', left: '8%', fontSize: '30px', '--duration': '21s', '--delay': '2.5s' } },
  { symbol: '===', style: { bottom: '12%', right: '12%', fontSize: '28px', '--duration': '24s', '--delay': '0.8s' } },
  { symbol: '~', style: { top: '68%', right: '1%', fontSize: '44px', '--duration': '17s', '--delay': '3.5s' } },
  { symbol: '$', style: { bottom: '48%', left: '14%', fontSize: '36px', '--duration': '22s', '--delay': '1.2s' } },
  { symbol: '< />', style: { top: '34%', left: '0%', fontSize: '30px', '--duration': '20s', '--delay': '4s' } },
  { symbol: '#', style: { top: '4%', left: '18%', fontSize: '38px', '--duration': '26s', '--delay': '0.3s' } },
]

function CursorAurora() {
  const [pos, setPos] = useState({ x: -200, y: -200 })

  useEffect(() => {
    let rafId
    const onMove = (e) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }))
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <div className="cursor-aurora" style={{ left: pos.x, top: pos.y }} />
}

function FloatingElements() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {FLOATING_ELEMENTS.map((el, i) => (
        <div
          key={i}
          className="floating-element"
          style={el.style}
        >
          {el.symbol}
        </div>
      ))}
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50)
      const sections = NAV_ITEMS.map(i => i.href.slice(1))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id); break
        }
      }
    }, { passive: true })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'crystal-glass border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero">
          <span className="text-xl font-bold tracking-tight aqua-gradient">
            maxwel.do
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className={`relative flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                activeSection === href.slice(1)
                  ? 'text-white bg-white/[0.06]'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden crystal-glass border-b border-white/[0.06] overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900" />

      <div className="gradient-orb w-[500px] h-[500px] bg-teal-500/10 top-[-10%] left-[-5%] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="gradient-orb w-[400px] h-[400px] bg-cyan-500/10 bottom-[20%] right-[-10%]" style={{ animation: 'float 12s ease-in-out infinite' }} />
      <div className="gradient-orb w-[300px] h-[300px] bg-emerald-500/10 top-[40%] left-[40%]" style={{ animation: 'pulse-glow 5s ease-in-out infinite' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase text-teal-300/90 aqua-border rounded-full crystal-glass">
            <FiCode size={12} />
            Desarrollo Web Profesional
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-6"
        >
          <span className="aqua-gradient">maxwel.do</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Convierto ideas en <span className="text-white font-semibold">experiencias digitales</span> para empresas y emprendedores que buscan destacar en la web.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-xl aqua-border overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/[0.03]" />
            <span className="relative z-10 flex items-center gap-2">
              Ver Proyectos <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 crystal-glass text-gray-300 hover:text-white border border-white/[0.08] hover:border-teal-400/30 rounded-xl transition-all duration-300"
          >
            Contactarme
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-teal-400 transition-colors"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="flex flex-col items-center gap-1">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <FiChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  )
}

const USD_TO_DOP = 60

const PRICING_SERVICES = [
  {
    icon: SiWordpress,
    title: 'Sitio Web WordPress',
    price: 383,
    currency: 'USD',
    dopPrice: 'Desde RD$23,000',
    desc: 'Sitio profesional con CMS WordPress, tema personalizado, hosting y dominio por 1 año, SEO básico, formulario de contacto, integración WhatsApp.',
    includes: ['CMS WordPress', 'Hosting + Dominio 1 año', 'SEO Básico', 'Responsive Design', 'Formulario de Contacto', 'Integración WhatsApp'],
    tag: 'MÁS ASEQUIBLE',
    tagColor: 'text-teal-400',
    tagBg: 'bg-teal-500/10',
  },
  {
    icon: FiCode,
    title: 'Sitio Web Premium',
    price: 1499,
    currency: 'USD',
    dopPrice: 'Desde ≈ RD$89,940',
    desc: 'Desarrollo desde cero con React/Next.js, diseño UI/UX personalizado, rendimiento optimizado, SEO avanzado, panel admin y soporte prioritario.',
    includes: ['Desarrollo Custom (React/Next.js)', 'Diseño UI/UX Exclusivo', 'SEO Avanzado', 'Rendimiento Optimizado', 'Panel Administrativo', 'Soporte Prioritario 30 días'],
    tag: 'RECOMENDADO',
    tagColor: 'text-cyan-400',
    tagBg: 'bg-cyan-500/10',
    featured: true,
  },
  {
    icon: FiShoppingCart,
    title: 'Tienda Online (E-commerce)',
    price: 2499,
    currency: 'USD',
    dopPrice: 'Desde ≈ RD$149,940',
    desc: 'Tienda online completa con catálogo de productos, carrito de compras, pasarela de pago, panel de administración de inventario y pedidos.',
    includes: ['Catálogo de Productos', 'Carrito + Checkout', 'Pasarela de Pago', 'Admin de Inventario', 'Gestión de Pedidos', 'Notificaciones por Email'],
    tag: 'E-COMMERCE',
    tagColor: 'text-purple-400',
    tagBg: 'bg-purple-500/10',
  },
  {
    icon: FiCloud,
    title: 'Sistema SaaS Personalizado',
    price: 5000,
    currency: 'USD',
    dopPrice: 'Desde ≈ RD$300,000+',
    desc: 'Sistema empresarial a medida (como Javaline). Facturación electrónica, inventario, contabilidad, CRM, reportes. Precio según alcance del proyecto.',
    includes: ['Arquitectura SaaS Completa', 'Módulos a Medida', 'API REST', 'Panel de Admin', 'Base de Datos', 'Despliegue en Producción'],
    tag: 'EMPRESARIAL',
    tagColor: 'text-amber-400',
    tagBg: 'bg-amber-500/10',
  },
]

function Pricing() {
  const [extraUsers, setExtraUsers] = useState(0)
  const totalUsers = 2 + extraUsers
  const monthlyUsd = 25.75 + (extraUsers * 3.89)
  const monthlyDop = monthlyUsd * USD_TO_DOP

  return (
    <section id="pricing" className="relative py-28 px-6">
      <div className="gradient-orb w-[600px] h-[600px] bg-cyan-500/5 right-[-20%] top-[20%]" style={{ animation: 'float 15s ease-in-out infinite' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-teal-400/80 text-xs font-medium tracking-[0.2em] uppercase">
            <FiDollarSign size={14} /> Precios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Inversión <span className="aqua-gradient">Transparente</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
            Precios de referencia. Cada proyecto se cotiza según el alcance y necesidades específicas del cliente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {PRICING_SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08 }}
                className={`relative aqua-border rounded-2xl overflow-hidden ${s.featured ? 'ring-2 ring-cyan-400/30' : ''}`}
              >
                <div className="crystal-glass p-6 h-full flex flex-col">
                  {s.featured && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                      {s.tag}
                    </div>
                  )}

                  <div className="w-10 h-10 rounded-xl crystal-glass flex items-center justify-center border border-white/[0.06] mb-4">
                    <Icon size={20} className={s.tagColor} />
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">{s.title}</h3>

                  {!s.featured && s.tag && (
                    <span className={`inline-block ${s.tagBg} ${s.tagColor} text-[10px] font-semibold px-2 py-0.5 rounded-full mb-3 w-fit tracking-wider`}>{s.tag}</span>
                  )}

                  <p className="text-xs text-gray-400 leading-relaxed mb-4 flex-1">{s.desc}</p>

                  <div className="mb-4">
                    <span className="text-xl sm:text-2xl font-black text-white">Desde ${s.price.toLocaleString()}</span>
                    <span className="text-xs font-semibold text-gray-500 ml-1">{s.currency}</span>
                    <div className="text-[11px] text-gray-500 mt-0.5">{s.dopPrice}</div>
                  </div>

                  <div className="border-t border-white/[0.06] pt-4">
                    <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-3">Incluye:</p>
                    {s.includes.map((inc) => (
                      <div key={inc} className="flex items-start gap-2 mb-1.5">
                        <FiCheck size={11} className="text-teal-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-400">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="relative aqua-border rounded-2xl overflow-hidden"
        >
          <div className="crystal-glass p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl crystal-glass flex items-center justify-center border border-white/[0.06]">
                <FiCloud size={20} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Suscripción Javaline SaaS</h3>
                <p className="text-xs text-gray-500">Sistema todo-en-uno para tu negocio</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  Si tu negocio no necesita un sistema personalizado desde cero, puedes contratar Javaline como servicio SaaS con suscripción mensual.
                  Incluye facturación electrónica, caja, contabilidad, CRM, informes y soporte técnico.
                </p>
                <div className="crystal-glass border border-white/[0.06] rounded-xl p-4">
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-3">Lo que incluye:</p>
                  {['Facturación Electrónica (e-CF)', 'Módulo de Caja', 'Contabilidad + Balances', 'CRM + Cartera Clientes', 'Reportes e Informes', 'Soporte Técnico', 'Actualizaciones Automáticas'].map((f) => (
                    <div key={f} className="flex items-start gap-2 mb-1.5">
                      <FiCheck size={11} className="text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-400">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aqua-border rounded-xl overflow-hidden">
                <div className="crystal-glass p-6">
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-5 text-center">Calculadora de Suscripción</p>

                  <div className="text-center mb-5">
                    <div className="text-xs text-gray-500 mb-1">Precio Base</div>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      $25.75 <span className="text-sm font-semibold text-gray-500">USD/mes</span>
                    </div>
                    <div className="text-xs text-gray-400">para 2 usuarios</div>
                  </div>

                  <div className="flex items-center justify-center gap-3 mb-5">
                    <span className="text-xs text-gray-400">Usuarios adicionales:</span>
                    <div className="flex items-center gap-2">
                      <motion.button whileTap={{ scale: 0.9 }} onClick={() => setExtraUsers(Math.max(0, extraUsers - 1))}
                        className="w-8 h-8 rounded-lg crystal-glass border border-white/[0.08] text-white flex items-center justify-center cursor-pointer hover:border-teal-400/30 transition-colors">
                        <FiMinus size={12} />
                      </motion.button>
                      <span className="text-lg font-bold text-cyan-400 min-w-[20px] text-center">{extraUsers}</span>
                      <motion.button whileTap={{ scale: 0.9 }} onClick={() => setExtraUsers(extraUsers + 1)}
                        className="w-8 h-8 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white flex items-center justify-center cursor-pointer">
                        <FiPlus size={12} />
                      </motion.button>
                    </div>
                  </div>

                  <div className="aqua-border rounded-xl overflow-hidden">
                    <div className="crystal-glass p-4">
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs text-gray-500">Plan Base (2 usuarios)</span>
                        <span className="text-xs font-semibold text-white">$25.75 USD</span>
                      </div>
                      {extraUsers > 0 && (
                        <div className="flex justify-between mb-1.5">
                          <span className="text-xs text-gray-500">+{extraUsers} usuario{extraUsers > 1 ? 's' : ''} extra</span>
                          <span className="text-xs font-semibold text-white">+${(extraUsers * 3.89).toFixed(2)} USD</span>
                        </div>
                      )}
                      <div className="border-t border-white/[0.06] my-2 pt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-white">Total mensual</span>
                          <div className="text-right">
                            <span className="text-xl font-black aqua-gradient">${monthlyUsd.toFixed(2)}</span>
                            <span className="text-xs text-gray-500 ml-1">USD</span>
                            <div className="text-xs text-gray-400">≈ RD${monthlyDop.toLocaleString('es-DO', { minimumFractionDigits: 0 })}</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-[10px] text-gray-500">{totalUsers} usuario{totalUsers > 1 ? 's' : ''} en total · $3.89 USD/usuario extra</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 text-[10px] font-semibold rounded-lg">
                      Sin contrato de permanencia · Cancela cuando quieras
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <h4 className="text-sm font-semibold text-white mb-3">Notas importantes</h4>
              <ul className="space-y-1.5">
                {[
                  'Los precios mostrados son referenciales. Cada proyecto se cotiza de forma personalizada.',
                  'Sitios WordPress incluyen hosting y dominio por 1 año. Renovación anual por cuenta del cliente.',
                  'Sitios Premium y E-commerce: el precio incluye diseño y desarrollo. Hosting y dominio no incluidos.',
                  'Sistemas SaaS: el precio base cubre la arquitectura con módulos esenciales. Módulos adicionales se cotizan por separado.',
                  'Suscripción SaaS aplica solo si el cliente usa Javaline como servicio, sin personalización del código fuente.',
                  'Mantenimiento y soporte continuo después del período de garantía se facturan por separado.',
                ].map((n) => (
                  <li key={n} className="flex items-start gap-2 text-xs text-gray-500">
                    <FiMinus size={10} className="text-gray-600 shrink-0 mt-1" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AboutMe() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="gradient-orb w-[500px] h-[500px] bg-teal-500/5 left-[-10%] top-[-10%]" style={{ animation: 'pulse-glow 8s ease-in-out infinite' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-teal-400/80 text-xs font-medium tracking-[0.2em] uppercase">
            <FiUser size={14} /> Sobre mí
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Conoce al <span className="aqua-gradient">desarrollador</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative aqua-border rounded-2xl overflow-hidden w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <div className="crystal-glass w-full h-full flex items-center justify-center">
                <img
                  src="/foto-maxwel.jpg"
                  alt="Maxwel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.15 }}
            className="md:col-span-3"
          >
            <div className="relative aqua-border rounded-2xl overflow-hidden">
              <div className="crystal-glass p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hola, soy <span className="aqua-gradient">Maxwel</span>
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  Soy desarrollador web especializado en crear soluciones digitales para empresas y emprendedores.
                  Me apasiona convertir ideas en experiencias digitales funcionales, rápidas y con diseño cuidado.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Trabajo con tecnologías modernas como <span className="text-teal-400 font-medium">React</span>,{' '}
                  <span className="text-teal-400 font-medium">Node.js</span> y{' '}
                  <span className="text-teal-400 font-medium">WordPress</span>, adaptándome a las necesidades
                  de cada proyecto. Creo firmemente que un buen sitio web es la mejor carta de presentación
                  de un negocio en la era digital.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="crystal-glass border border-white/[0.06] rounded-xl p-4 text-center">
                    <div className="text-2xl font-black aqua-gradient">+5</div>
                    <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">Años experience</div>
                  </div>
                  <div className="crystal-glass border border-white/[0.06] rounded-xl p-4 text-center">
                    <div className="text-2xl font-black aqua-gradient">+20</div>
                    <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">Proyectos entregados</div>
                  </div>
                  <div className="crystal-glass border border-white/[0.06] rounded-xl p-4 text-center">
                    <div className="text-2xl font-black aqua-gradient">100%</div>
                    <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">Clientes satisfechos</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-teal-400/80 text-xs font-medium tracking-[0.2em] uppercase">
            <FiBriefcase size={14} /> Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Proyectos <span className="aqua-gradient">Recientes</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
            Proyectos seleccionados que reflejan mi enfoque en diseño, rendimiento y experiencia de usuario.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative aqua-border rounded-2xl overflow-hidden"
            >
              <div className="crystal-glass-hover relative">
                <div className={`h-44 ${project.image ? '' : 'bg-gradient-to-br ' + project.gradient} flex items-center justify-center overflow-hidden`}>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="relative w-16 h-16 crystal-glass rounded-2xl flex items-center justify-center border border-white/[0.06]">
                      <FiCode size={28} className={`${project.iconColor} group-hover:text-white/90 transition-colors`} />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base font-semibold text-white">{project.title}</h3>
                    <FiExternalLink size={14} className="text-gray-500 group-hover:text-teal-400 transition-colors shrink-0 mt-1" />
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-400 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="gradient-orb w-[400px] h-[400px] bg-teal-500/5 left-[-10%] bottom-0" style={{ animation: 'float 15s ease-in-out infinite' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-teal-400/80 text-xs font-medium tracking-[0.2em] uppercase">
            <FiServer size={14} /> Tecnologías
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Stack <span className="aqua-gradient">Técnico</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
            Tecnologías con las que construyo productos digitales modernos y escalables.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08 }}
                className="relative aqua-border rounded-xl overflow-hidden group"
              >
                <div className="crystal-glass p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg crystal-glass flex items-center justify-center border border-white/[0.06]">
                        <Icon size={16} className="text-teal-400" />
                      </div>
                      <span className="text-white font-medium text-sm">{skill.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.08, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.barColor}, rgba(45,212,191,0.4))`,
                        boxShadow: `0 0 8px ${skill.barColor}40`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="gradient-orb w-[500px] h-[500px] bg-cyan-500/5 right-[-10%] top-[-10%]" style={{ animation: 'pulse-glow 7s ease-in-out infinite' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-teal-400/80 text-xs font-medium tracking-[0.2em] uppercase">
            <FiMessageCircle size={14} /> Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Trabajemos <span className="aqua-gradient">Juntos</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
            ¿Tienes un proyecto en mente? Estoy a un mensaje de distancia para hacerlo realidad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="relative aqua-border rounded-2xl overflow-hidden max-w-lg mx-auto"
        >
          <div className="crystal-glass p-8">
            <form className="space-y-4" action="https://formsubmit.co/maxwelgdsng@gmail.com" method="POST">
              <input type="hidden" name="_next" value="https://maxwel.do/thanks" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_subject" value="Nuevo contacto desde maxwel.do" />
              <div>
                <input
                  type="text" name="name" required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal-400/40 focus:bg-white/[0.05] transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email" name="email" required
                  placeholder="Tu email"
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal-400/40 focus:bg-white/[0.05] transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="text" name="telefono" placeholder="Tu teléfono (opcional)"
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal-400/40 focus:bg-white/[0.05] transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  name="mensaje" required
                  rows={4}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal-400/40 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="group relative w-full py-3.5 text-white font-semibold rounded-xl aqua-border overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/[0.03]" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FiSend size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Enviar Mensaje
                </span>
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <p className="text-xs text-gray-500 text-center mb-3 font-medium uppercase tracking-wider">Escríbeme directo</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <a
                  href="https://wa.me/18294567685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-xl text-sm font-medium transition-all"
                >
                  <SiWhatsapp size={16} />
                  +1 (829) 456-7685
                </a>
                <a
                  href="https://wa.me/18499177487"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-xl text-sm font-medium transition-all"
                >
                  <SiWhatsapp size={16} />
                  +1 (849) 917-7487
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center justify-center gap-6">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-xl crystal-glass border border-white/[0.06] text-gray-400 hover:text-teal-400 hover:border-teal-400/30 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <p className="text-center text-xs text-gray-600 mt-4 tracking-wider uppercase">
                @maxwel.do
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} <span className="text-gray-400">maxwel.do</span>
        </p>
        <div className="flex items-center gap-3 text-[11px] text-gray-600">
          <span>Construido con</span>
          <FiHeart size={11} className="text-teal-400/60" />
          <span>React + Tailwind</span>
        </div>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      <a
        href="https://wa.me/18294567685"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="WhatsApp"
      >
        <SiWhatsapp size={28} />
      </a>
    </div>
  )
}

function App() {
  return (
    <div className="bg-dark-900 min-h-screen relative">
      <CursorAurora />
      <FloatingElements />
      <FloatingWhatsApp />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutMe />
        <Pricing />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
