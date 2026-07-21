import SiteHeader from './locales/components/SiteHeader'
import SiteFooter from './locales/components/SiteFooter'
import Index from './locales/pages/Index'
import Features from './locales/pages/Features'
import Pricing from './locales/pages/Pricing'
import Contact from './locales/pages/Contact'
import News from './locales/pages/News'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en: {
      SiteHeader: SiteHeader.en,
      SiteFooter: SiteFooter.en,
      Index: Index.en,
      Features: Features.en,
      Pricing: Pricing.en,
      Contact: Contact.en,
      News: News.en,
    },
    es: {
      SiteHeader: SiteHeader.es,
      SiteFooter: SiteFooter.es,
      Index: Index.es,
      Features: Features.es,
      Pricing: Pricing.es,
      Contact: Contact.es,
      News: News.es,
    },
  },
}))
