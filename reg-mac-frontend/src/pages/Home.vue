<template>
    <div class="container align-items-center h-100">
        <!--<div class="row justify-content-center">
            <div class="col-auto">
                <button class="btn btn-primary">Guest</button>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-auto">
                <button class="btn btn-primary">Log in</button>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-auto">
                <button class="btn btn-primary">Sign up</button>
            </div>
        </div>-->
        <div class="row justify-content-center h-100 align-items-center">
            <div class="col-12 text-center">
                <h6>Learn about computers by solving challenges on a register machine</h6>
            </div>
            <div class="col-auto">
                <router-link to="/tutorial" class="btn btn-primary">Tutorial</router-link>
            </div>
            <div class="col-auto">
                <router-link to="/progress" class="btn btn-primary">Challenges</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios'
    // import api from '../services/api'
    export default {
        name: "Home",
        mounted () {

        },
        data () {
            return {
            }
        },
    }
</script>

<style scoped>

</style>
