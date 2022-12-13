<template>
    <div class="main-container">
		<HeaderStartup />
		<HeroStartup />

        <CurveShape class="no-height">
            <template v-slot:bgcolor>
                <path style="fill: #ffffff;
                    stroke-miterlimit:10;"
                    d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
            </template>
        </CurveShape>
        <div class="start-ups-feature startup-about-feature section-space--pt_120 section-space--pb_60 " id="about">
            <div class="container">
                <div class="section-title-wrapper text-center section-space--mb_60">
                    <h2 class="section-title mb-30 wow move-up">The marketplace <br>which rewards its users!</h2>
                </div>
                <StartUpFeatureTwo />
            </div>
        </div>
        <TabThree />

        <div class="start-ups-feature" id="platform">
            <div class="container">
                <div class="section-title text-center section-space--mb_60">
                    <h2 class="font-weight--bold mb-15 wow move-up">Supports the best platforms</h2>
                    <span class="section-text wow move-up">We provide massive interoperability to maximize cross-platform opportunities</span>
                </div>
                <StartUpFeature />
            </div>
        </div>

        <div class="ht-start-up-section-bg">
            <div class="cta-image-area_one section-space--pt_60">
                <CtaOne />
            </div>
        </div>

        <div class="tabs-wrapper startup-tab section-space--mt_30 section-space--pb_120" id="products">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-wrapper text-center section-space--mb_60 wow move-up">
                            <h2 class="section-title font-weight--bold mb-15">We are building a powerful network for a <br> win-win-marketplace.</h2>
                        </div>
                    </div>
                </div>
               <TabOne />
            </div>
        </div>

        <div class="team-member-wrapper section-space--ptb_120 default-bg" id="ecosystem">
            <div class="container">
                <ProjectAgency />
            </div>
        </div>

        <CarouselStartup />
        <ContactForm />
        <!-- <CtaFour /> -->
        <FooterMain FooterStyle="bg_drak-footer" />
    </div>
</template>

<script>
    import HeaderStartup from '../components/HeaderStartup'
    import HeroStartup from '../components/HeroStartup'
    import CurveShape from '../components/CurveShape'
    import StartUpFeatureTwo from '../components/StartUpFeatureTwo'
    import StartUpFeature from '../components/StartUpFeature'
    import CtaOne from '../components/CtaOne'
    import TabOne from '../components/TabOne'
    import TeamTwo from '../components/TeamTwo'
    import TabThree from '../components/TabThree'
    import CarouselStartup from '../components/CarouselStartup'
    import ContactForm from '../components/ContactForm'
    import CtaFour from '../components/CtaFour'
    import FooterMain from '../components/FooterMain'
    import ProjectAgency from "@/components/sections/ProjectAgency"

    export default {
        name: 'HomeStartUp',
        components: {
            HeaderStartup,
            HeroStartup,
            CurveShape,
            StartUpFeatureTwo,
            StartUpFeature,
            CtaOne,
            TabOne,
            TeamTwo,
            TabThree,
            CarouselStartup,
            ContactForm,
            CtaFour,
            FooterMain,
      			ProjectAgency,
        }
    }
</script>
