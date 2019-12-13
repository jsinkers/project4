<template>
    <div class="row debug">
        <div class="container debug2">
            <div class="row">
                <div v-if="solved" class="col alert alert-success" role="alert">
                    Great work! You solved this challenge.
                    <router-link class="btn btn-success" :to="nextChallengeRoute()">Next challenge</router-link>
                </div>
                <div v-else-if="(solved !== null) && (solved === false)" class="col alert alert-danger" role="alert">
                    Uh oh! It looks like your program didn't pass the tests.  Give it another go.
                    <div v-if="hint !== ''">
                        <button class="btn btn-danger" data-toggle="collapse" data-target="#hintText">Hint</button>
                        <div id="hintText" class="collapse">
                            <div class="card card-body">
                                <span v-html="hint"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-between align-items-center" id="probStatement">

                <div class="col col-md-6">
                    <h1>{{ $route.params.id }}. {{ title }}</h1>
                </div>
                <div class="col-auto">
                    <b-button variant="primary" class="align-middle" type="button" @click="resetChallenge"
                        >Reset challenge</b-button>
                    <b-button variant="primary" class="align-middle m-1" type="button" data-toggle="collapse"
                        data-target="#probText"
                        ><span v-if="!statementCollapsed"><unfold-less-horizontal-icon></unfold-less-horizontal-icon></span>
                        <span v-else><unfold-more-horizontal-icon></unfold-more-horizontal-icon></span>
                    </b-button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div id="probText" ref="probText" class="collapse show">
                        <div class="card card-body">
                            <span v-html="statement"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div id="controls" class="container">
                        <div class="row">
                            <div class="col"><h4>Controls</h4></div>
                        </div>
                        <div class="row text-center">
                            <div class="col">
                                <b-button v-if="!running" @click="runRegMachine" class="m-1"
                                    v-b-tooltip.hover title="Run to completion"
                                    variant="primary">Run</b-button>
                                <b-button v-else @click="pauseRegMachine"
                                    variant="primary" class="m-1"
                                    v-b-tooltip.hover title="Pause the register machine"
                                    >Pause</b-button>
                                <b-button variant="primary" id="btnStep" class="m-1" @click="stepRegMachine"
                                    v-b-tooltip.hover title="Execute the next step"
                                    >Step</b-button>
                                <b-button variant="primary" class="m-1" @click="resetProgram"
                                    v-b-tooltip.hover title="Return to first step"
                                    >Reset</b-button>

                            </div>
                        </div>
                    </div>
            </div>
            <div class="row">
                <div class="col-12 col-lg" id="program">
                    <div class="container-fluid">
                        <div class="row justify-content-between">
                            <div class="col-auto">
                                <h4>Program</h4>
                            </div>
                            <div class="col-auto">
                                <button class="btn btn-primary" @click="persist">Save</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <program :program="program"
                                        :current-step-id="currentStepId"
                                         :fields="fields"
                                         :program-options="programOptions"
                                         :instructions="instructions"
                                ></program>
                                <!--<program-grid></program-grid>-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg">
                    <div class="container-fluid" id="registers">
                        <div class="row justify-content-between">
                            <div class="col-auto">
                                <h4>Registers</h4>
                            </div>
                            <div class="col-auto">
                                <button class="btn btn-primary" @click="resetRegisters">Zero</button>
                            </div>
                        </div>
                        <div class="row">
                            <register v-for="(reg, ind) in registers"
                                      :key="ind"
                                      :reg-value="reg.value"
                                      :reg-id="reg.id"
                                      @update:reg-value="reg.value = $event"
                            ></register>
                        </div>
                    </div>
                    <tests :tests="tests" :curr-test="testID"></tests>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {eventBus} from "../state"
import Program from "../components/Program"
import Register from "../components/Register"
import Tests from "../components/Tests"
import api from '../services/api'
import UnfoldLessHorizontalIcon from 'vue-material-design-icons/UnfoldLessHorizontal.vue'
import UnfoldMoreHorizontalIcon from 'vue-material-design-icons/UnfoldLessHorizontal.vue'

export default {
    name: 'Challenge',
    //props: {
    //    id: Number
    //}
    data: function () {
    return {
      id: null,
        response: null,
        title: null,
        statement: null,
        program: [],
        tests: [],
        registers: [],
        hint: null,
        instructions: [{instruction: 'inc', description: 'Increment register', fields: ['instruction', 'register', 'goTo']},
        {instruction: 'deb', description: 'Decrement register or branch', fields: ['instruction', 'register', 'goTo', 'branchTo']},
        {instruction: 'end', description: 'End', fields: ['instruction']}],
        currentStepId: 1,
        running: false,
        testID: null,
        rmInterval: null,
        fields: [{field: 'instruction', options: [], optionObject: 'instructions', optionField: 'instruction'},
        {field: 'register', options: [], optionObject: 'registers', optionField: 'id'},
        {field: 'goTo', options: [], optionObject: 'program', optionField: 'id'},
        {field: 'branchTo', options: [], optionObject: 'program', optionField: 'id'}
      ],
        programOptions: [],
        solved: null,
        statementCollapsed: false,
    }
    },
    methods: {
        toggleStatement: function() {
            //this.$refs.probText.style = "collapse"
            this.statementCollapsed = !this.statementCollapsed
        },
    nextChallengeRoute: function() {
        const nextID = parseInt( this.$route.params.id) + 1
        return `/challenge/${nextID}`
    },
    resetRegisters: function () {
      // console.log('resetting registers')
      this.registers.forEach(function (item) {
        // console.log(`${item.id}`)
        item.value = 0
      })
    },
    resetProgram: function () {
      if (this.rmInterval) {
        this.rmInterval = clearInterval(this.rmInterval)
      }
      this.running = false
      this.currentStepId = 1
    },
    executeProgramStep: function () {
      // console.log('executeProgramStep')
      let currStep = this.program.find(x => x.id === this.currentStepId)
      if (currStep.instruction !== 'end') {
        var regInd = this.registers.findIndex(x => x.id === currStep.register)
      }
      if (currStep.instruction === 'inc') {
        // find register whose steps correspond to
        this.registers[regInd].value++
        this.currentStepId = currStep.goTo
      } else if (currStep.instruction === 'deb') {
        if (this.registers[regInd].value === 0) {
          this.currentStepId = currStep.branchTo
        } else {
          this.registers[regInd].value--
          this.currentStepId = currStep.goTo
        }
      } else if (currStep.instruction === 'end') {
        this.running = false
        if (this.rmInterval) {
          clearInterval(this.rmInterval)
          this.rmInterval = null
          document.querySelector('#btnStep').disabled = false
        }
        if (this.testID) {
          this.testResult()
        }
      }
    },
    runRegMachine: function (ev, interval = 500) {
        // console.log(interval)
        if (this.program.length > 0) {
            this.running = true
            this.rmInterval = setInterval(this.executeProgramStep, interval)
            document.querySelector('#btnStep').disabled = true
        }
    },
    stepRegMachine: function () {
      this.executeProgramStep()
    },
    pauseRegMachine: function () {
      this.running = false
      if (this.rmInterval) {
        this.rmInterval = clearInterval(this.rmInterval)
      }
      document.querySelector('#btnStep').disabled = false
    },
    runTest: function (testID) {
      // reset register machine
      this.resetProgram()

      // load data into registers
      let test = this.tests.find(x => x.id === testID)
      for (let i in this.registers) {
        let j = test.initRegVals.findIndex(x => x.id === this.registers[i].id)
        if (j >= 0) {
          // console.log(j)
          this.registers[i].value = test.initRegVals[j].value
        } else {
          this.registers[i].value = 0
        }
      }

      // run program
      this.runRegMachine(null, 100)
    },
    testResult: function () {
        // stores test results
        let test = this.tests.find(x => x.id === this.testID)
        for (let i in test.actualRegVals) {
            let j = this.registers.findIndex(x => x.id === test.actualRegVals[i].id)
            test.actualRegVals[i].value = this.registers[j].value
        }
        this.checkTestStatus()
        this.testID++
        this.runTests()

    },
    checkTestStatus: function () {
      let test = this.tests.find(x => x.id === this.testID)
      test.status = 'Pass'
      for (let i in test.actualRegVals) {
        let j = test.expectedRegVals.findIndex(x => x.id === test.actualRegVals[i].id)
        if (test.actualRegVals[i].value !== test.expectedRegVals[j].value) {
          test.status = 'Fail'
        }
      }
    },
    resetTests: function () {
        for (let i in this.tests) {
            this.tests[i].status = null
        }
    },
    runTests: function () {
        if (this.program.length > 0) {
            if (!this.testID) {
                this.testID = 1
                // set test status to unsolved
                this.resetTests()
                // turn off edit mode
                this.disableProgramEdit()
            }
            let i = this.tests.findIndex(x => x.id === this.testID)
            if (i >= 0) {
                this.testID = this.tests[i].id
                this.runTest(this.tests[i].id)
            } else {
                this.testID = null
                this.checkIfSolved()
                this.persist()
            }
        }
    },
    haltTests: function () {
        this.pauseRegMachine()
        this.testID = null
    },
    checkIfSolved() {
        var failedTest = false
        for (let i in this.tests) {
            if (this.tests[i].status !== 'Pass') {
                failedTest = true
            }
        }
        if (failedTest) {
            this.solved = false
        } else {
            this.solved = true
        }
    },
    disableProgramEdit: function () {
        for (let i in this.program) {
            this.program[i].editMode = false
        }
    },
    toggleEdit: function (stepID) {
      for (let i in this.program) {
        if (this.program[i].id === stepID) {
          this.program[i].editMode = !this.program[i].editMode
        } else {
          this.program[i].editMode = false
        }
      }
    },
    updateOptions: function (fields) {
      // console.log('updating options')
      for (let f = 0; f < fields.length; f++) {
        // console.log(`f:${f}`)
        let optField = fields[f].optionField
        let optObj = this[fields[f].optionObject]
        this.fields[f].options = optObj.map(x => { return x[optField] })
      }
      // console.log('options updated')
    },
    updateProgram: function (updateObj) {
      // console.log(updateObj)
      var stepInd = this.program.findIndex(x => x.id === updateObj.id)
      this.program[stepInd][updateObj.field] = updateObj.value
      if (updateObj.field === 'instruction') {
        for (let f in this.fields) {
          let inst = this.instructions.find(x => x.instruction === this.program[stepInd].instruction)
          if (!inst.fields.find(x => x === this.fields[f].field)) {
            // set to null if it is not a valid field for this instruction
            this.program[stepInd][this.fields[f].field] = null
          } else if (this.program[stepInd][this.fields[f].field] === null) {
            // set a default value if it is currently unselected
            this.program[stepInd][this.fields[f].field] = this.fields[f].options[0]
          }
        }
      }
    },
    addStep: function () {
        var id = 1
        if (this.program.length) {
            id = this.program[this.program.length - 1].id + 1
        }
        var newStep = {id: id, instruction: 'end', register: null, goTo: null, branchTo: null, editable: true, editMode: false}
        this.program.push(newStep)
        this.toggleEdit(id)
    },
    removeStep: function () {
        if (this.program.length) {
            const id = this.program[this.program.length - 1].id
            // search for this step in the existing program
            const slice = this.program.slice(0, -1)
            if ((slice.findIndex(x => x.goTo === id) >= 0) || (slice.findIndex(x => x.branchTo === id) >= 0)) {
                alert('Cannot remove the last step of the program as it is referenced by other program steps.')
            } else {
                this.program.pop()
            }
        }
    },
    updateChallenge: function(id, forceRefresh) {
        this.id = id
        const challenges = JSON.parse(localStorage.challenges)
        const challID = challenges.data.findIndex(x => x.id === id)
        if (!forceRefresh && challID !== -1) {
            const userData = challenges.data[challID]
            this.initialiseData(userData)
        } else {
            api
                .get(`challenge/${this.id}`)
                    .then(response => {
                        this.response = response
                        this.initialiseData(response.data)
                    })
                    .catch(error => {
                        if (error.response.status === 404) {
                            this.$router.push('/progress')
                        }
                    })

        }
    },
    resetChallenge: function() {
        this.updateChallenge(this.$route.params.id, true)
    },
    initialiseData: function(data) {
        this.title = data.title
        this.statement = data.statement
        this.program = data.program
        this.tests = data.tests
        this.registers = data.registers
        this.hint = data.hint
        if (data.solved !== null) {
            this.solved = data.solved
        } else {
            this.solved = null
        }
        this.currentStepId = 1
        this.running = false
        this.testID = null
        this.rmInterval = null
        this.programOptions = null
    },
    persist: function() {
        var challenges = JSON.parse(localStorage.challenges);
        const challID = challenges.data.findIndex(x => x.id === this.id)
        if (challID > -1) {
            challenges.data[challID] = this.stateRecord()
            localStorage.challenges = JSON.stringify(challenges)
        } else {
            challenges.data.push(this.stateRecord())
            localStorage.challenges = JSON.stringify(challenges)
        }
        // TODO: provide feedback on whether data saved or not - show in save button
    },
    stateRecord: function() {
        var state = {}
        state["id"] = this.id
        state["title"] = this.title
        state["statement"] = this.statement
        state["program"] = this.program
        state["tests"] = this.tests
        state["registers"] = this.registers
        state["hint"] = this.hint
        state["solved"] = this.solved
        return state
    }
    },
    created: function () {
        this.updateOptions(this.fields)
    },
    mounted () {
        eventBus.$on('toggle-edit', stepID => { this.toggleEdit(stepID) })
        eventBus.$on('prog-value-sel', obj => { this.updateProgram(obj) })
        eventBus.$on('add-step', () => { this.addStep() })
        eventBus.$on('remove-step', () => { this.removeStep() })
        eventBus.$on('run-tests', () => { this.runTests() })
        eventBus.$on('halt-tests', () => { this.haltTests() })
        this.updateChallenge(this.$route.params.id)
    },
    watch: {
        program: function () {
            this.updateOptions(this.fields)
        },
    },
    components: {
        Program,
        Register,
        Tests,
        UnfoldLessHorizontalIcon,
        UnfoldMoreHorizontalIcon,
    },
    beforeRouteUpdate (to, from, next) {
        this.updateChallenge(to.params.id)
        next()
    }
}
</script>

<style scoped>

</style>
