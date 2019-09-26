<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
    
      <b-navbar-nav class="ml-auto">
        
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>Username</em>
          </template>
          <b-dropdown-item  to="/login" >Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>
</template>

<script>

export default {
  name: "Navbar",        
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
