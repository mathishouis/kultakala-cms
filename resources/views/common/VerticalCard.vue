<template>
    <div class="vertical-card">
        <div class="vertical-card__header">
            <div class="vertical-card__header--title">
                {{ title }}
            </div>
        </div>
        <div class="vertical-card__content">
            <slot/>
        </div>
        <div class="vertical-card__frame">
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'VerticalCard',
        props: {
            title: String
        }
    });
</script>

<style lang="scss" scoped>

    .vertical-card {
        position: relative;

        &__header {
            height: 100%;
            width: 29px;
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
                transform: rotate(-90deg);
                transform-origin: left top;
                bottom: -14px;
                left: 5px;
            }
        }

        &__content {
            position: absolute;
            width: calc(100% - 29px);
            height: 100%;
            background-color: red;
            left: 29px;
            z-index: 0;
            border-radius: 0 11px 11px 0;
            overflow: hidden;

        }

        &__frame {
            border-image: url(@images/frames/frame_1.png) 29 29 29 29 fill;
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
        }
    }

</style>
