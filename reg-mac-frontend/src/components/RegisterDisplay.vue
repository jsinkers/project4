<template>
    <div class="register">
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
    </div>
</template>

<script>
export default {
    name: "RegisterDisplay",
    props: {
        regId: Number,
        regValue: Number
    },
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
}
</script>

<style scoped>

</style>
