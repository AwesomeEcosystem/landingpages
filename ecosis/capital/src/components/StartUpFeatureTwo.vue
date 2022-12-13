<template>
    <div class="row">
        <div v-for="item in items" :key="item.id" class="col-lg-4 col-md-6 wow move-up">
            <div class="service-grid">
                <div class="ht-service-box--two text-center style-03">
                    <router-link to="">
                        <div class="image mb-20">
                            <img :src="item.icon" class="img-fluid" alt="aeroland-startup-box-icon-01">
                        </div>
                        <div class="content">
                            <h6 class="heading">{{ item.heading }}</h6>
                            <div class="service_text">{{ item.text }}</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StartUpFeatureTwo',
        data (){
            return {
                items: [
                    {
                       icon: require('../assets/img/icons/aeroland-startup-box-icon-01.png'),
                       heading: 'Cross-Platform',
                       text: 'Interoperable with all existing businesses.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-startup-box-icon-02.png'),
                        heading: 'B2B2C',
                        text: 'Available for B2C, B2B, and IoT.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-startup-box-icon-03.png'),
                        heading: 'Rewarding',
                        text: 'A simple and profitable User Experience.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-startup-box-icon-04.png'),
                        heading: 'All-in-One',
                        text: 'Investment and Cash-Flow all-in-one.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-startup-box-icon-05.png'),
                        heading: 'Riskless',
                        text: 'The most stable and risk-free Investment Solution.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-startup-box-icon-06.png'),
                        heading: 'Legal',
                        text: 'No regulatory issues and easily accessible to everyone.'
                    },
                ]
            }
        }
    }
</script>
