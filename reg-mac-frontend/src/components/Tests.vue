<template>
    <div class="container-fluid tests">
        <div class="row justify-content-between">
            <div class="col-auto">
                <h4>Tests</h4>
            </div>
            <div class="col-auto">
                <button v-if="currTest === null" class="btn btn-primary" @click="runTests">Run tests</button>
                <button v-else class="btn btn-primary" @click="haltTests">Stop tests</button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <table class="table mb-0">
                    <thead>
                    <tr>
                        <th scope="col">Test</th>
                        <th scope="col">Description</th>
                        <th scope="col">Expected</th>
                        <th scope="col">Result</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="test in tests" :key="test.id" :class="{currTest: test.id === currTest}">
                            <td scope="row">{{ test.id }}</td>
                            <td scope="row">{{ test.description }}</td>
                            <td scope="row"><ul class="nobull" v-html="testResultStr(test.expectedRegVals)"></ul></td>
                            <td scope="row"><ul class="nobull" v-html="testResultStr(test.actualRegVals)"></ul></td>
                            <td v-if="test.status === 'Pass'"
                                scope="row"
                            ><check-circle-outline-icon class="text-success"></check-circle-outline-icon></td>
                            <td v-else-if="test.status === 'Fail'"
                                scope="row"
                            ><alert-circle-outline-icon class="text-danger"></alert-circle-outline-icon></td>
                            <td v-else scope="row"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from "../state";
    import CheckCircleOutlineIcon from 'vue-material-design-icons/CheckCircleOutline.vue'
    import AlertCircleOutlineIcon from 'vue-material-design-icons/AlertCircleOutline.vue'

    export default {
        name: "Tests",
        props: {
          tests: Array,
          currTest: Number,
        },
        data: function () {
          return {}
        },
        methods: {
          runTests: function () {
            eventBus.$emit('run-tests')
          },
            haltTests: function() {
              eventBus.$emit('halt-tests')
            },
          testResultStr: function (values) {
            var retStr = ""
            for (let i in values) {
              if (values[i].value !== null) {
                retStr += `<li>Reg ${values[i].id}: ${values[i].value}</li>`
              }
            }
            return retStr
          }
        },
        components: {
            CheckCircleOutlineIcon,
            AlertCircleOutlineIcon,
        }
    }
</script>

<style scoped type="text/css">
    .nobull {
        list-style-type: none;
        padding: 0;
    }
</style>
