import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
  //     apiKey: "AIzaSyBfkB9nOG2QLKOZJCiQVSm82og2A3hiu2I",
  // authDomain: "dev-meetup-vue-621aa.firebaseapp.com",
  // databaseURL: "https://dev-meetup-vue-621aa.firebaseio.com",
  // projectId: "dev-meetup-vue-621aa",
  // storageBucket: "dev-meetup-vue-621aa.appspot.com",
  // messagingSenderId: "503273088886",
  // appId: "1:503273088886:web:3e68ef735a6b734834bc57"
  apiKey: 'AIzaSyCFYWd6FpR53u4hSPXQSjOYeZNPF1FxG2M',
      authDomain: 'yt-devmeetup.firebaseapp.com',
      databaseURL: 'https://yt-devmeetup.firebaseio.com',
      projectId: 'yt-devmeetup',
      storageBucket: ''
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
