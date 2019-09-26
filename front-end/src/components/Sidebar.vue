<template>
  <div id="app">
        
    <sidebar-menu :menu="menu" style="width: 250px"/>
  </div>
</template>

<script>

export default {
    name: 'Sidebar',
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/home',
                        title: 'Home',
                        icon: 'User-Secret'
                    },
                    {
                        href: '/dashboard',
                        title: 'Dashboard',
                        icon: 'fas fa-user'
                    },
                    {
                        href: '/team_detail',
                        title: 'Team detail',
                        icon: 'fas fa-user'
                    },
                    {
                        href: '/account_information',
                        title: 'Account information',
                        icon: 'fas fa-chart-area',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    }
                ]
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
