<script>
import BlocknativeSdk from 'bnc-sdk'
import { mapActions, mapState, mapWritableState } from 'pinia';
import Web3 from 'web3'
import { useMainStore } from '../stores/store';

export default {
    computed: {
        ...mapWritableState(useMainStore, ['blocknative', 'web3', 'addresses', 'transactions']),
        ...mapState(useMainStore, ['names']),
    },
    mounted() {
        const options = {
            dappId: 'ab9b0ef4-e58d-47e7-88a8-80d8b7286c15',
            networkId: 5
        };
        this.blocknative = new BlocknativeSdk(options);
        this.web3 = new Web3(window.ethereum);
        this.watchAddresses();
    },
    methods: {
        ...mapActions(useMainStore, ['watchlist']),
        async watchAddresses() {
            const accounts = await this.web3.eth.getAccounts();
            const addresses = this.addresses.concat(accounts);
            
            addresses.forEach(address => {
                const { emitter } = this.blocknative.account(address);
                emitter.on('txConfirmed', (transaction) => {
                    const addressIndex = this.addresses.findIndex(address => address.toLowerCase() === transaction.from.toLowerCase())
                    const addressReceiverIndex = this.addresses.findIndex(address => address.toLowerCase() === transaction.to.toLowerCase())
                    const senderName = this.names[addressIndex]
                    const receiverName = this.names[addressReceiverIndex]
                    this.transactions.unshift({...transaction, senderName, receiverName}); 
                });
            });
        }
    },
    created() {
        this.watchlist()
    }
}
</script>

<template>
<div class="animate__animated animate__slideInRight">
    <div class="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2" data-aos="fade-left">
        <div class="max-w-screen-sm sm:text-center sm:mx-auto">
            <a href="/" aria-label="View" class="inline-block mb-5 rounded-full sm:mx-auto">
                <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                    <svg class="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
            </a>
            <h2 class="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Real-time Alerts
            </h2>
            <hr class="w-full my-8 border-gray-300" />
        </div>
    </div>
</div>
    <div class="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-2">
        <div class="max-w-screen-lg sm:mx-auto">
            <div class="flex flex-col items-start mt-4 py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50 animate__animated animate__slideInRight"
                v-for="(tx, index) in transactions" :key="tx.hash">
                <div class="mb-4 lg:mb-0">
                    <h5 class="mb-4 text-xl font-bold leading-none sm:text-2xl">
                        {{ tx.senderName || 'Unknown' }}
                    </h5>
                    <div class="relative pr-8">
                        <p class="text-base text-gray-700 md:text-lg">
                            {{ tx.from }} sent {{ tx.value / 10 ** 18 }} ETH to {{tx.receiverName || tx.to }}
                        </p>
                    </div>
                </div>
                <div class="flex justify-start w-56 lg:justify-end">
                    <a :href="`https://goerli.etherscan.io/tx/${tx.hash}`" aria-label=""
                        class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                        View in Etherscan
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
</template>