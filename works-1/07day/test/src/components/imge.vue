<template>
    <div>
       <img src="../assets.logo.png"/>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                //也可以使用变量
                img:require('../assets.logo.png')
            }
        }
    }
</script>

<style scoped>

</style>