<template>
    <div id="account_information">
        <h1>Account informations</h1>

        <p v-if="this.messageError" class="messageError"> {{this.messageError}} </p>

        <input class="account_information" type="text" name="first_name" v-model="input.first_name" :placeholder="this.value_first_name" required/>
        <input class="account_information" type="text" name="last_name" v-model="input.last_name" :placeholder="this.value_last_name" required/>
        <input class="account_information" type="text" name="email" v-model="input.email" :placeholder="this.value_email" required/>
       
        <button class="account_information" type="button" v-on:click="change_information()">send</button>

    </div>
</template>

<script>

import Vue from "vue";
import UserServices from "@/services/UserServices"

export default {
    name: "account_information",
    data() {
        return {
            input: {
                email:  null,
                first_name: null,
                last_name:  null,
            },
            messageError: null,    
            value_email:  Vue.prototype.$user.get().email,
            value_first_name: Vue.prototype.$user.get().first_name,
            value_last_name:  Vue.prototype.$user.get().last_name,        
        }
    },
    methods: {
        change_information() {
            if (this.email == null || this.first_name ==null || this.last_name ==null){
                this.messageError = "please complete the fields"
            }
            else{
                UserServices.change_information(this.input).then( 
                    this.$router.replace({name: "dashboard"})
                )
            }

        },
    },
}
</script>

<style >
    #account_information {
        width: 500px;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
    .account_information{
        display: block;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 20%;
    }
    .messageError {
        color: red;
    }
    .messageSucces {
        color: green;
    }
</style>