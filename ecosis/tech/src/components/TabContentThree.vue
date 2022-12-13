<template>
    <div class="tab-mission-wrap section-space--mt_80">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="tab-mission-image">
                    <img src="../assets/img/banners/aeroland-tab-content-image-06.png" alt="image" class="img-fluid">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="tab-content-inner">
                    <div class="ht-service-box--three mb-40">
                        <div class="service-box-wrap text-left">
                            <div class="image__media">
                                <img src="../assets/img/logo/eco-logo.png" class="img-fluid" alt="aeroland-payment-box-icon-01" style="width: 100px">
                            </div>
                            <router-link :to="{ path: 'eco' }" class="content">
                                <h6 class="sub-heading mb-10 text-uppercase">Wallet</h6>
                                <h4 class="heading">
                                    Eco
                                </h4>
                                <div class="service_text">Your App on Mobile and Desktop</div>
                            </router-link>
                        </div>
                    </div>
                    <div class="ht-service-box--three">
                        <div class="service-box-wrap">
                            <div class="image__media">
                                <img src="../assets/img/logo/nomics-logo.png" class="img-fluid" alt="aeroland-payment-box-icon-01" style="width: 100px">
                            </div>
                            <router-link :to="{ path: 'nomics' }" class="content">
                                <h6 class="sub-heading mb-10 text-uppercase">Reward System</h6>
                                <h4 class="heading">
                                    Nomics
                                </h4>
                                <div class="service_text">The economical infrastructure</div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
