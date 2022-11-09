<template>
    <div class="brand-logo-slider-area bg-gray section-space--pt_100 section-space--pb_60 startup-carousel">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center section-space--mb_30">
                        <h2 class="font-weight--bold mb-15 wow move-up">Partners</h2>
                        <span class="section-text wow move-up">Awesome Support!</span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="brand-logo-slider__container-area">
                        <div class="brand-logo-slider__container">
                            <div class="brand-logo-slider__wrapper">
                                <swiper
                                    :speed="1000"
                                    :slidesPerView="5"
                                    :spaceBetween="30"
                                    :loop="false"
                                    :breakpoints="swiperOptions.breakpoints"
                                >
                                    <swiper-slide class="swiper-slide">
                                        <div class="brand-logo mb-0 wow move-up">
                                            <img src="../assets/img/partners/changenow_dark.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="swiper-slide">
                                        <div class="brand-logo mb-0 wow move-up">
                                            <img src="../assets/img/partners/purism_dark.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="swiper-slide">
                                        <div class="brand-logo mb-0 wow move-up">
                                            <img src="../assets/img/partners/shefan_dark.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="swiper-slide">
                                        <div class="brand-logo mb-0 wow move-up">
                                            <img src="../assets/img/partners/fab_dark.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="swiper-slide">
                                        <div class="brand-logo mb-0 wow move-up">
                                            <img src="../assets/img/partners/webmagaritas_dark.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import "swiper/css"

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data (){
            return {
                swiperOptions: {
                     breakpoints: {
                        1200:{
                            slidesPerView : 5
                        },
                        640:{
                            slidesPerView : 3
                        },
                        320:{
                            slidesPerView : 2
                        }
                    }
                }
            }
        }
    }
</script>
