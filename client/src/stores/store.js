import { defineStore } from 'pinia'
import axios from 'axios'

export const useMainStore = defineStore('main', {
  state: () => ({ 
    access_token: localStorage.access_token,
    baseUrl: 'https://whalert-production.up.railway.app',
    username: localStorage.username,
    blocknative: null,
    web3: null,
    addresses: [],
    names: [''],
    transactions: []

  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async register(data) {
      try {
        const response = await axios.post(`${this.baseUrl}/register`, data)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Account created',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.push('/signin')
      } catch (err) {
        if(err.response.data.name === 'SequelizeUniqueConstraintError'){
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Email already registered',
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.response.data.name,
            showConfirmButton: false,
            timer: 1500
          })
        }
        
      }
    },
    async login(data) {
      try {
        const response = await axios.post(`${this.baseUrl}/login`, data)
        localStorage.access_token = response.data.access_token
        localStorage.username = response.data.username
        this.access_token = response.data.access_token
        this.username = response.data.username
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login success',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.push('/')
      } catch (err) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: err.response.data.name,
          showConfirmButton: false,
          timer: 1500
        })
      }
    },
    async addWallet(data) {
      try {
        const response = await axios.post(`${this.baseUrl}/add-wallet`, data, {
          headers: {
            access_token: this.access_token
          }
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500
        })
        this.watchlist()
      } catch (err) {
        console.log(err);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Failed while adding wallet',
          showConfirmButton: false,
          timer: 1500
        })
      }
    },
    async watchlist() {
      try {
        const response = await axios.get(`${this.baseUrl}/watchlist`, {
          headers: {
            access_token: this.access_token
          }
        })
        this.addresses = response.data.map(el => el.Wallet.address)
        this.names = response.data.map(el => el.Wallet.name)
      } catch (err) {
        console.log(err);
      }
    },
    async deleteWatchlist(address) {
      try {
        const response = await axios.delete(`${this.baseUrl}/watchlist?address=${address}`, {
          headers: {
            access_token: this.access_token
          }
        })
        this.watchlist()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500
        })
        this.router.push('/add-alert')
      } catch (err) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Failed while deleting wallet',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(err);
      }
    },
    logout() {
      localStorage.clear()
      this.access_token = ''
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Log out success',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.push('/')
    }
  },
})



