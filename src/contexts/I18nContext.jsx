import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../i18n/translations'

const I18nContext = createContext()

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'es') return saved
    return navigator.language?.startsWith('es') ? 'es' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
    document.title = translations[lang].site.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = translations[lang].site.description
  }, [lang])

  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es')
  const t = translations[lang]

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
