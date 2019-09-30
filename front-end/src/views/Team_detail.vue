

<template>
<div>
    <div class="table" v-for="team in data.teams"  v-bind:key="team.id" >
        <h2> {{team.name}} </h2>

        <h5> managed by {{team.manager_first_name}} {{team.manager_last_name}} </h5> 
        
        <mdb-datatable
            :data="data"
            striped
            bordered
        />


    </div>
    


</div>
</template>


<script>
// import Vue from "vue";
// import axios from "axios";
import UserServices from "@/services/UserServices";
import data from "@/data/data-table";
import { mdbDatatable } from 'mdbvue';
export default {
    name: 'Team_detail',
    components: {
        mdbDatatable
    },
    data() {
        return {
            data: {
                teams : UserServices.teamsDetails(),
                // test: UserServices.team_member(),
                columns: [
                {
                    label: 'first name',
                    field: 'first_name',
                    sort: 'asc'
                },
                {
                    label: 'last name',
                    field: 'last_name',
                    sort: 'asc'
                },
                {
                    label: 'role',
                    field: 'role_label',
                    sort: 'asc'
                },
                ],
                rows:  data
            },
            
        }
    },
}
</script>

<style>
.table{
    margin-left: 10%
    
}

</style>