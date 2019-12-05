<template>
    <div class="container">
        <div class="row justify-content-between align-items-center" id="probStatement">
            <div class="col col-md-6">
                <h1>{{ $route.params.id }}. {{ title }}</h1>
            </div>
            <div class="col-auto">
                <button class="btn btn-primary align-middler" type="button" data-toggle="collapse" data-target="#probText">Collapse</button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div id="probText" class="collapse show">
                    <div class="card card-body">
                        <span v-html="statement"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div id="controls" class="container-fluid">
                    <div class="row">
                        <div class="col"><h4>Controls</h4></div>
                    </div>
                    <div class="row text-center">
                        <div class="col">
                            <button v-if="!running" class="btn btn-primary" @click="runRegMachine">Run</button>
                            <button v-else class="btn btn-primary" @click="pauseRegMachine">Pause</button>
                            <button id="btnStep" class="btn btn-primary" @click="stepRegMachine">Step</button>
                            <button class="btn btn-primary" @click="resetProgram">Reset</button>
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
                            <button class="btn btn-primary">Save</button>
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
                <tests :tests="tests"></tests>
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
      programOptions: []
    }
    },
    methods: {
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
      this.running = true
      this.rmInterval = setInterval(this.executeProgramStep, interval)
      document.querySelector('#btnStep').disabled = true
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
    runTests: function () {
      if (!this.testID) {
        this.testID = 1
        // console.log('test 1')
      }
      let i = this.tests.findIndex(x => x.id === this.testID)
      if (i >= 0) {
        this.testID = this.tests[i].id
        this.runTest(this.tests[i].id)
      } else {
        // console.log('tests complete')
        this.testID = null
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
      const id = this.program[this.program.length - 1].id + 1
      var newStep = {id: id, instruction: 'end', register: null, goTo: null, branchTo: null, editable: true, editMode: false}
      this.program.push(newStep)
      this.toggleEdit(id)
    },
    removeStep: function () {
      const id = this.program[this.program.length - 1].id
      // search for this step in the existing program
      const slice = this.program.slice(0, -1)
      if ((slice.findIndex(x => x.goTo === id) >= 0) || (slice.findIndex(x => x.branchTo === id) >= 0)) {
        alert('Cannot remove the last step of the program as it is referenced by other program steps.')
      } else {
        this.program.pop()
      }
    },
    updateChallenge: function(id) {
        this.id = id

        api
          .get(`challenge/${this.id}`)
              .then(response => {
                  this.response = response
                  this.title = response.data.title
                  this.statement = response.data.statement
                  this.program = response.data.program
                  this.tests = response.data.tests
                  this.registers = response.data.registers
              })

        this.currentStepId = 1
        this.running = false
        this.testID = null
        this.rmInterval = null
        this.programOptions = null
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

        this.updateChallenge(this.$route.params.id)
    },
    watch: {
        program: function () {
            this.updateOptions(this.fields)
        }
    },
    components: {
        Program,
        Register,
        Tests,
    },
    beforeRouteUpdate (to, from, next) {
        this.updateChallenge(to.params.id)
        next()
    }
}
</script>

<style scoped>

</style>
