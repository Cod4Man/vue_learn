<template>
    <div>
        <h2>我是子组件cpn</h2>
        <h2>传参{{cpnmes}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        props: {
            cpnmes: {
                type: String,
                default: 'cpnmes default value',
                required: true
            }
        }
    }
</script>

<style scoped>

</style>