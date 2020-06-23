<template>
    <div>
       <p>详情页{{type}}</p>
       <p>男装{{gooid |good}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                gooid:'',
                type:''
            }
        },
        created() {
            //console.log(this.$route)
            const { gooid , type} = this.$route.params
            this.gooid = gooid
            this.type = type
            console.log(this.$route)
        },
        filters:{
            good:function(value){
                //console.log(typeof value)
                return value.slice(0,3)
            }
        }
        
    }
</script>

<style scoped>

</style>