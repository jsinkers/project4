<template>
    <td>
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
    </td>
</template>

<script>
import {eventBus} from "../state"

export default {
  name: "Dropdown",
  props: {
    editMode: Boolean,
    field: Object,
    options: Array,
    value: {
        type: [Number,  String]
    },
    instruction: String,
    instructions: Array,
    id: Number
  },
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
}
</script>

<style scoped>

</style>
