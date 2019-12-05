<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-auto py-1" v-for="program in programs" :key="program.id">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ program.id }}. {{ program.title }}
                            <!-- TODO: introduce solved data
                            <span v-if="program.solved" class="mdi mdi-check-circle-outline text-success"></span>
                            <span v-else class="mdi mdi-alert-circle-outline text-secondary"></span>
                            -->
                        </h5>
                        <!-- TODO: fix routing links -->
                        <router-link :to="challengeRoute(program)" class="card-link">Go to challenge</router-link>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../services/api";

export default {
    name: "Challenges",
    data: function () {
    return {
        programs: []
      /*programs: [{id: 1, title: 'add', solved: true, route: 'challenge/1'},
        {id: 2, title: 'longer name', solved: true, route: 'challenge/2'},
        {id: 3, title: 'med name', solved: true, route: 'challenge/3'},
        {id: 4, title: 'add', solved: true, route: 'challenge/4'},
        {id: 5, title: 'add', solved: true, route: 'challenge/5'},
        {id: 6, title: 'add', solved: true, route: 'challenge/6'}]*/
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
        }
    },
    mounted () {
        this.updateChallengeList()
    },
}
</script>

<style scoped>

</style>
