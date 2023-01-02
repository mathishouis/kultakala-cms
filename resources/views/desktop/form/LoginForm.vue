<template>
    <div class="login-form__logo"></div>
    <horizontal-card>
        <div class="login-form">
            <div class="login-form__login">
                <div class="login-form__loading" v-if="form.processing"></div>
                <text-field placeholder="Mail address" type="email" icon="mail" v-model="form.email" name="email" :error="form.errors.email" clear-button :style="{ opacity: form.processing ? '0.5' : '1' }"/>
                <text-field placeholder="Password" type="password" icon="key" v-model="form.password" name="email" :error="form.errors.email" clear-button :style="{ opacity: form.processing ? '0.5' : '1' }"/>
                <primary-button @click="submit" :style="{ opacity: form.processing ? '0.5' : '1' }">Log me in</primary-button>
            </div>
            <secondary-button>Create an account</secondary-button>
            <secondary-button>I forgot my password</secondary-button>
        </div>
    </horizontal-card>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import {useForm} from "@inertiajs/inertia-vue3";
    import HorizontalCard from "../../common/HorizontalCard.vue";
    import TextField from "../../common/TextField.vue";
    import PrimaryButton from "../../common/PrimaryButton.vue";
    import SecondaryButton from "../../common/SecondaryButton.vue";

    export default defineComponent({
        name: 'LoginForm',
        components: {
            HorizontalCard,
            TextField,
            PrimaryButton,
            SecondaryButton
        },
        data: () => ({
            form: useForm({
                email: '',
                password: ''
            }),
            showPassword: false,
        }),
        methods: {
            submit(): void {
                this.form
                    .post(this.route('login'), {
                        onSuccess: () => this.form.reset('password')
                    });
            },
        }
    });
</script>

<style lang="scss" scoped>

    .login-form {
        padding: 8px 8px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        position: relative;
        * {
            transition: 200ms;
        }
        &__login {
            display: flex;
            flex-direction: column;
            gap: 6px;
            position: relative;
        }
        &__logo {
            width: 100%;
            height: 20px;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(@images/small_logo.png);
            position: absolute;
            z-index: 1;
            top: 4px;
        }
        &__loading {
            position: absolute;
            width: 100%;
            height: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(@images/loading.gif);
            z-index: 1;
        }
    }

</style>
