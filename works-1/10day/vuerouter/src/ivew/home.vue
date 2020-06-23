<template>
    <div>
        <h1>在BBBB下面的页面</h1>
        <h1>在BBBB下面的页面</h1>
        <h1>在BBBB下面的页面</h1>
        <slot></slot>
    </div>
</template>

<script>
    export default {
         mounted(){
            console.log(this.$route.params)
        }
    }
</script>

<style scoped>

</style>