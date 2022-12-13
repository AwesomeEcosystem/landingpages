<template>
    <div class="digital-agency-assistance-area  section-space--ptb_120" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="digital-agency-section-title text-center section-space--mb_60">
                        <h6 class="section-sub-title mb-20 font-weight--bold wow move-up">Welcome to <b>ecosis Pro</b></h6>
                        <h3 class="section-title font-weight--light mb-15 wow move-up">Build your business with ease</h3>
                        <p>We provide you on package all you need to make your business ready to go onto the market.</p>
                    </div>
                </div>
            </div>

            <!-- service agency component -->
            <ServiceItemAgency />
        </div>
    </div>
</template>

<script>
    import ServiceItemAgency from '../ServiceItemAgency'
    export default{
        name: 'ServiceAgency',
        components: {
            ServiceItemAgency
        }
    };
</script>

<style lang="scss">

</style>
