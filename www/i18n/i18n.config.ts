import SiteHeader from './locales/components/SiteHeader'
import SiteFooter from './locales/components/SiteFooter'
import CookieConsent from './locales/components/CookieConsent'
import Index from './locales/pages/Index'
import Features from './locales/pages/Features'
import Pricing from './locales/pages/Pricing'
import Contact from './locales/pages/Contact'
import News from './locales/pages/News'
import Legal from './locales/pages/Legal'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en: {
      SiteHeader: SiteHeader.en,
      SiteFooter: SiteFooter.en,
      CookieConsent: CookieConsent.en,
      Index: Index.en,
      Features: Features.en,
      Pricing: Pricing.en,
      Contact: Contact.en,
      News: News.en,
      Legal: Legal.en,
    },
    es: {
      SiteHeader: SiteHeader.es,
      SiteFooter: SiteFooter.es,
      CookieConsent: CookieConsent.es,
      Index: Index.es,
      Features: Features.es,
      Pricing: Pricing.es,
      Contact: Contact.es,
      News: News.es,
      Legal: Legal.es,
    },
  },
}))
