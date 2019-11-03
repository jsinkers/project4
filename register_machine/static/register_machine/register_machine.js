'use strict';

//import "/@progress/kendo-ui/js/kendo.grid";
//import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper';

//import "./test";

//const {GridInstaller} = require("@progress/kendo-grid-vue-wrapper");

//Vue.use(GridInstaller);

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
        currentStepId: Number
    },
    template : `<table class="table" id="tabProgram">
                <thead>
                <tr>
                    <th scope="col">Step</th>
                    <th scope="col">Instruction</th>
                    <th scope="col">Register</th>
                    <th scope="col">Go to step</th>
                    <th scope="col">Branch to step</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                    <step v-for="(step, ind) in program"
                          :prog-step="step"
                          :edit-mode="false"
                          :curr-step-id="currentStepId"
                          :key="ind"
                          @>
                    </step>
                </tbody>
            </table>`,
    methods: {

    },
    created: function() {

    }

});


Vue.component('program-grid', {
    props: {
        program: Array
    },
    template: `<kendo-grid :data-source="program">
            </kendo-grid>`
});

Vue.component('step', {
    props: {
        progStep: Object,
        editMode: Boolean,
        currStepId: Number
    },
    template: `<tr v-bind:class="{ currStep: step.id === currStepId}">
                <td scope="row">{{ step.id }}</td>
                <td>{{ step.instruction }}</td>
                <td>{{ step.register }}</td>
                <td>{{ step.goTo }}</td>
                <td>{{ step.branchTo }}</td>
                <td v-if="step.editable">
                    <a href="#"
                        class="badge badge-primary"
                        @click="toggleEdit">Edit</a>
                </td>
                <td v-else></td>
            </tr>`,
    data: function() {
        return {
            step: this.progStep
        }
    },
    methods: {
        toggleEdit: function() {
            //this.editMode = !this.editMode;
            this.$emit("toggle-edit");
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        program: [{id: 1, instruction: "deb", register: 1, goTo: 2, branchTo: 3, editable: false},
            {id: 2, instruction: "inc", register: 2, goTo: 1, branchTo: null, editable: true},
            {id: 3, instruction: "end", register: null, goTo: null, branchTo: null, editable: false},],
        registers: [{id: 1, value: 0},
            {id: 2, value: 1},
            {id: 3, value: 2},
            {id: 4, value: 3},
            {id: 5, value: 4},
            {id: 6, value: 5},
            {id: 7, value: 6},
            {id: 8, value: 7}],
        instructions: [{instruction: "inc", description: "Increment register", fields: ["register", "goTo"]},
            {instruction: "deb", description: "Decrement register or branch", fields: ["register", "goTo"]},
            {instruction: "end", description: "End", fields: []}],
        currentStepId: 1,
        running: false,
        rmInterval: null
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
                //let reg = registers[regInd];
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
            //while (this.running) {
            //console.log("running regMachine");
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
        }
    }
});

function runRegisterMachine(program, registers) {
    /* This function takes a program object comprised of instructions, as well as the states of different registers,
    and runs the register machine. */
    //var ind = 0;
    var running = true;
    while (running) {
        let currStep = program.steps[ind];
        if (currStep.instruction === "inc") {
            registers[currStep.register]++;
            ind = currStep.goTo;
        } else if (currStep.instruction === "deb") {
            let reg = registers[currStep.register];
            if (reg === 0) {
                ind = currStep.branchTo;
            } else {
                reg--;
                ind = currStep.goTo;
            }
        } else if (currStep.instruction === "end") {
            running = false;
        }
    }
}

