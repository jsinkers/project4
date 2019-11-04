'use strict';

//import "/@progress/kendo-ui/js/kendo.grid";
//import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper';

//import "./test";

//const {GridInstaller} = require("@progress/kendo-grid-vue-wrapper");

//Vue.use(GridInstaller);

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
    },
    template : `<table class="table" id="tabProgram">
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
                          >
                    </step>
                </tbody>
            </table>`,
    methods: {

    },
    created: function() {

    }

});

Vue.component('step', {
    props: {
        progStep: Object,
        stepOptions: Array,
        currStepId: Number,
        fields: Array
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
    },
    template: `<td>
                    <span v-if="editMode">
                        <select class="form-control">
                            <option v-for="(opt, ind) in options"
                                    :key="ind">
                                    {{ opt }}
                            </option>
                        </select>
                    </span>
                    <span v-else>{{value}}</span>
                </td>`,
    methods: {

    }
});

var app = new Vue({
    el: '#app',
    data: {
        problem: {title: "Example: Add", statement: "In this example, we have a program to add together the numbers in register 1 and register 2.  " +
                "The answer is stored in register 2.  To run the program, click Run."},
        program: [{id: 1, instruction: "deb", register: 1, goTo: 2, branchTo: 3, editable: false, editMode: false},
            {id: 2, instruction: "inc", register: 2, goTo: 1, branchTo: null, editable: true, editMode: false},
            {id: 3, instruction: "end", register: null, goTo: null, branchTo: null, editable: false, editMode: false},],
        registers: [{id: 1, value: 5},
            {id: 2, value: 7},
            {id: 3, value: 0},
            {id: 4, value: 0},
            ],
        instructions: [{instruction: "inc", description: "Increment register", fields: ["register", "goTo"]},
            {instruction: "deb", description: "Decrement register or branch", fields: ["register", "goTo", "branchTo"]},
            {instruction: "end", description: "End", fields: []}],
        currentStepId: 1,
        running: false,
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
            }
        },
        runRegMachine: function() {
            this.running = true;
            this.rmInterval = setInterval(this.executeProgramStep, 500);
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
        /*options: function(field, rowID, table, filter, filterField) {
            const row = table[rowID];
            const filterRow = filter.find(x => x[filterField] === row[filterField]);
            var rv = null;
            if (filterRow.fields.find(field)) {

            }
        }*/
    },
    created: function() {
        this.updateOptions(this.fields);
    },
mounted() {
        eventBus.$on("toggle-edit", stepID => {this.toggleEdit(stepID)});
    },
    watch: {
        program: function() {
            this.updateOptions();
        }
    }
});
