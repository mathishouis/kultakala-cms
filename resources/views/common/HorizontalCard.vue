<template>
    <div class="horizontal-card">
        <div class="horizontal-card__header">
            <div class="horizontal-card__header--title">
                {{ title }}
            </div>
        </div>
        <div class="horizontal-card__content">
            <slot/>
        </div>
        <div class="horizontal-card__frame">
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'HorizontalCard',
        props: {
            title: String
        }
    });
</script>

<style lang="scss" scoped>

    .horizontal-card {
        position: relative;
        &__header {
            height: 29px;
            width: 100%;
            position: absolute;
            z-index: 2;
            &--title {
                border-image: url(@images/frames/frame_2.png) 2 2 2 2 fill repeat;
                border-top: 2px solid transparent;
                border-left: 2px solid transparent;
                border-bottom: 2px solid transparent;
                border-right: 2px solid transparent;
                height: 19px;
                white-space: nowrap;
                position: absolute;
                padding: 3px 5px;
                bottom: 5px;
                left: 5px;
            }
        }

        &__content {
            width: 100%;

            background-color: #262626;
            margin-top: 29px;
            z-index: 0;
            border-radius: 0 0 11px 11px;
            overflow: hidden;
        }

        &__frame {
            border-image: url(@images/frames/frame_3.png) 29 29 29 29 fill;
            border-top: 29px solid transparent;
            border-left: 29px solid transparent;
            border-bottom: 29px solid transparent;
            border-right: 29px solid transparent;
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
        }
    }

</style>
