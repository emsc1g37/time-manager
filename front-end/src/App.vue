<template>
  <div>
    <Navbar v-if="showMenu"/>
    <Sidebar v-if="showMenu"/>

    <!-- <b-container>
    <router-view/>
    </b-container> -->

    
    <router-view />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name:'app',
  computed: {
    showMenu() {
    return this.$route.name !== 'login';
    },
  },
  components: {
    Sidebar,Navbar
  }
}

</script>

<style>
nav {
  margin-left: 50%;
}
body {
  margin-left: 30%;
  background-color: #F0F0F0;
}
h1 {
  padding: 0;
  margin-top: 0;
}
#app {
  width: 1024px;
  margin: auto;
}
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
