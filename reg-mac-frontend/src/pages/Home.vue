<template>
    <div class="container d-flex align-items-center h-100">
        <div class="row justify-content-center">
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
        </div>
        {{ info }}
    </div>
</template>

<script>
    // import axios from 'axios'
    import api from '../services/api'
    export default {
        name: "Home",
        mounted () {
            api
              .get('challenge/1')
              .then(response => (this.info = response))
        },
        data () {
            return {
                info: null
            }
        },
    }
</script>

<style scoped>

</style>
