<template>
    <div class="hero-software hero-swiper-btn" id="home">
        <div class="container_f1">
            <div class="position-relative">
                <swiper
                    :speed="1000"
                    :loop="true"
                    :slides-per-view="30"
                    :effect="'fade'"
                    :navigation="swiperOptions.navigation"
                >
                    <swiper-slide class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Your business deserves better Cash-Flow</h2>
                                <h6 class="hero-content-subtitle">Become part of a rewarding finance solution for you and your customers.</h6>
                                <a class="btn btn--green" href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank">
                                    Request
                                </a>
                            </div>
                            <div class="hero-thumb pr-100">
                                <img src="../assets/img/hero/hero-software/software-thumb-1.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Composable Cash-Flow</h2>
                                <h6 class="hero-content-subtitle">Build your own cash-flow logic on top of ecosis</h6>
                                <a class="btn btn--green" href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank">
                                    Request
                                </a>
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/hero/hero-software/software-thumb-2.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </swiper-slide>

                    <!-- Optional controls -->
                    <div class="swiper-button-prev swiper-button-white">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                    <div class="swiper-button-next swiper-button-white">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import SwiperCore, { Navigation, EffectFade } from 'swiper/core'
    SwiperCore.use([Navigation, EffectFade])

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                bgImg: {
                    backgroundImage: `url(${require("../assets/img/hero/hero-software/software-shape.png")})`
                },
                swiperOptions: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                }
            };
        }
    };
</script>

<style lang="scss">
    @import '../assets/scss/variabls.scss';
    @import '../assets/scss/elements/hero-software.scss';
</style>
