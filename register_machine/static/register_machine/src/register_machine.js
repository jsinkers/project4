'use strict';

//import "/@progress/kendo-ui/js/kendo.grid";
//import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper';

//import "./test";

//const {GridInstaller} = require("@progress/kendo-grid-vue-wrapper");

//Vue.use(GridInstaller);
//import Vue from "vue";
//import MenuIcon from "vue-material-design-icons";

//Vue.component('menu-icon', MenuIcon);

var eventBus = new Vue();

Vue.component('register', {
    props: {
        regId: Number,
        regValue: Number,
    },
    template: `<div class="register">
            <div class="container">
                <div class="regHeading row justify-content-center">
                    {{ regId }}
                </div>
                <div class="regContent row justify-content-center">
                    <h2>{{ value }}</h2>
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
    data: function() {
        return {
            value: this.regValue
        }
    },
    methods: {
        decReg: function () {
            this.value ? this.value-- : 0;
        },
        incReg: function () {
            this.value++;
        }
    },
    watch: {
        value: function() {this.$emit("update:reg-value", this.value)},
        regValue: function() {this.value = this.regValue;}
    }
});

Vue.component('program', {
    props: {
        program: Array,
        fields: Array,
        currentStepId: Number,
        instructions: Array
    },
    template : `<div class="container-fluid">
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
        addStep: function() {
            eventBus.$emit("add-step");
        },
        removeStep: function() {
            eventBus.$emit("remove-step");
        }

    },
    created: function() {

    }

});

Vue.component('step', {
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
    data: function() {
        return {
            step: this.progStep
        }
    },
    methods: {
        toggleEdit: function() {
            //this.editMode = !this.editMode;
            eventBus.$emit("toggle-edit", this.step.id);
        }
    }
});

Vue.component('dropdown', {
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
    data: function() {
        return {
        }
    },
    methods: {
        isEditableField: function() {
            var inst = this.instructions.find(x => x.instruction === this.instruction);
            return !!inst.fields.find(x => x === this.field.field);
        },
        progValSel: function(event) {
            eventBus.$emit("prog-value-sel", {id: this.id, field: this.field.field, value: this.options[event.target.value]});
        }
    }
});

Vue.component('tests', {
    props: {
        tests: Array,
    },
    template: `<div class="container-fluid tests">
                    <div class="row">
                        <div class="col">
                            <h4>Tests</h4>
                        </div>
                        <div class="col">
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
    data: function() {
        return {}
    },
    methods: {
        runTests: function() {
            eventBus.$emit("run-tests");
        },
        testResultStr: function(values) {
            var retStr = "";
            for (let i in values) {
                if (values[i].value) {
                    retStr += `Reg ${values[i].id}: ${values[i].value}`;                }
            }
            return retStr;
        }
    }
})
var app = new Vue({
    el: '#app',
    data: {
        problem: {title: "Example: Add",
                    statement: `<p>In this example, we have a program that performs addition on the numbers in register 1 and register 2, storing the result in register 2.</p>
                                <p>Check out the values in Register 1 and Register 2.  What result do you expect?</p>
                                <p>When you're ready, click Run.</p>`},
        program: [{id: 1, instruction: "deb", register: 1, goTo: 2, branchTo: 3, editable: false, editMode: false},
            {id: 2, instruction: "inc", register: 2, goTo: 1, branchTo: null, editable: false, editMode: false},
            {id: 3, instruction: "end", register: null, goTo: null, branchTo: null, editable: true, editMode: false},],
        tests: [{id: 1, description: "5+7=12", status: null,
                initRegVals: [{id: 1, value: 5}, {id: 2, value: 7}],
                expectedRegVals: [{id: 2, value: 12}],
                actualRegVals: [{id: 2, value: null}]},
                {id: 2, description: "10+3=13", status: null,
                initRegVals: [{id: 1, value: 10}, {id: 2, value: 3}],
                expectedRegVals: [{id: 2, value: 13}],
                actualRegVals: [{id: 2, value: null}]}],
        registers: [{id: 1, value: 5},
            {id: 2, value: 7},
            {id: 3, value: 0},
            {id: 4, value: 0},
            ],
        instructions: [{instruction: "inc", description: "Increment register", fields: ["instruction", "register", "goTo"]},
            {instruction: "deb", description: "Decrement register or branch", fields: ["instruction", "register", "goTo", "branchTo"]},
            {instruction: "end", description: "End", fields: ["instruction"]}],
        currentStepId: 1,
        running: false,
        testID: null,
        rmInterval: null,
        fields: [{field: "instruction", options: [], optionObject: "instructions", optionField: "instruction"},
                {field: "register", options: [], optionObject: "registers", optionField: "id"},
                {field: "goTo", options: [], optionObject: "program", optionField: "id"},
                {field: "branchTo", options: [], optionObject: "program", optionField: "id"}
        ],
        programOptions: []
    },
    components: {
        //Grid
    },
    methods: {
        resetRegisters: function () {
            console.log("resetting registers");
            this.registers.forEach(function(item) {
                console.log(`${item.id}`);
                item.value = 0;
            });
        },
        resetProgram: function () {
            if (this.rmInterval) {
                this.rmInterval = clearInterval(this.rmInterval);
            }
            this.running = false;
            this.currentStepId = 1;
        },
        executeProgramStep: function () {
            console.log("executeProgramStep");
            let currStep = this.program.find(x => x.id === this.currentStepId);
            if (currStep.instruction !== "end") {
                var regInd = this.registers.findIndex(x => x.id === currStep.register);
            }
            if (currStep.instruction === "inc") {
                // find register whose steps correspond to
                this.registers[regInd].value++;
                this.currentStepId = currStep.goTo;
            } else if (currStep.instruction === "deb") {
                if (this.registers[regInd].value === 0) {
                    this.currentStepId = currStep.branchTo;
                } else {
                    this.registers[regInd].value--;
                    this.currentStepId = currStep.goTo;
                }
            } else if (currStep.instruction === "end") {
                this.running = false;
                if (this.rmInterval) {
                    clearInterval(this.rmInterval);
                    this.rmInterval = null;
                    document.querySelector("#btnStep").disabled = false;
                }
                if (this.testID) {
                    this.testResult();
                }

            }
        },
        runRegMachine: function(ev, interval = 500) {
            console.log(interval);
            this.running = true;
            this.rmInterval = setInterval(this.executeProgramStep, interval);
            document.querySelector("#btnStep").disabled = true;
        },
        stepRegMachine: function() {
            this.executeProgramStep();
        },
        pauseRegMachine: function() {
            this.running = false;
            if (this.rmInterval) {
                this.rmInterval = clearInterval(this.rmInterval);
            }
            document.querySelector("#btnStep").disabled = false;
        },
        runTest: function(testID) {
            // reset register machine
            this.resetProgram();

            // load data into registers
            let test = this.tests.find(x => x.id === testID);
            for (let i in this.registers) {
                let j = test.initRegVals.findIndex(x => x.id === this.registers[i].id);
                if (j >= 0) {
                    console.log(j);
                    this.registers[i].value = test.initRegVals[j].value
                } else {
                    this.registers[i].value = 0
                }
            }
            // TODO: disable controls - use a test mode?

            // run program
            this.runRegMachine(null, 100);

            // TODO: fix table in template
            // TODO: if program is updated tests need to be reset

        },
        testResult: function() {
            // stores test results
            let test = this.tests.find(x => x.id === this.testID);
            for (let i in test.actualRegVals) {
                let j = this.registers.findIndex(x => x.id === test.actualRegVals[i].id);
                test.actualRegVals[i].value = this.registers[j].value;
            }
            this.checkTestStatus();
            this.testID++;
            this.runTests();
        },
        checkTestStatus: function() {
            let test = this.tests.find(x => x.id === this.testID);
            test.status = "Pass";
            for (let i in test.actualRegVals) {
                let j = test.expectedRegVals.find(x => x.id === test.actualRegVals[i].id);
                if (test.actualRegVals[i].value !== test.expectedRegVals[i].value) {
                    test.status = "Fail";
                }
            }
        },
        runTests: function() {
            if (!this.testID) {
                this.testID = 1;
                console.log("test 1");
            }
            let i = this.tests.findIndex(x => x.id === this.testID);
            if (i >= 0) {
                this.testID = this.tests[i].id;
                this.runTest(this.tests[i].id);
            } else {
                console.log("tests complete");
                this.testID = null;
            }
        },
        toggleEdit: function(stepID) {
            for (let i in this.program) {
                if (this.program[i].id === stepID) {
                    this.program[i].editMode = !this.program[i].editMode;
                } else {
                    this.program[i].editMode = false;
                }
            }
        },
        updateOptions: function(fields) {
            console.log("updating options");
            for (let f = 0; f < fields.length; f++) {
                console.log(`f:${f}`);
                let optField = fields[f].optionField;
                let optObj = this[fields[f].optionObject];
                this.fields[f].options = optObj.map(x => {return x[optField]});
            }
            console.log("options updated");
        },
        updateProgram: function(updateObj) {
            console.log(updateObj);
            var stepInd = this.program.findIndex(x => x.id === updateObj.id);
            this.program[stepInd][updateObj.field] = updateObj.value;
            if (updateObj.field === "instruction") {
                for (let f in this.fields) {
                    let inst = this.instructions.find(x => x.instruction === this.program[stepInd].instruction);
                    if (!inst.fields.find(x => x === this.fields[f].field)) {
                        // set to null if it is not a valid field for this instruction
                        this.program[stepInd][this.fields[f].field] = null;
                    } else if (this.program[stepInd][this.fields[f].field] === null) {
                        // set a default value if it is currently unselected
                        this.program[stepInd][this.fields[f].field] = this.fields[f].options[0];
                    }
                }
            }
        },
        addStep: function() {
            const id = this.program[this.program.length - 1].id + 1;
            var newStep = {id: id, instruction: "end", register: null, goTo: null, branchTo: null, editable: true, editMode: false};
            this.program.push(newStep);
            this.toggleEdit(id);
        },
        removeStep: function() {
            const id = this.program[this.program.length - 1].id;
            // search for this step in the existing program
            const slice = this.program.slice(0, -1);
            if ((slice.findIndex(x => x.goTo === id) >= 0) || (slice.findIndex(x => x.branchTo === id) >= 0)) {
                alert("Cannot remove the last step of the program as it is referenced by other program steps.")
            } else {
                this.program.pop()
            }
        }
    },
    created: function() {
        this.updateOptions(this.fields);
    },
    mounted() {
        eventBus.$on("toggle-edit", stepID => {this.toggleEdit(stepID)});
        eventBus.$on("prog-value-sel", obj => {this.updateProgram(obj)});
        eventBus.$on("add-step", () => {this.addStep()});
        eventBus.$on("remove-step", () => {this.removeStep()});
        eventBus.$on("run-tests", () => {this.runTests()});
    },
    watch: {
        program: function() {
            this.updateOptions(this.fields);
        }
    }
});
