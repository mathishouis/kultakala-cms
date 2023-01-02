<template>
    <horizontal-card title="Latest news & updates">
        <div class="news-list">
            <news title="News 1" thumbnail="https://www.habborator.org/archive/habblets/regular/uk_party_frontpage_image.gif"/>
            <news title="News 1" thumbnail="https://www.habborator.org/archive/habblets/regular/rooftop.gif"/>
            <news title="News 1" thumbnail="https://www.habborator.org/archive/habblets/regular/landing1.gif"/>
            <news title="News 1" thumbnail="https://www.habborator.org/archive/habblets/regular/landing3.gif"/>
            <news title="News 1" thumbnail="https://www.habborator.org/archive/habblets/regular/filler_ad.png"/>
            <div class="news-list__footer">
                <primary-button>See all</primary-button>
            </div>
        </div>
    </horizontal-card>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import HorizontalCard from "../../common/HorizontalCard.vue";
    import TextField from "../../common/TextField.vue";
    import PrimaryButton from "../../common/PrimaryButton.vue";
    import SecondaryButton from "../../common/SecondaryButton.vue";
    import News from "./News.vue";

    export default defineComponent({
        name: 'NewsList',
        components: {
            HorizontalCard,
            TextField,
            PrimaryButton,
            SecondaryButton,
            News
        }
    });
</script>

<style lang="scss" scoped>

    .news-list {
        display: flex;
        flex-direction: column;
        &__footer {
            width: 100%;
            height: 26px;
            background-color: #262626;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

</style>
