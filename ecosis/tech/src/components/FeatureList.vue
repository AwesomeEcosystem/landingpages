<template>
    <div class="feature-icon-list">
        <div class="row">
            <div class="col-lg-6">
                <div class="feature-icon-list__media wow move-up">
                    <img src="../assets/img/features/aeroland-feature-icon-image.png" class="img-fluid" alt="">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="feature-icon-list__content">
                    <div class="feature-icon-list-wrapper">
                        <div v-for="feature in features" :key="feature.id" class="single-feature-icon wow move-up">
                            <div class="single-feature-icon__media">
                                <img :src="feature.icon" class="img-fluid" alt="">
                            </div>
                            <div class="single-feature-icon__content">
                                <h6 class="title">{{ feature.title }}</h6>
                                <div class="text">{{ feature.desc }}</div>
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
        data (){
            return {
                features: [
                    {
                        icon: require('../assets/img/icons/aeroland-branding-box-image-01-1.png'),
                        title: 'Cross-platform Compatibility',
                        desc: 'It is interoperable with many platforms such as Revolut, Shopfiy, Ethereum and Bitcoin.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-branding-box-image-02-1.png'),
                        title: 'Stable',
                        desc: 'To ensure at least 100% backing the Deposit Token is over-collateralized.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-branding-box-image-03-1.png'),
                        title: 'Simple APIs',
                        desc: 'Easily build your app or migrate on top of ecosis with Typescipt.'
                    },
                ]
            }
        }
    }
</script>
