<template>
    <div class="contentone">
        <Breadcrumb>
            <BreadcrumbItem to="/content">
                <Icon type="ios-home-outline"></Icon> Home
            </BreadcrumbItem>
            <!-- <BreadcrumbItem>
                <Icon type="logo-buffer"></Icon> Components
            </BreadcrumbItem> -->

        </Breadcrumb>

        <div class="contentone-bottom">
            <div class="table">
                <Table :loading='loading' ref="selection" @on-select-all='select' border stripe :columns="columns4" :data= 'dataone'></Table>
            </div>
            <div class="button">
                <div>
                    <Button type="primary" @click="handleSelectAll(onoff)">全选</Button>
                    <Button type="error" @click="selectAll">删除</Button>
                </div>
                <div>
                    <Page :current.sync='current' :total="total" show-sizer />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'
    export default {
        data(){
            return {
                onoff:true,
                loading:false,
                limt:10,
                total: 50,
                current: 1,
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'id',
                        key:'id',
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key:'name',
                        align: 'center'
                    },
                    {
                        title: 'Age',
                        key:'age',
                        align: 'center'
                    },
                    {
                        title: 'title',
                        key:'title',
                        align: 'center'
                    },
                    {
                        title: 'add',
                        key:'add',
                        align: 'center'
                    },
                    
                ],
                dataone:[],
                selectAllDate:[]
            }
        },
        created() {
               this.auser({page:this.current,limt:10}).then(res=>{
                const {total,data} = res[0]
                this.dataone = data
                this.total = total
            })
        },
        watch:{
          current(val){
                this.loading = true
                this.auser({page:val,limt:10}).then(res=>{
                const {total,data} = res[0]
                this.dataone = data
                this.total = total
                this.loading = false
            }).catch(err=>{
                console.log(err)
            })
          }

        },
        computed:{
           
        },
        methods:{
            allselect(){
                
            },
            ...mapActions([
               'auser'
           ]),
            // getuser(){
            //     this.loading = true
            //     axios.get('/api/data',{
            //     params:{
            //         page:this.current,
            //         limt:10
            //     }
            // }).then(res=>{
            //     //console.log(res.data[0].total)
            //     const data  = res.data
            //     this.dataone = data[0].data
                
            //     this.total = data[0].total
            //     this.loading = false
            //     //console.log(data[0].data)
            // }).catch(err=>{
            //     console.log(err)
            // })
            // },

            handleSelectAll (status) {
                   //console.log(status)
                  if(status){
                     this.$refs.selection.selectAll(status);
                     this.onoff = false
                  }else{
                     this.$refs.selection.selectAll(status);
                     this.onoff = true
                  }              
            },

            //for in  循环的是下标  for of循环的是值
            select(select){
                 this.selectAllDate = select
            },
            selectAll(){
                const result = this.dataone.filter(key=>{
                    for(let k of this.selectAllDate){
                        return key.id === k.id
                    }
                })
                this.dataone = result
            }
        }

    }
</script>

<style scoped>
  .contentone-bottom{
      padding: 20px;
  }
  .contentone-bottom .button{
         margin: 20px;
         display: flex;
         justify-content: space-between;
  }

</style>