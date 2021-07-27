<template>
    <div class="fecha">
        <p >{{fecha()}}</p>
    </div>
</template>
<script>

import { mapState } from 'vuex'
    export default{
        name:'Fecha',
        props:[
            'time'
        ],
        methods:{
            ...mapState({
                fecha:state => state.fecha
            }),
            mostrarFecha(){
                return setInterval(this.fecha,1000)
            },
            setFecha(){
                this.fecha = new Date()
            }
        },
        mounted(){
            console.log('se monto')
            this.timer = setInterval(this.setFecha(),1000)
        }

    }
</script>

<style scoped>
.fecha{
   display:flex;
   align-items:center;
   justify-content: center;;
}
</style>