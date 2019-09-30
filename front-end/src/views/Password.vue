<template>
    <div id="account_information">
        <h1>Change passeword</h1>

        <p v-if="this.messageError" class="messageError"> {{this.messageError}} </p>

        <input class="newPassword" type="text" name="newPasseword" v-model="input.new_password" placeholder="new password" required/>
        <input class="oldpassword" type="text" name="oldPasseword" v-model="input.old_passeword" placeholder="old passeword" required/>
       
        <button class="account_information" type="button" v-on:click="change_password()">Change</button>

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
                old_password: null,
                password: null,

            },
            messageError: null,            
        }
    },
    methods: {
        change_password() {
            if (this.old_password == null || this.new_passeword ==null ){
                this.messageError = "please complete the fields"
            }
            else {
                UserServices.change_password(this.input).then( 
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