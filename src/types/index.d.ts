import Vue from 'vue'
import { VuetifyObject } from 'vuetify'

declare module '*.vue' {
    const _default: Vue
    export default _default
}

declare module 'vue/types/vue' {
    interface Vue {
        $vuetify: VuetifyObject;
    }
}

