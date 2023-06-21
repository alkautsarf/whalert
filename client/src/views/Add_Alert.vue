<script>
import { mapActions, mapState } from 'pinia';
import Form from '../components/Form.vue'
import { useMainStore } from '../stores/store';
export default {
    components: {
        Form
    },
    methods: {
        ...mapActions(useMainStore, ['watchlist', 'deleteWatchlist'])
    },
    computed: {
        ...mapState(useMainStore, ['addresses','names'])
    },
    created() {
        this.watchlist()
    }
}
</script>

<template>
    <div class="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
        <div class="max-w-lg sm:text-center sm:mx-auto">
            <a href="/" aria-label="Go Home" title="Logo" class="inline-block mb-4">
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                    <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
            </a>
            <div class="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                <span class="relative inline-block">
                    <svg viewBox="0 0 52 24" fill="currentColor"
                        class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block">
                        <defs>
                            <pattern id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042" x="0" y="0" width=".135" height=".30">
                                <circle cx="1" cy="1" r=".7"></circle>
                            </pattern>
                        </defs>
                        <rect fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)" width="52" height="24"></rect>
                    </svg>
                    <span class="relative bg-white">Watchlist</span>
                </span>
            </div>
        </div>
    </div>
    <div class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-10">
        <div class="max-w-screen-lg sm:mx-auto" v-for="(name, index) in names">
            <div
                class="flex flex-col items-start justify-between mt-4 py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50 animate__animated animate__slideInRight">
                <div class="mb-4 lg:mb-0">
                    <h5 class="mb-4 text-xl font-bold leading-none sm:text-2xl">
                        {{ name }}
                    </h5>
                    <div class="relative pr-8">
                        <p class="text-base text-gray-700 md:text-lg">
                            {{ addresses[index] }}
                        </p>
                    </div>
                </div>
                <div class="flex justify-end w-56 lg:justify-end">
                    <a aria-label="" @click.prevent="deleteWatchlist(addresses[index])"
                        class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                        Delete
                        <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                            <path
                                d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="scroll-smooth">
        <a href="#" v-scroll-to="'#form'" aria-label="Scroll down"
            class="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path
                    d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z">
                </path>
            </svg>
        </a>
    </div>
    <div class="h-screen flex justify-center items-center ">
        <Form id="form" />
    </div>
</template>