<template>
    <div class="container-fluid tests">
        <div class="row justify-content-between">
            <div class="col-auto">
                <h4>Tests</h4>
            </div>
            <div class="col-auto">
                <button class="btn btn-primary" @click="runTests">Run tests</button>
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
                        <tr v-for="test in tests" :key="test.id">
                            <td scope="row">{{ test.id }}</td>
                            <td scope="row">{{ test.description }}</td>
                            <td scope="row"><ul class="nobull" v-html="testResultStr(test.expectedRegVals)"></ul></td>
                            <td scope="row"><ul class="nobull" v-html="testResultStr(test.actualRegVals)"></ul></td>
                            <td v-if="test.status === 'Pass'"
                                scope="row"
                            ><span class="mdi mdi-check-circle-outline text-success"></span></td>
                            <td v-else-if="test.status === 'Fail'"
                                scope="row"
                            ><span class="mdi mdi-alert-circle-outline text-danger"></span></td>
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

    export default {
        name: "Tests",
        props: {
          tests: Array
        },
        data: function () {
          return {}
        },
        methods: {
          runTests: function () {
            eventBus.$emit('run-tests')
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
        }
    }
</script>

<style scoped type="text/css">
    .nobull {
        list-style-type: none;
        padding: 0;
    }
</style>
