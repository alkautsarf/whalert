<script>
import { mapState, mapActions } from 'pinia';
import { useMainStore } from '../stores/store';

export default {
    data() {
        return{
            path1: '/alert',
            path2: '/register'
        }
    },
    computed: {
        ...mapState(useMainStore, ['access_token']),
        routePath() {
            return !this.access_token ? this.path2 : this.path1
        }
    },
    methods: {
        ...mapActions(useMainStore, ['watchlist'])
    },
    created() {
        this.watchlist()
    }
}
</script>

<template>
<div class="scroll-smooth animate__animated animate__slideInUp">
    <!--Headers start-->
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div class="flex flex-col mb-16 sm:text-center sm:mb-0 pt-20">
                <a href="/" class="mb-6 sm:mx-auto">
                    <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                        <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                    </div>
                </a>
                <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2
                        class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span class="relative inline-block">
                            <svg viewBox="0 0 52 24" fill="currentColor"
                                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                <defs>
                                    <pattern id="e77df901-b9d7-4b9b-822e-16b2d410795b" x="0" y="0" width=".135"
                                        height=".30">
                                        <circle cx="1" cy="1" r=".7"></circle>
                                    </pattern>
                                </defs>
                                <rect fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)" width="52" height="24"></rect>
                            </svg>
                            <span class="relative">Stay</span>
                        </span>
                        on the Edge of The Game with Whalert
                    </h2>
                    <p class="text-base text-gray-700 md:text-lg">
                        Gain Cutting-Edge Insights into Whale Wallet Transactions and Stay Ahead of the Game
                    </p>
                </div>
                <div>
                    <router-link :to="routePath">
                    <a href="#"
                        class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                        Get started
                    </a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="scroll-smooth">
        <a href="#" v-scroll-to="'#detail'" aria-label="Scroll down"
            class="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path
                    d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z">
                </path>
            </svg>
        </a>
    </div>
    <!--Headers end-->
    <!--Features start-->
    <div id="detail" class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-96">
        <div class="grid gap-8 row-gap-10 lg:grid-cols-2">
            <div class="max-w-md sm:mx-auto sm:text-center">
                <div
                    class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                    <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor"
                        viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
                <h6 class="mb-3 text-xl font-bold leading-5">Real-time alerts</h6>
                <p class="mb-3 text-sm text-gray-900">
                    Get notified instantly when important transactions occur.
                </p>
                <a href="/" aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn
                    more</a>
            </div>
            <div class="max-w-md sm:mx-auto sm:text-center">
                <div
                    class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                    <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor"
                        viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
                <h6 class="mb-3 text-xl font-bold leading-5">Customizable watchlist</h6>
                <p class="mb-3 text-sm text-gray-900">
                    Choose the specific wallets and transactions you want to monitor.
                </p>
                <a href="/" aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn
                    more</a>
            </div>
            <div class="max-w-md sm:mx-auto sm:text-center">
                <div
                    class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                    <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor"
                        viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
                <h6 class="mb-3 text-xl font-bold leading-5">Easy-to-use interface</h6>
                <p class="mb-3 text-sm text-gray-900">
                    User-friendly design makes it simple to set up and use.
                </p>
                <a href="/" aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn
                    more</a>
            </div>
            <div class="max-w-md sm:mx-auto sm:text-center">
                <div
                    class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                    <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor"
                        viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
                <h6 class="mb-3 text-xl font-bold leading-5">Blocknative Integrated</h6>
                <p class="mb-3 text-sm text-gray-900">
                    Integrated with the latest Blocknative SDK and API for speed and precise performance.
                </p>
                <a href="/" aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn
                    more</a>
            </div>
        </div>
    </div>
    <div class="scroll-smooth">
    <a href="#" v-scroll-to="'#footer'" aria-label="Scroll down"
        class="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path
                d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z">
            </path>
        </svg>
    </a>
    </div>
    <!--Features end-->
    <Footer id="footer"/>
</div>
</template>
