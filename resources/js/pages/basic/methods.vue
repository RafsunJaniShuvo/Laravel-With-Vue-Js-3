<template>
    <div>
        <h1>
            The number is {{ counter }}
        </h1>
        <button @click="updateCounter(1)">Increase</button>
        <button @click="updateCounter(-1)">Decrease</button>
        <br>
        <div v-for = "(blog , i) in blogs" :key="i" v-if="blogs.length" >
            <h3>{{ blog.tittle }}</h3>
            <p>{{ blog.post }}</p>

        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                counter: 0,
                blogs: [],
            }
        },
        methods:{
            updateCounter(number){
                this.counter += number
            }
        },
        created(){
            //call the views to get views of this blog post
            this.counter = 100
            let posts = [
                {tittle : 'This is a blog title 1', 'post':'This is blog post 1',id:1},
                {tittle : 'This is a blog title 2', 'post':'This is blog post 2',id:2},
                {tittle : 'This is a blog title 3', 'post':'This is blog post 3',id:3},
                {tittle : 'This is a blog title 4', 'post':'This is blog post 4',id:4},
                {tittle : 'This is a blog title 5', 'post':'This is blog post 5',id:5},
            ]

            this.blogs = posts

        }
    }
</script>
