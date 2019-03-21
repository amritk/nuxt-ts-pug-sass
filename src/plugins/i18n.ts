import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enCa from '@/locales/en-CA.json'
import frCa from '@/locales/fr-CA.json'

Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'en-CA',
    fallbackLocale: 'en-ca',
    messages: {
        'en-CA': enCa,
        'fr-CA': frCa
    }
})

export default ({ app }) => {
    app.i18n = i18n
}

export { i18n }
