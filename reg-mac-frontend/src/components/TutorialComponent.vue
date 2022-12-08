<template>
    <div class="carousel-item h-100 w-100 container-fluid" :class="{ active: isActive}">
        <div class="row justify-content-center align-items-center h-100">
            <div class="col-10 col-lg-6 text-center">
                <h3><slot name="header"></slot></h3>
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TutorialComponent",
        props: {
            isActive: {type: Boolean, default: false}
        },
        // template: "<template-page/>"
    }
</script>

<style scoped>

</style>
