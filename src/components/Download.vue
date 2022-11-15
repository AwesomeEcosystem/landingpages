<template>
    <div class="feature-app-showcase section-space--pb_90">
        <div class="container_fl">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="app-showcase-image__media wow move-up">
                        <img :src="thumbnail" class="img-fluid" alt="thumbnail">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="app-showcase__content">
                        <div class="app-showcase__inner">
                            <h4 class="font-weight--light wow move-up">{{ title }}</h4>
                            <div class="sub-text section-space--mb_40 wow move-up">{{ desc }}</div>
                            <div class="btn-sowcase section-space--mb_40 wow move-up">
                                <a class="ht-btn ht-btn-md" href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank">Request</a>
                            </div>
                            <h6 class="sub-heading wow move-up">
                              The Nomics Core System enables the automated cash-flow! <router-link to="/nomics" class="hover-style-link  hover-style-link--green">Learn more</router-link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                thumbnail: require("../assets/img/banners/aeroland-app-showcase-image-02.png"),
                title: 'The Ultimate Cash-Flow',
                desc: 'There is nothing more simple out there than the Eco App to earn risk-less sustainable passive income and enjoy shopping experience on the fly.',
            }
        },
    };
</script>
