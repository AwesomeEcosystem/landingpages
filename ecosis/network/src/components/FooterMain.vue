<template>
    <div class="footer-area-wrapper" :class="FooterStyle">
        <div class="footer-area section-space--ptb_90">
            <div class="container">
                <div class="row footer-widget-wrapper">
                    <div class="col-lg-3 col-md-6 footer-widget">
                        <div class="footer-widget__logo mb-30">
                            <router-link to="/">
                                <img src="../assets/img/logo/logo-dark.png" class="img-fluid logo-dark" alt="logo">
                                <img src="../assets/img/logo/logo-light.png" class="img-fluid logo-light" alt="logo">
                            </router-link>
                        </div>
                        <ul class="footer-widget__list">
                            <li>ecosis Network Ltd</li>
                            <li>
                                <a href="elabs.enterprises" target="_blank" class="hover-style-link hover-style-link--green">elabs.enterprises</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 footer-widget">
                        <h6 class="footer-widget__title mb-20">Products</h6>
                        <ul class="footer-widget__list">
                            <li>
                                <router-link to="/eco" class="hover-style-link">Eco</router-link>
                            </li>
                            <li>
                                <router-link to="/nomics" class="hover-style-link">Nomics</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-widget">
                        <h6 class="footer-widget__title mb-20">Ecosystem</h6>
                        <ul class="footer-widget__list">
                            <li>
                                <a class="hover-style-link" href="https://elabs.enterprises/" target="_blank">ecosis Laboratories</a>
                            </li>
                            <!-- <li>
                                <a class="hover-style-link" href="https://ecosis.network/" target="_blank">ecosis Network</a>
                            </li> -->
                            <li>
                                <a class="hover-style-link" href="https://ecosis.finance/" target="_blank">ecosis Finance</a>
                            </li>
                            <li>
                                <a class="hover-style-link" href="https://ecosis.pro/" target="_blank">ecosis Pro</a>
                            </li>
                            <li>
                                <a class="hover-style-link" href="https://ecosis.shop/" target="_blank">ecosis Shop</a>
                            </li>
                        </ul>
                    </div>
                    <!-- <div class="col-lg-2 col-md-6 footer-widget">
                        <h6 class="footer-widget__title mb-20">Quick links</h6>
                        <ul class="footer-widget__list">
                            <li>
                                <router-link to="/" class="hover-style-link">Terms of Payment</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="hover-style-link">Terms of Use</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="hover-style-link">Privacy Policy</router-link>
                            </li>
                        </ul>
                    </div> -->
                    <div class="col-lg-3 col-md-6 offset-lg-1 footer-widget">
                        <div class="twitter-feed-slider">
                            <div class="swiper-container twitter-feed-slider__container">
                                <div class="swiper-wrapper twitter-feed-slider__wrapper">
                                    <div class="swiper-slide twitter-feed-slider__single">
                                        <div class="tweet">
                                            <div class="tweet__text">
                                                "If you are in, you will win!" by Christopher Müller
                                                <a href="https://lnkd.in/eqSdAXhj" target="_blank">https://lnkd.in/eqSdAXhj</a>
                                            </div>
                                            <div class="tweet__info">
                                                <h6 class="tweet__heading">ecosis</h6>
                                                <span class="tweet__date">Nov 18, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright-area border-top section-space--ptb_30">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center text-md-start">
                        <span class="copyright-text">
                            &copy; 2022 <b>ecosis</b> Made with <i class="fa fa-heart text-danger"></i> by <a href="https://elabs.enterprises"><b>elabs Enterprises</b></a>
                        </span>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <ul class="list ht-social-networks solid-rounded-icon">
                            <li class="item">
                                <a href="https://www.linkedin.com/company/ecosiss/" target="_blank" class="social-link"> <i class="fab fa-linkedin social-link-icon"></i> </a>
                            </li>
                            <li class="item">
                                <a href="https://discord.gg/JFuxncwnDt" target="_blank" class="social-link"> <i class="fab fa-discord social-link-icon"></i> </a>
                            </li>
                            <li class="item">
                                <a href="https://t.me/ecosisnetwork" target="_blank" class="social-link"> <i class="fab fa-telegram social-link-icon"></i> </a>
                            </li>
                            <li class="item">
                                <a href="https://github.com/AwesomeEcosystem" target="_blank" class="social-link"> <i class="fab fa-github social-link-icon"></i> </a>
                            </li>
                            <li class="item">
                                <a href="https://twitter.com/ecosisnetwork" target="_blank" class="social-link"> <i class="fab fa-twitter social-link-icon"></i> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["FooterStyle"]
    }
</script>
