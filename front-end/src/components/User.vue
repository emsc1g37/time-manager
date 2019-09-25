<template>
  <div class="user">
    <div v-if="error != ''" class="error-message">{{error}}</div>
    <div v-if="state == 0" class="logged-out">
      <button v-on:click="goToLogin">Se connecter</button>
      <button v-on:click="goToSignUp">S'inscrire</button>
    </div>
    <form v-if="state != 0 && state != 3" v-on:submit.prevent="onSubmit">
      <label for="email">Adresse mail :</label>
      <input type="email" v-model="email" id="email" name="email" required/>
      <label for="username">Nom d'utilisateur :</label>
      <input type="text" v-model="username" id="username" name="username" required/>
      <input type="submit" :value="getSubmitButtonText()"/>
    </form>
    <div v-if="state == 3" id="logged-in">
      Bonjour {{username}}
      <button v-on:click="state = 4">Modifier mon profil</button>
      <button v-on:click="deleteUser">Supprimer mon compte</button>
      <button v-on:click="goToLogout">Déconnexion</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import main from '../main'

export default {
  name: 'User',
  data() {
    return {
      email: "",
      error: "",
      username: "",
      state: 0 // 0: Logged out (show "login" and "sign up" buttons, 1: show login form, 2: show sign up form, 3: logged in (show username, "edit", "delete" and "log out" buttons), 4: show edit form.
    }
  },
  methods: {
    clearFields() {
      this.email = ""
      this.id = 0
      this.username = ""
    },
    deleteUser() {
      axios.delete(main.BASE_URL + '/users/' + this.id).then(response => {
        this.goToLogout()
      })
      .catch(error => {
        this.error = "Erreur lors de la suppression de votre compte. Merci de réessayer."
      })
    },
    editUser() {
      if (!this.validateForm()) return
      axios.patch(main.BASE_URL + '/users/' + this.id, {user: {email: this.email, username: this.username}}).then(response => {
        this.email = response.data.data.email
        this.username = response.data.data.username
        this.goToLoggedIn()
      })
      .catch(error => {
        this.error = "Erreur lors de la modification de vos informations. Veuillez réessayer."
      })
    },
    getSubmitButtonText() {
      if (this.state == 1) return "Se connecter"
      else if (this.state == 2) return "S'inscrire"
      else if (this.state == 4) return "Mettre à jour"
    },
    goToLoggedIn() {
      this.error = ""
      this.state = 3
      this.$emit("login", this.id, this.email, this.username)
    },
    goToLogin() {
      this.clearFields()
      this.state = 1
    },
    goToLogout() {
      this.clearFields()
      this.error = ""
      this.id = 0
      this.state = 0
      this.$emit("logout")
    },
    goToSignUp() {
      this.clearFields()
      this.state = 2
    },
    login() {
      if (!this.validateForm()) return
      axios.get(main.BASE_URL + "/users/?email=" + this.email + "&username=" + this.username).then(response => {
        if (response.data.data == null)
          this.error = "Adresse mail ou nom d'utilisateur invalide."
        else {
          this.email = response.data.data.email
          this.id = response.data.data.id
          this.username = response.data.data.username
          this.goToLoggedIn()
        }
      })
      .catch(error => {
        this.error = "Erreur de connexion au réseau."
      })
    },
    onSubmit() {
      if (this.state == 1) this.login()
      else if (this.state == 2) this.signUp()
      else if (this.state == 4) this.editUser()
    },
    signUp() {
      if (!this.validateForm()) return
      axios.post(main.BASE_URL + '/users', {user: {email: this.email, username: this.username}}).then(response => {
          this.email = response.data.data.email
          this.id = response.data.data.id
          this.username = response.data.data.username
          this.goToLoggedIn()
      })
      .catch(error => {
        this.error = "Erreur lors de l'inscription. Veuillez réessayer."
      })
    },
    validateForm() {
      if (this.email == "" || this.username == "") {
        this.error = "Veuillez compléter le formulaire."
        return false
      }
      return true
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
