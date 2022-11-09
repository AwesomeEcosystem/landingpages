<template>
    <div class="cta-image-area_one section-space--ptb_120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="cta-image cta-image-bg bg-cover">
                        <div class="row align-items-center">
                            <div class="col-lg-6 order-2 order-lg-1">
                                <div class="cta-image__content">
                                    <h4 class="cta-image__title text-white mb-20 wow move-up">Eco</h4>
                                    <div class="cta-image__text text-white mb-20 wow move-up">Get started, create an account, and earn passive income!</div>
                                    <router-link :to="{ path: 'branding' }" class="btn btn--green">
                                        <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-right-to-arc"></i></span> Request Access
                                    </router-link>
                                </div>
                            </div>
                            <div class="col-lg-6 order-1 order-lg-2">
                                <div class="cta-image__media wow move-up">
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
        name: 'CtaOne',
    }
</script>
