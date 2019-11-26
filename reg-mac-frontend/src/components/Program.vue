<template>
    <div class="container-fluid px-0">
        <div class="row">
        <table class="table mb-0" id="tabProgram">
        <thead>
        <tr>
            <th scope="col">Step</th>
            <th scope="col">Instruction</th>
            <th scope="col">Register</th>
            <th scope="col">Go to</th>
            <th scope="col">Branch to</th>
        </tr>
        </thead>
        <tbody>
            <ProgramStep v-for="(step, ind) in program"
                  :prog-step="step"
                  :edit-mode="false"
                  :curr-step-id="currentStepId"
                  :key="ind"
                  :fields="fields"
                  :instructions="instructions"
                  >
            </ProgramStep>
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
</template>

<script>
    import { eventBus } from '../state'
    import ProgramStep from "./ProgramStep"

    export default {
        name: "Program",
        props: {
          program: Array,
          fields: Array,
          currentStepId: Number,
          instructions: Array
        },
        methods: {
          addStep: function () {
            eventBus.$emit('add-step')
          },
          removeStep: function () {
            eventBus.$emit('remove-step')
          }

        },
        components: {
            ProgramStep,
        }
    }
</script>

<style scoped>

</style>
