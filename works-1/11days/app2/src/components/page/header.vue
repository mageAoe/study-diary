<template>

        <Header class="header" >
            <slot name="left"></slot>
            <slot name="right">
            </slot>
        </Header>

</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.page .header{
     display: flex;
     justify-content: space-between;
     padding: 0 20px;
     
     
 }
</style>