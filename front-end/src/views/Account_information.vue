<template>
    <div id="account_information">
        <h1>Account informations</h1>
        <input class="account_information" type="text" name="first_name" v-model="input.first_name" placeholder="first name" />
        <input class="account_information" type="text" name="last_name" v-model="input.last_name" placeholder="last name" />
        <input class="account_information" type="text" name="email" v-model="input.email" placeholder="email" />
       
        <button class="account_information" type="button" v-on:click="change_information()">send</button>

    </div>
</template>

<script>

import UserServices from "@/services/UserServices"

export default {
    name: "account_information",
    data() {
        return {
            input: {
                email: null,
                first_name: null,
                last_name: null,
            }
        }
    },
    methods: {
        change_information() {
            UserServices.change_information(this.input).then( 
                // this.$router.replace({name: "account_information"})
            )
        },
    },
}
</script>

<style >
    #account_information {
        width: 500px;
        border: 1px solid #CCCCCC;
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
</style>