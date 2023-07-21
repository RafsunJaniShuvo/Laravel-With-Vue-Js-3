<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6 mt-4">
                <p class="text-danger" v-if="error">{{error}}</p>
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="email">
                            Enter your email address:
                        </label>
                        <input type="email" class="form-control" id="email" v-model="form.email">
                    </div>
                    <div class="form-group">
                        <label for="password">
                            Password
                        </label>
                        <input type="password" class="form-control" id="password" v-model="form.password">
                    </div>
                    <button type="submit" class="btn btn btn-primary"> Login</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import {reactive,ref} from 'vue'
import axios from "axios";
import {useRouter} from "vue-router";
import router from "@/router.js";

export default {

    setup(){
        let form = reactive({
            email : '',
            password : '',
        })
         let error = ref('');

        const login  = async() =>{

            await  axios.post('/api/login',form).then(res => {
                try{
                    if(res.data.success){
                        localStorage.setItem('token',res.data.data.token)
                        router.push({name:'dashboard'})
                    }else{
                        console.log('not found')
                    }
                }
                catch (error){
                        console.log('An error occurred:', error);
                    }
                });
        }
        return {
            form,
            login,
            error
        }
    }
}
</script>
