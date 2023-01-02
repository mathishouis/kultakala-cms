<template>
    <horizontal-card title="Login">
        <div class="login-form">
            <text-field placeholder="Mail address" type="email" icon="mail" v-model="form.email" name="email" :error="form.errors.email" clear-button/>
            <text-field placeholder="Password" type="password" icon="key" v-model="form.password" name="email" :error="form.errors.email" clear-button/>
        </div>
    </horizontal-card>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import {useForm} from "@inertiajs/inertia-vue3";
    import HorizontalCard from "../../common/HorizontalCard.vue";
    import TextField from "../../common/TextField.vue";

    export default defineComponent({
        name: 'LoginForm',
        components: {
            HorizontalCard,
            TextField
        },
        data: () => ({
            form: useForm({
                email: '',
                password: ''
            }),
            showPassword: false,
        }),
    });
</script>

<style lang="scss" scoped>

    .login-form {
        padding: 8px 8px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

</style>
