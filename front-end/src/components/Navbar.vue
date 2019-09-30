<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
    
      <b-navbar-nav class="ml-auto">
        
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>{{first_name}} {{last_name}}</em>
          </template>
          <b-dropdown-item  to="/login" >Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>
</template>

<script>
import Vue from "vue"

export default {
  name: "Navbar",    
  data() {
    return {
      first_name: Vue.prototype.$user.get().first_name,
      last_name: Vue.prototype.$user.get().last_name,
    } 
  },    
}


</script>

<style>
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
