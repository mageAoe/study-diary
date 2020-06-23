<template>
    <div class="header">
         <div class="header-page-left">
            <slot name="left">
             </slot>
         </div>
      
           <div class="page-title">
                <slot name="title">
               {{title}}
                 </slot>
           </div>

       <div class="header-page-right">
           <slot name="right" ></slot>
       </div>

    </div>
</template>

<script>
    export default {
        
        props:{
            title:''
        }
    }
</script>

<style scoped>
.header{
    padding: 0 20px;
    height: 90px;
    background:#ff88bb;
    box-shadow: 0 0 1px 5px #ddd;
    display: flex;
    align-items: center;
}

.header .page-title{
 flex: 1;
 text-align: center;
 color: #ddd
}

</style>