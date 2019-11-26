<template>
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
    </div>
</template>

<script>
export default {
  name: "Playground",
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
}
</script>

<style scoped>

</style>
