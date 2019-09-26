<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.email" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
       
        <button type="button" v-on:click="login()">Login</button>

    </div>
</template>

<script>
import Vue from 'vue';
import axios from "axios";

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
                axios.post( 
                    "http://localhost:3000/api/users/login",
                    this.input,
                    {"headers": {
                            "content-type": "application/json",
                            'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFlbDJAbWFpbC5mciIsImlhdCI6MTU2ODgwMTk4MywiZXhwIjoxNTcwMDExNTgzfQ.KSkI214iIQYpFl_zC7G-W4ifkmRszHKyvC290MStlzs'
                            } }).then(result => {
                    if (result.data.token != undefined){
                        Vue.prototype.$user.set({role:'employe'});
                        this.$router.replace({name: "home"});
                    }
                })
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