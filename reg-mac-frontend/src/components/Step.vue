<template>
    <tr v-bind:class="{ currStep: step.id === currStepId}">
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
    </tr>
</template>

<script>
    export default {
        name: "Step",
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
    toggleEdit: function () {
      // this.editMode = !this.editMode;
      eventBus.$emit('toggle-edit', this.step.id)
    }
  }
    }
</script>

<style scoped>

</style>
