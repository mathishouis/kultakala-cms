<template>
    <div class="input" :class="error ? 'error' : ''">
        <img :src="'@images/icons/' + icon + '.png'">
        <input :placeholder="placeholder" :type="type" :value="modelValue" @input="input($event.target.value)" ref="input" :id="'input-' + name">
        <div class="input__clear-button" @click="clear" v-if="showClearButton">
            <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-2.293 4.293a1 1 0 0 0-1.414 1.414l2.293 2.293-2.293 2.293a1 1 0 1 0 1.414 1.414l2.293-2.293 2.293 2.293a1 1 0 1 0 1.414-1.414l-2.293-2.293 2.293-2.293a1 1 0 0 0-1.414-1.414l-2.293 2.293-2.293-2.293z" fill="#2a2526"></path></svg>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Textfield',
        props: {
            icon: String,
            modelValue: String,
            type: String,
            name: String,
            placeholder: String,
            clearButton: Boolean,
            error: String
        },
        emits: ['update:modelValue', 'change'],
        data() {
            return {
                showClearButton: this.clearButton
            }
        },
        methods: {
            focus() {
                this.$refs.input.focus()
            },
            clear() {
                this.input('');
                this.showClearButton = false;
            },
            input(value) {
                console.log(value);
                this.$emit('update:modelValue', value);
                if(value !== '' && this.clearButton) return this.showClearButton = true;
                return this.showClearButton = false;
            }
        },
        mounted() {
            if (this.value !== undefined && this.clearButton) return this.showClearButton = true;
            return this.showClearButton = false;
        }
    })
</script>

<style lang="scss" scoped>
    .input {
        display: flex;
        align-items: center;
        gap: 2px;
        transition: box-shadow 200ms;
        position: relative;
        height: 23px;
        border-image: url(@images/frames/frame_4.png) 3 3 3 3 fill repeat;
        border-top: 3px solid transparent;
        border-left: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-right: 3px solid transparent;
        border-radius: 2px;
        input {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            padding: 0px 0px;
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
            font-size: 9px;
            border: none;
            width: 100%;
            background-color: transparent;
            &::placeholder {
                color: #ADADAD;
                opacity: 1;
            }
            &:-ms-input-placeholder {
                color: #ADADAD;
            }
            &::-ms-input-placeholder {
                color: #ADADAD;
            }
            &:focus {
                outline: none;
            }
        }
        &:focus-within {
            border: 1px solid #FF8015;
        }
        &__icon {
            margin-left: 14px;
            margin-right: -8px;
        }
        &__clear-button {
            width: 20px;
            height: 20px;
            margin-right: 12px;
            margin-left: 4px;
            cursor: pointer;
            transition: opacity 200ms;
            position: absolute;
            right: 0;
            &:hover {
                opacity: .9;
            }
            &:active {
                opacity: .7;
            }
            svg {
                fill: #5c5f62;
                height: 20px;
                width: 20px;
            }
        }
        &.error {
            box-shadow: 0 0 0 0.2rem lime;
            border: 1px solid cyan;
        }
    }
</style>
