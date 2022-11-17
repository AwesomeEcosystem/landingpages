<template>
    <div class="cta-image-area cta-image-bg_02">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="cta-image">
                        <div class="row align-items-center">
                            <div class="col-lg-6 order-2 order-lg-1">
                                <div class="cta-image__content">
                                    <h4 class="cta-image__title text-white mb-20 wow move-up">Start here with the Eco Wallet</h4>
                                    <div class="cta-image__text text-white mb-20 wow move-up">and create a free account, and deposit your funds to get rewarded!</div>
                                    <router-link to="/eco" class="btn btn--green wow move-up">
                                        Get Started
                                        <!-- <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get Started -->
                                    </router-link>
                                </div>
                            </div>
                            <div class="col-lg-6 order-1 order-lg-2">
                                <div class="cta-image_two section-space--mt_60 wow move-up">
                                    <img src="../assets/img/banners/aeroland-macbook-01.png" class="img-fluid" alt="aeroland-macbook-01">
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
        name: 'CtaThree',
    }
</script>
