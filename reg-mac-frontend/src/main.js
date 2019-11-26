// 'use strict'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import tutorialPage from "./components/tutorialPage";

Vue.config.productionTip = false

// import "/@progress/kendo-ui/js/kendo.grid";
// import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper';

// import "./test";

// const {GridInstaller} = require("@progress/kendo-grid-vue-wrapper");

// Vue.use(GridInstaller);
// import Vue from "vue";
// import MenuIcon from "vue-material-design-icons";

// Vue.component('menu-icon', MenuIcon);

/* Vue.component('tutorialPage', {
  props: {
    isActive: false
  },
  template: `<div class="carousel-item h-100 w-100 container-fluid" :class="{ active: isActive}">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-10 col-lg-6 text-center">
                            <h3><slot name="header"></slot></h3>
                            <slot name="content"></slot>
                        </div>
                    </div>
                </div>`
}) */

/* Vue.component('tutorial', {
  props: {

  },
  template:
        `<div id="lightbox">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <ol class="carousel-indicators">
                            <li v-for="(page, ind) in tutorials.pages"
                                data-target="#lightbox"
                                data-slide-to="ind"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="item">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
  data: function () {
    return {}
  },
  methods: {

  }
}) */

/* Vue.component('register', {
  props: {
    regId: Number,
    regValue: Number
  },
  template: `<div class="register">
                    <div class="container group">
                        <div class="regHeading row justify-content-center">
                            <div class="col text-center">{{ regId }}</div>
                        </div>
                        <div class="regContent row justify-content-center">
                            <div class="col text-center"><h2>{{ value }}</h2></div>
                        </div>
                        <div class="regFooter row">
                            <div class="col btn-group btn-group-sm" role="group">
                                <button type="button" class="btn btn-outline-primary"
                                    @click="decReg"
                                    >-</button>
                                <button type="button" class="btn btn-outline-primary"
                                    @click="incReg"
                                    >+</button>
                            </div>
                        </div>
                    </div>
                </div>`,
  data: function () {
    return {
      value: this.regValue
    }
  },
  methods: {
    decReg: function () {
      this.value ? this.value-- : 0
    },
    incReg: function () {
      this.value++
    }
  },
  watch: {
    value: function () { this.$emit('update:reg-value', this.value) },
    regValue: function () { this.value = this.regValue }
  }
}) */

/* Vue.component('program', {
  props: {
    program: Array,
    fields: Array,
    currentStepId: Number,
    instructions: Array
  },
  template: `<div class="container-fluid px-0">
                    <div class="row">
                    <table class="table mb-0" id="tabProgram">
                    <thead>
                    <tr>
                        <th scope="col">Step</th>
                        <th scope="col">Instruction</th>
                        <th scope="col">Register</th>
                        <th scope="col">Go to</th>
                        <th scope="col">Branch to</th>
                        <!--<th scope="col"></th>-->
                    </tr>
                    </thead>
                    <tbody>
                        <step v-for="(step, ind) in program"
                              :prog-step="step"
                              :edit-mode="false"
                              :curr-step-id="currentStepId"
                              :key="ind"
                              :fields="fields"
                              :instructions="instructions"
                              >
                        </step>
                        </tbody>
                    </table>
                    </div>
                    <div class="row justify-content-center">
                            <div class="col-3">
                                <div class="btn-group btn-group-sm" role="group">
                                    <button class="btn btn-outline-primary" @click="removeStep">
                                        <!--<i class="mdi mdi-minus"></i>-->
                                        -
                                    </button>
                                    <button class="btn btn-outline-primary" @click="addStep">
                                        <!--<i class="mdi mdi-plus"></i>-->
                                        +
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            `,
  methods: {
    addStep: function () {
      eventBus.$emit('add-step')
    },
    removeStep: function () {
      eventBus.$emit('remove-step')
    }

  },
  created: function () {

  }

}) */

/* Vue.component('step', {
  props: {
    progStep: Object,
    stepOptions: Array,
    currStepId: Number,
    fields: Array,
    instructions: Array
  },
  template: `<tr v-bind:class="{ currStep: step.id === currStepId}">
                <td scope="row">
                    {{ step.id }} <a v-if="step.editable" href="#"
                        class="badge badge-primary"
                        @click="toggleEdit">Edit</a>
                </td>
                <dropdown v-for="(field, ind) in fields"
                    :key="ind"
                    :editMode="step.editMode"
                    :field="field"
                    :value="step[field.field]"
                    :options="field.options"
                    :id="step.id"
                    :instruction="step.instruction"
                    :instructions="instructions"
                ></dropdown>
            </tr>`,
  data: function () {
    return {
      step: this.progStep
    }
  },
  methods: {
    toggleEdit: function () {
      // this.editMode = !this.editMode;
      eventBus.$emit('toggle-edit', this.step.id)
    }
  }
}) */

/* Vue.component('dropdown', {
  props: {
    editMode: Boolean,
    field: Object,
    options: Array,
    value: Number | String,
    instruction: String,
    instructions: Array,
    id: Number
  },
  template: `<td>
                    <span v-if="editMode && this.isEditableField()">
                        <select class="form-control" @change="progValSel($event)">
                            <option v-for="(opt, ind) in options"
                                    :key="ind"
                                    :selected="opt === value"
                                    :value="ind"
                                    >
                                    {{ opt }}
                            </option>
                        </select>
                    </span>
                    <span v-else>{{value}}</span>
                </td>`,
  data: function () {
    return {
    }
  },
  methods: {
    isEditableField: function () {
      var inst = this.instructions.find(x => x.instruction === this.instruction)
      return !!inst.fields.find(x => x === this.field.field)
    },
    progValSel: function (event) {
      eventBus.$emit('prog-value-sel', {id: this.id, field: this.field.field, value: this.options[event.target.value]})
    }
  }
}) */

/* Vue.component('tests', {
  props: {
    tests: Array
  },
  template: `<div class="container-fluid tests">
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
                                    <tr v-for="(test, ind) in tests">
                                        <td scope="row">{{ test.id }}</td>
                                        <td scope="row">{{ test.description }}</td>
                                        <td scope="row">{{ testResultStr(test.expectedRegVals) }}</td>
                                        <td scope="row">{{ testResultStr(test.actualRegVals) }}</td>
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
                </div>`,
  data: function () {
    return {}
  },
  methods: {
    runTests: function () {
      eventBus.$emit('run-tests')
    },
    testResultStr: function (values) {
      var retStr = ''
      for (let i in values) {
        if (values[i].value) {
          retStr += `Reg ${values[i].id}: ${values[i].value}`
        }
      }
      return retStr
    }
  }
}) */

/* const Challenge = {
  template: `<div class="container">
            <div class="row justify-content-between align-items-center" id="probStatement">
                <div class="col col-md-6">
                    <h1>{{ problem.title }}</h1>
                </div>
                <div class="col-auto">
                    <button class="btn btn-primary align-middler" type="button" data-toggle="collapse" data-target="#probText">Collapse</button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div id="probText" class="collapse show">
                        <div class="card card-body">
                            <span v-html="problem.statement"></span>
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
        </div>`,
  data: function () {
    return {
      problem: {title: 'Example: Add',
        statement: `<p>In this example, we have a program that performs addition on the numbers in register 1 and register 2, storing the result in register 2.</p>
                                <p>Check out the values in Register 1 and Register 2.  What result do you expect?</p>
                                <p>When you're ready, click Run.</p>`},
      program: [{id: 1, instruction: 'deb', register: 1, goTo: 2, branchTo: 3, editable: false, editMode: false},
        {id: 2, instruction: 'inc', register: 2, goTo: 1, branchTo: null, editable: false, editMode: false},
        {id: 3, instruction: 'end', register: null, goTo: null, branchTo: null, editable: true, editMode: false}],
      tests: [{id: 1,
        description: '5+7=12',
        status: null,
        initRegVals: [{id: 1, value: 5}, {id: 2, value: 7}],
        expectedRegVals: [{id: 2, value: 12}],
        actualRegVals: [{id: 2, value: null}]},
      {id: 2,
        description: '10+3=13',
        status: null,
        initRegVals: [{id: 1, value: 10}, {id: 2, value: 3}],
        expectedRegVals: [{id: 2, value: 13}],
        actualRegVals: [{id: 2, value: null}]}],
      registers: [{id: 1, value: 5},
        {id: 2, value: 7},
        {id: 3, value: 0},
        {id: 4, value: 0}
      ],
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
      console.log('resetting registers')
      this.registers.forEach(function (item) {
        console.log(`${item.id}`)
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
      console.log('executeProgramStep')
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
      console.log(interval)
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
          console.log(j)
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
        let j = test.expectedRegVals.find(x => x.id === test.actualRegVals[i].id)
        if (test.actualRegVals[i].value !== test.expectedRegVals[i].value) {
          test.status = 'Fail'
        }
      }
    },
    runTests: function () {
      if (!this.testID) {
        this.testID = 1
        console.log('test 1')
      }
      let i = this.tests.findIndex(x => x.id === this.testID)
      if (i >= 0) {
        this.testID = this.tests[i].id
        this.runTest(this.tests[i].id)
      } else {
        console.log('tests complete')
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
      console.log('updating options')
      for (let f = 0; f < fields.length; f++) {
        console.log(`f:${f}`)
        let optField = fields[f].optionField
        let optObj = this[fields[f].optionObject]
        this.fields[f].options = optObj.map(x => { return x[optField] })
      }
      console.log('options updated')
    },
    updateProgram: function (updateObj) {
      console.log(updateObj)
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
  },
  watch: {
    program: function () {
      this.updateOptions(this.fields)
    }
  }
} */

/* const Tutorial = {
  template: `<div class="container-fluid carousel slide d-flex flex-column h-100" id="lightbox" data-interval="false">
                    <ol class="row carousel-indicators">
                        <li data-target="#lightbox" data-slide-to="0" class="active"></li>
                        <li data-target="#lightbox" data-slide-to="1"></li>
                        <li data-target="#lightbox" data-slide-to="2"></li>
                        <li data-target="#lightbox" data-slide-to="3"></li>
                        <li data-target="#lightbox" data-slide-to="4"></li>
                        <li data-target="#lightbox" data-slide-to="5"></li>
                        <li data-target="#lightbox" data-slide-to="6"></li>
                        <li data-target="#lightbox" data-slide-to="7"></li>
                        <li data-target="#lightbox" data-slide-to="8"></li>
                    </ol>
                    <div>
                        <a class="carousel-control-prev" href="#lightbox" role="button"
                           data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </div>
                    <div class="row align-items-center flex-grow-1">
                        <div class="col h-100">
                            <div class="carousel-inner container-fluid h-100">
                                <tutorial-page :is-active="true">
                                    <span slot="header">Register machine</span>
                                    <div slot="content">
                                        <p>This site gives you a series of challenges to solve using a register
                                            machine, a kind of idealised computer. This is a useful tool to explore how
                                            computers
                                            work.
                                            But first, let's look at what makes up a register machine.</p>
                                        <p>This content is based on Daniel Dennett's description of the register
                                            machine in <a
                                                    href="https://www.goodreads.com/en/book/show/18378002-intuition-pumps-and-other-tools-for-thinking">
                                                Intuition Pumps and Other Tools for Thinking</a>.</p>
                                    </div>
                                </tutorial-page>
                                <tutorial-page>
                                    <span slot="header">Registers</span>
                                    <div slot="content">
                                        <p>Register machines have a number of registers, which act as memory
                                            for the machine. They can store whole numbers, and each has a unique ID
                                            (Reg. 1, Reg. 2, ...).</p>
                                        <p>You can think of a register as a bucket into which you can place
                                            buttons, with the value of the register being the number of buttons in the
                                            bucket.
                                        </p>
                                        <p>Here are two registers. Try changing their values.</p>
                                        <div class="container">
                                            <div class="row justify-content-center">
                                                <register :reg-id="1" :reg-value="3"></register>
                                                <register :reg-id="2" :reg-value="4"></register>
                                            </div>
                                        </div>
                                    </div>
                                </tutorial-page>
                                <tutorial-page>
                                    <span slot="header">Processing Unit</span>
                                    <div slot="content">
                                        <p>The register machine also has a processing unit, which is capable of
                                            performing three different instructions. It can only execute one instruction at
                                            a time.</p>
                                    </div>
                                </tutorial-page>
                                <tutorial-page>
                                    <span slot="header">Program</span>
                                    <div slot="content">
                                        <p>A program for the register machine is simply a list of these instructions in a
                                            specific order.  The register machine will execute this instructions,
                                            one-by-one, operating on the values of the registers, to produce some result.
                                        </p>
                                    </div>
                                </tutorial-page>
                                <tutorial-page>
                                    <span slot="header">Instruction 1: Increment</span>
                                    <div slot="content">
                                        <p>The increment instruction adds 1 to the specified register, and then moves to a
                                            specified step in the program (the Go-To step).</p>
                                    </div>
                                </tutorial-page>
                                <tutorial-page>
                                    <span slot="header">Instruction 2: End</span>
                                    <div slot="content">
                                        <p>As you might have guessed, the End instruction halts execution of the register
                                            machine.  Without one of these steps in your program, it will keep the
                                            register machine running forever!</p>
                                    </div>
                                </tutorial-page>
                                <tutorial-page>
                                    <span slot="header">Instruction 3: Decrement-Branch</span>
                                    <div slot="content">
                                        <p>The Decrement-Branch instruction is a bit more involved.  If the specified
                                            register for that instruction contains a value greater than 0, then the
                                            register has its value reduced by 1, and the processing unit moves to the Go-To
                                            step specified.  If the specified register contains the value 0, then the
                                            processing unit moves to the Branch step specified.</p>

                                         <p>While this might seem a bit tricky, this is the most useful step, because it
                                             allows our programs to change behaviour based on the current values of the
                                             registers.  You'll see how this works as you solve the challenges.</p>
                                    </div>
                                </tutorial-page>
                                <tutorial-page>
                                    <span slot="header">Operating the register machine</span>
                                    <div slot="content">
                                        <p>Now that you know what makes up a register machine, let's look at how we can
                                        run our programs</p>
                                        <p>The register machine has three controls:</p>
                                        <ul>
                                            <li>Run (pause): this executes the program until completion, and can be clicked
                                                again to pause execution</li>
                                            <li>Step: this executes the next instruction in the program.  This is useful if
                                                you want to carefully examine the behaviour of the register machine - very
                                                useful for locating bugs!</li>
                                            <li>Reset: this takes the register machine back to the first step</li>
                                        </ul>
                                    </div>
                                </tutorial-page>
                                <tutorial-page>
                                    <span slot="header">Register machine</span>
                                    <div slot="content">
                                        <p>Now you know how the basics, let's get started!</p>
                                        <router-link class="btn btn-primary" to="/challenge">Get started</router-link>
                                    </div>
                                </tutorial-page>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a class="carousel-control-next" href="#lightbox" role="button"
                           data-slide="next">
                            <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>`
} */

/* const Home = {
  template: `
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
        </div>`
} */

/* const Playground = {
  template: `
        <div class="container">
            <div class="row justify-content-between align-items-center" id="probStatement">
                <div class="col">

                </div>
            </div>
            <div class="row">
                <div class="col">

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
                </div>
            </div>
        </div>`,
  data: function () {
    return {
      program: [{id: 1, instruction: 'end', register: null, goTo: null, branchTo: null, editable: true, editMode: false}],
      registers: [{id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
      ],
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
  }
} */

/* const Challenges = {
  template: `
        <div class="container-fluid">
            <div class="row">
                <div class="col-auto py-1" v-for="program in programs">
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
        </div>`,
  data: function () {
    return {
      programs: [{title: 'add', solved: true, route: '/challenge/1'},
        {title: 'longer name', solved: true, route: '/challenge/1'},
        {title: 'med name', solved: true, route: '/challenge/1'},
        {title: 'add', solved: true, route: '/challenge/1'},
        {title: 'add', solved: true, route: '/challenge/1'},
        {title: 'add', solved: true, route: '/challenge/1'}]
    }
  }
} */

/* const routes = [
    { path: '/', component: Home },
    { path: '/progress', component: Challenges },
    { path: '/challenge', component: Challenge },
    { path: '/playground', component: Playground },
    { path: '/tutorial', component: Tutorial },
]

const router = new VueRouter({
    routes
}); */

// const app =
new Vue({
  router,
  el: '#app',
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
}).$mount('#app')
