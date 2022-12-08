<template>
    <tr :class="{currStep: step.id === currStepId,   clickable: step.editable}"
        @click="toggleEdit(step.editable)"
        >
        <td scope="row"><!--@click.stop="disableEdit(step.editable, step.editMode)"-->
            {{ step.id }}
            <pencil-icon v-if="step.editable && !step.editMode" class="text-primary"></pencil-icon>
            <pencil-off-icon v-if="step.editable && step.editMode" class="text-primary"></pencil-off-icon>
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
    import PencilIcon from 'vue-material-design-icons/Pencil.vue'
    import PencilOffIcon from 'vue-material-design-icons/PencilOff.vue'
    import { eventBus } from '../state'
    import Dropdown from './DropdownMenu'

    export default {
        name: "ProgramStep",
        components: {
            PencilIcon,
            PencilOffIcon,
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
                if (editable) {
                    eventBus.$emit('toggle-edit', this.step.id)
                }
            },
            /*disableEdit: function (editable, editMode) {
                if (editable && editMode) {
                    eventBus.$emit('toggle-edit', this.step.id)
                }
            }*/
        },
    }
</script>

<style scoped>

</style>
