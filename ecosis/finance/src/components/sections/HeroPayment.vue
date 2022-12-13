<template>
    <div class="payment-hero__slider bg-cover" :style="bgImg" id="home">
            <div class="container-fluid container-fluid--cp-150 ">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="payment-hero-hero__content  section-space--mt_30">
                            <div class="row">
                                <div class="col-lg-5 wow move-up">
                                    <div class="payment-hero__text">
                                        <h1>The world's most rewarding finance platform </h1>
                                        <p class="text-hero section-space--mb_40">Enhanced payment gateway with powerful features to maximize your passive income! </p>
                                        <div class="hero-btn-wrap">
                                            <a href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank" class="btn btn--green">Whitelist</a>
                                            <h6 class="sub-heading">What is ecosis Network?
                                                <a href="https://ecosis.network/" target="_blank" class="hover-style-link hover-style-link--green">Learn More!</a>
                                            </h6>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-7 wow move-up">
                                    <div class="payment-hero--images__midea">
                                        <img src="../../assets/img/hero/payments/aeroland-payment-hero-image.png" alt="hero thumb" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../../assets/img/hero/payments/aeroland-payment-hero-bg.jpg')})`
                }
            }
        }
    }
</script>
