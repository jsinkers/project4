<template>
    <div id="homeComponent" class="row flex-grow-1 height-75 debug2">
        <div class="container align-items-center h-100 debug">
            <div class="row justify-content-center h-100 align-items-center debug2">
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
    </div>
</template>

<script>
    // import axios from 'axios'
    // import api from '../services/api'
    export default {
        name: "HomePage",
        mounted () {

        },
        data () {
            return {
            }
        },
    }
</script>

<style>

</style>
