<template>
    <div class="feature-app-showcase section-space--mt_60" id="about">
        <div class="container">
            <div class="row">
                <div class="col">
                    <ChartCircleTwo circleValue="01" class="section-space--mb_40" />
                </div>
            </div>
            <SectionTitle sectionTitle="About" class="wow move-up" />
            <FeatureApp />
        </div>
    </div>
</template>

<script>
    import SectionTitle from '../components/SectionTitle'
    import ChartCircleTwo from '../components/ChartCircleTwo'
    import FeatureApp from '../components/FeatureApp'
    import "vue3-circle-progress/dist/circle-progress.css";

    export default {
        components: {
            SectionTitle,
            ChartCircleTwo,
            FeatureApp,
        }
    };
</script>
