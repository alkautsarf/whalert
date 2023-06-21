<script>
import { mapActions } from 'pinia';
import { useMainStore } from '../stores/store';

    export default {
        data() {
            return{
                form: {
                    name: '',
                    address: ''
                }
            }
        },
        methods: {
            ...mapActions(useMainStore, ['addWallet'])
        }
    }
</script>

<template>
    <div class="mx-auto w-1/4 animate__animated animate__zoomIn">
        <form @submit.prevent="addWallet(this.form)">
            <label for="name" class="inline-block mb-2 font-semibold">
                Wallet Name
            </label>
            <input id="name" autocomplete="email" name="EMAIL" aria-required="true" placeholder="e.g. Gary Vee" v-model="form.name"
                type="text" maxlength="150"
                class="flex-grow w-full h-12 px-4 mb-4 transition duration-200 bg-white border border-gray-400 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"
                style="appearance: none;">
            <label for="address" class="inline-block mb-2 font-semibold">
                Wallet Address
            </label>
            <input id="address" autocomplete="email" name="EMAIL" aria-required="true" placeholder="0x0abcxxxxxxxxx" type="text" v-model="form.address"
                maxlength="150"
                class="flex-grow w-full h-12 px-4 mb-4 transition duration-200 bg-white border border-gray-400 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"
                style="appearance: none;">
            <div class="flex flex-col mx-auto w-2/4 text-center mt-4">
                <button type="submit"
                    class="px-2 h-12 inline-flex items-center justify-center w-full mb-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none">Add
                </button>
            </div>
        </form>
    </div>
</template>