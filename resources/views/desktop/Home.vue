<template>
    <vertical-card class="hotel-promo" title="Welcome to Habbo Hotel">
        <div class="hotel-promo__drape"></div>
        <div class="hotel-promo__enter-button"></div>
    </vertical-card>
    <vertical-card class="hotel-about" title="About Habbo Hotel">
        <div class="hotel-about__text">
            <p>Habbo Hotel is a chill-out place where you can hang out with your friends. Guests are represented in the hotel by a personal figure called Habbo. This hotel is primarily for young people in the UK, but everyone is welcome.</p>
        </div>
        <div class="hotel-about__image"></div>
    </vertical-card>
    <vertical-card class="hotel-installation" title="No installation">
        <div class="hotel-installation__text">
            <b>There is nothing to install</b>
            <p>Habbo Hotel just requires an internet connection and nothing else. There is no software to install in order to access the hotel.</p>
            <img src="@images/scuti_icon.png">
        </div>
        <div class="hotel-installation__image"></div>
    </vertical-card>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import PageLayout from './layout/PageLayout.vue';
    import VerticalCard from '../common/VerticalCard.vue';

    export default defineComponent({
        name: 'Home',
        layout: PageLayout,
        components: {
            VerticalCard
        }
    });
</script>

<style lang="scss" scoped>
    .hotel-promo {
        height: 317px;
        &__drape {
            width: 316px;
            height: 217px;
            position: absolute;
            top: 0;
            left: 0;
            background-image: url(@images/reception_drape.png);
        }
        &__enter-button {
            width: 105px;
            height: 106px;
            background-image: url(@images/enter_button.gif);
            margin: 24px;
            position: absolute;
            bottom: 0;
            right: 0;
            cursor: pointer;
        }
    }
    .hotel-about {
        height: 134px;
        &__text {
            width: 50%;
            height: 100%;
            position: absolute;
            left: 0;
            padding: 11px 10px;
            font-size: 9px;
            background-color: #262626;
            display: flex;
            flex-direction: column;
            gap: 10px;
            * {
                color: #ADADAD;
            }
        }
        &__image {
            width: 50%;
            height: 100%;
            position: absolute;
            right: 0;
            background-image: url(@images/hotel_about.png);
            background-position: center;
        }
    }
    .hotel-installation {
        height: 134px;
        &__text {
            width: 50%;
            height: 100%;
            position: absolute;
            right: 0;
            padding: 11px 10px;
            color: #ADADAD;
            font-size: 9px;
            background-color: #262626;
            display: flex;
            flex-direction: column;
            gap: 10px;
            * {
                color: #ADADAD;
            }
        }
        &__image {
            width: 50%;
            height: 100%;
            position: absolute;
            left: 0;
            background-image: url(@images/hotel_installation.png);
            background-position: center;
        }
    }
</style>
