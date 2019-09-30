import Vue from 'vue';
import axios from "axios";


export default {
    login(input) {
        return axios.post( 
            "http://localhost:3000/api/users/login",
            input,
            {"headers": {
                    "content-type": "application/json",
                    } }).then(result => {
            if (result.data.token != undefined){
                Vue.prototype.$user.set({
                    id: result.data.id,
                    role:'employe',
                    token: result.data.token,
                    first_name: result.data.first_name,
                    last_name: result.data.last_name,
                    teams: result.data.teams,
                });            
            }
        })
        // .catch(e => {
        //     console.log(e);
        // });
    },
    logOut(){
        return Vue.prototype.$user.set({role:'guest'})
    },
    userDetail(){
        return Vue.prototype.$user.get()
    },
    teamsDetails(){
        return Vue.prototype.$user.get().teams
    },
    getUsersTeam(id){ 
            return axios.get(
                "http://localhost:3000/api/teams/"+ id,
                {
                "headers": {
                    "content-type": "application/json",
                    Authorization: "Bearer " + Vue.prototype.$user.get().token,
                }
            }).then(result => {
                return result.data.members
        });
        
    },
     async team_member(){
        let list_members = [];
        let teams = Vue.prototype.$user.get().teams;
        teams.forEach(async (element) => {
            let members = await this.getUsersTeam(element.id)
            list_members.push(members)
        });
        return list_members
    },



    change_information(input){
        return axios.put( 
            "http://localhost:3000/api/users/"+ Vue.prototype.$user.get().id,
            input,
            {"headers": {
                    "content-type": "application/json",
                    Authorization: "Bearer " + Vue.prototype.$user.get().token,
                    } })
        // .catch(e => {
        //     console.log(e);
        // });
    },
}
