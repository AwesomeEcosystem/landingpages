<template>
    <div class="feature-list__one">
        <div class="row">
            <div v-for="(item, x) in items" :key="x" class="col-lg-6 wow move-up">
                <div class="grid-item animate">
                    <div class="ht-box-icon style-01">
                        <div class="icon-box-wrap">
                            <div class="image">
                                <img :src="item.icon" class="img-fluid" alt="aeroland-app-showcase-box-icon-image-01">
                            </div>
                            <div class="content">
                                <h6 class="heading">{{ item.heading }}</h6>
                                <div class="text">{{ item.text }}</div>
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
        name: 'FeatureApp',
        data (){
            return {
                items: [
                    {
                        icon: require('../assets/img/icons/aeroland-app-showcase-box-icon-image-01.png'),
                        heading: 'One-Stop Solution',
                        text: 'Deposit cash, make payments, share funds and invest easily.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-app-showcase-box-icon-image-02.png'),
                        heading: 'Easy-to-Use',
                        text: 'As easy as Paypal with more benefits.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-app-showcase-box-icon-image-03.png'),
                        heading: 'Multi-Asset Management',
                        text: 'Own all assets in one place.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-app-showcase-box-icon-image-04.png'),
                        heading: 'Cross-Platform',
                        text: 'Use the app on Mobile, Desktop or as a Plugin for Shopify and Co.'
                    },
                ]
            }
        }
    }
</script>
