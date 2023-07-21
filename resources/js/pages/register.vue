<template>
    <div class="container">
        <div class="row justify-content-center">

            <div class="col-sm-6 mt-4">
                <p class="text-danger" v-if="error">{{error}}</p>
                <h2 class="d-flex justify-content-center">Register Page</h2>
                <form @submit.prevent="register">
                    <div class="form-group">
                        <label for="name">
                           Name:
                        </label>
                        <input type="text" class="form-control" id="name" v-model="form.name">
                    </div>
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
                    <div class="form-group">
                        <label for="c_password">
                            Confirm Password
                        </label>
                        <input type="password" class="form-control" id="c_password" v-model="form.c_password">
                    </div>
                    <button type="submit" class="btn btn btn-primary"> Register</button>
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
            name:'',
            email : '',
            password : '',
            c_password :'',
        })
        let error = ref('');

        const register  = async() =>{

            await  axios.post('/api/register',form).then(res => {
                try{
                    if(res.data.success){
                        localStorage.setItem('token',res.data.data.token)
                        router.push({name:'dashboard'})
                    }else{

                    }
                }
                catch (error){
                    console.log('An error occurred:', error);
                }
            });
        }
        return {
            form,
            register,
            error
        }
    }
}
</script>
