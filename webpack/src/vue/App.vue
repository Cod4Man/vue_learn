<template>
    <div>
        <h2>{{mes}}</h2>
        <hr>
        <h2>我是app-temp组件</h2>
        <Cpn :cpnmes="cpnvalue"></Cpn>
    </div>
</template>

<script>
    import Cpn from './Cpn'
    export default {
        name:'App',
        props:{
            mes: {
                type: String,
                default: '',
                required: true
            }
        },
        components: {
            Cpn
        },
        data() {
            return {
                cpnvalue: 'cpnvalue-app'
            }
        }
    }
</script>

<style scoped>

</style>