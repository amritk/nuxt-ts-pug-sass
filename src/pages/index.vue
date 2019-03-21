<template lang="pug">
section.container
    div
        logo
        h1.title
            | amrits-nuxt-template
        h2.subtitle
            | Nuxt starter template with typescript, pug, sass, es-lint(for typescript), vuetify and ts-jest!
        .links
            a.button--green(href='https://nuxtjs.org/', target='_blank') Documentation
            a.button--grey(href='https://github.com/nuxt/nuxt.js', target='_blank') GitHub
        v-btn Vuetify!
        span Translation: {{ $t('first') }}
</template>

<style lang="sass">
.container
    margin: 0 auto
    min-height: 100vh
    display: flex
    justify-content: center
    align-items: center
    text-align: center

.title
    font-family: 'Quicksand', 'Source Sans Pro', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
    display: block
    font-weight: 300
    font-size: 100px
    color: #35495e
    letter-spacing: 1px

.subtitle
    font-weight: 300
    font-size: 42px
    color: #526488
    word-spacing: 5px
    padding-bottom: 15px

.links
    padding-top: 15px
</style>
