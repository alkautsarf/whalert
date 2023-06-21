<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


export default {
    components: {
        Navbar,
        Footer
    },
    computed: {
        showFooter() {
            const routeName = this.$route.name
            return routeName !== 'signin' && routeName !== 'register' && routeName !== 'add' && routeName !== 'alert'
        }
    },
}
</script>

<template>
    <Navbar />
    <RouterView />
    <Footer v-if="showFooter" />
</template>

<style></style>
