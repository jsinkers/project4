<template>
    <tr :class="{currStep: step.id === currStepId,   clickable: step.editable}"
        @click="toggleEdit(step.editable)"
        ><!-- v-on="{click: step.editable ? toggleEdit : null}" -->
        <td scope="row">
            {{ step.id }}
            <pencil-circle-outline-icon v-if="step.editable" class="text-primary"
            >Edit</pencil-circle-outline-icon>
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
    </tr>
</template>

<script>
    import PencilCircleOutlineIcon from 'vue-material-design-icons/PencilCircleOutline.vue'
    import { eventBus } from '../state'
    import Dropdown from './Dropdown'

    export default {
        name: "ProgramStep",
        components: {
            PencilCircleOutlineIcon,
            Dropdown,
        },
        props: {
            progStep: Object,
            stepOptions: Array,
            currStepId: Number,
            fields: Array,
            instructions: Array
        },
        data: function () {
            return {
                step: this.progStep
            }
        },
        methods: {
            toggleEdit: function (editable) {
              // this.editMode = !this.editMode;
                if (editable) {
                    eventBus.$emit('toggle-edit', this.step.id)
                }
            }
        },
    }
</script>

<style scoped>

</style>
