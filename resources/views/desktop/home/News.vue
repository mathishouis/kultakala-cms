<template>
    <div class="news" :style="{ backgroundImage: 'url(' + thumbnail + ')' }">
        <div class="news__title">A new public room update!</div>
        <secondary-button class="news__button">Read more</secondary-button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import {useForm} from "@inertiajs/inertia-vue3";
    import HorizontalCard from "../../common/HorizontalCard.vue";
    import TextField from "../../common/TextField.vue";
    import SecondaryButton from "../../common/SecondaryButton.vue";

    export default defineComponent({
        name: 'NewsList',
        components: {
            HorizontalCard,
            TextField,
            SecondaryButton
        },
        props: {
            title: String,
            thumbnail: String
        }
    });
</script>

<style lang="scss" scoped>

    .news {
        height: 76px;
        width: 100%;
        border-bottom: 1px solid #000000;
        background-color: red;
        background-position: bottom right;
        position: relative;
        &__title {
            border-radius: 3px;
            color: #FFFFFF;
            font-size: 9px;
            background-color: rgba(0, 0, 0, 0.8);
            padding: 4px 4px;
            position: absolute;
            margin: 8px;
        }
        &__button {
            width: 96px;
            margin: 8px;
            bottom: -42px;
        }
    }

</style>
