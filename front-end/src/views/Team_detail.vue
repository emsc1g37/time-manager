<template>
    <div>
        <b-table striped hover :items="data" />
    </div>
</template>

<script>
import data from '@/data/data-table'
export default {
    data() {
       return {
           data
       }
    }
}
</script>