<template>
    <div class="secondary-button">
        <slot/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'SecondaryButton',
    });
</script>

<style lang="scss" scoped>

    .secondary-button {
        position: relative;
        border-image: url(@images/frames/frame_6.png) 4 20 4 3 fill repeat;
        border-top: 4px solid transparent;
        border-left: 3px solid transparent;
        border-bottom: 4px solid transparent;
        border-right: 20px solid transparent;
        height: 18px;
        font-size: 9px;
        color: #000000 !important;
        font-family: "Volter Bold";
        align-items: center;

        display: flex;
        padding: 0px 6px;
        cursor: pointer;
    }

</style>
