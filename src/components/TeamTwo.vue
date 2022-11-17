<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="section-title text-center section-space--mb_60">
                <h2 class="font-weight--light text-white mb-15 wow move-up">Ecosystem</h2>
                <span class="section-text text-white wow move-up">Backed by awesome businesses</span>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="swiper-container team-slider__container">
                <swiper
                    :speed="800"
                    :loop="false"
                    :slidesPerView="3"
                    :spaceBetween="30"
                    :pagination="swiperOptions.pagination"
                    :breakpoints="swiperOptions.breakpoints"
                >
                    <swiper-slide class="swiper-slide">
                        <div class="grid-item wow move-up">
                            <!-- ht-team-member Start -->
                            <div class="ht-team-member text-center">
                                <div class="ht-team-member--inner">
                                    <!-- team-image Start -->
                                    <div class="team-image">
                                        <img class="img-fluid" src="../assets/img/logo/elabs.png" alt="avatar 01">
                                    </div>
                                    <!-- team-image End -->
                                    <!-- team-info Start -->
                                    <div class="team-info text-center">
                                        <h5 class="name">eLabs</h5>

                                        <div class="position">ecosis Laboratories</div>

                                        <div class="social-networks-rounded mt-10">
                                            <ul class="list ht-social-networks solid-rounded-icon">
                                                <li class="item">
                                                    <a target="_blank" href="https://elabs.enterprises/" class="social-link hint--bounce hint--top hint--primary" aria-label="Website"><i class="fab fa-globe"></i></a>
                                                </li>
                                                <li class="item">
                                                    <a target="_blank" href="https://github.com/ecosisLaboratories" class="social-link hint--bounce hint--top hint--primary" aria-label="Twitter"><i class="fab fa-github"></i></a>
                                                </li>
                                                <li class="item">
                                                    <a target="_blank" href="https://www.linkedin.com/company/ecosislaboratories/" class="social-link hint--bounce hint--top hint--primary" aria-label="Instagram"><i class="fab fa-linkedin"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- team-info End -->
                                </div>
                            </div>
                            <!-- ht-team-member End -->
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <div class="grid-item wow move-up">
                            <!-- ht-team-member Start -->
                            <div class="ht-team-member text-center">
                                <div class="ht-team-member--inner">
                                    <!-- team-image Start -->
                                    <div class="team-image">
                                        <img class="img-fluid" src="../assets/img/logo/cunoro.png" alt="avatar 02">
                                    </div>
                                    <!-- team-image End -->
                                    <!-- team-info Start -->
                                    <div class="team-info text-center">
                                        <h5 class="name">Cunoro</h5>

                                        <div class="position">DeFi 2.0</div>

                                        <div class="social-networks-rounded mt-10">
                                            <ul class="list ht-social-networks solid-rounded-icon">
                                                <li class="item">
                                                    <a target="_blank" href="https://cunoro.finance/" class="social-link hint--bounce hint--top hint--primary" aria-label="Website"><i class="fab fa-globe"></i></a>
                                                </li>
                                                <li class="item">
                                                    <a target="_blank" href="https://twitter.com/cunorofinance" class="social-link hint--bounce hint--top hint--primary" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                                                </li>
                                                <li class="item">
                                                    <a target="_blank" href="https://www.linkedin.com/company/cunoro/" class="social-link hint--bounce hint--top hint--primary" aria-label="Instagram"><i class="fab fa-linkedin"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- team-info End -->
                                </div>
                            </div>
                            <!-- ht-team-member End -->
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <div class="grid-item wow move-up">
                            <!-- ht-team-member Start -->
                            <div class="ht-team-member text-center">
                                <div class="ht-team-member--inner">
                                    <!-- team-image Start -->
                                    <div class="team-image">
                                        <img class="img-fluid" src="../assets/img/logo/scooterz.png" alt="avatar 01">
                                    </div>
                                    <!-- team-image End -->
                                    <!-- team-info Start -->
                                    <div class="team-info text-center">
                                        <h5 class="name">TheScooterz</h5>

                                        <div class="position">Electronic Scooters Shop</div>

                                        <div class="social-networks-rounded mt-10">
                                            <ul class="list ht-social-networks solid-rounded-icon">
                                                <li class="item">
                                                    <a target="_blank" href="https://thescooterz.com/" class="social-link hint--bounce hint--top hint--primary" aria-label="Website"><i class="fab fa-globe"></i></a>
                                                </li>
                                                <li class="item">
                                                    <a target="_blank" href="https://twitter.com/TheScooterzShop" class="social-link hint--bounce hint--top hint--primary" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                                                </li>
                                                <li class="item">
                                                    <a target="_blank" href="https://www.instagram.com/thescooterzshop/" class="social-link hint--bounce hint--top hint--primary" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- team-info End -->
                                </div>
                            </div>
                            <!-- ht-team-member End -->
                        </div>
                    </swiper-slide>
                </swiper>
                <!-- Add Arrows -->
                <div class="swiper-pagination swiper-pagination-2 section-space--mt_50 text-center"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import SwiperCore, { Pagination } from 'swiper/core'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    SwiperCore.use([Pagination])

    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        data () {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        1200:{
                            slidesPerView : 4
                        },
                        992:{
                            slidesPerView : 3
                        },
                        640:{
                            slidesPerView : 2
                        },
                        320:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        }
    }
</script>
