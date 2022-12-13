<template>
	<div class="main-container">
		<HeaderDigitalStore />
		<HeroDigitalStore />

		<CurveShape class="curve-bottom">
            <template v-slot:bgcolor>
                <path style="fill: #f6f5f9;
                    stroke-miterlimit:10;"
                    d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
            </template>
        </CurveShape>

        <div class="digital-store-main-content">
            <div class="digital-store-product-wrapper section-space--pb_120" id="products-section">
                <div class="container">

                    <div class="row">


                        <div class="col-lg-12">
                            <div class="view-more-button text-center mt-30">
                                <a class="ht-btn ht-btn--outline ht-btn-default">More soon!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="digital-store-countdown-wrapper section-space--pt_120" id="discount-section">
                <div class="container">
                    <div class="row section-space--pb_90  wow move-up">
                        <div class="col-lg-9 ">
                            <div class="section-title-wrapper">
                                <h2 class="section-title">Get the best discounts in <mark>Black December.</mark></h2>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="view-more-button text-lg-right mt-30">
                                <a href="#" class="ht-btn ht-btn-md">$29 Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div class="row section-space--pb_90  wow move-up">
                        <div class="col-lg-7 mx-auto">
                            <div class="timer text-center">
                                <div class="countdown-deals counter-style--one">
                                    <Countdown />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12  wow move-up">
                            <div class="digital-store-banner-image text-center">
                                <img class="img-fluid" src="../assets/img/banners/aeroland-digital-store-image-02.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>

        <!-- <PaymentNewsletter class="section-space--pt_60" id="sign-up-section" /> -->

		<!-- footer section -->
        <FooterMain class="body-gradient" />

	</div>
</template>

<script>
	import HeaderDigitalStore from "../components/HeaderDigitalStore";
	import HeroDigitalStore from "../components/HeroDigitalStore";
	import CurveShape from "../components/CurveShape";
    import PaymentNewsletter from '@/components/sections/PaymentNewsletter';
    import Countdown from '@/components/Countdown';
	import FooterMain from "../components/FooterMain";

	export default {
		name: "HomeDigitalStore",
		components: {
			HeaderDigitalStore,
			HeroDigitalStore,
			CurveShape,
            PaymentNewsletter,
			FooterMain,
            Countdown
		}
	};
</script>
