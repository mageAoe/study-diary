
//component
Vue.component('Table',{
    props:{
        column:Array,
        data:Array,
        bordered:Boolean,
        hover:Boolean

    },
    template:`
    <table class="table" 
    :class="{
    'table-bordered':bordered,
    'table-hover':hover
    }"
    >
        <thead>
        <tr>
           <th v-for='item in column'>{{item}}</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for='item in data'>
            <td v-for='agr in item'>{{agr}}</td>
          </tr>
        </tbody>
    </table>
    `
})
