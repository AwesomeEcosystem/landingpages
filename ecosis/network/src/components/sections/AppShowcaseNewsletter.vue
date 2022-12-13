<template>
    <div class="newsletter-section section-space--pb_120" id="contact">
        <div class="app-showcase-section__titel">
            <div class="vc_row-separator center_curve top">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M 0 0 Q 50 200 100 0"></path>
                </svg>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <ChartCircleTwo circleValue="03" class="section-space--mb_40 section-space--mt_30" />
                    </div>
                </div>
            </div>
        </div>
        <div class="container text-center">
            <div class="sub__title mb-20 mt-60">
                <h6 class="font-weight--blod wow move-up">Get on Board early!</h6>
            </div>
            <h4 class="font-weight--light wow move-up mb-20 mt-20">Join the Whitelist</h4>
            <div class="btn-sowcase section-space--mb_40 wow move-up mt-20">
                <a href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" class="ht-btn ht-btn-md">Whitelist</a>
            </div>
        </div>
    </div>
</template>

<script>
    import ChartCircleTwo from '../ChartCircleTwo'
    import NewsletterTwo from '../NewsletterTwo'

    export default{
        components: {
            NewsletterTwo,
            ChartCircleTwo
        }
    };
</script>
