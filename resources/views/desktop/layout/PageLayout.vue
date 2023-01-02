<template>
    <div class="page">
        <div class="page__column-1">
            <slot/>
        </div>
        <div class="page__column-2">
            <login-form/>
            <news-list/>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import LoginForm from "../form/LoginForm.vue";
    import NewsList from "../home/NewsList.vue";

    export default defineComponent({
        name: 'PageLayout',
        components: {
            LoginForm,
            NewsList
        }
    });
</script>

<style lang="scss" scoped>

    .page {
        width: 704px;
        margin-top: 88px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: row;
        gap: 24px;
        &__column-1 {
            flex: 479px;
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
        &__column-2 {
            flex: 201px;
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
    }

</style>
