<template>
    <div class="agency-newsletter-section section-space--ptb_120 bg-gray-3" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="digital-agency-section-title text-center section-space--pb_120">
                        <h6 class="section-sub-title mb-20 font-weight--bold wow move-up">Interested into our service?</h6>
                        <h3 class="section-title font-weight--light mb-15 wow move-up">Let's get in touch!</h3>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div data-tf-widget="QZ0WuD6g" data-tf-iframe-props="title=Monday.com template TG (copy)" data-tf-medium="snippet" style="width:100%;height:500px;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NewsletterThree',

        mounted() {
            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', 'https://embed.typeform.com/next/embed.js')
            document.head.appendChild(recaptchaScript)
        },
    }
</script>
