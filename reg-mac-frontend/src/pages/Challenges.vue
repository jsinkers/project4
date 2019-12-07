<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-auto py-1" v-for="program in programs" :key="program.id">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ program.id }}. {{ program.title }}
                            <check-circle-outline-icon v-if="challengeSolved(program.id) === 'pass'" class="text-success"></check-circle-outline-icon>
                            <alert-circle-outline-icon v-else-if="challengeSolved(program.id) === 'fail'" class="text-danger"></alert-circle-outline-icon>
                        </h5>
                        <router-link :to="challengeRoute(program)" class="card-link">Go to challenge</router-link>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../services/api";
import CheckCircleOutlineIcon from 'vue-material-design-icons/CheckCircleOutline.vue'
import AlertCircleOutlineIcon from 'vue-material-design-icons/AlertCircleOutline.vue'

export default {
    name: "Challenges",
    components: {
        CheckCircleOutlineIcon,
        AlertCircleOutlineIcon,
    },
    data: function () {
    return {
        programs: []
    }
    },
    methods: {
        updateChallengeList: function(id) {
            this.id = id

            api
                .get(`progress/`)
                .then(response => {
                    this.response = response
                    this.programs = this.response.data
            })
        },
        challengeRoute: function(program) {
          return `/challenge/${program.id}`
        },
        challengeSolved: function(id) {
            const chall = this.challengeData.find(x => x.id == id)
            if (chall) {
                if (chall.solved) {
                    return "pass"
                } else if (chall.solved === false) {
                    return "fail"
                }
            }
            return "unattempted"
        },
    },
    mounted () {
        this.updateChallengeList()
        this.challengeData = JSON.parse(localStorage.challenges).data
    },
}
</script>

<style scoped>

</style>
