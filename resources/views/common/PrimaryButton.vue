<template>
    <div class="primary-button">
        <slot/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'PrimaryButton',
    });
</script>

<style lang="scss" scoped>

    .primary-button {
        position: relative;
        border-image: url(@images/frames/frame_5.png) 5 5 5 5 fill repeat;
        border-top: 5px solid transparent;
        border-left: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid transparent;
        height: 23px;
        font-size: 9px;
        color: #000000 !important;
        align-items: center;
        justify-content: center;
        display: flex;
        padding: 0 6px;
        cursor: pointer;
        font-family: "Volter Bold";
    }

</style>
