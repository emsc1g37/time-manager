<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.email" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
       
        <button type="button" v-on:click="login()">Login</button>

    </div>
</template>

<script>
import UserServices from "@/services/UserServices"


    export default {
        name: 'Login',
        data (){
            return {
                input: {
                    email: null,
                    password: null,
                }
            }
        },
        methods: {
            login() {
                UserServices.login(this.input).then( 
                    this.$router.replace({name: "dashboard"})
                )
            },
        },
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>