<template>

    <div>
        <h1>My Name is {{ name }}</h1>
        <p ref="myref"> Html </p>
    </div>

</template>


<script>

export default {
    data(){
        return {
            name : 'rafsun',
        }
    },
    beforeCreate(){
        //it works before creatiing created hook
        console.log('beforeCreated',this.name);
    },
    created(){
        // console.log(this.$refs.myref,'5');
        console.log(this.name);
    },
    mounted(){
        console.log(this.$refs.myref)
    }
}

</script>
