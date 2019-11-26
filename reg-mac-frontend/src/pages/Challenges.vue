<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-auto py-1" v-for="program in programs" :key="program.id">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ program.title }}
                            <span v-if="program.solved" class="mdi mdi-check-circle-outline text-success"></span>
                            <span v-else class="mdi mdi-alert-circle-outline text-secondary"></span>
                        </h5>
                        <a :href="program.route" class="card-link">Go to challenge</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Challenges",
  data: function () {
    return {
      programs: [{id: 1, title: 'add', solved: true, route: '/challenge/1'},
        {id: 2, title: 'longer name', solved: true, route: '/challenge/1'},
        {id: 3, title: 'med name', solved: true, route: '/challenge/1'},
        {id: 4, title: 'add', solved: true, route: '/challenge/1'},
        {id: 5, title: 'add', solved: true, route: '/challenge/1'},
        {id: 6, title: 'add', solved: true, route: '/challenge/1'}]
    }
  }
}
</script>

<style scoped>

</style>
