import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiGithub, FiInstagram, FiMail, FiExternalLink,
  FiCode, FiServer, FiLayout, FiDatabase, FiSmartphone,
  FiArrowRight, FiSend, FiMenu, FiX, FiChevronDown,
  FiBriefcase, FiUser, FiMessageCircle, FiHeart, FiCheck,
  FiShield, FiTrendingUp, FiClock, FiDollarSign, FiStar,
  FiMinus, FiShoppingCart, FiCloud, FiPlus, FiUsers,
  FiMessageSquare, FiGlobe
} from 'react-icons/fi'
import { SiWordpress, SiWhatsapp } from 'react-icons/si'
import { I18nProvider, useI18n } from './contexts/I18nContext'

const BASE = import.meta.env.BASE_URL || '/'

const SKILL_BARS = [
  { level: 90, barColor: '#2dd4bf' },
  { level: 85, barColor: '#06b6d4' },
  { level: 88, barColor: '#34d399' },
  { level: 75, barColor: '#14b8a6' },
  { level: 70, barColor: '#2dd4bf' },
  { level: 72, barColor: '#06b6d4' },
]

const SKILL_ICONS = [FiCode, FiLayout, FiLayout, FiServer, FiSmartphone, FiDatabase]

const SOCIAL_LINKS = [
  { icon: FiInstagram, href: 'https://instagram.com/maxwel.do', label: 'Instagram' },
  { icon: FiGithub, href: 'https://github.com/Max-Prencio', label: 'GitHub' },
  { icon: SiWhatsapp, href: 'https://wa.me/18294567685', label: 'WhatsApp' },
  { icon: FiMail, href: 'mailto:maxwelgdsng@gmail.com', label: 'Email' },
]

const TECHS_ICONS = [FiCode, FiServer, SiWordpress, FiLayout, FiSmartphone, FiCloud]
const TECHS_COLORS = ['#2dd4bf', '#34d399', '#2dd4bf', '#06b6d4', '#2dd4bf', '#f59e0b']

const PROJECTS_DATA = [
  {
    image: `${BASE}images/ross-agency.webp`,
    gradient: 'from-purple-500/10 to-pink-500/10',
    iconColor: 'text-purple-400',
    link: 'https://max-prencio.github.io/ross-agency/',
  },
  {
    image: `${BASE}images/javaline.webp`,
    gradient: 'from-teal-500/10 to-cyan-500/10',
    iconColor: 'text-teal-400',
    link: '#',
  },
  {
    image: `${BASE}images/unotax.webp`,
    gradient: 'from-cyan-500/10 to-emerald-500/10',
    iconColor: 'text-cyan-400',
    link: 'https://unotax.us/',
  },
  {
    image: null,
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-400',
    link: '#',
  },
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

const USD_TO_DOP = 60

const PRICING_SERVICES_ICONS = [SiWordpress, FiCode, FiShoppingCart, FiCloud]
const PRICING_TAG_COLORS = [
  { color: 'text-teal-400', bg: 'bg-teal-500/10' },
  { color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { color: 'text-amber-400', bg: 'bg-amber-500/10' },
]

function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="skip-link sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-dark-800 focus:text-teal-400 focus:border focus:border-teal-400/40 focus:rounded-xl focus:text-sm focus:font-semibold focus:outline-none focus:ring-2 focus:ring-teal-400/30"
    >
      Ir al contenido principal
    </a>
  )
}

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

  return <div className="cursor-aurora" style={{ left: pos.x, top: pos.y }} aria-hidden="true" />
}

function FloatingElements() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {FLOATING_ELEMENTS.map((el, i) => (
        <div key={i} className="floating-element" style={el.style}>{el.symbol}</div>
      ))}
    </div>
  )
}

function Navbar() {
  const { t, lang, toggleLang } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = t.nav.map(i => i.section)
      for (const id of sections.toReversed()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [t.nav])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      role="navigation"
      aria-label={lang === 'es' ? 'Navegación principal' : 'Main navigation'}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" aria-label="maxwel.do - Inicio" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50 focus-visible:rounded-lg">
          <span className="text-xl font-bold tracking-tight aqua-gradient">maxwel.do</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {t.nav.map(({ label, section }) => (
            <a
              key={section}
              href={`#${section}`}
              aria-current={activeSection === section ? 'true' : undefined}
              className={`relative flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50 ${
                activeSection === section
                  ? 'text-white bg-white/[0.06]'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              {label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            className="ml-2 flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.03] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50"
          >
            <FiGlobe size={14} aria-hidden="true" />
            <span className="font-semibold">{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            className="flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.03] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50"
          >
            <FiGlobe size={14} aria-hidden="true" />
            <span className="font-semibold">{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 hover:text-white p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50 rounded-lg"
            aria-label={menuOpen ? (lang === 'es' ? 'Cerrar menú' : 'Close menu') : (lang === 'es' ? 'Abrir menú' : 'Open menu')}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden crystal-glass border-b border-white/[0.06] overflow-hidden"
            role="menu"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {t.nav.map(({ label, section }) => (
                <a
                  key={section}
                  href={`#${section}`}
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50"
                >
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
  const { t } = useI18n()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label={t.hero.title}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900" aria-hidden="true" />
      <div className="gradient-orb w-[500px] h-[500px] bg-teal-500/10 top-[-10%] left-[-5%] animate-pulse" style={{ animationDuration: '8s' }} aria-hidden="true" />
      <div className="gradient-orb w-[400px] h-[400px] bg-cyan-500/10 bottom-[20%] right-[-10%]" style={{ animation: 'float 12s ease-in-out infinite' }} aria-hidden="true" />
      <div className="gradient-orb w-[300px] h-[300px] bg-emerald-500/10 top-[40%] left-[40%]" style={{ animation: 'pulse-glow 5s ease-in-out infinite' }} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase text-teal-300/90 aqua-border rounded-full crystal-glass">
              <FiCode size={12} aria-hidden="true" />
              {t.hero.badge}
            </span>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-6">
              <span className="aqua-gradient">{t.hero.title}</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 max-w-md leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t.hero.subtitle }} />

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#projects" className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl aqua-border overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50">
                <span className="absolute inset-0 bg-white/[0.03]" aria-hidden="true" />
                <span className="relative z-10 flex items-center gap-2">
                  {t.hero.cta_primary} <FiArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 crystal-glass text-gray-300 hover:text-white border border-white/[0.08] hover:border-teal-400/30 rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50">
                {t.hero.cta_secondary}
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <p className="text-[10px] text-gray-600 tracking-widest uppercase mb-4 text-center md:text-left">{t.hero.tech_title}</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start" role="list" aria-label={t.hero.tech_title}>
                {t.techs.map((tech, i) => (
                  <div key={tech.name} className="group/tech relative" role="listitem">
                    <div
                      className="tech-dock-icon w-11 h-11 rounded-xl crystal-glass border border-white/[0.06] flex items-center justify-center cursor-default transition-all duration-200 hover:scale-[1.35] hover:z-10 hover:border-white/[0.15]"
                      style={{ color: TECHS_COLORS[i] }}
                      aria-hidden="true"
                    >
                      {React.createElement(TECHS_ICONS[i], { size: 20 })}
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 opacity-0 group-hover/tech:opacity-100 transition-all duration-300 pointer-events-none z-20 -translate-y-1 group-hover/tech:translate-y-0" role="tooltip">
                      <div className="crystal-glass border border-white/[0.08] rounded-xl p-3 text-center">
                        <p className="text-xs font-semibold text-white mb-0.5">{tech.name}</p>
                        <p className="text-[10px] text-gray-400 leading-relaxed">{tech.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-[40%_60%_40%_60%/50%_40%_60%_50%] aqua-border overflow-hidden animate-[morph_8s_ease-in-out_infinite]">
                <div className="w-full h-full crystal-glass">
                  <img src={`${BASE}foto-maxwel.jpg`} alt="Maxwel Prencio - Desarrollador Web" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg shadow-cyan-500/20">
                {t.hero.available}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50 rounded-lg"
        aria-label={t.hero.scroll}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="flex flex-col items-center gap-1">
          <span className="text-[10px] tracking-widest uppercase">{t.hero.scroll}</span>
          <FiChevronDown size={18} aria-hidden="true" />
        </motion.div>
      </motion.a>
    </section>
  )
}

function Pricing() {
  const { t, lang } = useI18n()
  const [extraUsers, setExtraUsers] = useState(0)
  const totalUsers = 2 + extraUsers
  const monthlyUsd = 25.75 + (extraUsers * 3.89)
  const monthlyDop = monthlyUsd * USD_TO_DOP

  return (
    <section id="pricing" className="relative py-28 px-6" aria-label={t.pricing.title.replace(/<[^>]*>/g, '')}>
      <div className="gradient-orb w-[600px] h-[600px] bg-cyan-500/5 right-[-20%] top-[20%]" style={{ animation: 'float 15s ease-in-out infinite' }} aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-teal-400/80 text-xs font-medium tracking-[0.2em] uppercase">
            <FiDollarSign size={14} aria-hidden="true" /> {t.pricing.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4" dangerouslySetInnerHTML={{ __html: t.pricing.title }} />
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">{t.pricing.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {t.pricing.services.map((s, i) => {
            const Icon = PRICING_SERVICES_ICONS[i]
            const tagColor = PRICING_TAG_COLORS[i]
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
                  <div className="w-10 h-10 rounded-xl crystal-glass flex items-center justify-center border border-white/[0.06] mb-4" aria-hidden="true">
                    <Icon size={20} className={tagColor.color} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{s.title}</h3>
                  {!s.featured && s.tag && (
                    <span className={`inline-block ${tagColor.bg} ${tagColor.color} text-[10px] font-semibold px-2 py-0.5 rounded-full mb-3 w-fit tracking-wider`}>{s.tag}</span>
                  )}
                  <p className="text-xs text-gray-400 leading-relaxed mb-4 flex-1">{s.desc}</p>
                  <div className="mb-4">
                    <span className="text-xl sm:text-2xl font-black text-white">{t.pricing.from} ${[383, 1499, 2499, 5000][i].toLocaleString()}</span>
                    <span className="text-xs font-semibold text-gray-500 ml-1">USD</span>
                    <div className="text-[11px] text-gray-500 mt-0.5">
                      {['Desde RD$23,000', 'Desde ≈ RD$89,940', 'Desde ≈ RD$149,940', 'Desde ≈ RD$300,000+'][i]}
                    </div>
                  </div>
                  <div className="border-t border-white/[0.06] pt-4">
                    <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-3">{t.pricing.includes}</p>
                    {s.includes.map((inc) => (
                      <div key={inc} className="flex items-start gap-2 mb-1.5">
                        <FiCheck size={11} className="text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
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
              <div className="w-10 h-10 rounded-xl crystal-glass flex items-center justify-center border border-white/[0.06]" aria-hidden="true">
                <FiCloud size={20} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{t.pricing.subscription.title}</h3>
                <p className="text-xs text-gray-500">{t.pricing.subscription.subtitle}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{t.pricing.subscription.desc}</p>
                <div className="crystal-glass border border-white/[0.06] rounded-xl p-4">
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-3">{t.pricing.subscription.includes_title}</p>
                  {t.pricing.subscription.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 mb-1.5">
                      <FiCheck size={11} className="text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-xs text-gray-400">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aqua-border rounded-xl overflow-hidden">
                <div className="crystal-glass p-6">
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-5 text-center">{t.pricing.subscription.calculator_title}</p>
                  <div className="text-center mb-5">
                    <div className="text-xs text-gray-500 mb-1">{t.pricing.subscription.base_price}</div>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      $25.75 <span className="text-sm font-semibold text-gray-500">USD/mes</span>
                    </div>
                    <div className="text-xs text-gray-400">{t.pricing.subscription.users_label}</div>
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-5">
                    <span className="text-xs text-gray-400">{t.pricing.subscription.extra_users}</span>
                    <div className="flex items-center gap-2">
                      <motion.button whileTap={{ scale: 0.9 }} onClick={() => setExtraUsers(Math.max(0, extraUsers - 1))}
                        className="w-8 h-8 rounded-lg crystal-glass border border-white/[0.08] text-white flex items-center justify-center cursor-pointer hover:border-teal-400/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50"
                        aria-label={lang === 'es' ? 'Reducir usuarios' : 'Decrease users'}
                      >
                        <FiMinus size={12} aria-hidden="true" />
                      </motion.button>
                      <span className="text-lg font-bold text-cyan-400 min-w-[20px] text-center" aria-live="polite">{extraUsers}</span>
                      <motion.button whileTap={{ scale: 0.9 }} onClick={() => setExtraUsers(extraUsers + 1)}
                        className="w-8 h-8 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50"
                        aria-label={lang === 'es' ? 'Aumentar usuarios' : 'Increase users'}
                      >
                        <FiPlus size={12} aria-hidden="true" />
                      </motion.button>
                    </div>
                  </div>
                  <div className="aqua-border rounded-xl overflow-hidden">
                    <div className="crystal-glass p-4">
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs text-gray-500">{t.pricing.subscription.base_plan}</span>
                        <span className="text-xs font-semibold text-white">$25.75 USD</span>
                      </div>
                      {extraUsers > 0 && (
                        <div className="flex justify-between mb-1.5">
                          <span className="text-xs text-gray-500">+{extraUsers} {extraUsers > 1 ? t.pricing.subscription.extra_users_label : t.pricing.subscription.extra_user_label}</span>
                          <span className="text-xs font-semibold text-white">+${(extraUsers * 3.89).toFixed(2)} USD</span>
                        </div>
                      )}
                      <div className="border-t border-white/[0.06] my-2 pt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-white">{t.pricing.subscription.total}</span>
                          <div className="text-right">
                            <span className="text-xl font-black aqua-gradient">${monthlyUsd.toFixed(2)}</span>
                            <span className="text-xs text-gray-500 ml-1">USD</span>
                            <div className="text-xs text-gray-400">≈ RD${monthlyDop.toLocaleString('es-DO', { minimumFractionDigits: 0 })}</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-[10px] text-gray-500">{totalUsers} {totalUsers > 1 ? t.pricing.subscription.users_total_plural : t.pricing.subscription.users_total} · $3.89 {t.pricing.subscription.per_user}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 text-[10px] font-semibold rounded-lg">{t.pricing.subscription.no_contract}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <h4 className="text-sm font-semibold text-white mb-3">{t.pricing.notes.title}</h4>
              <ul className="space-y-1.5">
                {t.pricing.notes.items.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-xs text-gray-500">
                    <FiMinus size={10} className="text-gray-600 shrink-0 mt-1" aria-hidden="true" />
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
  const { t, lang } = useI18n()

  return (
    <section id="about" className="relative py-28 px-6" aria-label={t.about.badge}>
      <div className="gradient-orb w-[500px] h-[500px] bg-teal-500/5 left-[-10%] top-[-10%]" style={{ animation: 'pulse-glow 8s ease-in-out infinite' }} aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-teal-400/80 text-xs font-medium tracking-[0.2em] uppercase">
            <FiUser size={14} aria-hidden="true" /> {t.about.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4" dangerouslySetInnerHTML={{ __html: t.about.title }} />
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
                <img src={`${BASE}foto-maxwel.jpg`} alt={lang === 'es' ? 'Maxwel Prencio - Desarrollador Web Freelance' : 'Maxwel Prencio - Freelance Web Developer'} className="w-full h-full object-cover object-top" />
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
                <h3 className="text-2xl font-bold text-white mb-4" dangerouslySetInnerHTML={{ __html: t.about.name }} />
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{t.about.p1}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {t.about.p2_start} <span className="text-teal-400 font-medium">{t.about.p2_techs[0]}</span>,{' '}
                  <span className="text-teal-400 font-medium">{t.about.p2_techs[1]}</span> {t.about.p2_end}{' '}
                  <span className="text-teal-400 font-medium">{t.about.p2_techs[2]}</span>,{' '}
                  {t.about.p2_tail}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {t.about.stats.map((stat) => (
                    <div key={stat.label} className="crystal-glass border border-white/[0.06] rounded-xl p-4 text-center">
                      <div className="text-2xl font-black aqua-gradient">{stat.value}</div>
                      <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const STEPS_ICONS = [FiMessageCircle, FiLayout, FiCode, FiShield, FiTrendingUp, FiHeart]
const STEPS_COLORS = ['text-teal-400', 'text-cyan-400', 'text-emerald-400', 'text-teal-400', 'text-cyan-400', 'text-emerald-400']

function Process() {
  const { t } = useI18n()

  return (
    <section id="process" className="relative py-28 px-6" aria-label={t.process.badge}>
      <div className="gradient-orb w-[500px] h-[500px] bg-teal-500/5 right-[-10%] bottom-0" style={{ animation: 'float 18s ease-in-out infinite' }} aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-teal-400/80 text-xs font-medium tracking-[0.2em] uppercase">
            <FiCode size={14} aria-hidden="true" /> {t.process.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4" dangerouslySetInnerHTML={{ __html: t.process.title }} />
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">{t.process.desc}</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/40 via-cyan-500/40 to-emerald-500/40" aria-hidden="true" />

          {t.process.steps.map((step, i) => {
            const Icon = STEPS_ICONS[i]
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 mb-10 md:mb-0 md:even:flex-row-reverse ${isLeft ? 'md:pr-[calc(50%+20px)]' : 'md:pl-[calc(50%+20px)]'}`}
              >
                <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full crystal-glass border border-white/[0.08] items-center justify-center z-10`} aria-hidden="true">
                  <span className="text-[10px] font-bold text-teal-400">{i + 1}</span>
                </div>
                <div className="relative aqua-border rounded-xl overflow-hidden w-full md:w-auto flex-1">
                  <div className="crystal-glass p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl crystal-glass flex items-center justify-center border border-white/[0.06] shrink-0" aria-hidden="true">
                      <Icon size={18} className={STEPS_COLORS[i]} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-teal-500 md:hidden" aria-hidden="true">0{i + 1}</span>
                        <h3 className="text-sm font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                    </div>
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

function Projects() {
  const { t, lang } = useI18n()

  return (
    <section id="projects" className="relative py-28 px-6" aria-label={t.projects.badge}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-teal-400/80 text-xs font-medium tracking-[0.2em] uppercase">
            <FiBriefcase size={14} aria-hidden="true" /> {t.projects.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4" dangerouslySetInnerHTML={{ __html: t.projects.title }} />
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm leading-relaxed">{t.projects.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.projects.list.map((project, i) => {
            const pd = PROJECTS_DATA[i]
            return (
              <motion.a
                key={project.title}
                href={pd.link}
                target={pd.link !== '#' ? '_blank' : undefined}
                rel={pd.link !== '#' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative aqua-border rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50"
                aria-label={`${project.title} - ${project.desc}`}
              >
                <div className="crystal-glass-hover relative">
                  <div className={`h-44 ${pd.image ? '' : 'bg-gradient-to-br ' + pd.gradient} flex items-center justify-center overflow-hidden`}>
                    {pd.image ? (
                      <img src={pd.image} alt={lang === 'es' ? `Captura de ${project.title}` : `Screenshot of ${project.title}`} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="relative w-16 h-16 crystal-glass rounded-2xl flex items-center justify-center border border-white/[0.06]" aria-hidden="true">
                        <FiCode size={28} className={`${pd.iconColor} group-hover:text-white/90 transition-colors`} />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base font-semibold text-white">{project.title}</h3>
                      <FiExternalLink size={14} className="text-gray-500 group-hover:text-teal-400 transition-colors shrink-0 mt-1" aria-hidden="true" />
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-400 border border-white/[0.06]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const { t } = useI18n()

  return (
    <section id="skills" className="relative py-28 px-6" aria-label={t.skills.badge}>
      <div className="gradient-orb w-[400px] h-[400px] bg-teal-500/5 left-[-10%] bottom-0" style={{ animation: 'float 15s ease-in-out infinite' }} aria-hidden="true" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-teal-400/80 text-xs font-medium tracking-[0.2em] uppercase">
            <FiServer size={14} aria-hidden="true" /> {t.skills.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4" dangerouslySetInnerHTML={{ __html: t.skills.title }} />
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm leading-relaxed">{t.skills.desc}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {t.skills.list.map((skill, i) => {
            const Icon = SKILL_ICONS[i]
            const bar = SKILL_BARS[i]
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
                      <div className="w-9 h-9 rounded-lg crystal-glass flex items-center justify-center border border-white/[0.06]" aria-hidden="true">
                        <Icon size={16} className="text-teal-400" />
                      </div>
                      <span className="text-white font-medium text-sm">{skill.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{bar.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden" role="progressbar" aria-valuenow={bar.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} ${bar.level}%`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.08, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${bar.barColor}, rgba(45,212,191,0.4))`,
                        boxShadow: `0 0 8px ${bar.barColor}40`,
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
  const { t, lang } = useI18n()

  return (
    <section id="contact" className="relative py-28 px-6" aria-label={t.contact.badge}>
      <div className="gradient-orb w-[500px] h-[500px] bg-cyan-500/5 right-[-10%] top-[-10%]" style={{ animation: 'pulse-glow 7s ease-in-out infinite' }} aria-hidden="true" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-teal-400/80 text-xs font-medium tracking-[0.2em] uppercase">
            <FiMessageCircle size={14} aria-hidden="true" /> {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4" dangerouslySetInnerHTML={{ __html: t.contact.title }} />
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm leading-relaxed">{t.contact.desc}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="relative aqua-border rounded-2xl overflow-hidden max-w-lg mx-auto"
        >
          <div className="crystal-glass p-8">
            <form className="space-y-4" action="https://formsubmit.co/maxwelgdsng@gmail.com" method="POST" aria-label={lang === 'es' ? 'Formulario de contacto' : 'Contact form'}>
              <input type="hidden" name="_next" value="https://maxwel.do/thanks" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_subject" value={lang === 'es' ? 'Nuevo contacto desde maxwel.do' : 'New contact from maxwel.do'} />
              <div>
                <label htmlFor="contact-name" className="sr-only">{t.contact.form.name_placeholder}</label>
                <input id="contact-name" type="text" name="name" required
                  placeholder={t.contact.form.name_placeholder}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal-400/40 focus:bg-white/[0.05] transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">{t.contact.form.email_placeholder}</label>
                <input id="contact-email" type="email" name="email" required
                  placeholder={t.contact.form.email_placeholder}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal-400/40 focus:bg-white/[0.05] transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">{t.contact.form.phone_placeholder}</label>
                <input id="contact-phone" type="text" name="telefono"
                  placeholder={t.contact.form.phone_placeholder}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal-400/40 focus:bg-white/[0.05] transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">{t.contact.form.message_placeholder}</label>
                <textarea id="contact-message" name="mensaje" required
                  rows={4}
                  placeholder={t.contact.form.message_placeholder}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal-400/40 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                />
              </div>
              <button type="submit"
                className="group relative w-full py-3.5 text-white font-semibold rounded-xl aqua-border overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50"
              >
                <span className="absolute inset-0 bg-white/[0.03]" aria-hidden="true" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FiSend size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                  {t.contact.form.submit}
                </span>
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <p className="text-xs text-gray-500 text-center mb-3 font-medium uppercase tracking-wider">{t.contact.direct}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <a href="https://wa.me/18294567685" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
                  aria-label="WhatsApp +1 (829) 456-7685"
                >
                  <SiWhatsapp size={16} aria-hidden="true" />
                  +1 (829) 456-7685
                </a>
                <a href="https://wa.me/18499177487" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
                  aria-label="WhatsApp +1 (849) 917-7487"
                >
                  <SiWhatsapp size={16} aria-hidden="true" />
                  +1 (849) 917-7487
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <p className="text-xs text-gray-500 text-center mb-3 font-medium uppercase tracking-wider" id="social-label">{t.contact.social}</p>
              <div className="flex items-center justify-center gap-6" role="list" aria-labelledby="social-label">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-xl crystal-glass border border-white/[0.06] text-gray-400 hover:text-teal-400 hover:border-teal-400/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50"
                    aria-label={label}
                    role="listitem"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="text-center text-xs text-gray-600 mt-4 tracking-wider uppercase">@maxwel.do</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  const { t } = useI18n()

  return (
    <footer className="py-8 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} <span className="text-gray-400">{t.footer.by}</span>
        </p>
        <div className="flex items-center gap-3 text-[11px] text-gray-600">
          <span>{t.footer.built_with}</span>
          <FiHeart size={11} className="text-teal-400/60" aria-hidden="true" />
          <span>React + Tailwind</span>
        </div>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      <a href="https://wa.me/18294567685" target="_blank" rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
        aria-label="Contactar por WhatsApp"
      >
        <SiWhatsapp size={28} aria-hidden="true" />
      </a>
    </div>
  )
}

function AppContent() {
  return (
    <div className="bg-dark-900 min-h-screen relative">
      <SkipToContent />
      <CursorAurora />
      <FloatingElements />
      <FloatingWhatsApp />
      <div className="relative z-10" id="main-content">
        <Navbar />
        <Hero />
        <AboutMe />
        <Process />
        <Pricing />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  )
}

export default App
