<template>
    <div class="main my-5">
        <Fecha ></Fecha>
        <Datos1></Datos1>

    </div>
</template>

<script>
import Fecha from './Fecha.vue'
import Datos1 from './Datos1.vue'
//import moment from 'moment'
import {mapState, mapMutations, mapActions} from 'vuex'

    export default{
        name:'Main',
    
        components:{
            Datos1,
            Fecha
        },
        computed: {},
            //return console.log(horaSet)
            //return console.log(moment(new Date().toLocaleTimeString(this.fecha)))
             ...mapState({
                  Titulo: state => state.Titulo
                  //Fecha:state => state.Fecha
              }),
              methods:{
                ...mapMutations(['traerDatos']),
                ...mapActions(['obtenerDatos'])
                 
        }
         
    }
    
</script>

<style>

</style>