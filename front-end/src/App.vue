<template>
  <div id="app">
     <User v-on:login="onLogin" v-on:logout="onLogout"></User>
  </div>
</template>

<script>
import User from './components/User.vue'

export default {
  name: 'app',
  components: {
    User
  },
  data() {
    return {
      email: "",
      id: 0,
      username: ""
    }
  },
  methods: {
    onLogin(id, email, username) {
      this.email = email
      this.id = id
      this.username = username
    },
    onLogout(event) {
      this.email = ""
      this.id = 0
      this.username = ""
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
